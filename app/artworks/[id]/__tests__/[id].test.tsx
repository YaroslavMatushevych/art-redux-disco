
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../store';
import ArtworkDetail from '../[id]';

// Mocking the Redux dispatch function and Next.js useRouter
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn()
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { id: '1' }
  })
}));

describe('Artwork Detail Page', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <ArtworkDetail />
      </Provider>
    );
    // This test checks if the component can be rendered. More specific tests can be added.
  });
});

