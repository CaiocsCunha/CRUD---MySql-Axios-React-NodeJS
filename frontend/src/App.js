import GlobalStyle from './styles/global'
import styled from 'styled-components'
import Form from './components/Form.js'
import Grid from './components/Grid.js'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import ProductGrid from './components/ProductGrid'

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
const Title = styled.h2``

function App() {
  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8800')
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
    } catch (error) {
      toast.error(error)
    }
  }

  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:8800/produtos')
      setProducts(res.data)
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [setUsers])

  useEffect(() => {
    getProducts()
  }, [setProducts])

  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form getUsers={getUsers} onEdit={onEdit} setOnEdit={setOnEdit} />
        <Grid setUsers={setUsers} setOnEdit={setOnEdit} users={users} />
        <ProductGrid products={products} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  )
}

export default App
