"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoginForm from "../loginForm/loginForm";
import style from "./header.module.css";
const Header = () => {
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  useEffect(() => {
    if (openForm === false) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [openForm]);

  return (
    <header>
      <LoginForm openForm={openForm} closeForm={handleCloseForm} />
      <div className={`${style.header_container} container`}>
        <Link href={"/"}>
          <Image
            className={style.logo}
            src="/DRIVERAVE.png"
            alt="logo"
            width={253}
            height={40}
          />
        </Link>
        <button onClick={handleOpenForm} className={style.login_button}>
          <div className={style.login_burger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="inherit" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.6001 9.6C15.6001 11.5882 13.9884 13.2 12.0001 13.2C10.0119 13.2 8.40015 11.5882 8.40015 9.6C8.40015 7.61177 10.0119 6 12.0001 6C13.9884 6 15.6001 7.61177 15.6001 9.6ZM14.4001 9.6C14.4001 10.9255 13.3256 12 12.0001 12C10.6747 12 9.60015 10.9255 9.60015 9.6C9.60015 8.27452 10.6747 7.2 12.0001 7.2C13.3256 7.2 14.4001 8.27452 14.4001 9.6Z"
              fill="white"
            />
            <path
              d="M12.0001 15C8.11552 15 4.80571 17.297 3.54492 20.5152C3.85206 20.8202 4.1756 21.1087 4.51412 21.3792C5.45296 18.4246 8.39818 16.2 12.0001 16.2C15.6021 16.2 18.5473 18.4246 19.4862 21.3792C19.8247 21.1087 20.1482 20.8202 20.4554 20.5152C19.1946 17.2971 15.8848 15 12.0001 15Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
