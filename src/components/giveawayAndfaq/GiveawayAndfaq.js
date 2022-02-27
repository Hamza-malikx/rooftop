import React, { useEffect } from "react";
import styles from "./giveawayAndfaq.module.css";
import oculus from "../../assets/images/oculus giveaway.png";
import gWagon from "../../assets/images/g wagon 3of3 (1).mp4";
import tDubai from "../../assets/images/trip to dubai.mp4";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from "react-bootstrap/Accordion";
const GiveawayAndfaq = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "1px",
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 3,
    speed: 1000,
  };
  useEffect(() => {}, [settings]);

  return (
    <div className={styles.giveawayAndfaq} id="gh">
      <div className={styles.giveaway}>
        <div className="container">
          <div className={styles.giveawayInner}>
            <h2>ROYAL ROOFTOP CLUB NFTS AND METAVERSE PROJECT</h2>
            <p>
              Artists and individuals that hold our NFTs are permitted to submit
              their NFTs project idea to our team for deliberation; music
              artists can hold musical concerts in our rooftop clubs while
              selling their tickets as NFTs to other Royal rooftop private club
              members. In addition, with the world’s first double rarity NFTs
              ranking you will be granted access to a wide array of utilities in
              our metaverse such as; attending a musical concert, parties in any
              of our rooftop clubs, participating in a car auction, access to
              buy penthouses in our skyscrapers, and various benefits that will
              be announced in the future. Your portal to the metaverse is here.
              As an NFT holder, your utility awaits.
            </p>
            <h2>GIVING BACK TO THE COMMUNITY</h2>
            <p>
              Part of our mission is to connect and help those in need that are
              going through a struggle. To support this, we are pledging 100
              percent of our auctions to NOOR DUBAI FOUNDATION & INTERNATIONAL
              ANIMAL RESCUE, with full transparency.
            </p>
            <h2>GIVING BACK TO THE MEMBERS</h2>
            <p>
              Supporting the entrepreneurial spirit is our best chance for
              economic progress. Therefore, 3 major giveaways below, are being
              pledged to our members post mint cycle with full transparancy.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.faq} id="faq">
        <div className="container">
          <div className={styles.faqInner}>
            <Slider {...settings}>
              <div className={styles.slicks}>
                <img src={oculus} alt="" className={styles.img} />
              </div>
              <div className={styles.slicks}>
                <video autoPlay muted className={styles.img1}>
                  <source src={gWagon} type="video/mp4" />
                </video>
              </div>
              <div className={styles.slicks}>
                <video autoPlay muted className={styles.img1}>
                  <source src={tDubai} type="video/mp4" />
                </video>
              </div>
              <div className={styles.slicks}>
                <img src={oculus} alt="" className={styles.img} />
              </div>
              <div className={styles.slicks}>
                <video autoPlay muted className={styles.img1}>
                  <source src={gWagon} type="video/mp4" />
                </video>
              </div>
              <div className={styles.slicks}>
                <video autoPlay muted className={styles.img1}>
                  <source src={tDubai} type="video/mp4" />
                </video>
              </div>
            </Slider>
          </div>
          <div className={styles.faqAccordian}>
            <h2 className={styles.faqHeader}>FAQ</h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I ask for help?</Accordion.Header>
                <Accordion.Body>
                  Visit www.royalrooftopclub.com, Twitter or via Discord
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How many Dubai Rich NFTs are there?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What is the mint price?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Where can I buy a Dubai Rich NFT?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Why should I join the Dubai Rich Club whitelist?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  How to I get whitelisted for early access?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  How do I enter the giveaways?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  How do I know I won the giveaway?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveawayAndfaq;
