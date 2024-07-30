import MovieList from "./MovieList";

export default function MovieSection({
  movies,
  sectionName,
}: {
  movies: TMovie[];
  sectionName: string;
}) {
  return (
    <>
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">{sectionName}</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-0">
            {/* 아이템 1개 */}
            {movies.map((movie: TMovie) => (
              <MovieList key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
