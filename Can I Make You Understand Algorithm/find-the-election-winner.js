/* Question: In an array of strings which represents the pools of an election, find the election winner of the election.
For example, say array is ["Mike", "Mike", "Mike", "Fred", "Fred", "Fred", "Philips"] */

function electionWinner(votesArray) {
  let maxVote = 0;
  let isWinner;
  let votesObj = {};

  for (let candidate of votesArray) {
    votesObj[candidate] = votesObj[candidate] + 1 || 1;
  }

  for (let candidate in votesObj) {
    if (votesObj[candidate] > maxVote) {
      maxVote = votesObj[candidate];
      isWinner = candidate;
    }
  }
  return isWinner;
}

console.log(
  electionWinner(["Mike", "Mike", "Mike", "Fred", "Fred", "Fred", "Philips"])
);
