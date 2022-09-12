import React, { useContext } from "react";
import classNames from "classnames/bind";
import styles from "./SocialMedia.module.scss";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { BiLeftIndent } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { MediaQueryContext } from "../../context/MediaQueryContext";
import { useState } from "react";

const dataSocial = [
  {
    name: "fb",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/vvtruong.1007",
  },
  {
    name: "ins",
    icon: <BsInstagram />,
    link: "https://www.instagram.com/vvtruong1007/",
  },
  {
    name: "git",
    icon: <FaGithub />,
    link: "https://www.github.com/vovantruong",
  },
  {
    name: "linkin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/vo-van-truong-b94157214/",
  },
];

const cx = classNames.bind(styles);

const SocialMedia = () => {
  const [toggle, setToggle] = useState(false);
  const isMobile = useContext(MediaQueryContext);

  function renderSocialDesktop() {
    return (
      <React.Fragment>
        {dataSocial.map((item, i) => (
          <a
            style={{ animationDelay: `${i / 4}s` }}
            className={cx("social-item", item.name)}
            key={i}
            href={item.link}
          >
            {item.icon}
          </a>
        ))}
      </React.Fragment>
    );
  }

  function renderSocialMobile() {
    return (
      <React.Fragment>
        <button
          onClick={() => setToggle(!toggle)}
          className={cx("btn-toggle", { hidden: toggle })}
        >
         { !toggle ? <IoShareSocial /> : <BiLeftIndent />}
        </button>
        {toggle &&
          dataSocial.map((item, i) => (
            <a
              style={{ animationDelay: `${i / 4}s` }}
              className={cx("social-item", item.name)}
              key={i}
              href={item.link}
            >
              {item.icon}
            </a>
          ))}
      </React.Fragment>
    );
  }

  return (
    <div className={cx("social-media")}>
      {isMobile ? renderSocialMobile() : renderSocialDesktop()}
    </div>
  );
};
export default SocialMedia;
