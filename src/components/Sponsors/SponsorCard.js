/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import LogoOne from "../../img/logoOne.png";
import LogoTwo from "../../img/logoTwo.png";
import LogoThree from "../../img/logoThree.png";
import LogoFour from "../../img/logoFour.png";
import LogoFive from "../../img/logoFive.png";
import LogoSix from "../../img/logoSix.png";
import LogoSeven from "../../img/logoSeven.png";
import LogoEight from "../../img/logoEight.png";

const SponsorCard = () => {
  const logos = [
    LogoOne,
    LogoTwo,
    LogoThree,
    LogoFour,
    LogoFive,
    LogoSix,
    LogoSeven,
    LogoEight,
  ];

  return (
    <React.Fragment>
      {logos.map((logo, index) => (
        <div key={index} css={styles} className="sponsorCard">
          <img src={logo} alt="sponsorLogo" />
        </div>
      ))}
    </React.Fragment>
  );
};

const styles = css`
  width: 100%;
  max-width: 25%;
  height: 240px;
  border: 1px solid #444675;
  display: flex;
  img {
    margin: auto;
    display: block;
    cursor: pointer;
    opacity: 0.4;
    transition: opacity 500ms ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
  @media (max-width: 700px){
    max-width: 50%;
  }
  @media (min-width: 701px) and (max-width: 1020px){
    max-width: 32%;
    margin: 10px 0;
    &:nth-child(7), &:nth-child(8){
      max-width: 49%;
    }
  }
`;

export default SponsorCard;
