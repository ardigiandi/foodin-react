import Inputform from "../element/input";
import Button from "../element/button/button";

const Registerpage = () => {
  const handleRegister = (event) => {
    event.preventDefault()
    localStorage.setItem("fullname", event.target.fullname.value);
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("phonenumber", event.target.phonenumber.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href ="/navbar"
  };

  return (
    <form onSubmit={handleRegister}>
      <Inputform
        className="mt-8 space-y-2"
        type="fullname"
        label="Fullname"
        placeholder="cth: jhondoe"
        id="fullname"
        name="fullname"
        htmlFor="fullname"
      />
      <Inputform
        className="mt-4 space-y-2"
        type="email"
        label="Email Address"
        placeholder="cth:example@gmail.com"
        id="email"
        name="email"
        htmlFor="email"
      />
      <Inputform
        className="mt-4 space-y-2"
        type="phonenumber"
        label="Phone number"
        placeholder="cth: 08XX-XXXX-XXXX"
        id="phonenumber"
        name="phonenumber"
        htmlFor="phonenumber"
      />
      <Inputform
        className="mt-4 space-y-2"
        type="password"
        label="Password"
        placeholder="••••••••"
        id="password"
        name="password"
        htmlFor="password"
      />
      <Button
        className="bg-blue-500 mt-5 text-white py-4 w-full rounded-xl hover:bg-blue-700"
        type="submit"
        onClick={() => handleRegister}
      >
        Register Account
      </Button>
    </form>
  );
};

export default Registerpage;
