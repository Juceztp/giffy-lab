import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Prueba del componente GifExpertApp', () => {

    let wrapper = shallow(<GifExpertApp />)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<GifExpertApp />);
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length);
    })
    

});
