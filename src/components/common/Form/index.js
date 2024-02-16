"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";

export default function Form() {
  const [phone, setPhone] = useState("");
  const [pan, setPan] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Phone Number:", phone);
    console.log("Pan Number:", pan);
    console.log("Address :", address);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          required
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Enter your PAN number"
          value={pan}
          onChange={(e) => setPan(e.target.value)}
        />
        <input
          disabled
          type="text"
          placeholder="Enter your Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </form>
    </>
  );
}
