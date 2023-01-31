import React from 'react'
import { useContext } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import GameContext from '../GameContext'
import { Link } from "react-router-dom"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
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
    div.top {
        width: 100%;
        display: flex;
        justify-content: center;
        svg {
            width: 100px;
        }
    }
    div.mid{
        width: 100%;
        background-color: var(--primary-100);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        border-radius: 10px;
        padding: 1rem;
        box-shadow: 0px 5px 0 0 var(--primary-300);
        h2{
            color: var(--neutral-200);
            letter-spacing: 1.5px;
        }
        small{
            color: var(--neutral-300);
            font-size: 15px;
            letter-spacing: 2px;
        }
        div{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: .5rem;
            border-radius: 10px;
            gap: 5px;
            background-color: var(--primary-200);
            div{
                width: 50%;
                cursor: pointer;
                padding-block: 1rem;
                transition: .5s ease-in-out;
            }
            div:hover{
                background-color: var(--primary-100);
            }
            div.active{
                background-color: var(--neutral-200);
                svg{
                    fill: var(--primary-200);
                }
            }
            svg{
                width: 35px;
                fill: var(--neutral-200);
                pointer-events: none;
            }
        }

    }
    div.bottom{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        button{
            width: 100%;
            border-radius: 10px;
            padding: 1rem;

        }
        button.cpu{
            background-color: var(--accent-200);
            box-shadow: 0px 5px 0 0 var(--accent-300);
            &:hover{
                background-color: var(--accent-100);
            }
        }
        button.player{
            background-color: var(--secondary-200);
            box-shadow: 0px 5px 0 0 var(--secondary-300);
            &:hover{
                background-color: var(--secondary-100);
            }

        }
    }
`
const Home = () => {
    const XRef = useRef(null)
    const ORef = useRef(null)
    
    const {setMode , setPlayer1, setPlayer2} = useContext(GameContext)
    const handleClick = (e)=>{
        if (e.target === XRef.current) {
            XRef.current.classList.contains('active')||XRef.current.classList.add('active')
            ORef.current.classList.contains('active')&&ORef.current.classList.remove('active')
            setPlayer1('x')
            setPlayer2('o')
        }else{
            ORef.current.classList.contains('active')||ORef.current.classList.add('active')
            XRef.current.classList.contains('active')&&XRef.current.classList.remove('active')
            setPlayer1('o')
            setPlayer2('x')
        }
    }
  return (
    <Container>
        <div className='top'>
            <svg id="logo" viewBox="0 0 72 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M8.562 1.634 16 9.073l7.438-7.439a3 3 0 0 1 4.243 0l2.685 2.685a3 3 0 0 1 0 4.243L22.927 16l7.439 7.438a3 3 0 0 1 0 4.243l-2.685 2.685a3 3 0 0 1-4.243 0L16 22.927l-7.438 7.439a3 3 0 0 1-4.243 0L1.634 27.68a3 3 0 0 1 0-4.243L9.073 16 1.634 8.562a3 3 0 0 1 0-4.243L4.32 1.634a3 3 0 0 1 4.243 0Z" fill="#31C3BD"/><path d="M56.1 0c8.765 0 15.87 7.106 15.87 15.87 0 8.766-7.105 15.871-15.87 15.871-8.765 0-15.87-7.105-15.87-15.87C40.23 7.106 47.334 0 56.1 0Zm0 9.405a6.466 6.466 0 1 0 0 12.931 6.466 6.466 0 0 0 0-12.931Z" fill="#F2B137" fillRule="nonzero"/></g></svg>
        </div>
        <div className="mid">
            <h2>PICK PLAYER 1'S MARK</h2>
                <div  >
                <div ref={ORef} onClick={(e)=>handleClick(e)} className='active'>
                    <svg id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>
                </div>
                <div ref={XRef} onClick={(e)=>handleClick(e)}>
                    <svg id="icon-x-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fillRule="evenodd"/></svg>
                </div>
            </div>
            <small>REMEMBER:X GOES FIRST</small>
        </div>
        <div className="bottom">
            <button className='cpu' onClick={()=>setMode('cpu')} ><Link to='/game'>NEW GAME (VS CPU)</Link> </button>
            <button className='player' onClick={()=>setMode('player')}><Link to='/game'>NEW GAME (VS PLAYER)</Link> </button>
        </div>
    </Container>
  )
}




export default Home



