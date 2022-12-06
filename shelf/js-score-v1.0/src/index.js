function score(inputs) {
    let scoreGiven = inputs.score;
    let advice = "Uninterpreted";
    if (scoreGiven >= 28)
       {
         advice = "Score is too high and so is out of range"
       }
    else if (scoreGiven >= 20)
       {
       advice = "Immediate initiation of pharmacotherapy and, if severe impairment or poor response to therapy, expedited referral to a mental health specialist for psychotherapy and/or collaborative management"
       }
    else if (scoreGiven >= 15)
      {
          advice = "Active treatment with pharmacotherapy and/or psychotherapy"
      }
    else if (scoreGiven >= 10)
      {
          advice = "Treatment plan, considering counseling, follow-up and/or pharmacotherapy"
      }
    else if (scoreGiven >= 5)
      {
          advice = "Watchful waiting; repeat PHQ-9 at follow-up"
      }
    else if (scoreGiven >= 0)
      {
            advice = "No treatment actions needed"
      }
    else if (scoreGiven < 0)
      {
              advice = "Score cannot be negative and so is out of range"
      }
    return advice;
}
