import { render, unmountComponentAtNode } from 'react-dom';

import SignUp from './SignUp';

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

it('Should render correct title', () => {
    render(<SignUp notify={() => {}} />, container);

    expect(container.querySelector('h1').textContent).toBe('Sign Up');
});

it('Should render correct first subtitle', () => {
    render(<SignUp notify={() => {}} />, container);

    expect(container.querySelector('h3').textContent).toBe('1 Your basic info');
});

it('Should render correct second subtitle', () => {
    render(<SignUp notify={() => {}} />, container);

    expect(container.querySelectorAll('h3')[1].textContent).toBe(
        '2 Your profile'
    );
});

it('Should render correct button', () => {
    render(<SignUp notify={() => {}} />, container);

    expect(container.querySelector('button').textContent).toBe('Sign Up');
});
