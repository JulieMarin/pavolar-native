import base64 from 'base-64';

export const extractAvailableFlights = (results) => {
  let total = lolololol(results);
  return total.map((recommendation) => {
     const mergedCombinations = mergeDuplicateCombinations(recommendation.combinations);
    return {
      ...recommendation,
      combinations: mergedCombinations
    }
  });
};

const mergeDuplicateCombinations = (combinations) => {
  let uniqueCombinations = [];
  // let something = removeDuplicateSegments(combinations);
  let combinedList = combinations.filter((combo) => {
    let hash = generateHashFromCombo(combo);

    if (uniqueCombinations.includes(hash)) {
      return;
    } else {
      uniqueCombinations.push(hash);
      return combo;
    }
  });
  // console.log(uniqueCombinations);
  return combinedList;
};

const generateHashFromCombo = (combo) => {
  debugger;
  let object = combo.flightChoices[0].flightDetails;
  let stringified = JSON.stringify(object).toString();
  return base64.encode(stringified);
};

const generateHashFromChoice = (choice) => {
  let stringified = JSON.stringify(choice).toString();
  return base64.encode(stringified);
};

const removeDuplicateSegments = (results) => {
  return results.map((recommendation) => {
    let uniqueSegments = [];
    return recommendation.combinations.map((combo) => {
      return combo.flightChoices.filter((choice) => {
        let hashedChoice = generateHashFromChoice(choice);
        if (uniqueSegments.includes(hashedChoice)) {
          return;
        } else {
          uniqueSegments.push(hashedChoice);
          return choice;
        }
      })
    });
  });
};

const lolololol = (results) => {

  return results.map((recommendation) => {
    let array2 = recommendation.combinations.map((combo) => {
      let uniqueSegments = [];
      return array = combo.flightChoices.filter((choice) => {
        let hashedChoice = generateHashFromChoice(choice);
        if (uniqueSegments.includes(hashedChoice)) {
          return;
        } else {
          uniqueSegments.push(hashedChoice);
          return choice;
        }
      })
    })
    return {
      ...recommendation,
      combinations: array2
    }
  });
};
