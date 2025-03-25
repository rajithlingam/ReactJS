import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedResCard } from "../RestaurantCard";

const mockResData = {
  info: {
    cloudinaryImageId: "sample-image-id",
    name: "Test Restaurant",
    cuisines: ["Indian", "Chinese"],
    avgRating: 4.5,
  },
};

const mockPromotedResData = {
  info: {
    cloudinaryImageId: "sample-image-id",
    name: "Test Promoted Restaurant",
    cuisines: ["Mexican", "Italian"],
    avgRating: 4.8,
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "on orders above ₹199",
    },
  },
};

describe("RestaurantCard Component", () => {
  test("renders restaurant name correctly", () => {
    render(<RestaurantCard resData={mockResData} />);
    expect(screen.getByText("Test Restaurant")).toBeInTheDocument();
  });

  test("renders cuisines correctly", () => {
    render(<RestaurantCard resData={mockResData} />);
    expect(screen.getByText("Indian, Chinese")).toBeInTheDocument();
  });

  test("renders rating correctly", () => {
    render(<RestaurantCard resData={mockResData} />);
    expect(screen.getByText("Rating 4.5 ✨")).toBeInTheDocument();
  });

  test("renders image correctly", () => {
    render(<RestaurantCard resData={mockResData} />);
    const imgElement = screen.getByAltText("restaurant-logo");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.src).toContain("sample-image-id");
  });
});

describe("withPromotedResCard HOC", () => {
  test("renders promoted label correctly", () => {
    const PromotedResCard = withPromotedResCard(RestaurantCard);
    render(<PromotedResCard resData={mockPromotedResData} />);

    expect(screen.getByText("50% OFF on orders above ₹199")).toBeInTheDocument();
    expect(screen.getByText("Test Promoted Restaurant")).toBeInTheDocument();
  });
});
