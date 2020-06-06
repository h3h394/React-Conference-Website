/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const ContactForm = () => (
  <div css={styles} className="contactForm">
    <input placeholder="Your Name" type="text" />
    <input placeholder="Last Name" type="text" />
    <input placeholder="E-Mail" type="email" />
    <input placeholder="Your Number" type="number" />
    <textarea placeholder="Your Message *" rows="2"></textarea>
    <Button btnTitle="Send message" />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 740px;
  padding: 30px;
  background: #21245c;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  input,
  textarea {
    margin-bottom: 24px;
    padding: 12px 0;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid #dbdcf1;
    color: #9293bc;
    transition: border-bottom 500ms ease-in-out;
    &::placeholder {
      color: #9293bc;
    }
    &:focus {
      border-bottom: 1px solid #5d5e8d;
    }
  }
  input {
    width: 100%;
    max-width: 48%;
  }
  textarea {
    width: 100%;
  }
  .btn {
    margin: 10px 0 0 0;
  }
  @media (max-width: 670px) {
    margin: 30px 0 0 0;
  }
  @media (min-width: 671px) and (max-width: 1168px) {
    max-width: 60%;
    flex-direction: column;
    align-items: flex-start;
    input,
    textarea {
      max-width: 100%;
    }
  }
`;

export default ContactForm;
