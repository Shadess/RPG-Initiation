import { render, screen } from '@testing-library/react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import App from './App';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>);
  const linkElement = screen.getByText(/Welcome to RPG Initiation/i);
  expect(linkElement).toBeInTheDocument();
});
