import { useEffect } from "react";
import { dummyImage3 } from "../assets/blog/assets";
import { useParams } from "react-router";
import usePostStore from "../stores/postStore";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Read = () => {
  const params = useParams();
  const post = usePostStore((state) => state.post);
  const posts = usePostStore((state) => state.posts);
  const fetchPost = usePostStore((state) => state.fetchPost);
  const fetchPosts = usePostStore((state) => state.fetchPosts);

  useEffect(() => {
    fetchPost("/posts/" + params.id);
    fetchPosts("/posts?id_ne=" + params.id);
    // https://localhost:3000/posts?필드명_ne=값
    // https://localhost:3000/posts?필드명_like=값
  }, [params.id]);

  return (
    <>
      {/* 이미지 */}
      <section className="max-w-[800px] mx-auto">
        <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
          {post.category}
        </strong>
        <h3 className="text-[46px] font-bold">{post.title}</h3>
        <p className="text-sm text-[#515151] mb-[18px]">
          {post.datetime && format(post.datetime, "yyyy-MM-dd")} • 7 min read
        </p>
        <img
          src={post.thumbnail}
          alt="dummy"
          className="object-cover w-full max-h-[278px] rounded-md"
        />
        {/* 사용자 프로필 */}
        <div className="mt-4 flex items-center gap-[14px]">
          <img src={dummyImage3} alt="" className="rounded-s-full" />
          <strong className="text-sm">George Costanazv</strong>
        </div>
      </section>
      {/* 본문 */}
      <section className="max-w-[800px] mx-auto text-xl text-[#434343] mt-5 [&>p]:mb-10 mb-20 ">
        <div>{post.description}</div>
      </section>
      {/* 관련 게시물 */}
      <section className="max-w-[800px] mx-auto">
        <h3 className="text-[36px] font-bold mb-[30px]">Recommand Reading</h3>
        <ul className="[&>li]:mb-[30px]">
          {posts &&
            posts.map((post) => (
              <li key={post.id}>
                <Link to={`/read/${post.id}`}>
                  <h4 className="text-xl font-bold mb-2">{post.title}</h4>
                  <div className="flex gap-[34px]">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="rounded-md max-w-[250px]"
                    />
                    <div>
                      <h4 className="text-2xl font-bold mb-2">{post.title}</h4>
                      <p className="text-lg text-[#4b4b4b] line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};
export default Read;
