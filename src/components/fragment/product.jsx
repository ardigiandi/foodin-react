import Cardproduct from "../element/card/cardproduct";

const product = [
  {
    image: "/src/assets/img/Image Card 1.jpg",
    name: "Canitos Snack",
    price: 12000,
  },
  {
    image: "/src/assets/img/Image Card 2.jpg",
    name: "Orea Sachet",
    price: 3000,
  },
  {
    image: "/src/assets/img/Image Card 3.jpg",
    name: "Coffee Powder",
    price: 14000,
  },
  {
    image: "/src/assets/img/Image Card 1.jpg",
    name: "Canitos Snack",
    price: 12000,
  },
  {
    image: "/src/assets/img/Image Card 2.jpg",
    name: "Orea Sachet",
    price: 3000,
  },
  {
    image: "/src/assets/img/Image Card 3.jpg",
    name: "Coffee Powder",
    price: 14000,
  },
];

const Detailproduct = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col mt-14 gap-x-5">
      <div className="justify-between items-center flex px-4">
        <h1 className="text-xl font-semibold">Populer Product</h1>
        <a href="">See All Product</a>
      </div>
      <div className="flex flex-wrap lg:flex-row justify-center lg:justify-between md:gap-x-4 mt-5 mx-auto lg:px-0 gap-y-5">
        {product.map((product) => (
            <>
          <Cardproduct>
            <Cardproduct.header image={product.image} />
            <Cardproduct.body>{product.name}</Cardproduct.body>
            <Cardproduct.footer>{product.price}</Cardproduct.footer>
          </Cardproduct>
          </>
        ))}
      </div>
    </div>
  );
};

export default Detailproduct;
