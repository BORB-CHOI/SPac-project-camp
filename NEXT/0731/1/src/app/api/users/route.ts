export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams.get("gender"));
  return Response.json({ message: searchParams });
}

export async function POST(request: Request) {
  const req = await request.json();

  // body 데이터 확인
  // 로직 처리
  return Response.json({ req });
}
