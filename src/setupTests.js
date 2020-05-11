// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Provider from './providers';

const customRender = (ui, options) => render(ui, { wrapper: Provider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
