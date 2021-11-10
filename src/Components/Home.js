import React from "react";
import CoreTeam from "./CoreTeam";
import Desclaimer from "./Desclaimer";
import DevelopmentTeam from "./DevelopmentTeam";
import Hero from "./Hero";
import MakeChallenge from "./MakeChallenge";
import ReacentChallenges from "./ReacentChallenges";
import ReceiveRewards from "./ReceiveRewards";
function Home() {
  return (
    <div>
      <Hero />
      <MakeChallenge />
      <ReceiveRewards />
      <ReacentChallenges />
      <CoreTeam />
      <DevelopmentTeam />
      {/* <CommunityThoughts /> */}
      <Desclaimer />
    </div>
  );
}

export default Home;
