import { render, unmountComponentAtNode } from 'react-dom';

import Field from './Field';

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

it('Field renders with correct props', () => {
    render(
        <Field
            labelFor="name"
            labelText="Name"
            type="text"
            inputName="name"
            value=""
            onChange={() => {}}
        />,
        container
    );

    expect(container.querySelector('label').textContent).toBe('Name');
    expect(container.querySelector('input').value).toBe('');
    expect(container.querySelector('input').type).toBe('text');
    expect(container.querySelector('input').name).toBe('name');
});
