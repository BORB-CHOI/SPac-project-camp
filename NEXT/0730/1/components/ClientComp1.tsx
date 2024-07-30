"use client";
export default function ClientComp1() {
  console.log("client: ClientComp1");
  const random = Math.floor(Math.random() * 2) + 1;
  if (random === 1) throw new Error("Random error");
  return (
    <>
      <h1>ClientComp1</h1>
    </>
  );
}
