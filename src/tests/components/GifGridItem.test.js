import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Prueba del componente GifGridItem', () => {

    const gif = {
        title: 'naruto shippuden GIF',
        url: 'https://media3.giphy.com/media/4gsjHZMPXdlGo/giphy.gif?cid=334fdb12wgy0f90xni318my9wi58q34pggrthsczwekvl0si&amp;rid=giphy.gif'
    };
    let wrapper = shallow( <GifGridItem {...gif} /> );

    beforeEach(() => {
        wrapper = shallow( <GifGridItem {...gif} /> );
    });

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(gif.title);
    });

    test('Debe de tener la imagen igual a la url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(gif.url);
        expect(img.prop('alt')).toBe(gif.title);
    });
    
    test('Debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const classes = div.prop('className');
        expect(classes.includes('animate__fadeIn')).toBe(true);
    });
    
});