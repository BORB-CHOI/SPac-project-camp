export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  console.log(pathname);
  return Response.json({ message: pathname });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const req = await request.json();

  console.log(params);
  // body 데이터 확인
  // 로직 처리
  return Response.json({ req });
}
