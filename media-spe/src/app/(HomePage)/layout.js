import { Poppins } from "next/font/google";
import style from "./Styles/Homepage.module.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "HomePage",
  description: "Generated by create next app",
};

export default function MainLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${style.containerHome}`}>
        <main className={style.home}>{children}</main>
      </body>
    </html>
  );
}
