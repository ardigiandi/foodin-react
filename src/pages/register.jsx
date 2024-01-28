import Registerpage from "../components/fragment/registerpage";
import Athlayout from "../components/layout/Athlayout";
import registerimage from "../assets/img/Group 2.png"

const Register = () => {
  return (
    <Athlayout
      type="register"
      image={registerimage}
      tagline="Register Your FoodIn Account"
      text="Register with your personal data and happy shopping!"
      sizeimage="w-1/2 hidden lg:block"
    >
      <Registerpage />
    </Athlayout>
  );
};

export default Register;
