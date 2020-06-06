/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import AboutInfo from "./AboutInfo";
import AboutDate from "./AboutDate";

const About = () => (
  <section css={styles} className="about">
    <Container>
      <AboutInfo />
      <AboutDate />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  background: #151853;
  padding: 100px 0;
`;

export default About;
