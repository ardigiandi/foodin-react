import Header from "../components/fragment/navbar";
import Carousel from "../components/fragment/carousel";
import Categories from "../components/fragment/categories"
import Detailproduct from "../components/fragment/product";
import Cta from "../components/fragment/ctapage";

const Landingpage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Categories/>
      <Detailproduct/>
      <Cta/>
    </>
  );
};

export default Landingpage
