import React, { useState } from 'react';
import logo from "../assets/logoGardenFlower.png";
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Inscription réussie !");
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      toast.error("Erreur lors de l'inscription");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='border-2 border-flowerpink p-4 md:w-1/3 w-full flex flex-col justify-center items-center rounded-lg'>
        <img src={logo} alt="Logo" className="md:w-48 w-36 mb-4" />
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} className="w-full px-3 py-2 border rounded focus:outline-none" placeholder="Votre email" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Mot de passe</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} className="w-full px-3 py-2 border rounded focus:outline-none" placeholder="Votre mot de passe" />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-1">Retaper Mot de passe</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} className="w-full px-3 py-2 border rounded focus:outline-none" placeholder="Retaper votre mot de passe" />
          </div>

          <Button text="INSCRIPTION" className="w-full"/>

          <div className="my-3">
            <p>
              vous avez déjà un compte ? {" "}
              <Link to="/login" className="font-bold text-flowerpink">
                Se connecter
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
