import React, { useState } from 'react';
import Answer from './Answer';
import { helpfulQuestion, reportQuestion } from '../utils/helperFunctions';
import { IoIosCheckmark } from 'react-icons/io';
import metaDataStyles from '../styles/MetaData.module.css';

const { metaData, spreadContainer, link, seeMoreAnswers, scrollQA } =
  metaDataStyles;

export default function Questions({ question, answers, setOpen }) {
  const [isShowingHelpful, setDisplayHelpful] = useState(true);
  const [isShowingReported, setDisplayReported] = useState(true);
  const [numOfAnswers, setAnswerDisplay] = useState(2);
  const [showScrollView, setScrollView] = useState(false);

  let first = [];
  let others = [];
  for (let answer of answers) {
    if (answer.answerer_name === 'Seller') {
      first.push(answer);
    } else {
      others.push(answer);
    }
  }

  first.sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  });
  others.sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  });

  answers = first.concat(others);

  let aData = answers.slice(0);
  if (answers.length > 1) {
    aData = aData.slice(0, numOfAnswers);
  }

  const seeMoreAnswersHandler = () => {
    if (numOfAnswers === 2) {
      setAnswerDisplay(10);
      setScrollView(true);
    } else {
      setAnswerDisplay(2);
      setScrollView(false);
    }
  };

  const helpfulDisplayHandler = () => {
    helpfulQuestion(question.question_id);
    setDisplayHelpful(false);
  };

  const reportDisplayHandler = () => {
    reportQuestion(question.question_id);
    setDisplayReported(false);
  };

  let moreAnswers;
  let collapseAnswers;
  if (answers.length > 1 && numOfAnswers === 2) {
    moreAnswers = (
      <span className={seeMoreAnswers} onClick={seeMoreAnswersHandler}>
        See more answers
      </span>
    );
  } else if (answers.length <= 1) {
    collapseAnswers = null;
  } else {
    collapseAnswers = (
      <span className={seeMoreAnswers} onClick={seeMoreAnswersHandler}>
        Collapse answers
      </span>
    );
  }

  return (
    <>
      <div id="questionBox" className={spreadContainer}>
        <span>{`Q: ${question.question_body}`}</span>
        <span className={metaData}>
          <span>{`Helpful? `}</span>
          {isShowingHelpful ? (
            <span
              onClick={() => helpfulDisplayHandler()}
              className={link}
            >{`Yes (${question.question_helpfulness})`}</span>
          ) : (
            <span>
              {' '}
              <IoIosCheckmark />{' '}
            </span>
          )}
          <span>{' | '}</span>
          {isShowingReported ? (
            <span onClick={() => reportDisplayHandler()} className={link}>
              {'Report'}
            </span>
          ) : (
            <span> Reported </span>
          )}
          <span>{' | '}</span>
          <span onClick={() => setOpen(question)} className={link}>
            Add Answer
          </span>
        </span>
      </div>
      <span>A: </span>
      <span className={`${showScrollView ? scrollQA : ''}`}>
        {aData.map((a, i) => {
          return <Answer a={a} key={i} />;
        })}
      </span>
      {moreAnswers ? moreAnswers : collapseAnswers}
      <br />
    </>
  );
}
