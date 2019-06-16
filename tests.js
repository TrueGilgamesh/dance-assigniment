describe('Эльф должен делать простые движения', function() {
  it('поднять левую руку', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 0, 0]
    };

    leftHandUp(elf).then(elf => {
      expect(elf.stance).toEqual([1, 0, 0, 0]);
      done();
    });
  });

  it('опустить левую руку', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [1, 0, 0, 0]
    };

    leftHandDown(elf).then(elf => {
      expect(elf.stance).toEqual([0, 0, 0, 0]);
      done();
    });
  });

  it('поднять правую руку', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 0, 0]
    };

    rightHandUp(elf).then(elf => {
      expect(elf.stance).toEqual([0, 1, 0, 0]);
      done();
    });
  });

  it('опустить правую руку', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 1, 0, 0]
    };

    rightHandDown(elf).then(elf => {
      expect(elf.stance).toEqual([0, 0, 0, 0]);
      done();
    });
  });
  it('поднять обе руки вверх', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 0, 0]
    };

    bothHandsUp(elf).then(elf => {
      expect(elf.stance).toEqual([1, 1, 0, 0]);
      done();
    });
  });

  it('опустить обе руки', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [1, 1, 0, 0]
    };

    bothHandsDown(elf).then(elf => {
      expect(elf.stance).toEqual([0, 0, 0, 0]);
      done();
    });
  });

  it('выставить обе ноги', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 1, 1]
    };

    bothLegsOut(elf).then(elf => {
      expect(elf.stance).toEqual([0, 0, 0, 0]);
      done();
    });
  });

  it('согнуть обе ноги', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 0, 0]
    };

    bothLegsIn(elf).then(elf => {
      expect(elf.stance).toEqual([0, 0, 1, 1]);
      done();
    });
  });

  it('выставить левую ногу и поднять левую  руку', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 0, 0]
    };

    leftSplit(elf).then(elf => {
      expect(elf.stance).toEqual([1, 0, 0, 1]);
      done();
    });
  });

  it('выставить правую ногу и поднять правую  руку', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 0, 0]
    };

    rightSplit(elf).then(elf => {
      expect(elf.stance).toEqual([0, 1, 1, 0]);
      done();
    });
  });

  it('выставить левую ногу', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 1, 0]
    };

    leftLegOut(elf).then(elf => {
      expect(elf.stance).toEqual([0, 0, 0, 0]);
      done();
    });
  });

  it('согнуть левую ногу', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 0, 0]
    };

    leftLegIn(elf).then(elf => {
      expect(elf.stance).toEqual([0, 0, 1, 0]);
      done();
    });
  });

  it('выставить правую ногу', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 0, 1]
    };

    rightLegOut(elf).then(elf => {
      expect(elf.stance).toEqual([0, 0, 0, 0]);
      done();
    });
  });

  it('согнуть правую ногу', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 0, 0]
    };

    rightLegIn(elf).then(elf => {
      expect(elf.stance).toEqual([0, 0, 0, 1]);
      done();
    });
  });

  it('после выпалнения драйва обе руки должны быть опущены', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 0, 0]
    };

    performDrive(elf).then(elf => {
      expect(elf.stance).toEqual([0, 0, 0, 0]);
      done();
    });
  });

  it('после выпалнения волны обе руки должны быть опущены', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 0, 0]
    };

    performWave(elf).then(elf => {
      expect(elf.stance).toEqual([0, 0, 0, 0]);
      done();
    });
  });

  it('после выпалнения финта обе ноги должны быть выставлены', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 0, 0]
    };

    fint(elf).then(elf => {
      expect(elf.stance).toEqual([0, 0, 0, 0]);
      done();
    });
  });

  it('Должен поднять руки и согнуть ноги', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 0, 0]
    };

    EndPose(elf).then(elf => {
      expect(elf.stance).toEqual([1, 1, 1, 1]);
      done();
    });
  });
  it('Должен опустить руки и выставить ноги', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 0, 0]
    };

    StartPose(elf).then(elf => {
      expect(elf.stance).toEqual([0, 0, 0, 0]);
      done();
    });
  });

  it('после выпалнения реверса эльф должен находиться в изначальной позиции', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 1, 1]
    };

    revers(elf).then(elf => {
      expect(elf.stance).toEqual([0, 0, 0, 0]);
      done();
    });
  });

  it('Должен возвращать промис и проверять что хотябы одно значение измениться', function(done) {
    let elf = {
      danceSpeed: 10,
      stance: [0, 0, 0, 0]
    };
    const elfStance = getRandomStance(elf);
    expect(elfStance instanceof Array).toBe(true);
    expect(elfStance.every((v, i) => v === elf.stance[i])).toBe(false);
    done();
  });
});

describe('Должно показывать камни и проверять есть ли для него движения', function() {
  // it('вызов этой функции с камнем для  которого нет фигур должен кидать исключение', function(done) {
  //   let elf = {};
  //   expect(function() {
  //     displayGemToElf(elf, 'Гринцинкорий');
  //   }).toThrowError();
  //   done();
  // });

  it('эльф должен поднять руки вверх, если любимый камень', function(done) {
    let elf = {
      danceSpeed: 200,
      stance: [0, 0, 0, 0],
      favouriteGems: [allGems[1]],
      dislikedGems: [allGems[0]]
    };

    displayGemToElf(elf, allGems[1]).then(elf => {
      expect(elf.stance).toEqual([1, 1, 0, 0]);
      done();
    });
  });

  it('эльф должен опустить руки вниз, если нелюбимый камень', function(done) {
    let elf = {
      danceSpeed: 200,
      stance: [1, 1, 0, 0],
      favouriteGems: [allGems[1]],
      dislikedGems: [allGems[0]]
    };

    displayGemToElf(elf, allGems[0]).then(elf => {
      expect(elf.stance).toEqual([0, 0, 0, 0]);
      done();
    });
  });
});
