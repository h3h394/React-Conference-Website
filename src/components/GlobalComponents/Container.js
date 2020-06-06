/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Container = ({ children, isOpened }) => (
  <div css={styles} className={(isOpened ? "hidden" : "") + " container"}>
    {children}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;
  @media (max-width: 1168px) {
    max-width: 90%;
  }
`;

export default Container;
