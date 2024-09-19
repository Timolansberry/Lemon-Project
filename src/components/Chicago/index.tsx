import { FC } from "react";
import { Container, Content, Image } from "./styles";
import Mario_and_Adrian_A from "../../assets/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_B from "../../assets/Mario_and_Adrian_B.jpg";

const Chicago: FC = (): JSX.Element => {
  return (
    <Container id="about">
      <Content>
        <h1>Little Lemon</h1>
        <h2>Los Angeles</h2>
        <p className="lead-txt">
          Little Lemon is owned by two Germans, Stephan and Karl, who moved to the United States to pursue their shared dream of owning a restaurant.
        </p>
        <p className="lead-txt">
          To craft the menu, Mario relies on family recipes and his experience as a chef.They do all the marketing for the restaurant and led the effort to expand the menu beyond classic to incorporate additional cuisines from the Mediterranean region.
        </p>
      </Content>
      <Image>
        <img src={Mario_and_Adrian_A} alt="Stephan and Karl" />
        <img src={Mario_and_Adrian_B} alt="Stephan and Karl" />
      </Image>
    </Container>
  );
};

export default Chicago;