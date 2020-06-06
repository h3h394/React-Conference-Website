/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";
import AboutBg from "../../img/aboutBg.png";

const AboutInfo = () => (
  <div css={styles} className="aboutInfo">
    <div className="aboutDesc">
      <span>ABOUT CONFERENCE</span>
      <h2>WELCOME TO THE PROJECT MANAGEMENT</h2>
      <p>
        The Project Management is a platform to learn expert techniques for
        building successful project teams, creating efficient plans and
        implementing effective tracking measures to ensure your projects come in
        on deadline and on budget. In one fast-paced, well-designed day, we’ll
        cover all the essential elements of project management.
      </p>
      <Button btnTitle="Interested" />
    </div>
    <img src={AboutBg} alt="about" />
  </div>
);

const styles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .aboutDesc {
    width: 100%;
    max-width: 520px;
    color: #fff;
    span {
      color: #df42b1;
      border-bottom: 2px solid #4b4d7b;
    }
    h2 {
      font-size: 40px;
      line-height: 1.2;
      margin: 26px 0;
    }
    p {
      font-size: 15px;
      line-height: 1.8;
    }
    .btn {
      margin: 64px 0 0 0;
    }
  }
  @media (max-width: 876px) {
    flex-direction: column;
    img {
      margin: 50px 0 0 0;
      max-width: 94%;
    }
    .aboutDesc {
      h2 {
        font-size: 30px;
      }
      .btn {
        margin: 20px 0 0 0;
      }
    }
  }
  @media (min-width: 877px) and (max-width: 1120px) {
    .aboutDesc,
    img {
      max-width: 48%;
    }
    .aboutDesc {
      h2 {
        font-size: 28px;
      }
    }
  }
`;

export default AboutInfo;
