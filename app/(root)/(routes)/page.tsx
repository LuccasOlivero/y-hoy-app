import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

export default function SetupHome() {
  return (
    <div className="container mx-auto">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
