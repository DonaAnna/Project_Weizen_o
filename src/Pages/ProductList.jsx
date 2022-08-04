import styled from 'styled-components';
import React from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
const Container = styled.div``;

const Title = styled.h1`
margin:20px;
`;

const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
`;

const Filter = styled.div`
margin:20px;
`;

const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;

`;

const Select = styled.select`
padding:10px;
margin-right:20px;
`;
const Option = styled.option``;

export const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Wheat Grains</Title>
        <FilterContainer>
          <Filter><FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              States
            </Option>
            <Option>Maharashtra</Option>
            <Option>Gujarat</Option>
            <Option>Bihar</Option>
            <Option>Andhra Pradesh</Option>
            <Option>Uttar Pradesh</Option>
            <Option>Maharashtra</Option>
          </Select>

          <Select>
            <Option disabled selected>
              Wheat Type
            </Option>
            <Option>Emmer Wheat</Option>
            <Option>Red Winter Wheat</Option>
            <Option>Black Wheat</Option>
            <Option>Milling Wheat</Option>
            <Option>Lokwan Wheat</Option>
            <Option>White Winter Wheat</Option>
          </Select>

          </Filter>
          <Filter><FilterText>Sort Products:</FilterText>
          <Select>
            <Option>Price(asc)</Option>
            <Option>Price(desc)</Option>
          </Select>
          </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
