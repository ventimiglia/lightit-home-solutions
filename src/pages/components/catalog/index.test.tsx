import { render, fireEvent } from '@testing-library/react';
import Catalog from './';

const props = {
  title: 'Title',
  breadcrumb: 'Breadcrumb',
  onClick: () => {},
  src: 'image.jpg',
  name: 'Product Name',
}

describe('Catalog', () => {
  it('renders the catalog component', () => {
    const { container, getByText, getByAltText } = render(
      <Catalog>
        <Catalog.Title>{props.title}</Catalog.Title>
        <Catalog.Breadcrumb onClick={props.onClick}>{props.breadcrumb}</Catalog.Breadcrumb>
        <Catalog.Product src={props.src} name={props.name} />
      </Catalog>
    );

    const titleElement = getByText(props.title);
    expect(titleElement).toBeInTheDocument();

    const breadcrumbElement = getByText(props.breadcrumb);
    expect(breadcrumbElement).toBeInTheDocument();


    const productElement = getByText(props.name);
    expect(productElement).toBeInTheDocument();
    const imageElement = getByAltText(props.name);
    expect(imageElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("calls onClick event handlers when Breadcrumb are clicked", () => {
    const breadcrumbClickHandler = jest.fn();

    const {getByText} = render(
      <Catalog>
        <Catalog.Breadcrumb onClick={breadcrumbClickHandler}>{props.breadcrumb}</Catalog.Breadcrumb>
      </Catalog>
    );

    const breadcrumb = getByText(props.breadcrumb);
    fireEvent.click(breadcrumb);

    expect(breadcrumbClickHandler).toHaveBeenCalledTimes(1);
  });
});
