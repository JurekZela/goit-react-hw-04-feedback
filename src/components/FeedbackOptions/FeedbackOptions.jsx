import { BtnWrapper, Button } from "./Feedback-styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <BtnWrapper>
        {options.map(option => {
          return (
            <li  key={option}>
              <Button
                type="button"
                status={option}
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </Button>
            </li>
          );
        })}
      </BtnWrapper>
    );
  };