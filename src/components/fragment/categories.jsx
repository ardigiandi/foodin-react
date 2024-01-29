import CardCategories from "../element/card/cardcategories";
import snack1 from "../../assets/img/snack 1.svg";
import Bread from "../../assets/img/bread 1.svg"
import Hamburger from "../../assets/img/burger 1.svg"
import Milk from "../../assets/img/milk.svg"
import Bottle from "../../assets/img/bottle.svg"

const Categories = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12">
      <h1 className="text-[28px] font-bold">Categories</h1>
        <div className="flex flex-wrap justify-center gap-x-5">
        <CardCategories>
          <CardCategories.header image={snack1} />
          <CardCategories.footer product="Snack" />
        </CardCategories>
        <CardCategories>
          <CardCategories.header image={Bread} />
          <CardCategories.footer product="Bread" />
        </CardCategories>
        <CardCategories>
          <CardCategories.header image={Hamburger} />
          <CardCategories.footer product="Junk Food" />
        </CardCategories>
        <CardCategories>
          <CardCategories.header image={Milk} />
          <CardCategories.footer product="Milk" />
        </CardCategories>
        <CardCategories>
          <CardCategories.header image={Bottle} />
          <CardCategories.footer product="Drink Water" />
        </CardCategories>
      </div>
    </div>
  );
};

export default Categories;
