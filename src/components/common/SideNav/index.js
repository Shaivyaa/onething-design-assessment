"use client";
import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.scss";

export default function SideNav({
  children,
  show,
  onBackdropClick,
  onClose,
  showCloseButton = false,
}) {
  return ReactDOM.createPortal(
    <div className={show ? styles.wrapper_active : styles.wrapper}>
      <div
        className={show ? styles.backdrop_active : styles.backdrop}
        onClick={onBackdropClick}
      />
      <div className={show ? styles.foreground_active : styles.foreground}>
        {showCloseButton && (
          <div>
            <div onClick={onClose}>x</div>
          </div>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
}
