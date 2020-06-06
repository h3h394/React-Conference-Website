/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Hero = ({ overlay, opacity }) => (
  <div
    style={{ background: overlay, opacity: opacity }}
    css={styles}
    className="overlay"
  ></div>
);

const styles = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default Hero;
