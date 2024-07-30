import { format } from "date-fns";

async function getMovieData() {
  const response = await fetch("http://localhost:3000/api/movie");
  const data = await response.json();
  return data;
}

export default async function Home() {
  const data1 = await getMovieData();
  const data2 = await getMovieData();
  return (
    <>
      <h1>Home</h1>
      <h2>{format(new Date(), "HH:mm:ss")}</h2>
    </>
  );
}
