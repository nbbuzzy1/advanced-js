for (let i = 0; i < 2; i++) {
  // Throws error
  test();
}

const test = () => {
  // No error
  test2();
}

const test2 = () => {
  console.log('i am test 2')
}

test();