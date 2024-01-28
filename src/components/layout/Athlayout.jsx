import { Link } from "react-router-dom";

const Athlayout = (props) => {
  const { type, tagline, text, image, children, sizeimage } = props;

  return (
    <section className="flex flex-row justify-between">
      <div className="flex flex-col px-5 lg:px-24 w-full my-8">
        <h1 className="text-xl font-semibold ">FoodIn</h1>
        <h1 className="text-3xl mt-24 font-semibold">{tagline}</h1>
        <p className="mt-2 text-sm">{text}</p>
        {children}

        <p className="text-center mt-3">
          {type === "login"
            ? "Don't have an account! "
            : "Already have an account! "}

          {type === "login" && (
            <Link to="/register" className="text-blue-500 ">
              Register
            </Link>
          )}

          {type === "register" && (
            <Link to="/login" className="text-blue-500 text-base">
              Login
            </Link>
          )}
        </p>
      </div>
      <img src={image} alt="" className={sizeimage} />
    </section>
  );
};

export default Athlayout;
