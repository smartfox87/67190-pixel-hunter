const questsData = {
  base: {
    currentLevel: 0,
    timer: 30,
    lives: 3
  },

  answer: [],

  player: {
    answer: 0,
    correct: 0,
    wrong: 0,
    unknown: 0,
    fast: 0,
    slow: 0,
    total: 0,
    result: ``
  },

  questions: [
    {
      type: `two-of-two`,
      question: `Угадайте для каждого изображения фото или рисунок?`,
      answers: [
        {
          image: {
            url: `http://i.imgur.com/DKR1HtB.jpg`,
            width: 468,
            height: 458
          },
          type: `photo`
        },
        {
          image: {
            url: `https://k32.kn3.net/5C7060EC5.jpg`,
            width: 468,
            height: 458
          },
          type: `painting`
        }
      ],
      correctAnswer: `paint,photo`,
    },
    {
      type: `tinder-like`,
      question: `Угадай, фото или рисунок?`,
      answers: [
        {
          image: {
            url: `http://i.imgur.com/1KegWPz.jpg`,
            width: 705,
            height: 455
          },
          type: `photo`
        }
      ],
      correctAnswer: `paint`
    },
    {
      type: `one-of-three`,
      question: `Найдите рисунок среди изображений`,
      answers: [
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `photo`
        },
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `painting`
        },
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `photo`
        }
      ],
      correctAnswer: `painting`
    },
    {
      type: `one-of-three`,
      question: `Найдите рисунок среди изображений`,
      answers: [
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `photo`
        },
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `painting`
        },
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `photo`
        }
      ],
      correctAnswer: `painting`
    },
    {
      type: `tinder-like`,
      question: `Угадай, фото или рисунок?`,
      answers: [
        {
          image: {
            url: `https://i.imgur.com/DiHM5Zb.jpg`,
            width: 705,
            height: 455
          },
          type: `photo`
        }
      ],
      correctAnswer: `paint`
    },
    {
      type: `two-of-two`,
      question: `Угадайте для каждого изображения фото или рисунок?`,
      answers: [
        {
          image: {
            url: `http://i.imgur.com/1KegWPz.jpg`,
            width: 468,
            height: 458
          },
          type: `photo`
        },
        {
          image: {
            url: `https://k42.kn3.net/CF42609C8.jpg`,
            width: 468,
            height: 458
          },
          type: `painting`
        }
      ],
      correctAnswer: `paint,photo`
    },
    {
      type: `tinder-like`,
      question: `Угадай, фото или рисунок?`,
      answers: [
        {
          image: {
            url: `http://placehold.it/705x455`,
            width: 705,
            height: 455
          },
          type: `photo`
        }
      ],
      correctAnswer: `paint`
    },
    {
      type: `one-of-three`,
      question: `Найдите рисунок среди изображений`,
      answers: [
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `photo`
        },
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `painting`
        },
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `photo`
        }
      ],
      correctAnswer: `painting`
    },
    {
      type: `tinder-like`,
      question: `Угадай, фото или рисунок?`,
      answers: [
        {
          image: {
            url: `http://placehold.it/705x455`,
            width: 705,
            height: 455
          },
          type: `photo`
        }
      ],
      correctAnswer: `paint`
    },
    {
      type: `one-of-three`,
      question: `Найдите рисунок среди изображений`,
      answers: [
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `photo`
        },
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `painting`
        },
        {
          'image': {
            'url': `http://placehold.it/304x455`,
            'width': 304,
            'height': 455
          },
          'type': `photo`
        }
      ],
      correctAnswer: `painting`
    },
  ]
};

export default questsData;
