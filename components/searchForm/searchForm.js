"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";
import style from "./searchForm.module.css";
import "../../app/costomize_calendar.css";

const SearchForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const today = new Date();
  return (
    <form className={style.main_form}>
      <div className={style.form_items}>
        <div className={style.form_item}>
          <label>Город или адрес</label>
          <input placeholder="Куда едем"></input>
        </div>
        <div className={style.form_item}>
          <label>Заезд</label>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            placeholderText="Когда"
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            minDate={today}
            locale={ru}
          />
        </div>
        <div className={style.form_item}>
          <label>Отъезд</label>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            placeholderText="Когда"
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            minDate={today}
            locale={ru}
          />
        </div>
        <div className={style.form_item}>
          <label>Гости</label>
          <input placeholder="2 взрослых, без детей"></input>
        </div>
      </div>
      <button className={style.form_button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7322 11.6349L18.875 17.7777L17.2777 19.375L11.1349 13.2322C9.98778 14.0577 8.60485 14.5615 7.09327 14.5615C3.24464 14.5615 0.125 11.4419 0.125 7.59327C0.125 3.74464 3.24464 0.625 7.09327 0.625C10.9419 0.625 14.0615 3.74464 14.0615 7.59327C14.0615 9.10485 13.5577 10.4878 12.7322 11.6349ZM7.09327 2.76908C4.42389 2.76908 2.26908 4.92389 2.26908 7.59327C2.26908 10.2626 4.42389 12.4175 7.09327 12.4175C9.76265 12.4175 11.9175 10.2626 11.9175 7.59327C11.9175 4.92389 9.76265 2.76908 7.09327 2.76908Z"
            fill="white"
          />
        </svg>
        <span className={style.form_button_text}>Поиск</span>
      </button>
    </form>
  );
};

export default SearchForm;
