import cancel from "/assets/icons/cancel.svg";
import search from "/assets/icons/search.svg";
import map from "/assets/icons/map.svg";
import people from "/assets/icons/people.svg";
import time from "/assets/icons/time.svg";
import dollar from "/assets/icons/dollar.svg";

export default function Page3({ handlePagination }) {
  return (
    <div className="px-[10px] md:px-[44px] pt-[46px] pb-[24px] overflow-hidden bg-white col-start-1 col-end-12 md:col-start-3 md:col-end-10 lg:col-start-5 lg:col-end-8 w-full rounded-[24px] shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="font-bold">
          Add address
          <span className="text-[#6BC62D] ml-[24px]">3 of 3</span>
        </h2>
        <div>
          <img src={cancel} alt="cancel modal" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-[56px]">
        <form className="flex flex-col w-full gap-0">
          <div className="flex items-center gap-[11px] has-[:focus]:border has-[:focus]:border-[#5932EA] px-[12px] py-[16px] rounded-[12px] border border-[#DDDDDD]">
            <label htmlFor="search" className="">
              <img src={search} alt="search" />
            </label>
            <input
              type="search"
              id="search"
              placeholder="Search for adress"
              className="w-full focus:outline-none text-black"
            />
          </div>
          <p className="text-[#1A0710A6] text-[13px] mt-[4px]">
            Your address is not visible to other users
          </p>
          <div className="flex gap-[8px] mt-[32px]">
            <button
              className="border border-[#EF498F47] py-[8px] px-[12px] rounded-[12px] flex items-center gap-[5px]"
              onClick={handlePagination}
            >
              <img src={map} role="presentation" />
              <span className="font-bold text-[#5932EA] text-[13px]">
                Use current location
              </span>
            </button>
            <button
              className="flex items-center border border-[#EF498F47] py-[8px] px-[12px] rounded-[12px]"
              onClick={handlePagination}
            >
              <span className="font-bold text-[#5932EA] text-[13px]">
                Add manualy
              </span>
            </button>
          </div>
          <div className="mt-[128px] mb-[64px]">
            <h3 className="text-[#1A0710D9] font-bold mb-[16px]">
              Sharing your address shows:
            </h3>
            <ul>
              <li className="flex gap-[8px]">
                <img src={people} role="presentation" />
                <span className="text-[#1A0710A6]">People near you</span>
              </li>
              <li className="flex gap-[8px]">
                <img src={time} role="presentation" />
                <span className="text-[#1A0710A6]">People near you</span>
              </li>
              <li className="flex gap-[14px]">
                <img src={dollar} role="presentation" />
                <span className="text-[#1A0710A6]">People near you</span>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}
