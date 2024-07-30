import { format } from "date-fns";

export default function B() {
  return (
    <>
      <h1>B</h1>
      <h2>{format(new Date(), "HH:mm:ss")}</h2>
    </>
  );
}
