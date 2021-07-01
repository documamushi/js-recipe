const number = 24

const genkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!")
    } else {
      console.log(n)
    }
  }
}

// genkiFunction(24)
genkiFunction(100)
