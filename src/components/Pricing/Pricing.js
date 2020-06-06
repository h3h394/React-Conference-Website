/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import PricingBg from "../../img/pricingBg.jpg";
import Container from "../GlobalComponents/Container";
import Overlay from "../GlobalComponents/Overlay";
import Title from "../GlobalComponents/Title";
import PricingCard from "./PricingCard";
import IconOne from "../../img/iconOne.png";
import IconTwo from "../../img/iconTwo.png";
import IconThree from "../../img/iconThree.png";

const Pricing = () => {
  const [activeCard, setActiveCard] = useState("99");

  return (
    <section css={styles} className="pricing">
      <Overlay
        overlay="linear-gradient(120deg, #505add 0%, #df42b1 100%)"
        opacity=".9"
      />
      <Title subtitle="CHOOSE A TICKET" title="TICKET PRICING" />
      <Container>
        <PricingCard
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          priceImg={IconOne}
          priceTitle="1 DAY PASS"
          price="59"
        />
        <PricingCard
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          priceImg={IconTwo}
          priceTitle="FULL PASS"
          price="99"
        />
        <PricingCard
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          priceImg={IconThree}
          priceTitle="GROUP PASS"
          price="199"
        />
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 100px 0;
  background: url('${PricingBg}') no-repeat center/cover;
  position: relative;
  .container {
    display: flex;
    justify-content: space-between;
    padding: 80px 0 0 0;
  }
  @media (max-width: 800px) {
    .container {
      justify-content: center;
    }
  }
  @media (max-width: 1168px) {
    .container {
      flex-wrap: wrap;
    }
  }
`;

export default Pricing;
