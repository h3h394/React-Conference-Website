/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import ContactRow from "./ContactRow";
import ContactForm from "./ContactForm";

const Contact = () => (
  <section css={styles} className="contact" id="contact">
    <Title subtitle="HAVE QUESTION?" title="CONTACT US" />
    <Container>
      <div className="contactInfo">
        <ContactRow
          contactSubtitle="Address:"
          contactTitle="184 Main Collins Street"
        />
        <ContactRow contactSubtitle="Phone:" contactTitle="(226) 446 9371" />
        <ContactRow contactSubtitle="Email:" contactTitle="confer@gmail.com" />
        <ContactRow contactSubtitle="Website:" contactTitle="www.confer.com" />
      </div>
      <ContactForm />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 100px 0;
  background: #151853;
  .title {
    p {
      color: #df42b1;
    }
  }
  .container {
    padding: 60px 0 0 0;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 670px) {
    .container {
      flex-direction: column;
    }
  }
`;

export default Contact;
