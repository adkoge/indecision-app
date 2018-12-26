const isAdult = (age) => {
  if (age >= 18) {
    console.log(`${age} is an adult`);
  } else {
    console.log(`${age} is not an adult`);
  }
}

const canDrink = (age) => {
  if (age >= 21) {
    console.log(`${age} is old enough to drink`);
  } else {
    console.log(`${age} is not old enough to drink`);
  }
}
  
export default (age) => {
  if (age >= 65) {
    console.log('Is a senior');
  } else {
    console.log('Is not a senior');
  }
};

export { isAdult, canDrink };