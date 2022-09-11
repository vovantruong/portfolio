import React from "react";
import classNames from "classnames/bind";
import styles from "./ToggleThemes.module.scss";
import useDarkMode from "../../hooks/useDarkMode";
import { IoMdMoon } from 'react-icons/io'
import { HiSun } from 'react-icons/hi'

const cx = classNames.bind(styles);

const ToggleThemes = ({ className }) => {
  const [darkMode, setDarkMode] = useDarkMode();
 
  return (
    <div className={cx("toggle-theme", className)}>
      <button onClick={() => setDarkMode(!darkMode)} className={cx('btn-change')}>
        { darkMode ? <IoMdMoon /> : <HiSun /> }
      </button>
    </div>
  );
};
export default ToggleThemes;
