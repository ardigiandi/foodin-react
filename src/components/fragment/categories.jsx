import CardCategories from "../element/card/cardcategories";

const product = [
  {
    id: "1",
    image: "/img/snack 1.svg",
    name: "snack",
  },
  {
    id: "2",
    image: "/img/bread 1.svg",
    name: "Bread",
  },
  {
    id: "3",
    image: "/img/burger 1.svg",
    name: "Junk Food",
  },
  {
    id: "4",
    image: "/img/milk.svg",
    name: "Milk",
  },
  {
    id: "5",
    image: "/img/bottle.svg",
    name: "Drink Water",
  },
];

const Categories = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12">
      <h1 className="text-[28px] font-bold flex justify-center lg:justify-start">
        Categories
      </h1>
      <div className="flex flex-wrap justify-center gap-x-5">
        {product.map((product) => (
          <CardCategories key={product.id}>
            <CardCategories.header image={product.image} />
            <CardCategories.footer product={product.name} />
          </CardCategories>
        ))}
      </div>
    </div>
  );
};

export default Categories;
