import Navbar from "@/Components/Navbar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
         <footer/>
        
      </body>
    </html>
  );
}
