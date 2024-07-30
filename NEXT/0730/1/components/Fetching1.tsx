const getPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const data = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
  return data;
};
export default async function Fetching1() {
  const posts = await getPosts();
  return (
    <>
      <h5>Fetching1</h5>
      <p className="text-blue-400">{JSON.stringify(posts)}</p>
    </>
  );
}
