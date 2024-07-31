import MovieArea from "../components/MovieArea";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { Suspense } from "react";
import Loading from "./loading";
import MovieInfinite from "@/components/MovieInfinite";

export default async function Home() {
  return (
    <>
      {/* 헤더 */}
      <Header />
      {/* 배너 */}
      <Banner />
      {/* Now Playing 무비 에어리어 */}
      <Suspense fallback={<Loading />}>
        <MovieArea path={"/now_playing"} title={"Now Playing"} />
      </Suspense>
      {/* Popular 무비 에어리어 */}
      {/* <Suspense fallback={<Loading />}>
        <MovieArea path={"/popular"} title={"Popular"} />
      </Suspense> */}
      {/* Upcoming 무비 에어리어 */}
      {/* <Suspense fallback={<Loading />}>
        <MovieArea path={"/upcoming"} title={"Upcoming"} />
      </Suspense> */}
      <MovieInfinite />
    </>
  );
}
