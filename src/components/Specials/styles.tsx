import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Wrapper = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 65%;
  min-height: 72rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.5rem;

  @media (max-width: 1120px) {
    width: 88%;
  };
`;

export const HeaderSection = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.2rem;

  > button {
    width: 21rem;
  };

  @media (max-width: 840px) {
    flex-direction: column;

    h1 {
      text-align: center;
    };
  };
`;

export const FoodCards = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4.5rem;

  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
  };
`;
