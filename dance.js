let allElves = [
  'Амариэ',
  'Амдир',
  'Амрас',
  'Амрод',
  'Амрот',
  'Анайрэ',
  'Ангрод',
  'Аргон',
  'Аредэль',
  'Арвен',
  'Аэгнор',
  'Белег',
  'Воронвэ',
  'Галадон',
  'Галадриэль',
  'Галатиль',
  'Галдор из Гаваней',
  'Галдор из Гондолина',
  'Галион',
  'Гвиндор',
  'Гилдор Инглорион',
  'Гил-Галад (Эрейнион)',
  'Гимли',
  'Глорфиндел',
  'Даэрон',
  'Дэнетор',
  'Дуилин',
  'Идриль',
  'Имин',
  'Иминиэ',
  'Ингвион',
  'Ингвэ',
  'Инглор',
  'Индис',
  'Иримэ',
  'Карантир',
  'Квеннар и-Онотимо',
  'Келеборн',
  'Келебриан',
  'Келебримбор',
  'Келегорм',
  'Кирдан',
  'Куруфин',
  'Леголас из Гондолина',
  'Леголас из Лихолесья',
  'Линдир',
  'Лютиэн Тинувиэль',
  'Маблунг',
  'Маглор',
  'Махтан',
  'Маэглин',
  'Маэдрос',
  'Мириэль Сериндэ',
  'Митреллас',
  'Неллас',
  'Нерданэль',
  'Нимлот',
  'Нимродэль',
  'Ольвэ',
  'Ородрет',
  'Орофер',
  'Орофин',
  'Пенголод',
  'Пенлод',
  'Рог',
  'Румил из Лориэна',
  'Румил из Тириона',
  'Салгант',
  'Саэрос',
  'Тата',
  'Татиэ',
  'Тингол',
  'Трандуил',
  'Тургон',
  'Феанор',
  'Финарфин',
  'Финвэ',
  'Финдис',
  'Финдуилас',
  'Финголфин',
  'Фингон',
  'Финрод Фелагунд',
  'Халдир',
  'Эарвен',
  'Эгалмот',
  'Эктелион',
  'Элеммакил',
  'Эленвэ',
  'Элу Тингол (Эльвэ)',
  'Эльмо',
  'Энелиэ',
  'Энель',
  'Энердил',
  'Элладан и Элрохир',
  'Элронд',
  'Эльдалотэ',
  'Эол',
  'Эрестор'
];
let allGems = [
  'Алмаз',
  'Хризолит',
  'Эвклаз',
  'Корунд',
  'Рубин',
  'Сапфир',
  'Тааффеит',
  'Берилл',
  'Аквамарин',
  'Изумруд',
  'Гелиодор',
  'Морганит',
  'Хризоберилл',
  'Александрит',
  'Шпинель',
  'Гранаты',
  'Демантоид',
  'Цаворит',
  'Горный хрусталь',
  'Дымчатый кварц',
  'Празиолит',
  'Аметрин',
  'Розовый кварц',
  'Турмалин',
  'Верделит',
  'Индиголит',
  'Параиба',
  'Опал благородный',
  'Опал огненный',
  'Топаз',
  'Танзанит',
  'Циркон',
  'Гиацинт',
  'Андалузит',
  'Спессартин',
  'Пироп',
  'Родолит',
  'Альмандин',
  'Кварц',
  'Аметист',
  'Цитрин'
];

// здесь реализуйте фигуры, команды

// Движение - это функция, которая принимает в качестве аргумента эльфа
// а возвращает Promise, который будет выполнен тогда, когда эльф выполнит
// указанное движение. Успешно выполненное движение должно зарезолвится снова
// в этого же эльфа с обновленной пастурой.

