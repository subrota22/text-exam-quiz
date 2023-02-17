import React, { useState } from 'react';
import "../../../../CSS/RightNav.css";
import CountDown from '../../CountDown/CountDown';
// import Modal from '../Modal/Modal';
const RightNav = ({ nextClick, dumpClick, reviewClick }) => {

    const [palletNumber, setPalletNumber] = useState();
    console.log('palletNumber', palletNumber);
    const setPalletNumberHandle = (event) => {
        const palletNumber = parseInt(event.target.innerText);
        setPalletNumber(palletNumber);
    }




    setTimeout(() => {
        var secondTime = 50;
        var second = document.querySelector(".second");
        second.innerHTML = secondTime;
        secondTime--;
        console.log(secondTime)
    }, 1000);


    return (

        <>
            <div className="profileDiv">
                <div>
                    <img src="https://i.ibb.co/yBXFRrH/imagedd.png" alt="profile" className='profileImage' />
                </div>
                <div className="timer">
                    <div className="container">
                        <div className="d-flex  flex-column flex-lg-row justify-content-around">
                            <p>Time left: </p>
                            <CountDown></CountDown>
                        </div>
                    </div>
                    <p className='name'>Amit sarkar</p>
                </div>
            </div>

            <div className="questionPallet">
                <div className="questionPalletHead">
                    <p className='palletText'>Question pallet</p>
                </div>
                <div className="buttonNumber">
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number, i) => <>
                            <button id="palletButtonSerial" className={`${nextClick ? 'palletButtonNext' : "palletButton"}
                                 ${dumpClick ? "dumpClick" : undefined} ${reviewClick ? 'reviewClick' : undefined}
                                 ${i === 1 || i === 4 ? 'redButton' : undefined} ${i === 5 ? 'yellowButton' : undefined}
                                 ${i === 7 ? ' noVisitButton' : undefined} ${i === 8 ? 'reviewPlusButton' : undefined}  `} onClick={setPalletNumberHandle} >{number + 1}</button>
                        </>)
                    }
                </div>
            </div>
            <div className="legend">
                <div className="legendHead">
                    <p className='legendText'>Legend (Click to view)</p>
                </div>
                <div className="lendButtonGroup">
                    <div className="firstGroup">
                        <button className="answerButton">4 Answer</button>
                        <button className="noAnswerButton">4 No Answer</button>
                    </div>
                    <div className="secondGroup">
                        <button className="reviewPlusButton"> 2 Review + Ans </button>
                        <button className="reviewMinusButton"> 2 Review - Ans</button>
                    </div>

                    <div className="thirdGroup">
                        <button className="dumpButton"> 2 Dump </button>
                        <button className="noVisitButton">2 No visit </button>
                    </div>
                    <button className='allQuestion' data-bs-toggle="modal" data-bs-target="#staticBackdrop">10 All question</button>
                </div>
                <hr className='buttonDivider' />

                <div className="forthGroup">
                    <button className="submitButtons"> Profile </button>
                    <button className="submitButtons">Instr </button>
                </div>

                <div className="fifthGroup">
                    <button className="submitButtons"> Questions </button>
                    <button className="submitButtons"> Submit </button>
                </div>


            </div>

            {/* <Modal examUrl={examUrl} ></Modal> */}
        </>
    );
};

export default RightNav;