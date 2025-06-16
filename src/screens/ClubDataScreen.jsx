import React from "react";
import { clubsData } from "../utils/clubsData";
import FlatList from "flatlist-react";
import ClubCard from "../components/ClubCard";

export default function ClubDataScreen() {
  const renderComponent = (item) => {
    return <ClubCard item={item} />;
  };

  return (
    <div className="gap-6  flex flex-col py-12 px-6   ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FlatList
          list={clubsData}
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
