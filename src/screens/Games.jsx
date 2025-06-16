import FlatList from "flatlist-react/lib";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clubsData } from "../utils/clubsData";
import AvailableGames from "../components/AvailableGames";

export default function Games() {
  const navigate = useNavigate();
  const { clubId } = useParams();
  const club = clubsData.find((c) => c.id === clubId);

  const renderComponent = (item) => {
    return <AvailableGames item={item} clubId={club?.id} club_name={club?.club_name} />;
  };

  const handlegoback = () => {
    navigate(-1);
  };
  return (
    <div className="gap-6  flex flex-col sm:p-12 ">
      <div className="bg-[#00A9EE] w-full p-2 pl-10  flex items-center gap-1 justify-start   ">
        <span
          onClick={handlegoback}
          className="cursor-pointer text-white text-[18px] items-center  font-bold text-left "
        >
        ← {club.club_name}
        </span>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-6 px-6 ">
        <FlatList
          list={club?.available_game}
          renderItem={renderComponent}
          renderWhenEmpty={() => (
            <div className="text-white flex flex-1 items-center justify-center">
              No club found
            </div>
          )}
        />
      </div>
    </div>
  );
}
