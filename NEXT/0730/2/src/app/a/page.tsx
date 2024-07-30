import { format } from "date-fns";

export default function A() {
  return (
    <>
      <h1>A</h1>
      <h2>{format(new Date(), "HH:mm:ss")}</h2>
    </>
  );
}
