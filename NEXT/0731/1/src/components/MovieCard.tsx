import Image from "next/image";
import { star } from "../../../../0730/3/public/assets/assets";
import { format } from "date-fns";

export default function MovieCard({
  movie: { id, poster_path, release_date, title, vote_average },
}: {
  movie: TMovie;
}) {
  return (
    <>
      <div>
        <Image
          src={`${poster_path}`}
          alt="poster"
          className="rounded-md"
          width={270}
          height={415}
        />
        <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
          <h4>{title}</h4>
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
            <span className="text-yellow-500">{vote_average.toFixed(1)}</span>
          </div>
          <span className="text-yellow-500 font-bold">
            {format(release_date, "yyyy")}
          </span>
        </div>
      </div>
    </>
  );
}
