import React from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar,Step } from "react-step-progress-bar";
import './style.css';
function ProgressIndex(props){



    return (
            <div className={props.className}>
            <ProgressBar percent={props.progress}>
            <Step>
            {({ accomplished, index }) => (
            <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
             {index + 1}
         </div>

    )}
    </Step>
            <Step>
            {({ accomplished, index }) => (
            <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
             {index + 1}
         </div>

    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>

  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>

  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>

  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>

</ProgressBar>
</div>

      );
}


export default ProgressIndex; 