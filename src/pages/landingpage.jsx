import Header from "../components/fragment/navbar";
import Carousel from "../components/fragment/carousel";
import Categories from "../components/fragment/categories"
import Detailproduct from "../components/fragment/product";

const Navbar = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Categories/>
      <Detailproduct/>
    </>
  );
};

export default Navbar;
