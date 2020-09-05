import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

describe('DefaultLayout', () => {
  it('render children properly inside of component', () => {
    const expectedChildren = <div>Expected Content</div>;
    render(<Layout>{expectedChildren}</Layout>);

    expect(screen.getByText('Expected Content')).toBeTruthy();
  });
});
