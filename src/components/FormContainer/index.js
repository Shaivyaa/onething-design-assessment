import React from "react";
import styles from "./index.module.scss";
import Form from "../common/Form";
import Image from "next/image";
import formImg from "../../assets/svgs/form.svg";
import formBg from "../../assets/images/msite-form-bg.png";
import rightArrow from "../../assets/svgs/black-right-arrow.svg";

export default function FormContainer() {
  return (
    <>
      <div className={styles.form_wrapper}>
        <div className={styles.form_container}>
          <div className={styles.form_details}>
            <Form />
          </div>
          <div className={styles.form_description}>
            <div className={styles.form_content_details}>
              <Image src={formImg} alt="form" height={64} width={64} />
              <div className={styles.form_header}>Fill Eligibility Form</div>
              <div className={styles.form_subheader}>
                Tell us about yourself, to find out if you&apos;re eligible to
                apply.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.msite_form_container}>
          <div className={styles.msite_form_header}>
            Create your own credit card in three easy steps
          </div>
          <Image
            className={styles.msite_form_bg}
            src={formBg}
            alt="form-bg"
            width={238}
            height={272}
          />
          <div className={styles.msite_header}>Fill Eligibility Form</div>
          <div className={styles.msite_subheader}>
            Please fill an application form to make sure you’re eligible for the
            card. You can fill this later as well{" "}
          </div>
          <div className={styles.btn_text_container}>
            <div className={styles.btn_text}>Get Started</div>
            <Image src={rightArrow} alt="right-arrow" width={16} height={16} />
          </div>
        </div>
      </div>
    </>
  );
}
