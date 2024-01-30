import Loginpage from "../components/fragment/loginpage";
import Athlayout from "../components/layout/Athlayout";
import loginimage from "/img/Group 2.png"

const Login = () => {
  return (
    <Athlayout
      image={loginimage}
      type="login"
      tagline="Welcome To FoodIn"
      text="Welcome back! Please enter your details"
      sizeimage="w-1/2 h-screen hidden lg:block"
    >
      <Loginpage />
    </Athlayout>
  );
};

export default Login;
