import React, { useContext, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import ImgCardContact from "../../assets/image/contact1.png";
import { FiSend, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useForm } from "react-hook-form";
import InputField from "../../components/InputField/InputField";
import { MediaQueryContext } from "../../context/MediaQueryContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const schema = yup
  .object({
    firstname: yup.string().required("Firstname is required !"),
    lastname: yup.string().required("Lastname is required !"),
    email: yup
      .string()
      .required("Email is required !")
      .email("Email must be a valid email !"),
    subject: yup.string().required("Subject is required !"),
    message: yup.string(),
  })
  .required();

const Contact = () => {
  const isMobile = useContext(MediaQueryContext);

  const formRef = useRef();

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    const result = await emailjs.sendForm(
      "service_csyi71g",
      "template_trpx3ox",
      formRef.current,
      "a33w9lxcvV1gYMh_X"
    );
    if (result.status === 200) {
      resetField("firstname");
      resetField("lastname");
      resetField("email");
      resetField("message");
    }
  };

  return (
    <div className={cx("contact")}>
      <div className={cx("container", "section")}>
        <div className={cx("intro")}>
          <p>contact</p>
          <h4>Send me an email</h4>
        </div>
        <div className={cx("wrapper")}>
          <div className={cx("contact-intro")} data-aos="fade-right" >
            <div className={cx("card-intro")}>
              <div className={cx("card-img")}>
                <img src={ImgCardContact} alt="..." />
              </div>
              <div className={cx("title-area")}>
                <h4>Vo Van Truong</h4>
                <span>Fresher Front-End</span>
              </div>
              <div className={cx("desc-area")}>
                <p className={cx("desc")}>
                  I am available for freelance work. Connect with me via and
                  call in to my account.
                </p>
                <p className={cx("phone")}>
                  Phone:
                  <span
                    title="Copy"
                    onClick={() => navigator.clipboard.writeText("0702378854")}
                  >
                    &nbsp;(+84) 0702378854
                  </span>
                </p>
                <p className={cx("email")}>
                  Email:
                  <span
                    title="Copy"
                    onClick={() =>
                      navigator.clipboard.writeText("vtruong1007@gmail.com")
                    }
                  >
                    &nbsp;vvtruong1007@gmail.com
                  </span>
                </p>
              </div>
              <div className={cx("social-area")}>
                <p className={cx("title")}>Find with me</p>
                <div className={cx("social-icon")}>
                  <Link to="#">
                    <FiTwitter />
                  </Link>
                  <Link to="#">
                    <FiFacebook />
                  </Link>
                  <Link to="#">
                    <FiLinkedin />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("contact-form")} data-aos="fade-left">
            <form
              ref={formRef}
              className={cx("form")}
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
            >
              <div className={cx("form__group")}>
                <InputField
                  label="First Name"
                  id="f-name"
                  {...register("firstname")}
                  error={errors.firstname}
                />
                <InputField
                  label="Last Name"
                  id="l-name"
                  {...register("lastname")}
                  error={errors.lastname}
                />
              </div>
              <InputField
                label="Email"
                id="email"
                {...register("email")}
                error={errors.email}
              />

              <InputField
                label="Subject"
                id="subject"
                {...register("subject")}
                error={errors.subject}
              />

              <InputField
                className={cx("form__textarea")}
                type="textarea"
                label="Message"
                {...register("message")}
                error={errors.message}
              />
              <button className={cx("btn-submit")} type="submit">
                Send Message <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
