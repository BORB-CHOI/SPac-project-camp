import { revalidatePath, revalidateTag } from "next/cache";

async function getData() {
  const res = await fetch(
    "https://66a9d590613eced4eba65e4a.mockapi.io/api/v1/users",
    {
      next: { tags: ["users"] },
    }
  );
  const data = await res.json();
  return data;
}

async function getData2() {
  const res = await fetch(
    "https://66a9d590613eced4eba65e4a.mockapi.io/api/v1/products",
    {
      next: { tags: ["products"] },
    }
  );
  const data = await res.json();
  return data;
}

async function revalid1() {
  "use server"; // This is a server-side function
  revalidatePath("/");
}

async function revalid2() {
  "use server"; // This is a tags-based function
  revalidateTag("users");
}

export default async function page() {
  const data = await getData();
  const data2 = await getData2();

  return (
    <>
      <h1>HomePage</h1>
      <h1>data length : {data.length}</h1>
      <h1>data2 length : {data2.length}</h1>

      <form action={revalid1}>
        <button className="border border-slate-500 py-2 rounded-lg">
          revalidatePath
        </button>
      </form>

      <form action={revalid2}>
        <button className="border border-slate-500 py-2 rounded-lg">
          revalidateTags
        </button>
      </form>
    </>
  );
}
