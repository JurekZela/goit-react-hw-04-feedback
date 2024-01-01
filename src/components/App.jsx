import { useState } from 'react';
import { FeedbackCard } from './FeedbackOptions/Feedback-styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const objTotal = { good, neutral, bad };

  const onLeaveFeedback = e => {
    if (e === 'good') {
      return setGood(prevGood => prevGood + 1);
    }

    if (e === 'neutral') { 
      return setNeutral(prevNeutral => prevNeutral + 1);
    }

    if (e === 'bad') {
      return setBad(prevBad => prevBad + 1);
    }
  };


  const countTotalFeedback = () => good + neutral + bad;
  
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const percent = (good * 100) / total;
    return Math.round(percent);
  };

    return (
        <FeedbackCard>
         <Section title="Please leave feedback">
         <FeedbackOptions
         options={Object.keys(objTotal)}
         onLeaveFeedback={onLeaveFeedback} 
         />
         </Section>
         <Section title="Statistics">
           <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} 
          />
        </Section>
        </FeedbackCard>
    );
  };