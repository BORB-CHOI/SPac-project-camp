"use client";

import { useEffect, useRef, useState } from "react";
import { ImSpinner10 } from "react-icons/im";
import { useInView } from "react-intersection-observer";
import MovieCard from "./MovieCard";

export default function MovieInfinite() {
  const pageRef = useRef(2);
  const { ref, inView, entry } = useInView();
  const [movies, setMovies] = useState<TMovie[]>([]);

  useEffect(() => {
    if (inView) {
      fetch(
        `${
          process.env.NEXT_PUBLIC_LOCAL_API_URL
        }/api/movies?path=now_playing&page=${pageRef.current++}`
      )
        .then((res) => res.json())
        .then((data) => setMovies((prev) => [...prev, ...data]));
    }
  }, [inView]);

  return (
    <>
      <article className="bg-black px-10">
        <section className="container mx-auto text-white">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:px-0">
            {/* 아이템 1개 */}
            {movies.map((movie: TMovie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </article>
      <div ref={ref} className="bg-black pb-10 ">
        <ImSpinner10 className="animate-spin text-white text-3xl mx-auto" />
      </div>
    </>
  );
}
