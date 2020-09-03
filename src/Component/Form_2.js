import React, { useState, useEffect } from "react";
const Form_2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handlerForm_2 = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    let formValidate = document.querySelector(".form_validate");
    function validatiom_again() {
      //name validation;
      let left_name_user = document.querySelector(".left_name_user").value;
      let left_name_check = /^[A-Za-z. ]{4,30}$/;
      if (left_name_check.test(left_name_user)) {
        document.querySelector(".left_name_error").innerHTML = "";
      } else {
        document.querySelector(".left_name_error").innerHTML =
          "**user name is invalid !";
        return false;
      }
      //email validation;
      let left_email_user = document.querySelector(".left_email_user").value;
      let left_email_check = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (left_email_check.test(left_email_user)) {
        document.querySelector(".left_email_error").innerHTML = "";
      } else {
        document.querySelector(".left_email_error").innerHTML =
          "** please fill the valid email id !";
        return false;
      }
      //number validation;
      let left_mobile_user = document.querySelector(".left_mobile_user").value;
      let left_number_check = /^\d{10}$/;
      if (left_number_check.test(left_mobile_user)) {
        document.querySelector(".left_mobile_error").innerHTML = "";
      } else {
        document.querySelector(".left_mobile_error").innerHTML =
          "** please fill the valid number !";
        return false;
      }
      //message validation;
      let left_message_user = document.querySelector(".left_mobile_user").value;
      let left_message_check = /^[A-Za-z. ]{10,100}$/;
      if (left_message_check.test(left_message_user)) {
        document.querySelector("left_.message_error").innerHTML = "";
      } else {
        document.querySelector(".left_message_error").innerHTML =
          "** please text your message here !";
        return false;
      }
    }
    formValidate.addEventListener("click", validatiom_again);
  });
  return (
    <React.Fragment>
      <section className="main_form">
        <div className="main_container">
          <div className="left_form">
            <div className="left_form_heading">
              <h3>Make an enquiry</h3>
              <p>
                Just to serve you better please provide us following details
              </p>
            </div>
            <div className="left_content">
              <form
                action=""
                method="get"
                target="_blank"
                onSubmit={handlerForm_2}
              >
                <div className="left_user_name">
                  <label htmlFor="name">your name (required)</label>
                  <br />
                  <input
                    className="left_name_user"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                  <br />
                  <span className="left_name_error"></span>
                </div>
                <div className="left_user_email">
                  <label htmlFor="email">your email (required)</label>
                  <br />
                  <input
                    className="left_email_user"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                  <br />
                  <span className="left_email_error"></span>
                </div>
                <div className="left_user_mobile">
                  <label htmlFor="mobile">mobile (required)</label>
                  <br />
                  <input
                    className="left_mobile_user"
                    type="text"
                    name="mobile"
                    value={mobile}
                    onChange={(event) => {
                      setMobile(event.target.value);
                    }}
                  />
                  <br />
                  <span className="left_mobile_error"></span>
                </div>
                <div className="left_user_subject">
                  <label htmlFor="subject">subject</label>
                  <br />
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(event) => {
                      setSubject(event.target.value);
                    }}
                  />
                  <br />
                  <span className="left_subject_error"></span>
                </div>
                <div className="left_user_message">
                  <label htmlFor="message">your message (required)</label>
                  <br />
                  <textarea
                    className="left_message_user"
                    name="message"
                    value={message}
                    onChange={(event) => {
                      setMessage(event.target.value);
                    }}
                  ></textarea>
                  <br />
                  <span className="left_message_error"></span>
                </div>
                <div className="left_user_send">
                  <input
                    className="form_validate"
                    type="submit"
                    name="submit"
                    value="send"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="right_form">
            <div className="right_heading">
              <h3>Contact Information</h3>
            </div>
            <div className="right_address">
              <p>20/55,</p>
              <p>near babul garden,</p>
              <p>mansarover,</p>
              <p>jaipur – 332702,</p>
              <p>India</p>
            </div>
            <div className="right_mobile">
              <p>+(91)-9024283411,9509028262</p>
            </div>
            <div className="right_tele">
              <p>+(91)-141400500</p>
            </div>
            <div className="right_mail">
              <p>info@vachispices.com</p>
            </div>
            <div className="right_social">
              <h3>follow us</h3>
              <div className="right_social_icon">
                <i class="fab fa-facebook-square"></i>

                <i class="fab fa-youtube-square"></i>

                <i class="fab fa-google-plus-square"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Form_2;
