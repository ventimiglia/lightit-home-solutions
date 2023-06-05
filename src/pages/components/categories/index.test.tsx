import { render, fireEvent } from "@testing-library/react";
import Categories from "./";
import { ApiResponse } from "../../../services/@types";

const mockApiResponse: ApiResponse = {
  name: "Category 1",
  items: [
    {
      name: "Product 1",
      img: "image.jpg",
    },
  ],
};

describe("Categories", () => {
  it("renders the categories component", () => {
    const { container, getByText } = render(
      <Categories>
        <Categories.Title>Title</Categories.Title>
        <Categories.Category item={mockApiResponse} onClick={() => {}} />
      </Categories>
    );

    const titleElement = getByText("Title");
    expect(titleElement).toBeInTheDocument();

    const categoryNameElement = getByText(mockApiResponse.name);
    expect(categoryNameElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("calls onClick event handlers when Category is selected", () => {
    const categoryHandler = jest.fn();

    const { getByText } = render(
      <Categories>
        <Categories.Category item={mockApiResponse} onClick={categoryHandler} />
      </Categories>
    );

    const category = getByText(mockApiResponse.name);
    fireEvent.click(category);

    expect(categoryHandler).toHaveBeenCalledTimes(1);
  });
});
