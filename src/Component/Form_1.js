import React, { useState, useEffect } from "react";

const Form_1 = () => {
  const [name, setName] = useState("Your Name (Required)");
  const [email, setEmail] = useState("Your Email (Required)");
  const [mobile, setMobile] = useState("Your Number (Required)");
  const [message, setMessage] = useState("Your Message here.. ");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    let footerForm = document.querySelector(".footerForm");
    const validation = () => {
      //name validation;
      let name_user = document.querySelector(".name_user").value;
      let name_check = /^[A-Za-z. ]{4,30}$/;
      if (name_check.test(name_user)) {
        document.querySelector(".name_error").innerHTML = "";
      } else {
        document.querySelector(".name_error").innerHTML =
          "**user name is invalid !";
        return false;
      }
      //email validation;
      let email_user = document.querySelector(".email_user").value;
      let email_check = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (email_check.test(email_user)) {
        document.querySelector(".email_error").innerHTML = "";
      } else {
        document.querySelector(".email_error").innerHTML =
          "** please fill the valid email id !";
        return false;
      }
      //number validation;
      let mobile_user = document.querySelector(".mobile_user").value;
      let number_check = /^\d{10}$/;
      if (number_check.test(mobile_user)) {
        document.querySelector(".mobile_error").innerHTML = "";
      } else {
        document.querySelector(".mobile_error").innerHTML =
          "** please fill the valid number !";
        return false;
      }
      //message validation;
      let message_user = document.querySelector(".mobile_user").value;
      let message_check = /^[A-Za-z. ]{10,100}$/;
      if (message_check.test(message_user)) {
        document.querySelector(".message_error").innerHTML = "";
      } else {
        document.querySelector(".message_error").innerHTML =
          "** please text your message here !";
        return false;
      }
    };
    footerForm.addEventListener("click", validation);
  });
  return (
    <React.Fragment>
      <form action="" target="_self" method="" onSubmit={handleSubmit}>
        <div className="user_name">
          <input
            className="name_user"
            type="text"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <br />
          <span className="name_error"></span>
        </div>
        <div className="user_email">
          <input
            className="email_user"
            type="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <br />
          <span className="email_error"></span>
        </div>
        <div className="user_mobile">
          <input
            className="mobile_user"
            type="text"
            name="mobile"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
          <br />
          <span className="mobile_error"></span>
        </div>
        <div className="user_message">
          <textarea
            className="message_user"
            type="text"
            name="message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          ></textarea>
          <br />
          <span className="message_error"></span>
        </div>
        <div className="user_submit">
          <input
            className="footerForm"
            type="submit"
            name="submi"
            value="submit"
          />
        </div>
      </form>
    </React.Fragment>
  );
};
export default Form_1;
