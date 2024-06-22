import { NavLink } from "react-router-dom";
import { useState } from "react";

import cancel from "/assets/icons/cancel.svg";
import Apple from "/assets/icons/Apple.svg";
import Facebook from "/assets/icons/Facebook.svg";
import Google from "/assets/icons/Google.svg";
import tick from "/assets/icons/tick.svg";
import show_password from "/assets/icons/show.svg";

export default function Page1({
  handleSubmit,
  setEmail,
  setPassword,
  errorEmail,
  errorPassword,
}) {
  const [show, setShow] = useState(false);

  const SHOW_PASSWORD = () => {
    setShow(!show);
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
          or register with email?
        </p>
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
          <div className="has-[:focus]:border has-[:focus]:border-[#5932EA] my-[20px] px-[12px] py-[6px] rounded-[12px] flex flex-col border border-[#DDDDDD]">
            <label htmlFor="email" className="text-[13px]">
              Email adress
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              className="w-full focus:outline-none text-black placeholder:text-black"
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
            value="Create account"
            className="mt-[32px] mb-[16px] text-white bg-[#5932EA] rounded-[12px] py-[16px] cursor-pointer"
          />
          <div className="flex items-center gap-[12px]">
            <input
              type="checkbox"
              name="send-news"
              id="send-news"
              className="bg-[#EF498F1F] checked:bg-[#5932EA]"
            />
            <label htmlFor="send-news">Send me news and promotions</label>
          </div>
        </form>
        <p className="text-center text-[#1B1F3B66] text-[11px] mt-[40px] mb-[24px] w-[296px]">
          By continuing I agree with the{" "}
          <a href="#" className="text-blue-500 underline">
            Terms & Conditions, Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
