import { render, unmountComponentAtNode } from 'react-dom';

import Modal from './Modal';

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

it('Modal renders with correct props', () => {
    render(<Modal msg="Successfully create account" />, container);

    expect(container.querySelector('p').textContent).toBe(
        'Successfully create account'
    );
});
