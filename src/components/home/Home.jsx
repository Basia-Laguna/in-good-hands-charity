import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeAboutUs from "./HomeAboutUs";
import HomeContactUs from "./HomeContactUs";
import HomeFourSteps from "./HomeFourSteps";
import HomeWhoWeHelp from "./HomeWhoWeHelp";

import { HOME_HEADER } from "../../paths/scrollTargets";

function Home(props) {
  return (
    <>
      <div name={HOME_HEADER}>
        <HomeHeader />
      </div>
      <div>
        <HomeThreeColumns />
      </div>
      <div>
        <HomeFourSteps />
      </div>
      <div>
        <HomeAboutUs />
      </div>
      <div>
        <HomeWhoWeHelp />
      </div>
      <div>
        <HomeContactUs />
      </div>
    </>
  );
}

export default Home;
