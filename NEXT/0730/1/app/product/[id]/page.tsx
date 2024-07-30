export default function ProductPage({ params }: { params: { id: string } }) {
  const random = Math.floor(Math.random() * 2) + 1;
  if (random === 1) throw new Error("Random error");
  return (
    <>
      <h1>ProductPage: {params.id}</h1>
    </>
  );
}
