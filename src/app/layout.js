import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Floristería Dulces Pétalos",
  description: "Tus flores más bonitas y duraderas al mejor precio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <div className="container mx-auto px-4 p-8">{children}</div>
      </body>
    </html>
  );
}
