export default function ReviewDetail({
  params: { id, reviewId },
  searchParams: { lalala, lang },
}: {
  params: { [key: string]: number };
  searchParams: { lalala: string; lang: string };
}) {
  console.log(id, reviewId, lalala, lang);
  return (
    <>
      <h1>ReviewDetail</h1>
      <p>{id}</p>
      <p>{reviewId}</p>
      <p>{lalala}</p>
      <p>{lang}</p>
    </>
  );
}
