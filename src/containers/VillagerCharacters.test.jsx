import React from 'react';
import { render, screen } from '@testing-library/react';
import VillagerCharacters from './VillagerCharacters';

describe('VillagerCharacter container', () => {
  it('displays a list of characters', async () => {
    render(<VillagerCharacters />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });
});
