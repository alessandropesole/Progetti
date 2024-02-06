import { useRef, useState } from 'react';
import '../assets/Game.css';
import circle from '../assets/imgs/circle.png';
import cross from '../assets/imgs/cross.png';


const Game = () => {

    let [data, setData]= useState(["","","","","","","","",""]);
    let [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [icon, setIcon] = useState(cross);
    let [scoreX, setScoreX] = useState(0);
    let [scoreO, setScoreO] = useState(0)
    let titleRef = useRef(null);
    let box1= useRef(null);
    let box2= useRef(null);
    let box3= useRef(null);
    let box4= useRef(null);
    let box5= useRef(null);
    let box6= useRef(null);
    let box7= useRef(null);
    let box8= useRef(null);
    let box9= useRef(null);
    let arrBox= [box1, box2, box3, box4, box5, box6,box7, box8, box9];
    

    const toggle = (e,num) => {
        if(lock) {
            return 
        }
        if(count % 2 === 0) {
            e.target.innerHTML = `<img src= '${cross}' />`;
            data[num] = "x";
            setIcon(circle);
            setCount(++count);
        }
        else {
            e.target.innerHTML= `<img src= '${circle}' />`;
            data[num] = "o";
            setIcon(cross);
            setCount(++count)
        }
        checkWin()
    }

    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== ''){
            won(data[2]); 
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== ''){
            won(data[5]);
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== ''){
            won(data[8]);
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== ''){
            won(data[6]);
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== ''){
            won(data[7]);
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== ''){
            won(data[8]);
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== ''){
            won(data[8]);
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== ''){
            won(data[6]);
        }
        const draw = data.every((cell) => cell !== '');
        if(draw) {
            titleRef.current.innerHTML = `it's a draw!`;
            setLock(true)

        }
    }

    const won = (winner) => {
        setLock(true);
        if(winner ==='x')
        {
            titleRef.current.innerHTML  = `The Winner is: <img src='${cross}'/>`
            setScoreX(scoreX + 1) 
        }
        else {
            titleRef.current.innerHTML  = `The Winner is: <img src='${circle}'/>`
            setScoreO(scoreO + 1) 
        }
        
    }

    const reset = () => {
        setLock(false);
         setData(["","","","","","","","",""])
        titleRef.current.innerHTML = 'Tic Tac Toe By <span>Pinuo</span>'
       arrBox.map((e) =>{
        e.current.innerHTML = ""
       })
    }

    return (
        <div className='container d-flex  justify-content-center align-items-center mt-5'>
            <div className='d-flex flex-column align-items-center'>
            <h1 className="title display-2" ref={titleRef}>Tic Tac Toe By <span>Pinuo</span></h1>
            <div className="board mt-5">
                <div className="row1">
                    <div className="boxes " ref={box1}  onClick={(e) => toggle(e,0)}></div>
                    <div className="boxes " ref={box2}  onClick={(e) => toggle(e,1)}></div>
                    <div className="boxes " ref={box3}  onClick={(e) => toggle(e,2)}></div>
                </div>
                <div className="row2">
                    <div className="boxes " ref={box4}   onClick={(e) => toggle(e,3)}></div>
                    <div className="boxes " ref={box5}  onClick={(e) => toggle(e,4)}></div>
                    <div className="boxes " ref={box6}  onClick={(e) => toggle(e,5)}></div>
                </div>
                <div className="row3">
                    <div className="boxes " ref={box7}  onClick={(e) => toggle(e,6)}></div>
                    <div className="boxes " ref={box8}   onClick={(e) => toggle(e,7)}></div>
                    <div className="boxes " ref={box9}   onClick={(e) => toggle(e,8)}></div>
                </div>
            </div>
            <h4 className='mb-3'>E il turno di:  <img width="40px"src= {icon} /></h4>
            <button className="reset" onClick={() => reset()}>Play Again</button>
            </div>
            <div className='ms-5'>
                <h3 className='mb-3'>Score:</h3>
                <h4><img  width="40px" src={cross}/> : {scoreX}</h4>
                <h4><img width="40px" src={circle}/> : {scoreO}</h4>
            </div>

        </div>
    )
}

export default Game