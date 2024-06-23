import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import setting from "/assets/icons/setting.svg";
import key from "/assets/icons/key.svg";
import angle from "/assets/icons/angle.svg";
import anglewhite from "/assets/icons/anglewhite.svg";
import user from "/assets/icons/user.svg";
import discount from "/assets/icons/discount.svg";
import message from "/assets/icons/message.svg";
import wallet from "/assets/icons/wallet.svg";
import navigation from "/assets/icons/navigation.svg";
import threed from "/assets/icons/3d.svg";
import down from "/assets/icons/down.svg";
import evano from "/assets/image/evano.png";
import search from "/assets/icons/search.svg";
import greenArrow from "/assets/icons/green-arrow.svg";
import redArrow from "/assets/icons/red-arrow.svg";
import dashboard1 from "/assets/image/dashboard1.png";
import dashboard2 from "/assets/image/dashboard2.png";
import dashboard3 from "/assets/image/dashboard3.png";
import dashboard4 from "/assets/image/dashboard4.png";
import dashboard5 from "/assets/image/dashboard5.png";
import dashboard6 from "/assets/image/dashboard6.png";
import dashboard7 from "/assets/image/dashboard7.png";
import dashboard8 from "/assets/image/dashboard8.png";

export default function Dashboard() {
  const [show, setShow] = useState(false);

  const NAVIGATE = useNavigate();

  const TOKEN = localStorage.getItem("authToken");

  useEffect(() => {
    if (!TOKEN) {
      NAVIGATE("/login");
    }
  });

  const SET_SHOW = () => {
    setShow(!show);
  };

  return (
    <div className="col-start-1 col-end-12 bg-[#F8FAFF] grid grid-cols-11 w-full">
      <div
        className="block md:hidden cursor-pointer absolute top-8 right-8 z-[2]"
        onClick={SET_SHOW}
      >
        {!show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>

      {show ? (
        <div className="bg-white col-start-1 col-end-3 h-screen px-[24px] pt-[37px] pb-[67px] flex flex-col justify-between fixed z-[1] md:hidden">
          <div>
            <ul className="mb-[64px]">
              <li className="flex items-end justify-center">
                <img src={setting} role="presentation" />
                <span className="text-black text-[26px] ml-[8px] me-[4px] ">
                  Dashboard
                </span>
                <span className="text-[#838383] text-[10px] mb-[6px] ">
                  v.01
                </span>
              </li>
            </ul>
            <ul className="flex flex-col gap-[17px]">
              <li className="flex justify-between items-center p-[11px] rounded-[8px] cursor-pointer">
                <div className="flex">
                  <img src={key} role="presentation" className="mr-[15.25px]" />
                  <span className="text-[#9197B3] text-[14px] ">Dashboard</span>
                </div>
              </li>
              <li className="flex justify-between items-center p-[11px] rounded-[8px] cursor-pointer">
                <div className="flex">
                  <img
                    src={threed}
                    role="presentation"
                    className="mr-[15.25px]"
                  />
                  <span className="text-[#9197B3] text-[14px] ">Product</span>
                </div>
                <img
                  src={angle}
                  role="presentation"
                  className="mr-[15.25px] "
                />
              </li>
              <li className="bg-[#5932EA] flex justify-between items-center p-[11px] rounded-[8px] cursor-pointer w-auto">
                <div className="flex items-center">
                  <img
                    src={user}
                    role="presentation"
                    className="mr-[15.25px]"
                  />
                  <span className="text-white text-[14px] ">Customers</span>
                </div>
                <img
                  src={anglewhite}
                  role="presentation"
                  className="mr-[15.25px] "
                />
              </li>
              <li className="flex justify-between items-center p-[11px] rounded-[8px] cursor-pointer">
                <div className="flex">
                  <img
                    src={wallet}
                    role="presentation"
                    className="mr-[15.25px]"
                  />
                  <span className="text-[#9197B3] text-[14px] ">Income</span>
                </div>
                <img
                  src={angle}
                  role="presentation"
                  className="mr-[15.25px] "
                />
              </li>
              <li className="flex justify-between items-center p-[11px] rounded-[8px] cursor-pointer">
                <div className="flex">
                  <img
                    src={discount}
                    role="presentation"
                    className="mr-[15.25px]"
                  />
                  <span className="text-[#9197B3] text-[14px] ">Promote</span>
                </div>
                <img
                  src={angle}
                  role="presentation"
                  className="mr-[15.25px] "
                />
              </li>
              <li className="flex justify-between items-center p-[11px] rounded-[8px] cursor-pointer">
                <div className="flex">
                  <img
                    src={message}
                    role="presentation"
                    className="mr-[15.25px]"
                  />
                  <span className="text-[#9197B3] text-[14px] ">Help</span>
                </div>
                <img
                  src={angle}
                  role="presentation"
                  className="mr-[15.25px] "
                />
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-[46px] rounded-[20px] bg-gradient-to-r from-[#EAABF0] to-[#4623E9] pl-[33px] pr-[34px] pt-[26px] pb-[22px] ">
              <p className="text-center text-white text-[14px] w-[183px] font-semibold">
                Upgrade to PRO to get access all Features!
              </p>
              <button className="mt-[30px] bg-white text-[#4925E9] rounded-[20px] font-bold px-[50px] py-[10px]">
                Get Pro Now!
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-[12px]">
                <img src={evano} alt="" />
                <div className="flex flex-col">
                  <p className="text-black text-[14px] font-bold">Evano</p>
                  <p className="text-[#757575] text-[12px]">Project Manager</p>
                </div>
              </div>
              <img src={down} alt="drop down" className="" />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="bg-white col-start-1 col-end-1 min-[1600px]:col-end-3 h-screen px-[24px] pt-[37px] pb-[67px] hidden min-[820px]:flex flex-col justify-between fixed">
        <div>
          <ul className="mb-[64px]">
            <li className="flex items-end justify-center min-[1600px]:justify-start">
              <img src={setting} role="presentation" className="ms-0 min-[1600px]:ms-[9px]"/>
              <span className="text-black text-[26px] ml-[8px] me-[4px] hidden min-[1600px]:block">
                Dashboard
              </span>
              <span className="text-[#838383] text-[10px] mb-[6px] hidden min-[1600px]:block">
                v.01
              </span>
            </li>
          </ul>
          <ul className="flex flex-col gap-[17px]">
            <li className="flex justify-between items-center p-[11px] rounded-[8px] cursor-pointer">
              <div className="flex">
                <img
                  src={key}
                  role="presentation"
                  className="mr-0 min-[1600px]:mr-[15.25px]"
                />
                <span className="text-[#9197B3] text-[14px] hidden min-[1600px]:block">
                  Dashboard
                </span>
              </div>
            </li>
            <li className="flex justify-between items-center p-[11px] rounded-[8px] cursor-pointer">
              <div className="flex">
                <img
                  src={threed}
                  role="presentation"
                  className="mr-0 min-[1600px]:mr-[15.25px]"
                />
                <span className="text-[#9197B3] text-[14px] hidden min-[1600px]:block">
                  Product
                </span>
              </div>
              <img
                src={angle}
                role="presentation"
                className="mr-0 min-[1600px]:mr-[15.25px] hidden min-[1600px]:block"
              />
            </li>
            <li className="bg-[#5932EA] flex justify-between items-center p-[11px] rounded-[8px] cursor-pointer w-fit min-[1600px]:w-auto">
              <div className="flex items-center">
                <img
                  src={user}
                  role="presentation"
                  className="mr-0 min-[1600px]:mr-[15.25px]"
                />
                <span className="text-white text-[14px] hidden min-[1600px]:block">
                  Customers
                </span>
              </div>
              <img
                src={anglewhite}
                role="presentation"
                className="mr-0 min-[1600px]:mr-[15.25px] hidden min-[1600px]:block"
              />
            </li>
            <li className="flex justify-between items-center p-[11px] rounded-[8px] cursor-pointer">
              <div className="flex">
                <img
                  src={wallet}
                  role="presentation"
                  className="mr-0 min-[1600px]:mr-[15.25px]"
                />
                <span className="text-[#9197B3] text-[14px] hidden min-[1600px]:block">
                  Income
                </span>
              </div>
              <img
                src={angle}
                role="presentation"
                className="mr-0 min-[1600px]:mr-[15.25px] hidden min-[1600px]:block"
              />
            </li>
            <li className="flex justify-between items-center p-[11px] rounded-[8px] cursor-pointer">
              <div className="flex">
                <img
                  src={discount}
                  role="presentation"
                  className="mr-0 min-[1600px]:mr-[15.25px]"
                />
                <span className="text-[#9197B3] text-[14px] hidden min-[1600px]:block">
                  Promote
                </span>
              </div>
              <img
                src={angle}
                role="presentation"
                className="mr-0 min-[1600px]:mr-[15.25px] hidden min-[1600px]:block"
              />
            </li>
            <li className="flex justify-between items-center p-[11px] rounded-[8px] cursor-pointer">
              <div className="flex">
                <img
                  src={message}
                  role="presentation"
                  className="mr-0 min-[1600px]:mr-[15.25px]"
                />
                <span className="text-[#9197B3] text-[14px] hidden min-[1600px]:block">
                  Help
                </span>
              </div>
              <img
                src={angle}
                role="presentation"
                className="mr-0 min-[1600px]:mr-[15.25px] hidden min-[1600px]:block"
              />
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-[46px] rounded-[20px] bg-gradient-to-r from-[#EAABF0] to-[#4623E9] pl-[33px] pr-[34px] pt-[26px] pb-[22px] hidden min-[1600px]:block">
            <p className="text-center text-white text-[14px] w-[183px] font-semibold">
              Upgrade to PRO to get access all Features!
            </p>
            <button className="mt-[30px] bg-white text-[#4925E9] rounded-[20px] font-bold px-[50px] py-[10px]">
              Get Pro Now!
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-[12px]">
              <img src={evano} alt="" />
              <div className="hidden min-[1600px]:flex flex-col">
                <p className="text-black text-[14px] font-bold">Evano</p>
                <p className="text-[#757575] text-[12px]">Project Manager</p>
              </div>
            </div>
            <img
              src={down}
              alt="drop down"
              className="hidden min-[1600px]:block"
            />
          </div>
        </div>
      </div>
      <div className="col-start-1 min-[820px]:col-start-2 min-[1600px]:col-start-3 col-end-13 w-full pl-[30px] pr-[30px] min-[1660px]:pl-[71px] min-[1660px]:pr-[95px] pb-[78px] pt-[40px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-[20px] md:gap-0">
          <div>
            <p className="text-black text-[24px]">Hello Evano 👋🏽,</p>
          </div>
          <div className="flex items-center gap-[11px] has-[:focus]:border has-[:focus]:border-[#5932EA] px-[12px] py-[16px] rounded-[12px] border border-white shadow-lg shadow-[#E2ECF980] bg-white">
            <label htmlFor="search">
              <img src={search} alt="search" />
            </label>
            <input
              type="search"
              id="search"
              placeholder="Search for adress"
              className="w-full focus:outline-none text-black bg-transparent"
            />
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-[#E2ECF980] rounded-[20px] pt-[31px] pb-[33px] pl-[10px] min-[1030px]:pl-[50px] pr-[10px] min-[1030px]:pr-[64.2px] flex flex-col gap-[20px] min-[1030px]:gap-0 min-[1030px]:flex-row justify-between mt-[39px] mb-[40px]">
          <div className="px-[20px] min-[1330px]:px-[56px]">
            <div className="flex gap-[20px]">
              <img
                src={dashboard1}
                role="presentation"
                className="w-[84px] h-[84px]"
              />
              <div>
                <p className="text-[#ACACAC] text-[14px]">Total Customers</p>
                <p className="text-[#333333] text-[32px] font-[600]">5,423</p>
                <p className="flex">
                  <img
                    src={greenArrow}
                    role="presentation"
                    className="mr-[3px] hidden min-[1020px]:block"
                  />
                  <span className="text-[#00AC4F] mr-[3px]">16%</span>
                  <span className="text-[#292D32]">this month</span>
                </p>
              </div>
            </div>
          </div>
          <div className="min-[1030px]:border-l min-[1030px]:border-r border-l-[#F0F0F0] border-r-[#F0F0F0] px-[20px] min-[1330px]:px-[56px]">
            <div className="flex gap-[20px]">
              <img
                src={dashboard2}
                role="presentation"
                className="w-[84px] h-[84px]"
              />
              <div>
                <p className="text-[#ACACAC] text-[14px]">Total Customers</p>
                <p className="text-[#333333] text-[32px] font-[600]">5,423</p>
                <p className="flex">
                  <img
                    src={redArrow}
                    role="presentation"
                    className="mr-[3px] hidden min-[1020px]:block"
                  />
                  <span className="text-[#D0004B] mr-[3px]">16%</span>
                  <span className="text-[#292D32]">this month</span>
                </p>
              </div>
            </div>
          </div>
          <div className="px-[20px] min-[1330px]:px-[56px]">
            <div className="flex gap-[20px]">
              <img
                src={dashboard3}
                role="presentation"
                className="w-[84px] h-[84px]"
              />
              <div>
                <p className="text-[#ACACAC] text-[14px]">Total Customers</p>
                <p className="text-[#333333] text-[32px] font-[600]">5,423</p>
                <div className="flex">
                  <img src={dashboard4} role="presentation" />
                  <img
                    src={dashboard5}
                    role="presentation"
                    className="translate-x-[-10px]"
                  />
                  <img
                    src={dashboard6}
                    role="presentation"
                    className="translate-x-[-20px]"
                  />
                  <img
                    src={dashboard7}
                    role="presentation"
                    className="translate-x-[-30px]"
                  />
                  <img
                    src={dashboard8}
                    role="presentation"
                    className="translate-x-[-40px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white pt-[30px] pb-[41px] pl-[38px] pr-[44px] rounded-[20px] shadow-lg shadow-[#E2ECF980]">
          <div className="flex flex-col items-center min-[940px]:flex-row justify-between">
            <div className="flex flex-col items-center min-[940px]:items-start">
              <p className="text-black text-[22px] font-semibold mb-[7px]">
                All Customers
              </p>
              <p className="text-[#16C098] text-[14px]">Active Members</p>
            </div>
            <div className="flex gap-[16px] flex-col min-[940px]:flex-row max-[940px]:w-full mt-[16px] min-[940px]:mt-0">
              <div className="flex items-center gap-[11px] has-[:focus]:border has-[:focus]:border-[#5932EA] px-[12px] py-[16px] rounded-[12px] bg-[#F9FBFF]">
                <label htmlFor="search">
                  <img src={search} alt="search" />
                </label>
                <input
                  type="search"
                  id="search"
                  placeholder="Search for adress"
                  className="w-full focus:outline-none text-black bg-transparent"
                />
              </div>
              <select
                name="sort-by"
                id="sort-by"
                className="bg-[#F9FBFF] w-full  min-[940px]:w-fit rounded-[12px] p-[16px] border border-[#F9FBFF] focus:outline-none text-black focus:border focus:border-[#5932EA] placeholder:text-[#1A0710A6]"
              >
                <option>Short by: Newest</option>
                <option value="country">country</option>
                <option value="email">email</option>
              </select>
            </div>
          </div>
          <div className="mt-[40px] overflow-x-auto scroll no-scrollbar">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#EEEEEE]">
                  <td className="text-[#B5B7C0] text-[14px] p-[24px] text-nowrap">
                    Customer Name
                  </td>
                  <td className="text-[#B5B7C0] text-[14px] p-[24px]">
                    Company
                  </td>
                  <td className="text-[#B5B7C0] text-[14px] p-[24px] text-nowrap">
                    Phone Number
                  </td>
                  <td className="text-[#B5B7C0] text-[14px] p-[24px]">Email</td>
                  <td className="text-[#B5B7C0] text-[14px] p-[24px]">
                    Country
                  </td>
                  <td className="text-[#B5B7C0] text-[14px] p-[24px] text-center">
                    Status
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#EEEEEE]">
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Jane Cooper
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Microsoft
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    (225) 555-0118
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    jane@microsoft.com
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px] text-nowrap">
                    United States
                  </td>
                  <td className="text-center">
                    <span className="bg-[#16C09861] text-[#008767] border-[2px] border-[#00B087] px-[14px] py-[4px] text-center rounded-[4px]">
                      Active
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-[#EEEEEE]">
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Floyd Miles
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">Yahoo</td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    (205) 555-0100
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    floyd@yahoo.com
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Kiribati
                  </td>
                  <td className="text-center">
                    <span className="bg-[#FFC5C5] text-[#DF0404] border-[2px] border-[#DF0404] px-[14px] py-[4px] text-center rounded-[4px]">
                      Inactive
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-[#EEEEEE]">
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Ronald Richards
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">Adobe</td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    (302) 555-0107
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    ronald@adobe.com
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Israel
                  </td>
                  <td className="text-center">
                    <span className="bg-[#FFC5C5] text-[#DF0404] border-[2px] border-[#DF0404] px-[14px] py-[4px] text-center rounded-[4px]">
                      Inactive
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-[#EEEEEE]">
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Marvin McKinney
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">Tesla</td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    (252) 555-0126
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    marvin@tesla.com
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">Iran</td>
                  <td className="text-center">
                    <span className="bg-[#16C09861] text-[#008767] border-[2px] border-[#00B087] px-[14px] py-[4px] text-center rounded-[4px]">
                      Active
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-[#EEEEEE]">
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Jerome Bell
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Google
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    (629) 555-0129
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    jerome@google.com
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Réunion
                  </td>
                  <td className="text-center">
                    <span className="bg-[#16C09861] text-[#008767] border-[2px] border-[#00B087] px-[14px] py-[4px] text-center rounded-[4px]">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Kathryn Murphy
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Microsoft
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    (406) 555-0120
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    kathryn@microsoft.com
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Curaçao
                  </td>
                  <td className="text-center">
                    <span className="bg-[#16C09861] text-[#008767] border-[2px] border-[#00B087] px-[14px] py-[4px] text-center rounded-[4px]">
                      Active
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-[#EEEEEE]">
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Jacob Jones
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">Yahoo</td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    (208) 555-0112
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    jacob@yahoo.com
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Brazil
                  </td>
                  <td className="text-center">
                    <span className="bg-[#16C09861] text-[#008767] border-[2px] border-[#00B087] px-[14px] py-[4px] text-center rounded-[4px]">
                      Active
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-[#EEEEEE]">
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Kristin Watson
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Facebook
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    (704) 555-0127
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    jkristin@facebook.com
                  </td>
                  <td className="text-[#292D32] text-[14px] p-[24px]">
                    Åland Islands
                  </td>
                  <td className="text-center">
                    <span className="bg-[#FFC5C5] text-[#DF0404] border-[2px] border-[#DF0404] px-[14px] py-[4px] text-center rounded-[4px]">
                      Inactive
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-[20px] md:gap-0 justify-between mt-[32px]">
            <p className="text-[#B5B7C0] text-[14px]">
              Showing data 1 to 8 of 256K entries
            </p>
            <img
              src={navigation}
              alt="naviagte users"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
