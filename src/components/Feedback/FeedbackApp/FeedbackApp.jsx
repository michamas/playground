import { Component } from "react";
import Section from "../../Section/Section.js";

const INITIALSTATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class FeedbackApp extends Component {
  state = {
    ...INITIALSTATE,
    totalFeedback: 0,
    positiveFeedback: 0,
  };

  render() {
    return (
      <>
        <Section title={"Feedback counter"}> </Section>
      </>
    );
  }
}
