import Button from "../element/button/button";

const Cta = () => {
  return (
    <section className="max-w-6xl mx-auto mt-10 relative md:block lg:block">
      <img
        src="/img/Group 16.png"
        alt=""
        className="w-full h-auto px-5 sm:px-7 sm:px-0 lg:px-0"
      />
      <p className="absolute top-4 sm:top-16 lg:top-24 mx-auto font-bold text-sm lg:text-3xl sm:text-2xl w-full text-white text-center ">
        Belanja murah? FoodIn aja
      </p>
      <div className="absolute top-10 sm:top-28 lg:top-36 mx-auto w-full text-center">
        <Button className="bg-blue-700 px-3 py-3 lg:px-8 lg:py-4 rounded-xl text-xs text-white">
          Belanja Sekarang
        </Button>
      </div>
    </section>
  );
};

export default Cta;
