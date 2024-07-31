export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const path = searchParams.get("path");
    const page = searchParams.get("page") || 1;

    // const numbers = [3000, 7000]; // 3초 ~ 7초 사이의 랜덤한 시간
    // await new Promise((resolve) => {
    //   setTimeout(resolve, numbers[Math.floor(Math.random() * numbers.length)]);
    // });

    const url = `${process.env.MOVIE_API_URL}/${path}?language=ko-KR&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
      },
      next: { revalidate: 1 },
    };

    const res = await fetch(url, options);
    const { results } = await res.json();
    const newResults = results.map((movie: TMovie) => ({
      ...movie,
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    }));

    return Response.json(newResults as TMovie[]);
  } catch (error) {
    return Response.error();
  }
}
