const recommendationLevelTitle = (level) => {
  return {
    1: 'For Some Readers',
    2: 'For Most Readers',
    3: 'For All Readers',
  }[level]
}

export default recommendationLevelTitle