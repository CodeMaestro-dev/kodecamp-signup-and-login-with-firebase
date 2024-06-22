import cancel from "/assets/icons/cancel.svg";
import info from "/assets/icons/info.svg";

export default function Page2({handlePagination}) {
  return (
    <div className="px-[10px] md:px-[44px] pt-[46px] pb-[24px] overflow-hidden bg-white col-start-1 col-end-12 md:col-start-3 md:col-end-10 lg:col-start-5 lg:col-end-8 w-full rounded-[24px] shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="font-bold">
          Personal information{" "}
          <span className="text-[#6BC62D] ml-[24px]">2 of 3</span>
        </h2>
        <div>
          <img src={cancel} alt="cancel modal" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-[56px]">
        <form
          className="flex flex-col w-full gap-[22px]"
          onSubmit={handlePagination}
        >
          <input
            type="text"
            id="name"
            placeholder="Full name"
            className="w-full rounded-[12px] p-[16px] border border-[#DDDDDD] focus:outline-none text-black focus:border focus:border-[#5932EA] placeholder:text-[#1A0710A6]"
            required
          />

          <div className="flex gap-[8px] items-center">
            <p>Gender: </p>
            <div className="flex gap-[8px]">
              <input
                type="radio"
                name="gender"
                id="male"
                className="checked:border checked:border-[#5932EA] placeholder:text-[#1A0710A6]"
                required
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex gap-[8px]">
              <input
                type="radio"
                name="gender"
                id="female"
                className="checked:border checked:border-[#5932EA] placeholder:text-[#1A0710A6]"
                required
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>

          <div className="flex gap-[8px]">
            <img src={info} role="presentation" />
            <span className="text-[#1A0710A6] text-[13px] font-bold">
              The phone number and birthday are only visible to you
            </span>
          </div>
          <div className="flex gap-[16px]">
            <select
              name="country-code"
              id="country-code"
              className="bg-transparent w-fit rounded-[12px] p-[16px] border border-[#DDDDDD] focus:outline-none text-black focus:border focus:border-[#5932EA] placeholder:text-[#1A0710A6]"
              required
            >
              <option value="+598">+598</option>
              <option value="+001">+001</option>
              <option value="+234">+234</option>
            </select>
            <input
              type="number"
              id="phone-number"
              placeholder="Phone number"
              className="w-full rounded-[12px] p-[16px] border border-[#DDDDDD] focus:outline-none text-black focus:border focus:border-[#5932EA] placeholder:text-[#1A0710A6]"
              required
            />
          </div>

          <div className="flex flex-col relative">
            <input
              type="date"
              id="birthday"
              placeholder="Birthday"
              className="w-full rounded-[12px] p-[16px] border border-[#DDDDDD] focus:outline-none text-black focus:border focus:border-[#5932EA] placeholder:text-[#1A0710A6]"
            />
            <span className="absolute end-12 bottom-[57px] md:bottom-[38px] text-[#1A071066]">
              Optional
            </span>
            <p className="text-[#1A0710A6] text-[13px]">
              Let us know about your birthday so as not to miss a gift
            </p>
          </div>
          <input
            type="submit"
            value="Save information"
            className="mt-[32px] mb-[16px] text-white bg-[#5932EA] rounded-[12px] py-[16px] cursor-pointer font-bold"
          />
        </form>
      </div>
    </div>
  );
}
