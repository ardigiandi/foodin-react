const CardCategories = (props) => {
  const { children } = props;

  return (
    <div className="flex justify-center mt-7">
      <div className="bg-gray-200 px-11 py-10 rounded-xl">{children}</div>
    </div>
  );
};

const header = (props) => {
  const { image } = props;

  return (
    <div className="bg-gray-300 p-7 rounded-full">
      <img src={image} alt="" />
    </div>
  );
};

const footer = (props) => {
  const { product } = props;
  return(
    <h1 className="text-base flex justify-center mt-5">{product}</h1>
  )
};

CardCategories.header = header;
CardCategories.footer = footer;

export default CardCategories;
