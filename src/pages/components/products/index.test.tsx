import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Products from "./";

const queryClient = new QueryClient();

describe("Products", () => {
  it("displays sidebar categories", () => {
    const { container, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>
    );

    const openingCategory = getByText("aberturas");
    const equipmentCategory = getByText("equipamiento");
    const finishesCategory = getByText("terminaciones");

    expect(openingCategory).toBeInTheDocument();
    expect(equipmentCategory).toBeInTheDocument();
    expect(finishesCategory).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
