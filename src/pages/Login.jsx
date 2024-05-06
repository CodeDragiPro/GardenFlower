import React from "react";
import logo from "../assets/logoGardenFlower.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="border-2 border-flowerpink p-4 md:w-1/3 w-full flex flex-col justify-center items-center rounded-lg">
        <img src={logo} alt="Logo" className="md:w-48 w-36  mb-4" />

        <form className="w-full">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:outline-none"
              placeholder="Votre email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded focus:outline-none"
              placeholder="Votre mot de passe"
            />
          </div>

          <Button text="CONNEXION" className="w-full" />

          <div className="my-2">
            <p>
              vous n'avez pas encore de compte ? {" "}
              <Link to="/signin" className="font-bold text-flowerpink">
                S'enregistrer
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
