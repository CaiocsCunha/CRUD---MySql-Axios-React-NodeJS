import React from 'react'
import { toast } from 'react-toastify'
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
  cursor: pointer;

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
  const carrinho = []
  function handleClick(e) {
    e.preventDefault()
    let itemCarrinho = {
      id: undefined,
      nome: undefined,
      quantidade: undefined
    }
    let itemSelecionado = products.filter(item => item.id == e.target.id)[0]
    const found = carrinho.find(element => element.id == itemSelecionado.id)

    if (found) {
      let indexUpdate = carrinho.findIndex(item => item.id == found.id)
      carrinho[indexUpdate].quantidade += 1
    } else {
      itemCarrinho.id = itemSelecionado.id
      itemCarrinho.nome = itemSelecionado.nome
      if (itemCarrinho.quantidade == undefined) itemCarrinho.quantidade = 1
      else itemCarrinho.quantidade += 1

      carrinho.push(itemCarrinho)
    }
    toast.success('Adicionado ao carrinho!')
  }

  return (
    <Container>
      <h2>PRODUTOS</h2>
      <GridContainer>
        {products.map(item => (
          <ItemContainer onClick={handleClick} key={item.id} id={item.id}>
            <div>{item.nome}</div>
            <div>R$ {item.preco}</div>
          </ItemContainer>
        ))}
      </GridContainer>
    </Container>
  )
}

export default ProductGrid
