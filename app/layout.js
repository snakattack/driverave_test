import "./normalize.css";
import "./globals.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export const metadata = {
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  title: {
    template: "%s | DriverAve",
    default: "DriverAve",
  },
  openGraph: {
    siteName: "DriverAve",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
