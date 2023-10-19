
let arrOne = [1, 3, 4, 5, 7, 8, 9, 0, 10, 11];
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let tm = array[i];
    let random = Math.floor(Math.random() * (i + 1));
    array[i] = array[random];
    array[random] = tm;
  }
  return array;
};

for (let i = 0; i < 10; i++) {
  console.log(shuffle(arrOne).join(","));
}


const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
  return array;
};
