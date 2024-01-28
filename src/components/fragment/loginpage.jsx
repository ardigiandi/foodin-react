import Inputform from "../element/input";
import Button from "../element/button/button";

const Loginpage = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/navbar";
  };

  return (
    <form onSubmit={handleLogin}>
      <Inputform
        className="mt-8 space-y-2"
        type="email"
        label="Email Address"
        placeholder="cth:example@gmail.com"
        id="email"
        name="email"
        htmlFor="email"
      />
      <Inputform
        className="mt-5 space-y-2"
        type="Password"
        label="password"
        placeholder="***********"
        id="password"
        name="password"
        htmlFor="password"
      />
      <Button
        className="bg-blue-500 w-full mt-5 text-white py-4 rounded-xl hover:bg-blue-700"
        type="submit"
        onClick={() => handleLogin}
      >
        Login
      </Button>
    </form>
  );
};

export default Loginpage;
