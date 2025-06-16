import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ClubCard({ item }) {
  const navigate = useNavigate();

  const handleClubClick = () => {
    navigate(`/games/${item.id}`, { state: { item } });
  };

  const isOpen = new Date() <= new Date(item.closeDate);
  console.log(isOpen);
  return (
    <div
      onClick={handleClubClick}
      className="cursor-pointer shadow-md bg-radial-[at_50%_75%] to-[#B9B9B9] from-[#53535380]    hover:bg-radial-[at_50%_75%] hover:to-[#00A9EE] hover:from-[#B9B9B9]  rounded-lg p-4 flex flex-col gap-2  z-30"
    >
      <div className="text-[20px] text-center font-semibold text-[#FFFFFF]">
        {item.club_name}
      </div>
      <div className="text-[20px] text-center hover:text-black text-[#20BDFE]">
        {item.code}
      </div>

      <div className="relative flex justify-center  gap-6 items-center text-sm  ">
        <div className="flex flex-col text-left bg-black px-2 py-1 pr-12 rounded-lg">
          <span className="text-[18px] font-extralight text-white">Open</span>
          <span className="text-[18px] font-semibold text-white">
            {moment(item.open_date).format("LT")}
          </span>
        </div>

        <span
          className={`absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-lg text-[20px] font-semibold ${
            isOpen
              ? "bg-linear-to-t from-[#0CDB1E] to-[#057625] text-white"
              : "bg-linear-to-b from-[#DB0C0C] to-[#760505] text-white"
          }`}
        >
          {isOpen ? "Play" : "Closed"}
        </span>

        <div className="flex flex-col text-right pl-12  bg-black  px-2 py-1  rounded-lg ">
          <span className="text-[18px] font-extralight text-white">Close</span>
          <span className="text-[18px] font-semibold text-white">
            {moment(item.closeDate).format("LT")}
          </span>
        </div>
      </div>
    </div>
  );
}
