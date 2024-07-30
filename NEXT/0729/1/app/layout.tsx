export const metadata = {
  title: "헬로",
  description: "넥스트 만듦새",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