function leftHandUp(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      elf.stance = [1, elf.stance[1], elf.stance[2], elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function leftHandDown(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      elf.stance = [0, elf.stance[1], elf.stance[2], elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightHandUp(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], 1, elf.stance[2], elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightHandDown(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], 0, elf.stance[2], elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function bothHandsUp(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      elf.stance = [1, 1, elf.stance[2], elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}
function bothHandsDown(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      elf.stance = [0, 0, elf.stance[2], elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function bothLegsOut(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], elf.stance[1], 0, 0];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function bothLegsIn(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], elf.stance[1], 1, 1];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function leftSplit(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      elf.stance = [1, 0, 0, 1];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightSplit(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      elf.stance = [0, 1, 1, 0];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function leftLegOut(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], elf.stance[1], 0, elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function leftLegIn(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], elf.stance[1], 1, elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightLegOut(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], elf.stance[1], elf.stance[2], 0];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightLegIn(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      elf.stance = [elf.stance[0], elf.stance[1], elf.stance[2], 1];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function EndPose(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      elf.stance = [1, 1, 1, 1];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function pause(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function speedUp(elf) {
  return new Promise(resolve => {
    elf.danceSpeed /= 2;
    resolve(elf);
  });
}

function speedDown(elf) {
  return new Promise(resolve => {
    elf.danceSpeed *= 2;
    resolve(elf);
  });
}

function StartPose(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      elf.stance = [0, 0, 0, 0];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function performDrive(elf) {
  return bothHandsUp(elf)
    .then(elf => bothHandsDown(elf))
    .then(elf => bothHandsUp(elf))
    .then(elf => bothHandsDown(elf));
}

function performWave(elf) {
  return leftHandUp(elf)
    .then(elf => rightHandUp(elf))
    .then(elf => leftHandDown(elf))
    .then(elf => rightHandDown(elf));
}

function fint(elf) {
  return bothLegsIn(elf).then(elf => bothLegsOut(elf));
}

function revers(elf) {
  return bothLegsIn(elf)
    .then(elf => bothHandsUp(elf))
    .then(elf => bothLegsOut(elf))
    .then(elf => bothHandsDown(elf));
}

function randomPose(elf) {
  return new Promise(resolve => {
    setTimeout(() => {
      const newStance = getRandomStance(elf);
      elf.stance = [newStance[0], newStance[1], newStance[2], newStance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function freestyle(elf) {
  return randomPose(elf)
    .then(elf => randomPose(elf))
    .then(elf => randomPose(elf))
    .then(elf => randomPose(elf))
    .then(elf => randomPose(elf))
    .then(elf => randomPose(elf));
}

function getRandomStance(elf) {
  const newStance = [0, 0, 0, 0];

  do {
    newStance[0] = Math.round(Math.random());
    newStance[1] = Math.round(Math.random());
    newStance[2] = Math.round(Math.random());
    newStance[3] = Math.round(Math.random());
  } while (newStance.every((v, i) => v == elf.stance[i]));

  return newStance;
}

function spin(elf) {
  return leftSplit(elf).then(elf => rightSplit(elf));
}
// Эта функция принимает в качестве аргумента эльфа и драгоценность, которая
// сейчас демонстрируется всем эльфам. Здесь нужно дать команду эльфу выполнить
// какую-то фигуру или команду и вернуть Promise

const gemActions = {
  Цитрин: performDrive,
  Аметист: performWave,
  Кварц: fint,
  Альмандин: leftSplit,
  Родолит: rightSplit,
  Пироп: revers,
  Спессартин: spin,
  Алмаз: leftHandUp,
  Хризолит: leftHandDown,
  Эвклаз: rightHandUp,
  Корунд: rightHandDown,
  Рубин: bothHandsUp,
  Сапфир: bothHandsDown,
  Тааффеит: bothLegsOut,
  Берилл: bothLegsIn,
  Аквамарин: leftSplit,
  Изумруд: rightSplit,
  Гелиодор: leftLegOut,
  Морганит: leftLegIn,
  Хризоберилл: rightLegOut,
  Александрит: rightLegIn,
  Гиацинт: EndPose,
  Андалузит: StartPose
};

function displayGemToElf(elf, gem) {
  let actionFunc;

  if (elf.favouriteGems.indexOf(gem) !== -1) {
    actionFunc = bothHandsUp;
  } else if (elf.dislikedGems.indexOf(gem) !== -1) {
    actionFunc = bothHandsDown;
  } else if (gemActions[gem] === undefined) {
    actionFunc = freestyle;
  } else {
    actionFunc = gemActions[gem];
  }

  return actionFunc(elf);
}

// Эта функция принимает в качестве аргумента танец всех эльфов - массив их Promis'ов,
// и драгоценность, которая сейчас демонстрируется всем эльфам.
// Возвращает также танец всех эльфов - массив их Promis'ов
function continueDance(elvesPromises, gem) {
  return elvesPromises.map(elfPromise => {
    return elfPromise.then(elf => {
      return displayGemToElf(elf, gem);
    });
  });
}
