import MovieCard from "./MovieCard";

async function getMovies(path: string) {
  const url = `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/movies?path=${path}`;
  const res = await fetch(url);
  const data = await res.json();
  return data as TMovie[];
}

export default async function MovieArea({
  path,
  title,
}: {
  path: string;
  title: string;
}) {
  const movies = await getMovies(path);

  return (
    <>
      <article className="bg-black py-10 px-10">
        <section className="container mx-auto text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">{title}</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:px-0">
            {/* 아이템 1개 */}
            {movies.map((movie: TMovie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
