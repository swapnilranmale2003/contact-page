import React, { useState } from "react";
import "./ContactForm.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { HiMail } from "react-icons/hi";


function ContactForm() {
  const[name, setName]=useState("Sai");
  const[email, setEmail]=useState("ex@gmail.com");
  const[text, setText]=useState("second project is done");


  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
 };
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
        <form onSubmit={onSubmit}>
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
          <div className="bottom-btn">
            <Button text="SUBMIT" />
          </div>
        </form>
        <div>
          {
            name + " "+ email +" " +text
          }
        </div>
      </div>
      <div className="contact_images">
        <img src="images/s.svg" alt="" />
      </div>
    </section>
  );
}

export default ContactForm;
