import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

export default function SetupHome() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-betweem">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
