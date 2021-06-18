function filterByCriteria(inputStr, criteria) {
    let inputArr = JSON.parse(inputStr);
    if (criteria != 'all') {
        let criteriaArr = criteria.split('-');
        inputArr = inputArr.filter(x => x[criteriaArr[0]] == criteriaArr[1]);
    }
    for (const key in inputArr) {
        console.log(`${key}. ${inputArr[key].first_name} ${inputArr[key].last_name} - ${inputArr[key].email}`);
    }
}

filterByCriteria(`[{
  "id": "1",
  "first_name": "Kaylee",
  "last_name": "Johnson",
  "email": "k0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Johnson",
  "email": "kjost1@forbes.com",
  "gender": "Female"
}, {
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}, {
  "id": "4",
  "first_name": "Evanne",
  "last_name": "Johnson",
  "email": "ev2@hostgator.com",
  "gender": "Male"
}]`,
    'gender-Female'
);