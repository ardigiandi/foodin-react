import Header from "../components/fragment/navbar";
import Carousel from "../components/fragment/carousel";
import CardCategories from "../components/fragment/cardcategories";
import snack1 from "../assets/img/snack 1.svg"

const Navbar = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <CardCategories>
        <CardCategories.header image={snack1}/>
        <CardCategories></CardCategories>
      </CardCategories>
    </div>
  );
};

export default Navbar;
