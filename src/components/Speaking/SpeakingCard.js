/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Overlay from "../GlobalComponents/Overlay";

const SpeakingCard = ({ speakerName, speakerDesc, speakerImg }) => (
  <div
    style={{ background: `url(${speakerImg}) no-repeat center/cover` }}
    css={styles}
    className="speakingCard"
  >
    <div className="socials">
      <i className="fab fa-facebook-f"></i>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-twitter"></i>
      <i className="fab fa-linkedin-in"></i>
    </div>
    <Overlay
      overlay="linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0) 100%)"
      opacity="1"
    />
    <p>{speakerName}</p>
    <span>{speakerDesc}</span>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 340px;
  height: 370px;
  margin: 20px 0;
  padding: 22px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    .socials {
      top: 0;
    }
  }
  .socials {
    background: #df42b1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 22px 18px;
    border-radius: 0 0 0 10px;
    position: absolute;
    transition: top 600ms ease-in-out;
    top: -200px;
    right: 0;
    i {
      color: #fff;
      cursor: pointer;
      margin: 7px 0;
    }
  }
  p,
  span {
    position: relative;
  }
  p {
    color: #fff;
    font-size: 20px;
  }
  span {
    color: #df42b1;
  }
  @media (max-width: 810px) {
    max-width: 100%;
    height: 430px;
  }
  @media (min-width: 811px) and (max-width: 1169px) {
    max-width: 47.7%;
  }
`;

export default SpeakingCard;
