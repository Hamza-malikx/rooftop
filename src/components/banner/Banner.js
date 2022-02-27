import React from "react";
import styles from "./banner.module.css";
import bannerVid from "../../assets/images/Sequence 01_1.mp4";
const Banner = () => {
  return (
    <div className={styles.banner} id="pt">
      <div className={styles.bannerVid}>
        <video autoPlay muted>
          <source src={bannerVid} type="video/mp4" />
        </video>
        <div className={styles.bannerContent}>
          <h1>ROYAL ROOFTOP CLUB</h1>
          <p>
            Royal Rooftop Club is a private members-only club consisting of
            innovative technologists, bringing exclusive NFTs and metaverse
            projects that’s ever been witnessed in Dubai to interested investors
            worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
