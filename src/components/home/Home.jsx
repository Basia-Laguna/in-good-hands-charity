import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeAboutUs from "./HomeAboutUs";
import HomeContactUs from "./HomeContactUs";
import HomeFourSteps from "./HomeFourSteps";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeFooter from "./HomeFooter";

import {
  HOME_ABOUT_US,
  HOME_CONTACT,
  HOME_FOUR_STEPS,
  HOME_HEADER,
  HOME_INSTITUTIONS,
} from "../../paths/scrollTargets";

function Home(props) {
  return (
    <>
      <div name={HOME_HEADER}>
        <HomeHeader />
      </div>
      <div>
        <HomeThreeColumns />
      </div>
      <div name={HOME_FOUR_STEPS}>
        <HomeFourSteps />
      </div>
      <div name={HOME_ABOUT_US}>
        <HomeAboutUs />
      </div>
      <div name={HOME_INSTITUTIONS}>
        <HomeWhoWeHelp />
      </div>
      <div name={HOME_CONTACT}>
        <HomeContactUs />
      </div>
      <div>
        <HomeFooter />
      </div>
    </>
  );
}

export default Home;
