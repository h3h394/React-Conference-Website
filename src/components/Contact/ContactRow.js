/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ContactRow = ({ contactSubtitle, contactTitle }) => (
  <div css={styles} className="contactRow">
    <span>{contactSubtitle}</span>
    <p>{contactTitle}</p>
  </div>
);

const styles = css`
  width: 100%;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
  span {
    color: #9293bc;
    font-size: 15px;
    font-weight: 400;
  }
  p {
    color: #fff;
    font-size: 17px;
    font-weight: 600;
    margin: 6px 0 0 0;
  }
`;

export default ContactRow;
