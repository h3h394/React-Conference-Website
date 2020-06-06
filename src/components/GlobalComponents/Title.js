/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Title = ({subtitle, title}) => (
  <div css={styles} className="title">
    <p>{subtitle}</p>
    <h2>{title}</h2>
  </div>
);

const styles = css`
  text-align: center;
  color: #fff;
  position: relative;
  p {
    font-size: 17px;
  }
  h2 {
    font-size: 40px;
    line-height: 1;
    font-weight: 600;
  }
`;

export default Title;
