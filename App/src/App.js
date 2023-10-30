import Content from "./Component/Content/Content";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import ScrollToTop from "react-scroll-to-top";
function App() {
  return <div >
    <Navbar />
     <ScrollToTop smooth color="#106690" />
    <Content />
    <Footer />
  </div>;
}

export default App;
