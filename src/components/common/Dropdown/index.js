"use client";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

export default function Dropdown() {
  return (
    <>
      <div className={styles.dropdown_container}>
        <div className={styles.dropdown_description}>
          Build your own Credit Card that fits in your day to day lifestyle.
          First, choose your rewards and then select your card design.
        </div>
        <div className={styles.dropdown_details}>
          <div className={styles.dropdown_text}>
            Check if the card is available in your city
          </div>
          <form className={styles.dropdown_box}>
            <select name="Select City" id="city">
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
              <option value="city3" disabled>
                City 3
              </option>
              <option value="city4">City 4</option>
            </select>

            <button type="submit" className={styles.btn_container}>
              Go
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
