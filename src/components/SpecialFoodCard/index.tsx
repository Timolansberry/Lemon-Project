import { FC, HTMLAttributes } from "react";
import { CardWrapper, FoodImage, CardHeader, CardBody, OrderSection } from "./styles";
import deliveryIcon from "../../assets/deliveryIcon.svg";

interface SpecialFoodCardProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
};

const SpecialFoodCard: FC<SpecialFoodCardProps> = ({ imageUrl, title, price, description, ...props }): JSX.Element => {
  return (
    <CardWrapper {...props}>
      <FoodImage src={imageUrl} />
      <CardHeader>
        <span className="card-title">{title}</span>
        <span className="price highlight">$ {price}</span>
      </CardHeader>
      <CardBody>{description}</CardBody>
      <OrderSection>
        <button className="highlight">Order a delivery</button>
        <img src={deliveryIcon} alt="Delivery" />
      </OrderSection>
    </CardWrapper>
  );
};

export default SpecialFoodCard;
