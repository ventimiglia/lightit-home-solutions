import { render } from "@testing-library/react";
import Navigation from "./";

describe("Navigation", () => {
  test("renders buttons with correct labels", () => {
    const { container, getByText, getByAltText } = render(
    <Navigation>
      <Navigation.Buttons />
      <Navigation.Controllers />
    </Navigation>);

    const fijarButton = getByText("Fijar");
    const borrarButton = getByText("Borrar");
    const aumentarButton = getByAltText("plus");
    const disminuirButton = getByAltText("less");
    const arribaButton = getByAltText("up");
    const abajoButton = getByAltText("down");
    const izquierdaButton = getByAltText("left");
    const derechaButton = getByAltText("right");

    expect(fijarButton).toBeInTheDocument();
    expect(borrarButton).toBeInTheDocument();
    expect(aumentarButton).toBeInTheDocument();
    expect(disminuirButton).toBeInTheDocument();
    expect(arribaButton).toBeInTheDocument();
    expect(abajoButton).toBeInTheDocument();
    expect(izquierdaButton).toBeInTheDocument();
    expect(derechaButton).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
