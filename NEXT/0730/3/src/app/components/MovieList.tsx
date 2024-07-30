import Image from "next/image";
import { star } from "../../../public/assets/assets";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieList({ movie }: { movie: TMovie }) {
  return (
    <>
      <div key={movie.id} className="">
        <Image
          src={`${IMG_URL}${movie.poster_path}`}
          alt="poster"
          className="w-full rounded-md"
          width={240}
          height={360}
        />
        <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
          <h4 className="">{movie.title}</h4>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-200">
          <div className="flex items-center gap-2 font-bold">
            <Image
              src={star.src}
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <span className="text-yellow-500">{movie.vote_average}</span>
          </div>
          <span className="text-yellow-500 font-bold">
            {movie.release_date.toString().slice(0, 4)}
          </span>
        </div>
      </div>
    </>
  );
}
