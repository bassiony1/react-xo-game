import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import GameContext from '../GameContext'

const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    & > * {
        flex: 1;
    }
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: var(--primary-300);
        border-radius: 20px;
        padding: 10px;
        p{
            text-align: center;
        }
        span{
            font-size: 25px;
            font-weight: bold;
        }
        &.player1 {
            background-color: var(--secondary-100);
        }
        &.player2 {
            background-color: var(--accent-100);
        }
        &.draw {
            background-color: var(--neutral-200);
        }
    }

`
const GameStatus = () => {
    const {player1 , mode , draws , xWins , oWins} = useContext(GameContext)
  return (
    <Container>
        <div className="player1">
            <p>X {player1 === 'x' ? '(Player 1)' : (mode ==='cpu') ? "(CPU)" : "(Player 2)"} </p>
            <span>{xWins}</span>
            </div>
        <div className="draw">
            <p>Draw</p>
            <span>{draws}</span>
            </div>
        <div className="player2">
        <p>O {player1 === 'o' ? '(Player 1)' : (mode ==='cpu') ? "(CPU)" : "(Player 2)"} </p>
            <span>{oWins}</span>
            </div>
    </Container>
  )
}

export default GameStatus
