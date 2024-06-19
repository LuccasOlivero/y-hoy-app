import Container from "./components/container";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

export default function SetupHome() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}
