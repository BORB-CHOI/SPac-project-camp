"use client";

import Link from "next/link";

export default function Error(error: Error, reset: () => void) {
  return (
    <>
      <h1>Just Error</h1>
      <span onClick={() => reset()}>
        <Link href={"/"}>Go Home</Link>
      </span>
    </>
  );
}
