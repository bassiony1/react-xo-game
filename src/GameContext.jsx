import React, { useState } from "react";



const GameContext = React.createContext()


const WINNING_COMBINATIONS = [
    [1 , 2, 3],
    [4 , 5 , 6],
    [7 , 8 , 9],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [3 , 6 , 9],
    [1 , 5 , 9],
    [3 , 5 , 7]
]
export const GameContextProvider = ({children})=>{
    const [currentPlayer , setCurrentPlayer]= useState('x')
    const [winner , setWinner] = useState('')
    const [draw , setDraw] = useState(false)
    const [XMoves,setXMoves] = useState([])
    const [OMoves,setOMoves] = useState([])
    const [winningCombination , setWinningCombination]= useState([])
    const [clear , setClear] = useState(false)
    const [mode , setMode] = useState('cpu')
    const [player1 , setPlayer1] = useState('o')
    const [player2 , setPlayer2] = useState('x')
    const [oWins , setOWins] = useState(0)  
    const [xWins , setXWins] = useState(0)  
    const [draws , setDraws] = useState(0)
    const [modalOpen , setModalOpen] = useState(false)
    const [possibleMoves , setPossibleMoves] = useState([1,2,3,4,5,6,7,8,9])
    const [loading , setLoading] = useState(false)
    const CheckWin = (moves)=>{
       return WINNING_COMBINATIONS.some((comb)=>{
            let win = comb.every((el)=> moves.includes(el))
            if (win === true) {
                setWinningCombination(comb)
                return true
            }
            return false
        })
    }
    const CheckDraw = moves => moves.length === 9
    return <GameContext.Provider value={{
        player: currentPlayer,
        setPlayer: setCurrentPlayer,
        clear,
        setClear,
        XMoves,
        setXMoves,
        OMoves,
        setOMoves,
        CheckWin,
        CheckDraw,
        setWinner,
        winner,
        winningCombination,
        setWinningCombination,
        setMode,
        mode,
        setPlayer1,
        setPlayer2,
        player1,
        player2,
        xWins , 
        setXWins,
        oWins , 
        setOWins,
        draws , 
        setDraws,
        setModalOpen,
        modalOpen,
        draw , 
        setDraw ,
        possibleMoves , 
        setPossibleMoves,
        loading , 
        setLoading,
    }}>
        {children}
    </GameContext.Provider>
}

export default GameContext;