export const metadata = {
  title: "blog",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div style={{ border: "5px solid red", padding: "10px" }}>{children}</div>
    </>
  );
}
