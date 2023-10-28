import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"; 
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
    render(
        <RestaurantCard resData={MOCK_DATA}/>
    )
    const name = screen.getByText("₹300 for two");

    expect(name).toBeInTheDocument();
  });
