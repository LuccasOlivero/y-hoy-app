"use client";

import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import { useEffect, useState } from "react";

export default function SetupHome() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Main />
      </div>

      <Footer />
    </>
  );
}
