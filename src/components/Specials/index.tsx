import { FC, HTMLAttributes } from "react";
import { Wrapper, HeaderSection, FoodCards } from "./styles";
import ActionButton from "../Button";
import FeaturedDishCard from "../SpecialFoodCard";
import greekSaladImg from "../../assets/greekSalad.jpg";
import bruchettaImg from "../../assets/bruchetta.svg";
import lemonDessertImg from "../../assets/lemonDessert.jpg";

const FeaturedMenu: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Wrapper {...props} id="featured-menu">
      <HeaderSection>
        <h1>Specials of the Week</h1>
        <ActionButton>Explore Full Menu</ActionButton>
      </HeaderSection>
      <FoodCards>
        <FeaturedDishCard
          imageUrl={greekSaladImg}
          title="Greek Salad"
          price={12.99}
          description="A refreshing Greek salad with crispy lettuce, peppers, olives, feta cheese, and crunchy croutons."
        />
        <FeaturedDishCard
          imageUrl={bruchettaImg}
          title="Bruschetta"
          price={7.99}
          description="Classic bruschetta with garlic-rubbed grilled bread, olive oil, and fresh tomatoes."
        />
        <FeaturedDishCard
          imageUrl={lemonDessertImg}
          title="Lemon Delight"
          price={6.99}
          description="A zesty lemon dessert made with authentic ingredients straight from grandma's recipe book."
        />
      </FoodCards>
    </Wrapper>
  );
};

export default FeaturedMenu;
