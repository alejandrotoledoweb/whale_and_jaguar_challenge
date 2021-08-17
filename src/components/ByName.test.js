import {
  render, fireEvent, cleanup, waitFor,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import ByNameItems from './ByName';
import { myStore } from '../redux/store/index';

afterEach(cleanup);

it('test the title render from search byBame', () => {
  const { queryAllByText } = render(
    <Provider store={myStore}>
      <ByNameItems />
    </Provider>,
  );
  const input = queryAllByText('Search by name of the country');
  expect(input).toBeTruthy();
});

it('test the input render from form to search byBame', () => {
  const { queryByPlaceholderText } = render(
    <Provider store={myStore}>
      <ByNameItems />
    </Provider>,
  );
  const input = queryByPlaceholderText('united');
  expect(input).toBeTruthy();
});

it('test the button render from form to search byBame', () => {
  const { queryAllByTestId } = render(
    <Provider store={myStore}>
      <ByNameItems />
    </Provider>,
  );
  const button = queryAllByTestId('fetch-btn');
  expect(button).toBeTruthy();
});

test('when the user change the value of the input', async () => {
  const { queryByPlaceholderText } = render(
    <Provider store={myStore}>
      <ByNameItems />
    </Provider>,
  );
  const input = queryByPlaceholderText('united');
  act(() => {
    fireEvent.change(input, { target: { value: 'ecuador' } });
  });
  await waitFor(() => {
    expect(input.value).toBe('ecuador');
  });
});
