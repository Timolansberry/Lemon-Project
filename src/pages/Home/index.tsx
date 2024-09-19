import { FC } from "react";
import { StyledWrapper } from "./styles";
import HeaderSection from "../../components/Header";
import FooterSection from "../../components/Footer";
import CallToActionBanner from "../../components/CallToAction";
import MenuHighlights from "../../components/Specials";
import CustomerFeedback from "../../components/CustomersSay";
import AboutChicago from "../../components/Chicago";

const HomePage: FC = (): JSX.Element => {
  return (
    <StyledWrapper>
      <HeaderSection />
      <CallToActionBanner />
      <MenuHighlights />
      <CustomerFeedback />
      <AboutChicago />
      <FooterSection />
    </StyledWrapper>
  );
};

export default HomePage;
