import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CityDetails from '../components/DitailPage';
import store from '../store';

describe('Component render testing', () => {
    it('Home Page perfectly', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <CityDetails />
            </Provider>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});