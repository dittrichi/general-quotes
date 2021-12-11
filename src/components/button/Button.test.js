import {render, screen} from '@testing-library/react';
import {Button} from './Button';

test('renders button with caption', () => {
    render(<Button>Gimme a quote!</Button>)
    
    const buttonEl = screen.getByText('Gimme a quote!');

    expect(buttonEl).toBeInTheDocument();
});