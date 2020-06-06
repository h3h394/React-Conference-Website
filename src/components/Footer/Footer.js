/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import FooterContainer from "./FooterContainer";
import Copyright from "./Copyright";

const Footer = () => (
  <footer css={styles}>
    <Title />
    <Container>
      <FooterContainer />
      <Copyright />
    </Container>
  </footer>
);

const styles = css`
  width: 100%;
  padding: 100px 0 0 0;
  background: #111343;
`;

export default Footer;
