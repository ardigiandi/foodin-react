import Header from "../components/fragment/navbar";
import Carousel from "../components/fragment/carousel";
import Categories from "../components/fragment/categories"
import Detailproduct from "../components/fragment/product";
import Cta from "../components/fragment/ctapage";
import Footer from "../components/fragment/footer";

const Landingpage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Categories/>
      <Detailproduct/>
      <Cta/>
      <Footer/>
    </>
  );
};

export default Landingpage
