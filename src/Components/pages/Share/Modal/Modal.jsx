import React from 'react';

const Modal = ({ examUrl, text }) => {
  console.log(examUrl);
  return (
    <>

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">{text}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-success text-white">
              {
                examUrl.map((math) =>

                  <div className="questionText" key={math._id}>
                    <div className="questionDivider"></div>
                    <p className='questionTextStyle'>
                      &nbsp; {math?.questionNumber}/ question: {math?.question}
                      {math?.questionImage && <img src={math?.questionImage} alt="question" className='questionImage' />}
                    </p>

                    {math?.videoLink && <a target="_blank" rel="noreferrer" className='text-center px-3' href={math?.videoLink}> See the video</a>}

                    <div className="questionDivider"></div>
                    <div className='divSpace'>
                      <ol  type="A">

                        {math?.questionFifthOption && <>

                          <li>
                            
                            {math?.questionFifthOption}
                          </li>

                        </>
                        }


                        {
                          math?.questionFirstOption && <>
                            <li>
                              
                              {math?.questionFirstOption}
                            </li>
                          </>
                        }
                        {
                          math?.questionForthOption && <>
                            <li>
                              
                              {math?.questionForthOption}
                            </li>
                          </>
                        }
                        {
                          math?.questionSecondOption && <>
                            <li>
                              
                              {math?.questionSecondOption}
                            </li>
                          </>
                        }
                        {
                          math?.questionThirdOption && <>
                            <li>
                              
                              {math?.questionThirdOption}
                            </li>
                          </>
                        }
                      </ol>
                    </div>
                  </div>
                )
              }
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;