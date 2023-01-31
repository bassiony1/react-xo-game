import React, { useContext } from 'react'
import styled from 'styled-components'
import GameBoard from './GameBoard'
import GameHeader from './GameHeader'
import GameStatus from './GameStatus'
import { createPortal } from 'react-dom';
import GameContext from '../GameContext'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
    margin-inline: auto;
    width: min(100% , 500px);
    flex-direction: column;
    animation: appear 2s ease forwards;
    @keyframes appear {
        from{
            scale: 0;
        }
        to{
            scale :1;
        }
    }
`
const Game = () => {
    const {loading , modalOpen}= useContext(GameContext)
  return (
      <Container>
        {modalOpen && createPortal(<Modal/> , document.body)}
        <GameHeader />
        {loading && <Loading/>}
        <GameBoard />
        <GameStatus/>
      </Container>
  )
}

export default Game

const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width:100%;
    h2{
        font-weight: bold;
        font-size: 25px;
        color:var(--neutral-200);
        text-transform: uppercase;
        text-align: center;
    }
    img {
        width: 40px;
    }
    

`
const Loading = ()=>{
    return (
        <LoadingContainer>
            <h2>Cpu Is Thinking </h2>
            <img src="images/loading.gif" alt="Loader" />
        </LoadingContainer>
    )
}

const ModalContainer = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0 , 0,0 ,.4);
    display: flex;
    align-items: center;
    justify-content: center;
    div.container {
        min-height: 50vh;
        gap: 4rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--primary-200);
        justify-content: center;
        animation: appear 3s ease-in-out alternate ;
        @keyframes appear {
            from{
                opacity: 0;
            }
            to{
                opacity :1;
            }
        }
        .state {
            font-size: 25px;
            color: var(--neutral-300);
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 3px;
        }
        .states-group{
            font-size: 30px;
            display: flex;
            align-items: center;
            font-weight: bold;
            text-transform: uppercase;
            justify-content: center;
            gap: 1rem;
            color: var(--secondary-200);
            &.x {
                
                color: var(--secondary-200);
            }
            &.o {
                color: var(--accent-200);

            }
            &.o::before{
                content: '';
                width: 50px;
                aspect-ratio: 1;
                background-image: url('images/SVG/icon-o.svg');
            }
            &.x::before{
                content: '';
                width: 50px;
                aspect-ratio: 1;
                background-image: url('images/SVG/icon-x.svg');
            }
        }
        .btn-group {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            .btn {
                font-weight: bold;
                font-size: 18px;
                color : var(--primary-300);
                padding: 1rem;
                border-radius: 10px;
                &.round{
                    background-color  : var(--secondary-200) ;
                    box-shadow: 0 4px 0 0 var(--secondary-300);
                }
                &.exit{
                    background-color: var(--neutral-200);
                    box-shadow: 0 4px 0 0 var(--neutral-300);
                }
                &.round.x{
                    background-color  : var(--secondary-200) ;
                    box-shadow: 0 4px 0 0 var(--secondary-300);
                }
                &.round.o{
                    background-color  : var(--accent-200) ;
                    box-shadow: 0 4px 0 0 var(--accent-300);
                }
            }
        }

    }
`
const Modal = () => {


    const { setClear ,
        setXMoves,
        setPlayer,
        setOMoves , 
        setWinningCombination,
        setModalOpen,
        setWinner,
        winner,
        draw, 
        setDraw,
        setPossibleMoves,
} = useContext(GameContext)
const handleReset =()=>{
        setClear(true); 
        setXMoves([]);
        setOMoves([]);
        setWinner('');
        setPlayer('x');
        setWinningCombination([]);
        setModalOpen(false)
        setDraw(false)
        setPossibleMoves([1,2,3,4,5,6,7,8,9])
}
    return (
        <ModalContainer>
            <div className='container'>
                {draw===true ? <p className='state'>It's A Draw</p> : <p className='state'>{winner} Won</p>}
                {draw === true ? <p winner={winner} className='states-group'>No One Takes The Round</p> : <p winner={winner} className={winner==='x' ? 'states-group x' : 'states-group o'}>Takes The Round</p>}
                <div className="btn-group">
                    <button className="btn exit" onClick={()=>window.location.replace("/")}>QUIT</button>
                    {draw===true ? <button className='btn round' onClick={handleReset}>NEXT ROUND</button>:<button className={winner==='x' ? 'btn round x' : 'btn round o'} onClick={handleReset}>NEXT ROUND</button>}
                </div>
            </div>
        </ModalContainer>
    )
  }