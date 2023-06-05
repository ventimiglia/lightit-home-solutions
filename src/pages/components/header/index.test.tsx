import { render } from '@testing-library/react';
import Header from './';

describe('Header', () => {
  it('renders the header component', () => {
    const {container, getByAltText, getAllByRole} = render(<Header />);

    const logoElement = getByAltText('logo');
    expect(logoElement).toBeInTheDocument();

    const selectOptions = getAllByRole('option');
    expect(selectOptions).toHaveLength(3);
    expect(selectOptions[0]).toHaveTextContent('Guardar y Salir');
    expect(selectOptions[1]).toHaveTextContent('Salir Sin Guardar');
    expect(selectOptions[2]).toHaveTextContent('Guardar y Continuar');
    expect(container).toMatchSnapshot();
  });
});
