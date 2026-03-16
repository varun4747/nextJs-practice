export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        {children}
         <h1>this is ids page</h1>
        
      </body>
    </html>
  );
}