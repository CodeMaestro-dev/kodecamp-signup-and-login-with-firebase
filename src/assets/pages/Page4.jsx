import cancel from "/assets/icons/cancel.svg";

export default function Page4({ handlePagination }) {
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
        <form
          className="flex flex-col w-full gap-[20px]"
          onSubmit={handlePagination}
        >
          <div className="has-[:focus]:border has-[:focus]:border-[#5932EA] px-[12px] py-[6px] rounded-[12px] flex flex-col border border-[#DDDDDD]">
            <label htmlFor="street-address" className="text-[13px]">
              Street adress
            </label>
            <input
              type="text"
              id="street-address"
              placeholder="319 Bainbridge Street"
              className="w-full focus:outline-none text-black"
              required
            />
          </div>
          <div className="relative has-[:focus]:border has-[:focus]:border-[#5932EA] px-[12px] py-[16px] rounded-[12px] flex flex-col border border-[#DDDDDD]">
            <input
              type="text"
              id="apartment"
              placeholder="Apartment"
              className="w-full focus:outline-none text-black"
            />
            <span className="absolute end-5 bottom-4 text-[#1A071066]">Optional</span>
          </div>
          <div className="has-[:focus]:border has-[:focus]:border-[#5932EA] px-[12px] py-[6px] rounded-[12px] flex flex-col border border-[#DDDDDD]">
            <label htmlFor="city" className="text-[13px]">
              City
            </label>
            <input
              type="text"
              id="city"
              placeholder="New York City"
              className="w-full focus:outline-none text-black"
              required
            />
          </div>
          <div className="flex gap-[16px]">
            <div className="has-[:focus]:border has-[:focus]:border-[#5932EA] px-[12px] py-[6px] rounded-[12px] flex flex-col border border-[#DDDDDD]">
              <label htmlFor="state" className="text-[13px]">
                State
              </label>
              <input
                type="text"
                id="state"
                placeholder="New York"
                className="w-full focus:outline-none text-black"
                required
              />
            </div>
            <div className="has-[:focus]:border has-[:focus]:border-[#5932EA] px-[12px] py-[6px] rounded-[12px] flex flex-col border border-[#DDDDDD]">
              <label htmlFor="zip-code" className="text-[13px]">
                Zip Code
              </label>
              <input
                type="text"
                id="zip-code"
                placeholder="1123"
                className="w-full focus:outline-none text-black"
                required
              />
            </div>
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
