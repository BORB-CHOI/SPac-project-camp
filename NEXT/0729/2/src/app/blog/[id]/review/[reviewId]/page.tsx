export default function ReviewDetail({
  params: { id, reviewId },
  searchParams: { lang, order },
}: {
  params: { id: number; reviewId: number };
  searchParams: { lang: string; order: string };
}) {
  console.log(id, reviewId, lang, order);
  return (
    <>
      <h1>ReviewDetail</h1>
      <p>{id}</p>
      <p>{reviewId}</p>
      <p>{lang}</p>
      <p>{order}</p>
    </>
  );
}
