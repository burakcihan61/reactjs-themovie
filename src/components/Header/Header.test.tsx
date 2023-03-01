import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the Header component', () => {
    render(<Header />);

    const logoElement = screen.getByTestId('logo-1');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('alt', 'logo');

    const girisYapElement = screen.getByTestId('giris-yap');
    expect(girisYapElement).toBeInTheDocument();
    expect(girisYapElement).toHaveTextContent('Giriş Yap');

    const uyeOlElement = screen.getByTestId('üye-ol');
    expect(uyeOlElement).toBeInTheDocument();
    expect(uyeOlElement).toHaveTextContent('Üye Ol');
  });
});
