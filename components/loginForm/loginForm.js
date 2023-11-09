"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import style from "./loginForm.module.css";
const LoginForm = ({ openForm, closeForm }) => {
  const handleCloseForm = () => {
    closeForm(false);
  };

  const framerFormWrapper = {
    hidden: {
      x: 700,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const framerFormLayout = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      {openForm && (
        <motion.div
          className={style.layout}
          initial="hidden"
          animate="visible"
          variants={framerFormLayout}
          exit="hidden"
        >
          <motion.div
            className={style.form_wrapper}
            initial="hidden"
            animate="visible"
            variants={framerFormWrapper}
            exit="hidden"
          >
            <svg
              onClick={handleCloseForm}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M0 1.72414L1.54242 0.19157L30 28.4674L28.4576 30L0 1.72414Z"
                fill="inherit"
              />
              <path
                d="M1.90231 29.1571L0.321338 27.5862L28.0848 0L29.6658 1.57088L1.90231 29.1571Z"
                fill="inherit"
              />
            </svg>
            <div className={style.form_content}>
              <span>Вход</span>
              <div className={style.form_inputs_wrapper}>
                <input placeholder="Введите e-mail или телефон"></input>
                <input placeholder="Введите пароль"></input>
              </div>
              <div className={style.form_utils}>
                <input type="checkbox"></input>
                <label>Запомнить меня</label>
                <Link href={"/"}>Забыли пароль?</Link>
              </div>
              <button className={style.login_button}>Войти</button>
              <div className={style.registration_link}>
                <span>Нет аккаунта?</span>
                <Link href={"/"}>Регистрация</Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginForm;
