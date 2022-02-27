
// decreaseArrow prints 2 then 1
// decreaseNormal prints NAN
// const testObj = {
//   name: 'Nick',
//   count: 3,
//   decreaseArrow() {
//     this.count--;
//     console.log('arrow', this.count);
//   },
//   decreaseNormal() {
//     return function() {
//       this.count--;
//       console.log('normal', this.count);
//     }
//   }
// }

// decreaseArrow prints NAN
// decreaseNormal prints 2 then 1
const testObj = {
  name: 'Nick',
  count: 3,
  decreaseArrow: () => {
    this.count--;
    console.log('arrow', this.count);
  },
  decreaseNormal() {
    return () => {
      this.count--;
      console.log('normal', this.count);
    }
  }
}

//testObj.decreaseArrow();
//testObj.decreaseArrow();
const test = testObj.decreaseNormal();
test();
test();
