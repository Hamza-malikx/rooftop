import React from "react";
import styles from "./roadMap.module.css";
const RoadMap = () => {
  return (
    <div className={styles.roadMap} id="rd">
      <div className={styles.roadMapBg}>
        <div className="container">
          <div className={styles.roadMapInner}>
            <h2>ROADMAP</h2>
            <div className={styles.roadMapInnerWrapper}>
              <div className={styles.phase1}>
                <h3>Phase 01</h3>
                <ul className={styles.ul}>
                  <li>Mint date revealed via Discord</li>
                  <li>
                    Raffle giveaway to all Holders : Round 1 : 50 Oculus Quest
                    VR Headsets 24hrs after reveal. Round 2: First Class to
                    Dubai for 2 , plus 100K 15 days after round 1 Round 3 :Brand
                    new Mercedes G-Wagon Color of choice Delivered or 200K 30
                    days after round 2. (winners can only win 1 time. Every mint
                    counts as an entry)
                  </li>
                  <li>
                    6 out of the 10 tokens will be held back from sale and
                    vaulted for breeding hybrid Cheetahs.
                  </li>
                </ul>
              </div>
              <div className={styles.phase2}>
                <h3>Phase 02</h3>
                <ul className={styles.ul}>
                  <li>
                    5 Rare Dubai Rich Hybrid Cubs will be randomly air dropped
                    to 5 holders after 30 days from Mint date.
                  </li>
                </ul>
              </div>
              <div className={styles.phase3}>
                <h3>Phase 03</h3>
                <ul className={styles.ul}>
                  <li>
                    5 Dubai rich chicks that gave birth to the hybrids will be
                    randomly airdropped to holders.
                  </li>
                </ul>
              </div>
              <div className={styles.phase4}>
                <h3>Phase 04</h3>
                <ul className={styles.ul}>
                  <li>
                    Exclusive Dubai rich Dad that had an affair with the 5
                    chicks will face circumstances and must be bailed in an
                    auction, and We pledge 100% of royalties donated to the Noor
                    Dubai Foundation & International animal rescue (Proof of
                    Donation will be public)
                  </li>
                </ul>
              </div>
              <div className={styles.phase5}>
                <h3>Phase 05</h3>
                <ul className={styles.ul}>
                  <li>
                    Uploading partnership projects integrated with us will give
                    NFTs holders access to all the services in the metaverse
                    along with our first Royal rooftop party to be announced!
                  </li>
                  <li>
                    Access to Metaverse VR parties and royal auctions for luxury
                    cars & watches.
                  </li>
                  <li>Access to the finest Entrepreneur Seminars.</li>
                  <li>
                    Access to the Royal rooftop clubs and belly dancer rooms by
                    NFTs holders.
                  </li>
                  <li>Access to purchase penthouses within our skyscrapers.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
