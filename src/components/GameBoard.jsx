import styled from 'styled-components'
import BoardCube from './BoardCube'

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    grid-template-rows: repeat(3 , 1fr);
    gap: 1rem;
   transition : 1s ease;
   

`

const GameBoard = () => {
  return (
    <Container>
        <BoardCube position={1}/>
        <BoardCube position={2}/>
        <BoardCube position={3}/>
        <BoardCube position={4}/>
        <BoardCube position={5}/>
        <BoardCube position={6}/>
        <BoardCube position={7}/>
        <BoardCube position={8}/>
        <BoardCube position={9}/>
    </Container>
  )
}

export default GameBoard
