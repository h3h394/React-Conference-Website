/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Overlay from "../GlobalComponents/Overlay";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import Button from "../GlobalComponents/Button";
import SpeakingBg from "../../img/speakingBg.jpg";
import SpeakingCard from "./SpeakingCard";
import SpeakerOneBg from "../../img/speakerOne.jpg";
import SpeakerTwoBg from "../../img/speakerTwo.jpg";
import SpeakerThreeBg from "../../img/speakerThree.jpg";
import SpeakerFourBg from "../../img/speakerFour.jpg";
import SpeakerFiveBg from "../../img/speakerFive.jpg";
import SpeakerSixBg from "../../img/speakerSix.jpg";

const Speaking = () => (
  <section css={styles} className="speaking" id="speakers">
    <Overlay
      overlay="linear-gradient(120deg, #505add 0%, #df42b1 100%)"
      opacity=".9"
    />
    <Title subtitle="OUR SPEAKINGS" title="WHO’S SPEAKING" />
    <Container>
      <SpeakingCard
        speakerName="Albert Barnes"
        speakerDesc="Founder"
        speakerImg={SpeakerOneBg}
      />
      <SpeakingCard
        speakerName="Patricia Stanley"
        speakerDesc="Product Lead"
        speakerImg={SpeakerTwoBg}
      />
      <SpeakingCard
        speakerName="Evelyn Stone"
        speakerDesc="Photographer"
        speakerImg={SpeakerThreeBg}
      />
      <SpeakingCard
        speakerName="Evelyn Stone"
        speakerDesc="Photographer"
        speakerImg={SpeakerFourBg}
      />
      <SpeakingCard
        speakerName="Susan Hopkins"
        speakerDesc="UX Manager"
        speakerImg={SpeakerFiveBg}
      />
      <SpeakingCard
        speakerName="Michael Fowler"
        speakerDesc="Product Design"
        speakerImg={SpeakerSixBg}
      />
    </Container>
    <div className="buttonWrap">
      <Button btnTitle="View all speaker" />
    </div>
  </section>
);

const styles = css`
  width: 100%;
  padding: 100px 0;
  position: relative;
  background: url('${SpeakingBg}') no-repeat center/cover;
  .container {
    position: relative;
    padding: 40px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .buttonWrap {
    display: flex;
    justify-content: center;
    .btn {
      background: transparent;
      border: 1px solid #fff;
      position: relative;
      &:hover {
        background: #df42b1;
        border: 1px solid #df42b1;
      }
    }
  }
  @media (max-width: 810px) {
    .container {
      flex-direction: column;
      align-items: center;
      flex-wrap: nowrap;
    }
  }
`;

export default Speaking;
