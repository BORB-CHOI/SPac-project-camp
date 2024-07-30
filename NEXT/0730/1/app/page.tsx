import Fetching1 from "@/components/Fetching1";
import Fetching2 from "@/components/Fetching2";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      {/* <Suspense fallback={<h1>Posts Loading...</h1>}> */}
      <Fetching1 />
      {/* </Suspense> */}
      {/* <Suspense fallback={<h1>Todos Loading...</h1>}> */}
      <Fetching2 />
      {/* </Suspense> */}
    </>
  );
}
