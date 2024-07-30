"use client";

import ServerCom2 from "./ServerCom2";

export default function ClientComp2() {
  console.log("client: ClientComp2");
  return (
    <>
      <h1>ClientComp2</h1>
      <ServerCom2 />
    </>
  );
}
