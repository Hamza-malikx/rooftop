import React from "react";
import styles from "./footer.module.css";
import logo from "../../assets/images/Group 1@2x.png";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerImg}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.footerContent}>
            <p>© 2021 Royal Rooftop Club, ALL RIGHTS RESERVED.</p>
          </div>
          <div>
            <a
              href="https://discord.gg/3uxpCC4dZW"
              className={styles.footerIcon}
            >
              <i className="fab fa-discord"></i>
            </a>
            <a
              href="https://twitter.com/RoyalRooftopCLB"
              className={styles.footerIcon}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/royalrooftopclub/"
              className={styles.footerIcon}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="mailto:royalty@royalrooftopclub.com"
              className={styles.footerIcon}
            >
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
