/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Testimonial = ({ testimonialName, testimonialImg }) => {
  return (
    <div css={styles} className="testimonial">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <div className="testimonialInfo">
        <img src={testimonialImg} alt="testimonial" />
        <div className="testimonialDesc">
          <p>{testimonialName}</p>
          <span>UX Manager</span>
        </div>
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 530px;
  padding: 36px 50px;
  background: #2d3065;
  border-radius: 6px;
  color: #fff;
  > p {
    line-height: 1.7;
    font-weight: 300;
  }
  .testimonialInfo {
    display: flex;
    align-items: center;
    padding: 30px 0 0 0;
    img {
      width: 64px;
      height: 64px;
      display: block;
      margin-right: 20px;
      border-radius: 50%;
    }
    .testimonialDesc {
      p {
        font-weight: 600;
        font-size: 18px;
      }
      span {
        color: #df42b1;
        font-weight: 300;
      }
    }
  }
  @media (max-width: 900px) {
    max-width: 100%;
    margin: 10px 0;
  }
  @media (min-width: 901px) and (max-width: 1168px) {
    max-width: 48%;
    > p {
      font-size: 15px;
    }
  }
`;

export default Testimonial;
