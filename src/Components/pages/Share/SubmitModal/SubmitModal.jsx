import React from 'react';

const SubmitModal = ({text}) => {
  return (
    <>

      <div class="modal fade" id="submitModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="submitModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="submitModalLabel">{text}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-success text-white">
            <img src="https://i.ibb.co/PFYVkJ7/quiz-trophy.png" alt="trophy" className='trophyImage' />
           <h2 className='congrats'>Congrasulation for your performance</h2>
           <h2 className='score'> Your score <span className='scoreStyle'> 06/10 </span></h2>
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

export default SubmitModal;