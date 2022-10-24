import {FC} from 'react'
import styled from "styled-components"

type HomeProps = {}

const Home: FC<HomeProps> = () => {
  return (
    <Container>Home</Container>
  )
}

const Container = styled.div`
    display: flex;
`

export default Home;
