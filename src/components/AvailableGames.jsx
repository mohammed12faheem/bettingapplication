import React from "react";
import { useNavigate } from "react-router-dom";

export default function AvailableGames({ item,clubId ,club_name}) {
const navigate= useNavigate();


const fnGotoBetting=()=>{
  navigate(`/games/${item.game_name}/${clubId}`, { state: { item,club_name } });

}

  return (
    <div onClick={fnGotoBetting}  className=" flex flex-col items-center ">
      <div className="h-[95px] w-[95px] rounded-full bg-[#00A9EE] flex items-center justify-center overflow-hidden">
        <img
          src={new URL(`../assets/${item.game_icon}`, import.meta.url).href}
          alt={item.game_name}
          className="object-contain w-[70%] h-[70%]"
        />
      </div>
      <span className="text-[16px] font-medium text-white mt-2">{item?.game_name}</span>
    </div>
  );
}
