import snack1 from "../../assets/img/snack 1.svg";

const CardCategories = (props) => {
  const { children } = props;

  return (
    <div className="max-w-6xl mx-auto mt-20">
      <h1 className="text-[28px] font-bold">Categories</h1>
      <div className="flex justify-center mt-5 gap-x-4">
        <div className="bg-gray-400 rounded-lg py-10 px-11">
          <div className="bg-gray-300 rounded-full p-6 "><img src={snack1} alt="" /></div>
        </div>
      </div>
    </div>
  );
};





export default CardCategories;
