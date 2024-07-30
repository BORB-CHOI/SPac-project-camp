const getTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const data = await (
    await fetch("https://jsonplaceholder.typicode.com/todos")
  ).json();
  return data;
};
export default async function Fetching2() {
  const todos = await getTodos();
  return (
    <>
      <h5>Fetching2</h5>
      <p className="text-red-500">{JSON.stringify(todos)}</p>
    </>
  );
}
