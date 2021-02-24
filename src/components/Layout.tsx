import { FC, memo, ReactElement, ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

function Layout(props: Props): ReactElement {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, width: "80%", margin: "0 auto" }}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default memo(Layout);
