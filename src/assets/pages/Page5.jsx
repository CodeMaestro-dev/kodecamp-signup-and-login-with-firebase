import { Link } from "react-router-dom";

import sally_1 from "/assets/image/Saly-10.png";
import cancel from "/assets/icons/cancel.svg";

export default function Page5() {
  return (
    <div className="relative overflow-hidden bg-white col-start-1 col-end-12 md:col-start-3 md:col-end-10 lg:col-start-5 lg:col-end-8 w-full rounded-[24px] shadow-lg">
      <img src={cancel} alt="cancel modal" className="absolute top-[32px] end-[32px]"/>
      <div className="bg-[#EF498F24] flex items-center justify-center">
        <img src={sally_1} role="presentation" />
      </div>
      <div className="px-[10px] md:px-[44px] pt-[16px] pb-[24px]">
        <h1 className="font-bold leading-[48px] text-[#1A0710D9] text-[44px] my-[44px] text-center md:text-left">You are successfully registered!</h1>
        <Link
          to="/login"
          className="text-center w-full block my-[48px] text-white bg-[#5932EA] rounded-[12px] py-[16px] cursor-pointer font-bold"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}
