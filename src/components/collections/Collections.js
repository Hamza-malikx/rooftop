import React from "react";
import styles from "./collection.module.css";
const Collections = () => {
  return (
    <div className={styles.collection} id="cl">
      <div className={styles.collectionBg}>
        <div className="container">
          <div className={styles.collectionInner}>
            <h2>COLLECTIONS</h2>
            <h3>DUBAI RICH NFT</h3>
            <p className={styles.collectionInnerPara1}>
              Royal Rooftop Club NFTs include our spirit animal’s unique trait,
              “Cheetah,” holding Dubai plate numbers. The general knowledge of
              plate numbers in Dubai is that a single number symbolizes wealth,
              prestige, status for the A-list. “His Highness Sheikh Mohammed
              (Prime Minister of the United Arab Emirates and Ruler of Dubai
              owns number 1 and the latest owner of the trendy luxury piece,
              Balwinder Sahni “Abu Sabah” got this special number 5 after rounds
              of fierce bidding and was acquired for $9 million for one of his 6
              luxury Rolls Royce vehicles.
              <br />
              <br /> The recognition that comes with Dubai’s plate number is not
              applicable in the Royal rooftop club. Anyone who gets the NFT with
              plate number one (1) will pay the same amount as one who gets 250.
              The only advantage the holder of plate number 1 NFT has over
              others is when selling off the NFT on NFTs platform like Opensea,
              which might attract the attention of high net-worth individuals.
              But on the Royal rooftop club, all our NFTs holders are given the
              same privileges.
            </p>
            <p className={styles.collectionInnerPara2}>
              Whitelisted members will be able to mint up to two (2) NFTs , as
              opposed to the general minting, which will only mint one (1) NFTs
            </p>
            <p className={styles.collectionInnerPara3}>0 / 2775 Mints</p>
            <div className={styles.mintWrapper}>
              <input type="number" placeholder="1"></input>
              <button>MINT NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
