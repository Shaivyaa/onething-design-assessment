"use client";
import React, { useCallback, useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import SideNav from "../SideNav";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsNavOpen((prevState) => !prevState);
  }, []);

  return (
    <>
      <div className={styles.header_wrapper}>
        <div className={styles.header_container}>
          <Link href={"/"} className={styles.logo_container}>
            AFC Inc.
          </Link>
          <div className={styles.nav_items_container}>
            <Link className={styles.nav_links} href={""}>
              Track Application
            </Link>
            <Link className={styles.nav_links} href={""}>
              Manage My Card
            </Link>
            <Link className={styles.nav_links} href={""}>
              FAQs
            </Link>
            <button className={styles.btn_container}>Get Started</button>
          </div>
        </div>
      </div>
      {/* Msite Menu */}
      <div className={styles.msite_header_container}>
        <div className={styles.logo_container}>
          <Link href={"/"} className={styles.logo_container}>
            AFC Inc.
          </Link>
        </div>
        <div className={styles.hamburger_menu}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="checkbox"
            onChange={handleClick}
            value={isNavOpen}
            checked={isNavOpen}
          />
          <label htmlFor="checkbox" className={styles.toggle}>
            <div
              className={isNavOpen ? styles.bars_1 : styles.bars}
              id="bar1"
            ></div>
            <div
              className={isNavOpen ? styles.bars_2 : styles.bars}
              id="bar2"
            ></div>
            <div
              className={isNavOpen ? styles.bars_3 : styles.bars}
              id="bar3"
            ></div>
          </label>
        </div>
        <SideNav show={isNavOpen} onBackdropClick={handleClick}>
          <div className={styles.content}>
            <div className={styles.nav_items_container}>
              <Link className={styles.nav_links} href={""}>
                Track Application
              </Link>
              <Link className={styles.nav_links} href={""}>
                Manage My Card
              </Link>
              <Link className={styles.nav_links} href={""}>
                FAQs
              </Link>
              <button className={styles.btn_container}>Get Started</button>
            </div>
          </div>
        </SideNav>
      </div>
    </>
  );
}
