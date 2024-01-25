import React from "react";
import CardTeam from "./CardTeam";
import { OURTEAM } from "../../../../../constants";

const CardTeamList = () => {
  const ourTeam = OURTEAM;
  return (
    <div className="grid h-full w-full gap-8 md:grid-cols-2 xl:grid-cols-3 xl:p-8">
      {ourTeam.map((item, index) => (
        <CardTeam key={index} content={{ ...item }} />
      ))}
    </div>
  );
};

export default CardTeamList;
