import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BlockMath } from 'react-katex';
import { NavLink } from 'react-router-dom';
import "../../../CSS/QuestionOption.css";
import CountDown from '../CountDown/CountDown';
import Modal from '../Share/Modal/Modal';
import SubmitModal from '../Share/SubmitModal/SubmitModal';

// import PropTypes from 'prop-types';
// Translation Higher Order Component
// import {
//   setTranslations,
//   setDefaultLanguage,
//   setLanguageCookie,
//   setLanguage,
//   translate,
// } from 'react-switch-lang';
// import en from 'en.json';
// import th from 'th.json';

// // Do this two lines only when setting up the application
// setTranslations({ en, th });
// setDefaultLanguage('en');

// // If you want to remember selected language
// setLanguageCookie();


const MathExam = () => {
    // const en = {
    //   "home": {
    //     "title": "Homepage"
    //   },
    //   "hello": "Hello {name}!"
    // } ;

    //    const handleSetLanguage = (key) => () => {
    //         setLanguage(key);
    //       };;

    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(1);
    const pages = Math.ceil(count / pageSize);
    const [modalData, setModalData] = useState([]);
    const [visit, setVisit] = useState(0);
    const [load, setLoad] = useState(true);
    console.log(visit);
    console.log("modalData", modalData);
    let activeStyle = {
        backgroundColor: "#120573",
    };

    React.useEffect(() => {
        fetch(`https://test-exam-omega.vercel.app/math-quiz?page=${page}&size=${pageSize}`)
            .then(res => res.json())
            .then(data => {
                setData(data?.data);
                setCount(data?.count);
                setLoad(false);
            })
    }, [page, pageSize]);
    //
    React.useEffect(() => {
        fetch(`https://test-exam-omega.vercel.app/math-quiz-all`)
            .then(res => res.json())
            .then(data => {
                setModalData(data);
            })
    }, []);

    return (
        <>
            <Helmet> <title>Math exam test</title></Helmet>
            <div className="container">

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 my-3">
                        <div className='container'>
                            <div className="text-white d-flex flex-column 
    flex-md-row text-center  ">

                                <NavLink to="/" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined} className="allSectionButton my-2 w-100 w-lg-50">
                                    All section
                                </NavLink>
                                <NavLink to="/math" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined} className="navLink my-2 w-100 w-lg-50">
                                    Math
                                </NavLink>
                                <NavLink to="/physics" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined} className="navLink my-2 w-100 w-lg-50">
                                    Physics
                                </NavLink>
                                <NavLink to="/chemistry" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined} className="navLink my-2 w-100 w-lg-50">
                                    Chemistry
                                </NavLink>
                            </div>

                            <hr className='navDivider' />
                            <div className='cardOfQuestion'>
                                <div className="examHead">
                                    <div>

                                        {
                                            data.map((math) => <p>  Question No : {math?.questionNumber} </p>)
                                        }
                                    </div>
                                    <div>
                                        <span> View in </span>
                                        <select name="language" id="laguage">
                                            <option value="english">English</option>
                                            <option value="english">Bangla</option>
                                            <option value="english">Hindi</option>
                                        </select>
                                    </div>
                                    {/* {translate('home.title')}
        {translate('hello', { name: 'World' })}
  */}
                                    {/* <button type="button" onClick={this.handleSetLanguage('th')}>
          Switch language
        </button> */}
                                </div>
                                <div className='questionOption'>
                                    <div className="questionInstruction">
                                        <p className='questionInstructionText questionTextColor'>Question instruction</p>
                                        <div className="questionDivider"></div>
                                        <p className='questionInstructionText'>
                                          You have to reading carefully.
                                          If needed to the google search try 
                                          to find out the problem. You can 
                                          search your math law or anything you 
                                          need but do this all thing with carefully.
                                        </p>
                                    </div>
                                    <div className="verticalLine"></div>
                                    <div className="horizontalLine"></div>
                                    <div className="question">
                                        <p className="questionText questionTextColor">  &nbsp; Question</p>
                                        <div className="questionDivider"></div>
                                        {
                                            load ? <p style={{ textAlign: "center", color: "lime", fontSize: "24px", marginTop:"10px" }}>Loading...</p> :
                                                <>
                                                    {
                                                        data?.map((math) =>

                                                            <div className="questionText" key={math._id}>
                                                                <div className="questionDivider"></div>
                                                                <p className='questionTextStyle'>
                                                                    👉 {math?.questionNumber}/ question: {math?.question}
                                                                    {math?.questionImage && <img src={math?.questionImage} alt="question" className='questionImage' />}
                                                                </p>

                                                                {math?.videoLink && <a target="_blank" rel="noreferrer" className='text-center px-3' href={math?.videoLink}> See the video</a>}

                                                                <div className="questionDivider"></div>
                                                                <div className='divSpace'>
                                                                    <ul className='questionList' onClick={() => setVisit(+1)}>

                                                                        {math?.questionFifthOption && <>

                                                                            <li>
                                                                                <input type="radio" name="questionNumber" id="questionNumberRadio" />
                                                                                {math?.questionFifthOption}
                                                                            </li>

                                                                        </>
                                                                        }


                                                                        {
                                                                            math?.questionFirstOption && <>
                                                                                <li>
                                                                                    <input type="radio" name="questionNumber" id="questionNumberRadio" />
                                                                                    {math?.questionFirstOption}
                                                                                </li>
                                                                            </>
                                                                        }
                                                                        {
                                                                            math?.questionForthOption && <>
                                                                                <li>
                                                                                    <input type="radio" name="questionNumber" id="questionNumberRadio" />
                                                                                    {math?.questionForthOption}
                                                                                </li>
                                                                            </>
                                                                        }
                                                                        {
                                                                            math?.questionSecondOption && <>
                                                                                <li>
                                                                                    <input type="radio" name="questionNumber" id="questionNumberRadio" />
                                                                                    {math?.questionSecondOption}
                                                                                </li>
                                                                            </>
                                                                        }
                                                                        {
                                                                            math?.questionThirdOption && <>
                                                                                <li>
                                                                                    <input type="radio" name="questionNumber" id="questionNumberRadio" />
                                                                                  
                                                                                    <BlockMath math={`${math?.questionThirdOption}`}  />
                                                                                </li>
                                                                            </>
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div>

                                <div className="container">
                                    <div className="row">
                                        <div className="d-flex flex-column flex-lg-row">

                                            <button className="footerButtons my-2 w-75">
                                                Clear response
                                            </button>
                                            <button className="footerButtons my-2 w-50">
                                                Review
                                            </button>
                                            <button className="footerButtons my-2 w-50">
                                                Dump
                                            </button>

                                            {/* <button className={`navLink ${pages === 1 && 'd-none'}`}
        onClick={() => setPage(page - 1)}>
      Previous
    </button> */}
                                            {
                                                //page + 1 >=
                                                data[0]?.questionNumber !== 1 && <>
                                                    {
                                                        [...Array(pages).keys()].length &&
                                                        <button className={`btn btn-info mx-1 text-white my-2 w-50  ${pages === 1 && 'd-none'}`}
                                                            onClick={() => setPage(page - 1)}>
                                                            Previous
                                                        </button>
                                                    }
                                                </>
                                            }

                                            {
                                                data[0]?.questionNumber !== 11 && <>
                                                    {

                                                        [...Array(pages).keys()].length > page + 1 &&
                                                        <button className={`btn btn-primary mx-1 my-2 w-50 ${pages === 1 && 'd-none'}`}
                                                            onClick={() => setPage(page + 1)}>
                                                            Next
                                                        </button>
                                                    }

                                                </>
                                            }
                                         
                                        </div>
                                           {/* page size set  */}
                                           <select className='selectPage btn btn-success py-2 my-5 w-100 mx-auto text-white' onChange={(e) => setPageSize(e.target.value)}>
                                                <option className='text-info fw-bold ' selected disabled> Select the page size </option>
                                                <option value="2">2</option>
                                                <option value="4">4</option>
                                                <option value="6">6</option>
                                                <option value="8">8</option>
                                                <option value="10">10</option>

                                            </select>
                                    </div>
                                </div>

                                
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  my-3">
                        {/* right navbar start  */}
                        <div className='right-side-nav'>

                            <div className="profileDiv">
                                <div>
                                    <img src="https://i.pinimg.com/736x/ce/7e/5f/ce7e5f505857225f90bd30dfe49620bb.jpg" alt="profile" className='profileImage' />
                                </div>
                             <div className="container">
                             <div className="timer">
                                    <div className="d-flex  flex-column flex-lg-row justify-content-around">
                                        <p>Time left: </p>
                                        <CountDown></CountDown>
                                    </div>
                                    <p className='name'>Susmita sen</p>
                                </div>
                             </div>
                            </div>

                            <div className="questionPallet">
                                <div className="questionPalletHead">
                                    <p className='palletText'>Question pallet</p>
                                </div>
                                <div className="buttonNumber">

                                    {
                                        [...Array(pages).keys()].map(pageNumber =>
                                            <button className={pageNumber === page ? 'activeButton' : "palletButton"}
                                                onClick={() => setPage(pageNumber)}
                                            >{pageNumber + 1}</button>
                                        )
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
                                    <button className='submitButtons' data-bs-toggle="modal" data-bs-target="#submitModal">Submit</button>
                                </div>


                            </div>
                        </div>
                    </div>
                    {/* right navbar end  */}
                    <Modal examUrl={modalData} text="10 Math quiz questions"></Modal>
                    <SubmitModal text={"Queiz score for math"}></SubmitModal>
                </div>
            </div>
        </>
    );
};

export default MathExam;