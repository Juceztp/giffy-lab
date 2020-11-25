import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { CategoryAdd } from '../../components/CategoryAdd';

describe('Prueba del componente CategoryAdd', () => {
   
    const setCategories = jest.fn();
    let wrapper = shallow(<CategoryAdd setCategories={ setCategories }/>)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<CategoryAdd setCategories={ setCategories }/>);
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value }});
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe llamar al setCategories al momento de hacer submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('Debe de llamar al setCategories y limpiar la caja de texto', () => {
        wrapper.find('input').simulate('change', { target: { value: 'Hola mundo' } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith(expect.any(Function));
        expect( wrapper.find('input').prop('value') ).toBe('');
    })
    

});
