/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import Button from "../GlobalComponents/Button";

const PricingCard = ({
  priceTitle,
  priceImg,
  price,
  activeCard,
  setActiveCard,
}) => {
  const pricingItems = [
    "One Day Conference Ticket",
    "Coffee-break",
    "Lunch and Networking",
    "Keynote talk",
    "Talk to the Editors Session",
  ];

  const [media, setMedia] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < "1168") {
        setActiveCard("");
        setMedia(false);
      } else {
        setMedia(true);
        setActiveCard("99");
      }
    });
  }, []);

  return (
    <div
      style={{ transform: activeCard === price ? "scale(1.1)" : "" }}
      onMouseEnter={() => media && setActiveCard(price)}
      css={styles}
      className="pricingCard"
    >
      <div className="priceTitle">
        <p>{priceTitle}</p>
      </div>
      <img src={priceImg} alt="price" />
      <h2>
        <sup>$</sup>
        {price}
      </h2>
      <Button btnTitle="Get tickets" />
      <div className="info">
        {pricingItems.map((item, index) => (
          <p key={index}>
            <i className="fas fa-check"></i> {item}
          </p>
        ))}
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 330px;
  background: #fff;
  padding: 50px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  transition: transform 400ms ease-in-out;
  .priceTitle {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #df42b1;
    border-radius: 0 0 5px 5px;
    width: 160px;
    text-align: center;
    padding: 8px;
    p {
      font-weight: 600;
      color: #fff;
    }
  }
  img {
    margin: 30px 0 0 0;
  }
  h2 {
    font-size: 60px;
    color: #111343;
    sup {
      font-size: 32px;
    }
  }
  .btn {
    width: 100%;
  }
  .info {
    padding: 30px 8px 0 8px;
    width: 100%;
    text-align: center;
    p {
      color: #5d5e8d;
      font-size: 15px;
      &:not(:last-of-type) {
        margin-bottom: 14px;
      }
      i {
        color: #df42b1;
        margin-right: 4px;
      }
    }
  }

  @media (max-width: 800px) {
    max-width: 100%;
    &:nth-child(2) {
      margin: 30px 0;
    }
  }

  @media (min-width: 801px) and (max-width: 1168px) {
    max-width: 48%;
    &:last-of-type {
      margin: 30px 0 0 0;
    }
  }
`;

export default PricingCard;
