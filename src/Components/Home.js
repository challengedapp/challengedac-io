import React from "react";
import CoreTeam from "./CoreTeam";
import CoreTeamNew from "./CoreTeamNew";
import Desclaimer from "./Desclaimer";
import DevelopmentTeam from "./DevelopmentTeam";
import Hero from "./Hero";
import MakeChallenge from "./MakeChallenge";
import ReacentChallenges from "./ReacentChallenges";
import ReceiveRewards from "./ReceiveRewards";
import What from "./WhatIsChallengeEOS";

function Home() {
  return (
    <div>
      <Hero />
      <MakeChallenge />
      <ReceiveRewards />
      <ReacentChallenges />
      <What />
      {/* <CoreTeam /> */}
      <CoreTeamNew />
      {/* <DevelopmentTeam /> */}
      {/* <CommunityThoughts /> */}
      <Desclaimer />
    </div>
  );
}

export default Home;
