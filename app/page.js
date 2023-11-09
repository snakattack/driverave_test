import SearchForm from "../components/searchForm/searchForm";
import style from "./page.module.css";

export const metadata = {
  icon: [{ url: "/favicon.ico" }],
  title: "Главная страница | DriverAve",
  description: "Аренда жилья и автомобилей от владельцев",
  openGraph: {
    title: 'Главная страница | DriverAve"',
    description: "Аренда жилья и автомобилей от владельцев",
    siteName: "DriverAve",
    type: "website",
  },
};

export default function Home() {
  return (
    <section className={style.main_section}>
      <div className="main_container">
        <div className={style.main_content}>
          <span className={style.main_subtitle}>Ut enim ad minim veniam</span>
          <h1 className={style.main_title}>
            Duis aute irure dolor in reprehenderit
          </h1>
          <p className={style.main_descr}>
            Duis aute irure dolor in reprehenderit
          </p>
        </div>
        <SearchForm />
      </div>
    </section>
  );
}
