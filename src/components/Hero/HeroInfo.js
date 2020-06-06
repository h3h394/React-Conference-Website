/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const HeroInfo = () => (
  <div css={styles} className="info">
    <h2>
      <span>SCIENCE</span> <br /> CONFERENCE
    </h2>
    <p>SHANGRI-LA HOTEL, BANGKOK, BANGKOK, THAILAND</p>
    <Button btnTitle="More information" />
  </div>
);

const styles = css`
  color: #fff;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  h2 {
    font-size: 90px;
    line-height: 1.1;
    z-index: 3;
    span {
      position: relative;
      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 23px;
        left: -40px;
        padding: 0 19px;
        bottom: 30px;
        z-index: -1;
        background: linear-gradient(120deg, #df42b1 0%, #505add 100%);
      }
    }
  }
  p {
    background: #2e242e;
    font-size: 17px;
    padding: 10px 14px;
    display: inline-block;
    margin: 16px 0;
  }
  .btn {
    margin: 20px 0 0 0;
  }

  @media (max-width: 720px) {
    h2 {
      font-size: 58px;
      span {
        &::after {
          bottom: 19px;
        }
      }
    }
    p {
      font-size: 15px;
    }
  }
`;

export default HeroInfo;
