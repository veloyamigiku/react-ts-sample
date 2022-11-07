import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('ページ（ホーム）のルーティングのテスト', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('sample1')).toBeInTheDocument();
  expect(screen.getByText('sample2')).toBeInTheDocument();
});

test('ページ（サンプル1）のルーティングのテスト', () => {
  render(
    <MemoryRouter initialEntries={['/sample1']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('sample1')).toBeInTheDocument();
});

test('ページ（サンプル2）のルーティングのテスト', () => {
  render(
    <MemoryRouter initialEntries={['/sample2']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('sample2')).toBeInTheDocument();
});
