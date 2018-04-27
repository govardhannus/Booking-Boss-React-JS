import React from 'react';
import {shallow} from 'enzyme';
import {productList} from '../components/Products'
import product from '../data/productsData.json'

test('render',() => {
    const Wrapper = shallow(<productList product={product}/>);
        expect(Wrapper).toMatchSnapshot();
        });