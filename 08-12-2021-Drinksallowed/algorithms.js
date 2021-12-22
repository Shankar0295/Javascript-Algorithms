//08/12/2021
// 48. Drinks Allowed?A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people **18 and older** and when **he's not on break**.Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
console.log("48. Drinks Allowed?A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people **18 and older** and when **he's not on break**.Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.")

const shouldServeDrinks = (age, session) => {
  return (age >= 18 && session === false) ? true : false
}

shouldServeDrinks(17, true) // false
shouldServeDrinks(19, false) // true
shouldServeDrinks(30, true) // false

//ends here


