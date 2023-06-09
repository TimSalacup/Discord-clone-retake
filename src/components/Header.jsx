import React from "react";
import discordLogo from "../assets/discord-logo.svg";
import { MenuIcon } from "@heroicons/react/outline";
import { auth, provider } from "../firebase/init";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const signIn = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = provider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate("/channels");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = provider.credentialFromError(error);
        // ...
      });
  };

  return (
    <header className="flex items-center justify-between py-4 px-6 bg-discord_blue">
      <a href="/">
        <img
          src={discordLogo}
          className="w-32 h-12 object-contain"
          alt="discord logo"
        />
      </a>
      <div className="hidden lg:flex space-x-6">
        <a className="link" href="">
          Download
        </a>
        <a className="link" href="">
          Why Discord?
        </a>
        <a className="link" href="">
          Nitro
        </a>
        <a className="link" href="">
          Safety
        </a>
        <a className="link" href="">
          Support
        </a>
      </div>
      <div className="flex space-x-4">
        <button
          className="bg-white p-2 rounded-full text-xs md:text-sm px-4 
        focus:outline-none font-semibold hover:shadow-2xl hover:text-discord_blurple 
        transition duration-200 ease-in-out whitespace-nowrap"
          onClick={!user ? signIn : () => navigate("/channels")}
        >
          {!user ? "Log in" : "Open Discord"}
        </button>
        <MenuIcon className="h-9 text-white cursor-pointer lg:hidden" />
      </div>
    </header>
  );
}

export default Header;
