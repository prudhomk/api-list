import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
    it('renders Character', () => {
        const { asFragment } = render(
            <Character
            name="Booger"
            species="Snot"
            phrase="Ooga Booga"
            skill="Picking Nose"
            personality="Snotty"
            image="https://image.com/image.jpeg"
            />
        );
    });
});