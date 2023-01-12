import { render, unmountComponentAtNode } from 'react-dom';

import ErrorField from './ErrorField';

let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('ErrorField renders with correct props', () => {
    render(<ErrorField errorMessage="Error message." />, container);

    expect(container.querySelector('p').textContent).toBe('Error message.');
});
