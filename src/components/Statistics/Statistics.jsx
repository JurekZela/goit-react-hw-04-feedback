import { Notification } from '../Notification-message/Notification-message';

export const Statistics = (
  {
    good,
    neutral,
    bad,
    total,
    positivePercentage,
  }
) => {
if (good || neutral || bad) {
  return (
    <div>
  <p>Good: {good}</p>
  <p>Neutral: {neutral}</p>
  <p>Bad: {bad}</p>
    <p>Total: {total}</p> 
  <p>Positive Feedback: {positivePercentage}%</p>
</div>
  )
}else {
  return <Notification message="There is no feedback"/>;
}
}