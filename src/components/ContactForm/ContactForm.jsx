import React from "react";
import "./ContactForm.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { HiMail } from "react-icons/hi";

function ContactForm() {
  return (
    <section className="container">
      <div className="contact_form">
        <div className="top-btn">
          <Button
            text="VIA SUPPORT CHAT"
            icons={<MdMessage fontSize={"24px"} />}
          />
          <Button text="VIA CALL" icons={<IoCall fontSize={"24px"} />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icons={<HiMail fontSize={"24px"} />}
        />
        <form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>
          <div className="form-control">
            <label>Text</label>
            <textarea type="text" rows={"15"} />
          </div>
        </form>
        <div className="bottom-btn">
        <Button text="SUBMIT" />
        </div>
       
      </div>
      <div className="contact_images">
        <img src="images/s.svg" alt="" />
      </div>
    </section>
  );
}

export default ContactForm;
