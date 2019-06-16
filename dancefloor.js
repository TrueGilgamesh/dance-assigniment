// Это ваш танец: через какой промежуток времени показать какую драгоценность
let dance = [
  [2000, allGems[0]],
  [2000, allGems[1]],
  [2000, allGems[33]],
  [2000, allGems[2]],
  [2000, allGems[3]],
  [2000, allGems[22]],
  [2000, allGems[33]],
  [2000, allGems[4]],
  [2000, allGems[5]],
  [2000, allGems[33]],
  [2000, allGems[7]],
  [2000, allGems[6]],
  [2000, allGems[33]],
  [2000, allGems[8]],
  [2000, allGems[9]],
  [2000, allGems[33]],
  [2000, allGems[10]],
  [2000, allGems[11]],
  [2000, allGems[33]],
  [2000, allGems[12]],
  [2000, allGems[13]],
  [2000, allGems[33]],
  [2000, allGems[14]],
  [2000, allGems[15]],
  [2000, allGems[33]],
  [2000, allGems[16]],
  [2000, allGems[17]],
  [2000, allGems[33]],
  [2000, allGems[18]],
  [2000, allGems[19]],
  [2000, allGems[33]],
  [2000, allGems[20]],
  [2000, allGems[21]],
  [200, allGems[33]]
];

// Это ваша танцевальная группа
let elves = [
  {
    name: allElves[0],
    head: '(*_*)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[0]],
    dislikedGems: [allGems[1]]
  },
  {
    name: allElves[1],
    head: '(~_~)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[2]],
    dislikedGems: [allGems[3]]
  },
  {
    name: allElves[2],
    head: '(^ω^)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[4]],
    dislikedGems: [allGems[5]]
  },
  {
    name: allElves[3],
    head: '(^.^)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[6]],
    dislikedGems: [allGems[7]]
  },
  {
    name: allElves[4],
    head: '(•ᵕ•)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[8]],
    dislikedGems: [allGems[9]]
  },
  {
    name: allElves[5],
    head: '(˘ᵕ˘)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[10]],
    dislikedGems: [allGems[11]]
  },
  {
    name: allElves[6],
    head: '(ᵔ.ᵔ)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[12]],
    dislikedGems: [allGems[13]]
  },
  {
    name: allElves[7],
    head: '(>_<)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[14]],
    dislikedGems: [allGems[15]]
  },
  {
    name: allElves[8],
    head: '(^_~)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[16]],
    dislikedGems: [allGems[17]]
  },
  {
    name: allElves[9],
    head: '(~_^)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[18]],
    dislikedGems: [allGems[19]]
  },
  {
    name: allElves[10],
    head: '(^_^)',
    danceSpeed: 200,
    stance: [0, 0, 0, 0],
    favouriteGems: [allGems[20]],
    dislikedGems: [allGems[21]]
  }
];

// Эта функция должна вернуть список эльфов для отрисовки
function getElves() {
  return elves;
}

// Эта функция должна вернуть танец для отрисовки
function getDance() {
  return dance;
}
