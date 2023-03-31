import "./assets/styles/_pool.scss";

import Poll from "./Poll";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function BetPage() {
  return (
    <div>
      <Header page={"bet"} />
      <Poll />
      <Content page={"bet"} />
      <Footer page={"bet"} />
    </div>
  );
}

export default BetPage;
