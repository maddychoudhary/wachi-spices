import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title.js";
import Form_1 from "./Form_1.js";
const Footer = () => {
  const [firsetContent] = useState([
    { links: "/", navigator: "home" },
    { links: "About", navigator: "about" },
    { links: "Products", navigator: "product" },
    { links: "Gallery", navigator: "gallery" },
    { links: "Owner", navigator: "owner" },
    { links: "Dealers", navigator: "dealers" },
    { links: "Contacts", navigator: "contacts" },
  ]);
  const [secondContent] = useState([
    { address: "plot no.62-C," },
    { address: "raj vihar west," },
    { address: "sirsi road,jaipur" },
    { address: "rajasthan,india" },
    { address: "+0141-230123" },
    { address: "+91 895-562-1513" },
    { address: "info@vachi.com" },
  ]);
  const [fourthContent] = useState([
    { social: <i class="fab fa-facebook-square"></i> },
    { social: <i class="fab fa-youtube-square"></i> },
    { social: <i class="fab fa-instagram-square"></i> },
    { social: <i class="fab fa-twitter-square"></i> },
    { social: <i class="fab fa-linkedin"></i> },
    { social: <i class="fab fa-whatsapp-square"></i> },
    { social: <i class="fab fa-google-plus-square"></i> },
  ]);
  return (
    <React.Fragment>
      <section className="footer_section">
        <div className="footer_container">
          <div className="container_first">
            <h3>
              <Title titleName="navigation" />
            </h3>
            {firsetContent.map((item) => {
              return (
                <div className="first_data">
                  <div>
                    <Link to={item.links}>{item.navigator}</Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="container_second">
            <h3>
              <Title titleName="vachi spices pvt ltd" />
            </h3>
            {secondContent.map((item) => {
              return (
                <div className="second_data">
                  <p>{item.address}</p>
                </div>
              );
            })}
          </div>
          <div className="container_thired">
            <h3>
              <Title titleName="quick contact" />
            </h3>
            <div className="thired_data">
              <Form_1 />
            </div>
          </div>
          <div className="container_fourth">
            <h3>
              <Title titleName="follow us on" />
            </h3>
            <div className="maddy">
              {fourthContent.map((item) => {
                return (
                  <div className="fourth_data">
                    <a href="#">{item.social}</a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bottom_footer">
        <div className="bottom_content">
          <p>Copyright © 2020 VACHI Spices.</p>
          <p>Website Designed By | Maddy Web </p>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Footer;
