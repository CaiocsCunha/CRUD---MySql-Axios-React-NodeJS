import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
const ItemContainer = styled.div`
  width: 25%;
  height: 100px;
  background-color: #3498db;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`

const GridContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const ProductGrid = ({ products }) => {
  return (
    <Container>
      <h2>PRODUTOS</h2>
      <GridContainer>
        {products.map((item, i) => (
          <ItemContainer key={i}>
            <div>{item.nome}</div>
            <div>R$ {item.preco}</div>
          </ItemContainer>
        ))}
      </GridContainer>
    </Container>
  )
}

export default ProductGrid
