import React from "react";
import styles from "./aboutUs.module.css";
const AboutUs = () => {
  return (
    <div className={styles.aboutUs} id="about">
      <div className={styles.aboutUsBg}>
        <div className="container">
          <div className={styles.aboutUsInner}>
            <h2>ABOUT US</h2>
            <p className={styles.aboutUsInnerPara}>
              Our NFTs is a collection of 2775 Arts with 101 DOUBLE AGENT traits
              involving Dubai’s undisclosed finest billionaires. Royal Rooftop
              Club NFTs platform was developed out of the demand from some
              notable billionaires in Dubai who wish to participate in the NFTs
              industry. Our NFTs consist of limited NFT collection where the
              token doubles and serves as holder’s membership to a metaverse
              portal where they will have access to rooftop clubs, auctions,
              royalty investment and meetings in the metaverse.
            </p>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className={styles.aboutUsWrappers}>
                  <h3>OUR VISION</h3>
                  <p>
                    Our vision is to give young entrepreneurs, artists, and
                    anyone in the world a chance to build their wealth in the
                    Dubai metaverse starting with all equal royalty. This is
                    done by ensuring that everyone gets the same mint price. So
                    whether you land plate number 1 which is considered to be
                    extreme rarity, or you land 2765, they are all the same
                    price.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className={styles.aboutUsWrappers}>
                  <h3>OUR MISSION</h3>
                  <p>
                    We are committed to making the metaverse accessible to
                    entrepreneurs and investors around the world. This will be
                    done through the introduction of our unique NFTs, which
                    gives our holders access to the metaverse to hold meetings,
                    participate in car auctions, watch auctions, attend
                    first-ever virtual rooftop party and be able to purchase
                    penthouses within the skyscrapers in our metaverse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
