import React, {PropTypes} from 'react';
import ResponseButtons from './ResponseButtons';

const SingleQuestion = ({criterion, setCriterion}) =>
  <div className="single-question">
    <div className="question">
      {criterion.question}
    </div>
    <ResponseButtons
      criterion={criterion}
      setCriterion={setCriterion}/>
  </div>

export default SingleQuestion;
