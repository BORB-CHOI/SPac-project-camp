import Image from "next/image";
import { banner_bg01 } from "../../public/assets/assets";
import { thumbnail01 } from "../../public/assets/assets";
import { star } from "../../public/assets/assets";
import MovieSection from "./components/MovieSection";

async function getUpcomingMovies() {
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
    },
    next: { revalidate: 1 },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}

async function getPopularMovies() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
    },
    next: { revalidate: 1 },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}

async function getNowPlayingMovie() {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
    },
    next: { revalidate: 1 },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}

export default async function Home() {
  const [
    { results: nowPlayingMovies },
    { results: popluarMovies },
    { results: upcomingMovies },
  ] = await Promise.all([
    getNowPlayingMovie(),
    getPopularMovies(),
    getUpcomingMovies(),
  ]);

  return (
    <>
      {/* 헤더 */}
      <header className="absolute top-2 text-white w-full py-4 px-2">
        <div className="container mx-auto">
          <h1 className="text-3xl text-yellow-300 font-bold">SUFLIX</h1>
        </div>
      </header>
      {/* 배너 */}
      <article>
        <section
          className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center px-4 bg-[#1a222c]"
          style={{ backgroundImage: `url(${banner_bg01.src})` }}
        >
          <div className="container mx-auto poppins text-white flex flex-col justify-center font-bold h-full">
            <h3 className="text-[18px] xs:text-[20px] sm:text-[30px] text-yellow-300">
              SUFLIX
            </h3>
            <h2 className="text-[25px] xs:text-[40px] sm:text-[60px] mb-4">
              Unlimited <span className="text-yellow-500">Movie</span>,
              <br />
              TVs SHows, & <span className="text-rose-500">Infinite</span>
            </h2>
            <p className="text-xl sm:text-2xl">
              An activity where all the movies in the world come together
            </p>
          </div>
        </section>
      </article>
      {/* Now Playing 무비 에어리어 */}
      <MovieSection movies={nowPlayingMovies} sectionName={"Now Playing"} />
      {/* Popular 무비 에어리어 */}
      <MovieSection movies={popluarMovies} sectionName={"Popular"} />
      {/* Upcoming 무비 에어리어 */}
      <MovieSection movies={upcomingMovies} sectionName={"Upcoming"} />
    </>
  );
}
