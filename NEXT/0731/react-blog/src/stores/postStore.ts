import { create } from "zustand";
import { TPost } from "../type/post";

type TPostStore = {
  post: TPost;
  posts: TPost[];
  fetchPosts: (url: string) => Promise<boolean>;
  fetchPost: (url: string) => Promise<boolean>;
  addPost: (formData: TPost) => Promise<boolean>;
};

const fetchData = async (url: string, options?: object) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_JSON_SERVER}${url}`,
      options
    );
    if (!res.ok) {
      throw new Error("서버 상태가 이상합니다.");
    }
    return await res.json();
  } catch (e) {
    throw new Error("데이터를 불러오는 중 오류가 발생했습니다.");
  }
};

const usePostStore = create<TPostStore>((set) => ({
  post: {} as TPost,
  posts: [] as TPost[],
  // 여러 개의 게시물을 가져올 때
  fetchPosts: async (url: string) => {
    try {
      const data = await fetchData(url);
      set({ posts: data });
      return true;
    } catch (e) {
      return false;
    }
  },
  // 한 개의 게시물을 가져올 때
  fetchPost: async (url: string) => {
    try {
      const data = await fetchData(url);
      set({ post: data });
      return true;
    } catch (e) {
      return false;
    }
  },
  addPost: async (formData: TPost) => {
    try {
      await fetchData("/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      return true;
    } catch (e) {
      return false;
    }
  },
}));

export default usePostStore;
