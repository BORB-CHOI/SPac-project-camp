import Image from "next/image";
import travel from "/public/images/travel.png";
import seoul from "/public/images/seoul.jpg";
import london from "/public/images/london.jpg";
import paris from "/public/images/paris.jpg";
import newyork from "/public/images/newyork.jpg";
import Link from "next/link";
export default function Home({
  params: {},
  searchParams: { city },
}: {
  params: {};
  searchParams: { city: string };
}) {
  console.log(city);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center gap-4  max-w-[500px]">
          <Image src={travel} alt={"로고"} width={80} />
          {/* <ul className="flex items-center antialiased justify-around w-full">
            <li>
              <Link
                href="?city=seoul"
                className={`${
                  (city === "" || city === "seoul") && "font-bold"
                }`}
              >
                Seoul
              </Link>
            </li>
            <li>
              <Link
                href="?city=london"
                className={`${city === "london" && "font-bold"}`}
              >
                London
              </Link>
            </li>
            <li>
              <Link
                href="?city=paris"
                className={`${city === "paris" && "font-bold"}`}
              >
                Paris
              </Link>
            </li>
            <li>
              <Link
                href="?city=newyork"
                className={`${city === "newyork" && "font-bold"}`}
              >
                NewYork
              </Link>
            </li>
          </ul> */}
          <ul className="flex items-center antialiased justify-around w-full">
            <li>
              <Link href="/city/seoul">Seoul</Link>
            </li>
            <li>
              <Link href="/city/london">London</Link>
            </li>
            <li>
              <Link href="/city/paris">Paris</Link>
            </li>
            <li>
              <Link href="/city/newyork">NewYork</Link>
            </li>
          </ul>
          <div>
            {city === undefined && <Image src={seoul} alt={"서울"} />}
            {city === "seoul" && <Image src={seoul} alt={"서울"} />}
            {city === "london" && <Image src={london} alt={"런던"} />}
            {city === "paris" && <Image src={paris} alt={"파리"} />}
            {city === "newyork" && <Image src={newyork} alt={"뉴욕"} />}
          </div>
        </div>
      </div>
    </>
  );
}
