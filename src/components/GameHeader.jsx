import React from 'react'
import { useContext } from 'react';
import styled from 'styled-components';
import GameContext from '../GameContext';

const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
   
    #logo {
        width: 80px;
        
    }
    div.mid{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--primary-100);
        padding: 1rem;
        gap: 10px;
        border-radius: 10px;
        box-shadow: 0 10px 0 0 var(--primary-300);
        p{
            font-size: 18px;
            text-transform: uppercase;
            font-weight: bold;
            color: var(--neutral-200);
            text-align: center;
            flex: 1;
        }
        div.icon-group{
            flex: 1;
            display: flex;
            justify-content: center;
            position: relative;

            svg{
                width: 20px;
                fill: var(--neutral-200);
                animation: appear 1s ease forwards;
               &.active {
                display: none;
               }
            }
            @keyframes appear {
             from{
                scale: 0;
             }   
             to{
                scale: 1;
             }
            }
            
        }
     

    }
    .restart{
        background-color: var(--neutral-200);
        box-shadow: 0 5px 0 0 var(--neutral-300);
        padding: 1rem;
        border-radius: 10px;
        cursor: pointer;
        transition: .4s ease-in-out;
        #icon-restart{
            width: 30px;
        }
        &:hover{
            background-color: var(--neutral-100);
        }
    }
`
const GameHeader = () => {
const {player , setClear ,
        setXMoves,
        setPlayer,
        setOMoves , setWinningCombination, XMoves, OMoves , setWinner} = useContext(GameContext)
const handleClick =()=>{
    if (XMoves.length > 0 || OMoves.length > 0) {
        setClear(true); 
        setXMoves([]);
        setOMoves([]);
        setWinner('');
        setPlayer('x');
        setWinningCombination([]);
    }
    
}
  return (
    <Container>
    <svg id="logo" viewBox="0 0 72 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M8.562 1.634 16 9.073l7.438-7.439a3 3 0 0 1 4.243 0l2.685 2.685a3 3 0 0 1 0 4.243L22.927 16l7.439 7.438a3 3 0 0 1 0 4.243l-2.685 2.685a3 3 0 0 1-4.243 0L16 22.927l-7.438 7.439a3 3 0 0 1-4.243 0L1.634 27.68a3 3 0 0 1 0-4.243L9.073 16 1.634 8.562a3 3 0 0 1 0-4.243L4.32 1.634a3 3 0 0 1 4.243 0Z" fill="#31C3BD"/><path d="M56.1 0c8.765 0 15.87 7.106 15.87 15.87 0 8.766-7.105 15.871-15.87 15.871-8.765 0-15.87-7.105-15.87-15.87C40.23 7.106 47.334 0 56.1 0Zm0 9.405a6.466 6.466 0 1 0 0 12.931 6.466 6.466 0 0 0 0-12.931Z" fill="#F2B137" fillRule="nonzero"/></g></svg>
<div className="mid">
    <div className="icon-group ">
         <svg id="icon-x-default" className={player !=='x' ? 'active':''} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fillRule="evenodd"/></svg>
          <svg id="icon-o-default" className={player === 'x' ? 'active':''} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>
</div>
    <p>Turn</p>
</div>
<div className="restart" onClick={handleClick}>
 <svg id="icon-restart" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.524 0h-1.88a.476.476 0 0 0-.476.499l.159 3.284A9.81 9.81 0 0 0 9.835.317C4.415.317-.004 4.743 0 10.167.004 15.597 4.406 20 9.835 20a9.796 9.796 0 0 0 6.59-2.536.476.476 0 0 0 .019-.692l-1.348-1.349a.476.476 0 0 0-.65-.022 6.976 6.976 0 0 1-9.85-.63 6.987 6.987 0 0 1 .63-9.857 6.976 6.976 0 0 1 10.403 1.348l-4.027-.193a.476.476 0 0 0-.498.476v1.881c0 .263.213.476.476.476h7.944A.476.476 0 0 0 20 8.426V.476A.476.476 0 0 0 19.524 0Z" fill="#1F3641"/></svg>

</div>
</Container>
  )
}

export default GameHeader
