import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import auth from "../utils/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

import cancel from "/assets/icons/cancel.svg";
import Apple from "/assets/icons/Apple.svg";
import Facebook from "/assets/icons/Facebook.svg";
import Google from "/assets/icons/Google.svg";
import tick from "/assets/icons/tick.svg";
import show_password from "/assets/icons/show.svg";

export default function Login() {
  const TOKEN = localStorage.getItem("authToken");
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const NAVIGATE = useNavigate();

  const SHOW_PASSWORD = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (TOKEN) {
      NAVIGATE("/app");
    }
  });

  const handleSubmit = (e) => {
    setErrorEmail("");
    setErrorPassword("");
    const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const PASSWORD_REGEX =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    e.preventDefault();

    if (!email.match(EMAIL_REGEX)) {
      return setEmail("Please fill in a correct email");
    } else if (!password.match(PASSWORD_REGEX)) {
      return setErrorPassword("Use a stronger password");
    } else {
      setErrorEmail("");
      setErrorPassword("");

      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          if (!auth.currentUser.emailVerified) {
            localStorage.setItem(
              "authToken",
              res.user.proactiveRefresh.user.accessToken
            );
            NAVIGATE("/app", { replace: true });
          }
        })
        .catch((error) => {
          console.error(error);
          setErrorEmail("Invalid Credentials");
          setErrorPassword("Invalid Credentials");
        });
    }
  };
  return (
    <div className="px-[10px] md:px-[44px] pt-[16px] pb-[24px] overflow-hidden bg-white col-start-1 col-end-12 md:col-start-3 md:col-end-10 lg:col-start-5 lg:col-end-8 w-full rounded-[24px] shadow-lg">
      <div className="w-full flex justify-between items-center">
        <ul className="flex items-center gap-[16px]">
          <li className="w-fit">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "block border-b-2 border-[#EF498F]  py-[16px]" : ""
              }
            >
              Register
            </NavLink>
          </li>
          <li className="w-fit">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "block border-b-2 border-[#EF498F]  py-[16px]" : ""
              }
            >
              Log in
            </NavLink>
          </li>
        </ul>
        <div>
          <img src={cancel} alt="cancel modal" />
        </div>
      </div>

      <div className="flex gap-[16px] mt-[32px] mb-[28px]">
        <img src={Apple} alt="sign up with your apple account" />
        <img src={Facebook} alt="sign up with your facebook account" />
        <img src={Google} alt="signup with your google account" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-[#1A071066] text-[13px] self-start">
          or login with email?
        </p>
        <form
          className="flex flex-col w-full mb-[120px]"
          onSubmit={handleSubmit}
        >
          <div className="has-[:focus]:border has-[:focus]:border-[#5932EA] my-[20px] px-[12px] py-[6px] rounded-[12px] flex flex-col border border-[#DDDDDD]">
            <label htmlFor="email" className="text-[13px]">
              Email adress
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              className="w-full focus:outline-none placeholder:text-black text-black"
              onInput={(e) => setEmail(e.target.value)}
              required
            />
            <p className="text-red-500 text-[13px]">{errorEmail}</p>
          </div>
          <div className="has-[:focus]:border has-[:focus]:border-[#5932EA] px-[12px] py-[6px] rounded-[12px] flex flex-col border border-[#DDDDDD]">
            <label htmlFor="password" className="text-[13px]">
              Password
            </label>
            <div className="flex relative">
              <input
                type={show ? "text" : "password"}
                id="password"
                placeholder="********"
                className="w-full focus:border-none focus:outline-none text-black placeholder:text-black"
                onInput={(e) => setPassword(e.target.value)}
                required
              />
              <img
                src={show_password}
                alt="show password"
                className="absolute end-2 bottom-1 cursor-pointer"
                onClick={SHOW_PASSWORD}
              />
            </div>
            <p className="text-red-500 text-[13px]">{errorPassword}</p>
          </div>
          <p className="text-[#1A0710A6] text-[13px]">8+ characters</p>
          <input
            type="submit"
            value="Login to Dashboard"
            className="mt-[32px] mb-[16px] text-white bg-[#5932EA] rounded-[12px] py-[16px] cursor-pointer"
          />
          <div className="flex items-center gap-[12px]">
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              className="bg-[#EF498F1F] checked:bg-[#5932EA]"
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
        </form>
      </div>
    </div>
  );
}
