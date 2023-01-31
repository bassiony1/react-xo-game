import React, { useContext }  from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled, { css } from 'styled-components'
import GameContext from '../GameContext'

const Cube = styled.div`
    width: 100%;
    background-color: var(--primary-100);
    box-shadow: 0 10px 0 0 var(--primary-300);
    aspect-ratio: 1;
    border-radius: 15px;
    transition: all 1s ease;
    &.xwin {
        background-image: url('images/svg/icon-x-win.svg');
        background-color: var(--secondary-200);
    }
    &.owin{
        background-image: url('images/svg/icon-o-win.svg');
        background-color: var(--accent-200);
    }
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50%;
    position: relative;
    cursor: not-allowed;
    ${({active})=>{
        if(active){
            return css`
                &{
                    cursor: pointer;
                }
                &:hover::before{
                    content: '';
                    position: absolute;
                    inset: 2rem;
                    ${({player})=>{
                        if (player==='x') {
                        return css`
                        background-image: url('images/svg/icon-x-outline.svg');
                        `
                        }else if (player === 'o'){
                            return css`
                            background-image: url('images/svg/icon-o-outline.svg');   
                        `
                        }
            
                    }
                }
                    
                }
            `
        }
       }
}
`
const BoardCube = ({position}) => {
const [active , setActive] = useState(true)
const {
    player , 
    setPlayer : changePlayer,
    clear ,
    setClear:clearBoard,
    XMoves,
    setXMoves,
    OMoves,
    setOMoves,
    CheckWin,
    CheckDraw,
    setWinner,
    winningCombination,
    winner,
    setXWins ,
    setOWins ,
    setDraws,
    setDraw,
    setModalOpen,
    possibleMoves , 
    setPossibleMoves,
    mode,
    player2,
    loading , 
    setLoading,
} = useContext(GameContext)

const cubeRef = useRef(null)

const handleClick = (e)=>{
    if (loading) {
        return
    }
    setPossibleMoves((pre)=> pre.filter(m=> m!== position))
    if (active) {
        if (player === 'x') {
            e.target.style.backgroundImage = "url('images/svg/icon-x.svg')"
            const newXMoves =[...XMoves , position]
            setXMoves(newXMoves)
            if (CheckWin(newXMoves)) {
                setXWins(pre => pre +1)
                setWinner('x')
                setModalOpen(true)

            }else if(CheckDraw([...newXMoves , ...OMoves])){
                    setDraws(pre=>pre+1)
                    setDraw(true)
                    setModalOpen(true)

                }
                changePlayer('o')

            }else {
                e.target.style.backgroundImage = "url('images/svg/icon-o.svg')"
                const newOMoves =[...OMoves , position]
                setOMoves(newOMoves)
                if (CheckWin(newOMoves)) {
                    setOWins(pre => pre +1)
                    
                    
                    setWinner('o')
                    setModalOpen(true)

                }else if (CheckDraw([...newOMoves , ...XMoves])){
                    setDraw(true)
                    setDraws(pre=>pre+1)
                    setModalOpen(true)
                }
                changePlayer('x')
            }
            setActive(false)
        }
    }
useEffect(()=>{
    setActive(true)
    cubeRef.current.style.backgroundImage = '';
    clearBoard(false)
    cubeRef.current.classList.contains('xwin') && cubeRef.current.classList.remove('xwin')
    cubeRef.current.classList.contains('owin') && cubeRef.current.classList.remove('owin')
    // eslint-disable-next-line
}, [clear])
useEffect(()=>{
    if (winningCombination.includes(position)) {
        if (winner==='x') {
            cubeRef.current.style.backgroundImage = '';
            cubeRef.current.classList.add('xwin')
            
        }else if(winner==='o'){
            cubeRef.current.style.backgroundImage = '';
            cubeRef.current.classList.add('owin')
        }
    }

        // eslint-disable-next-line
},[winningCombination])
useEffect(()=>{
    if (mode==='cpu' && player2==='x' && player==='x' && winner==='') {
        setLoading(true)
       let movesNum = possibleMoves.length
       if(possibleMoves[Math.ceil(Math.random())%movesNum]=== position){
            setTimeout(()=>{
                setLoading(false);
                setTimeout(()=>cubeRef.current.click(),0)
            },2000)
       }; 
    }
    if (mode==='cpu' && player2==='o' && player==='o' && winner==='') {
        setLoading(true)
       let movesNum = possibleMoves.length
       if(possibleMoves[Math.ceil(Math.random())%movesNum]=== position){
            setTimeout(()=>{
                setLoading(false);
                setTimeout(()=>cubeRef.current.click(),0)
                
            },2000)
       }; 
    }
    // eslint-disable-next-line
},[possibleMoves])
  return (
      <>

      <Cube ref={cubeRef} clear={clear} active={active} player={player} onClick={(e)=>handleClick(e)}></Cube>
      </>
  )
}

export default BoardCube

