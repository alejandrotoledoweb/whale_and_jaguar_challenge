import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import ByNameItems from './ByName';
import { myStore } from '../redux/store/index';

test('renders learn byName title of form', () => {
  render(
    <Provider store={myStore}>
      <ByNameItems />
    </Provider>,
  );
  const titleElement = screen.getByText(/Search by name of the country/i);
  expect(titleElement).toBeInTheDocument();
});

it('test the input render from form to search byBame', () => {
  const { queryByPlaceholderText } = render(
    <Provider store={myStore}>
      <ByNameItems />
    </Provider>,
  );
  const input = queryByPlaceholderText('united');
  expect(input).toBeInTheDocument();
});
