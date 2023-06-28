import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ShowAll from '../components/HomePage';
import store from '../store';

describe('Component render testing', () => {
    it('Home Page perfectly', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <ShowAll />
            </Provider>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});