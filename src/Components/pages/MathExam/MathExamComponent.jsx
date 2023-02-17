import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../../../CSS/QuestionOption.css";
import Modal from '../Share/Modal/Modal';
import RightNav from '../Share/RightNav/RightNav';
import { BlockMath } from 'react-katex';
import { useTranslation } from 'react-i18next';

const MathExamComponet = () => {

    const [modalData, setModalData] = useState([]);
    const [nextClick, setNextClick] = useState(false);
    const [dumpClick, setDumpClick] = useState(false);
    const [reviewClick, setReviewClick] = useState(false);
    //
    React.useEffect(() => {
        fetch(`https://test-exam-omega.vercel.app/math-quiz-all`)
            .then(res => res.json())
            .then(data => {
                setModalData(data);
            })
    }, []);

    //next
    const handelChangeButtonColor = () => {
        setReviewClick(false);
        setDumpClick(false);
        setNextClick(true);
    }
    //dump
    const handelChangeButtonColorDump = () => {
        setReviewClick(false);
        setNextClick(false);
        setDumpClick(true);
    }
    //review
    const handelChangeButtonColorReviewClick = () => {
        setDumpClick(false);
        setNextClick(false);
        setReviewClick(true);
    }
//translate page

const {  i18n } = useTranslation();
//t,
const handleChangeLanguage = (lang) => {
console.log(lang);
i18n.changeLanguage(lang) ;
}
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 my-3">
                        <div className='container'>
                            <div className="text-white d-flex flex-column 
                    flex-md-row text-center  ">

                                <NavLink to="/" className="allSectionButton  my-2  w-100 w-lg-50">
                                    All section
                                </NavLink>

                                <NavLink to="/math" className="navLink  my-2 w-100 w-lg-50">
                                    Math
                                </NavLink>
                                <NavLink to="/physics" className="navLink  my-2 w-100 w-lg-50">
                                    Physics
                                </NavLink>
                                <NavLink to="/chemistry" className="navLink  my-2 w-100 w-lg-50">
                                    Chemistry
                                </NavLink>
                            </div>

                            <hr className='navDivider' />
                            <div className='cardOfQuestion'>
                                <div className="examHead">
                                    <div>
                                        Que No : 1
                                    </div>
                                    <div>
                                        <span> View in </span>
                                        <select name="language" id="laguage" onChange={(e)=>handleChangeLanguage(e.target.value)}>
                                            <option value="en">English</option>
                                            <option value="ko">Bangla</option>
                                            <option value="chi">Hindi</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='questionOption'>
                                    <div className="questionInstruction">
                                        <p className='questionInstructionText questionTextColor'>Question instruction</p>
                                        <div className="questionDivider"></div>
                                        <p className='questionInstructionText'>
                                            Passage You want to hit a small box on the floor with a
                                            marble fired from a spring-loaded gun that is mounted
                                            on a table. The target box is a distance R horizontally form the edge
                                            of the table; see the figure to the right.
                                            You compress the spring a distance d, but the
                                            center of the box. How far should you compress spring to score a
                                            direct hit (neglect friction)?
                                        </p>
                                        {/* <h1>{t('Welcome to React')}</h1> */}
                                    </div>
                                    <div className="verticalLine"></div>
                                    <div className="horizontalLine"></div>
                                    <div className="question">
                                        <p className="questionText questionTextColor">  &nbsp; Question</p>
                                        <div className="questionDivider"></div>
                                        <div className="questionText">
                                            <p className='questionTextStyle'>
                                                &nbsp;  A block of mass m is projected with velocity v <sub>0</sub>
                                                as  shown in the flag. The distance between free ends is <br />
                                                ℓ <sub>0</sub>.
                                                Maximun displacement of the block  during the motion.
                                            </p>
                                            <img src="https://i.ibb.co/X2FPQLv/question-Image.png" alt="question chain" className='questionImage' />
                                            <div className="questionDivider"></div>
                                            <div className='divSpace'>
                                                <input type="radio" name="questionNumber" id="questionNumberRadio" className='mt-3' />

                                                <BlockMath math="ℓ + v_0 \sqrt { \frac {m} {k2}}" />
                                            </div>
                                            <div className="questionDivider"></div>
                                            <div className='divSpace'>
                                                <input type="radio" name="questionNumber" id="questionNumberRadio" className='mt-3' />
                                                <BlockMath math="ℓ + 2v_0 \sqrt { \frac {m} {k1k2}}" />
                                            </div>
                                            <div className="questionDivider"></div>
                                            <div className='divSpace'>
                                                <input type="radio" name="questionNumber" id="questionNumberRadio" className='mt-3' />
                                                <BlockMath math="ℓ + 2v_0 \sqrt { \frac {m(k1 + k2)} {k1k2}}" />
                                            </div>
                                            <div className="questionDivider"></div>
                                            <div className='divSpace'>
                                                <input type="radio" name="questionNumber" id="questionNumberRadio" className='mt-3' />
                                                <BlockMath math="ℓ + v_0 \sqrt { \frac {m(k1 + k2)} {k1k2}}" />
                                            </div>
                                            <div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="footerButtonsGroup text-white d-flex flex-column flex-lg-row 
                        text-center  justify-content-center">

                                    <button className="footerButtons  my-2 w-100 w-lg-50">
                                        Clear response
                                    </button>
                                    <button onClick={handelChangeButtonColorReviewClick}
                                        className={`my-2 w-100 w-lg-50 ${reviewClick ? 'reviewClickFooter' : 'footerButtons'}`}>

                                        Review
                                    </button>
                                    <button onClick={handelChangeButtonColorDump}
                                        className={`my-2 w-100 w-lg-50 ${dumpClick ? 'dumpClickFooter' : 'footerButtons'}`}>
                                        Dump
                                    </button>
                                    <button className="footerButtons  my-2 w-100 w-lg-50">
                                        Previous
                                    </button>
                                    <button onClick={handelChangeButtonColor}
                                        className={`my-2 w-100 w-lg-50 ${nextClick ? 'nextClickFooter' : 'nextCommonButton'}`}>
                                        Next
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3  my-3">
                        <RightNav  nextClick={nextClick}
                            dumpClick={dumpClick} reviewClick={reviewClick}></RightNav>
                    </div>
                </div>
            </div>
            <Modal examUrl={modalData} text="10 Math quiz question"></Modal>
        </>
    );
};

export default MathExamComponet;
