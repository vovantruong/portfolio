import React, { forwardRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./InputField.module.scss";
const cx = classNames.bind(styles);

const InputField = forwardRef(
  (
    {
      label,
      className,
      inputClassName,
      textareaClassName,
      labelClassName,
      placeholder = "",
      type = "input",
      name,
      onChange,
      onBlur,
      error,
      id,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [valueCheck, setValueCheck] = useState("")

    return (
      <div
        className={cx(
          "item",
          {
            focused: isFocused,
            empty: valueCheck === "",
            notEmpty: valueCheck !== "",
            error: error
          },
          
          className
        )}
      >
        {type === "input" ? (
          <input
            type="text"
            className={cx("input", inputClassName)}
            onBlur={(e) => {setIsFocused(false); onBlur(e)}}
            onFocus={() => setIsFocused(true)}
            onChange={(e) => {onChange(e); setValueCheck(e.target.value)}}
            name={name}
            ref={ref}
            id={id}
            placeholder={placeholder}
            {...props}
          />
        ) : (
          <textarea
            id={id}
            autoCorrect="off"
            className={cx("textarea", textareaClassName)}
            onBlur={(e) => {setIsFocused(false); onBlur(e)}}
            onFocus={() => setIsFocused(true)}
            onChange={(e) => {onChange(e); setValueCheck(e.target.value)}}
            name={name}
            value={valueCheck}
            ref={ref}
            placeholder={placeholder}
            {...props}
          />
        )}
        {label && (
          <label htmlFor={id} className={cx("label", labelClassName)}>
            {error ? error?.message : label}
          </label>
        )}
        {error && <span className={cx("emoji")}>😡</span>}
      </div>
    );
  }
);
export default InputField;
