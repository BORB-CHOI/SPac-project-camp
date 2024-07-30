import ClientComp1 from "./ClientComp1";

export default function ServerCom1() {
  console.log("server: ServerCom1");
  return (
    <>
      <h1>ServerCom1</h1>
      <ClientComp1 />
    </>
  );
}
