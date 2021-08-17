import {
  render, fireEvent, cleanup, waitFor,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import ByNameItems from './ByName';
import { myStore } from '../redux/store/index';
import { fetchItemsbyName } from '../redux/actions/itemsActions';

const server = setupServer(
  rest.get('https://restcountries.eu/rest/v2', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      name: 'Ecuador',
      topLevelDomain: [
        '.ec',
      ],
      alpha2Code: 'EC',
      alpha3Code: 'ECU',
      callingCodes: [
        '593',
      ],
      capital: 'Quito',
      altSpellings: [
        'EC',
        'Republic of Ecuador',
        'República del Ecuador',
      ],
      region: 'Americas',
      subregion: 'South America',
      population: 16545799,
      latlng: [
        -2.0,
        -77.5,
      ],
      demonym: 'Ecuadorean',
      area: 276841.0,
      gini: 49.3,
      timezones: [
        'UTC-06:00',
        'UTC-05:00',
      ],
      borders: [
        'COL',
        'PER',
      ],
      nativeName: 'Ecuador',
      numericCode: '218',
      currencies: [
        {
          code: 'USD',
          name: 'United States dollar',
          symbol: '$',
        },
      ],
      languages: [
        {
          iso639_1: 'es',
          iso639_2: 'spa',
          name: 'Spanish',
          nativeName: 'Español',
        },
      ],
      translations: {
        de: 'Ecuador',
        es: 'Ecuador',
        fr: 'Équateur',
        ja: 'エクアドル',
        it: 'Ecuador',
        br: 'Equador',
        pt: 'Equador',
        nl: 'Ecuador',
        hr: 'Ekvador',
        fa: 'اکوادور',
      },
      flag: 'https://restcountries.eu/data/ecu.svg',
      regionalBlocs: [
        {
          acronym: 'USAN',
          name: 'Union of South American Nations',
          otherAcronyms: [
            'UNASUR',
            'UNASUL',
            'UZAN',
          ],
          otherNames: [
            'Unión de Naciones Suramericanas',
            'União de Nações Sul-Americanas',
            'Unie van Zuid-Amerikaanse Naties',
            'South American Union',
          ],
        },
      ],
      cioc: 'ECU',
    }),
  )),
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

afterEach(cleanup);

test('test the title render from search byBame', () => {
  const { queryAllByText } = render(
    <Provider store={myStore}>
      <ByNameItems />
    </Provider>,
  );
  const input = queryAllByText('Search by name of the country');
  expect(input).toBeTruthy();
});

test('test the input render from form to search byBame', () => {
  const { queryByPlaceholderText } = render(
    <Provider store={myStore}>
      <ByNameItems />
    </Provider>,
  );
  const input = queryByPlaceholderText('united');
  expect(input).toBeTruthy();
});

test('test the button render from form to search byBame', () => {
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

test('when the user fetch for a country by name', async () => {
  const byName = await waitFor((ecuador) => fetchItemsbyName(ecuador));
  expect(byName.response).toBeUndefined();
  expect(typeof byName).toBe('function');
});
