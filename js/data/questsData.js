const questsData = {
  base: {
    currentLevel: 0,
    timer: 30,
    lives: 3
  },

  answer: [],

  player: {
    correct: 0,
    wrong: 0,
    fast: 0,
    slow: 0,
    total: 0,
    result: ``
  },

  questions: [
    {
      type: 'two-of-two',
      question: 'Угадайте для каждого изображения фото или рисунок?',
      answers: [
        {
          image: {
            url: 'http://placehold.it/468x458',
            width: 468,
            height: 458
          },
          type: 'photo'
        },
        {
          image: {
            url: 'http://placehold.it/468x458',
            width: 468,
            height: 458
          },
          type: 'painting'
        }
      ],
    },
    {
      type: 'tinder-like',
      question: 'Угадай, фото или рисунок?',
      answers: [
        {
          image: {
            url: 'http://placehold.it/705x455',
            width: 705,
            height: 455
          },
          type: 'photo'
        }
      ]
    },
    {
      type: 'one-of-three',
      question: 'Найдите рисунок среди изображений',
      answers: [
        {
          'image': {
            'url': 'http://placehold.it/304x455',
            'width': 304,
            'height': 455
          },
          'type': 'photo'
        },
        {
          'image': {
            'url': 'http://placehold.it/304x455',
            'width': 304,
            'height': 455
          },
          'type': 'painting'
        },
        {
          'image': {
            'url': 'http://placehold.it/304x455',
            'width': 304,
            'height': 455
          },
          'type': 'photo'
        }
      ]
    },
    {
      type: 'one-of-three',
      question: 'Найдите рисунок среди изображений',
      answers: [
        {
          'image': {
            'url': 'http://placehold.it/304x455',
            'width': 304,
            'height': 455
          },
          'type': 'photo'
        },
        {
          'image': {
            'url': 'http://placehold.it/304x455',
            'width': 304,
            'height': 455
          },
          'type': 'painting'
        },
        {
          'image': {
            'url': 'http://placehold.it/304x455',
            'width': 304,
            'height': 455
          },
          'type': 'photo'
        }
      ]
    },
    {
      type: 'tinder-like',
      question: 'Угадай, фото или рисунок?',
      answers: [
        {
          image: {
            url: 'http://placehold.it/705x455',
            width: 705,
            height: 455
          },
          type: 'photo'
        }
      ]
    },
    {
      type: 'two-of-two',
      question: 'Угадайте для каждого изображения фото или рисунок?',
      answers: [
        {
          image: {
            url: 'http://placehold.it/468x458',
            width: 468,
            height: 458
          },
          type: 'photo'
        },
        {
          image: {
            url: 'http://placehold.it/468x458',
            width: 468,
            height: 458
          },
          type: 'painting'
        }
      ],
    },
    {
      type: 'tinder-like',
      question: 'Угадай, фото или рисунок?',
      answers: [
        {
          image: {
            url: 'http://placehold.it/705x455',
            width: 705,
            height: 455
          },
          type: 'photo'
        }
      ]
    },
    {
      type: 'one-of-three',
      question: 'Найдите рисунок среди изображений',
      answers: [
        {
          'image': {
            'url': 'http://placehold.it/304x455',
            'width': 304,
            'height': 455
          },
          'type': 'photo'
        },
        {
          'image': {
            'url': 'http://placehold.it/304x455',
            'width': 304,
            'height': 455
          },
          'type': 'painting'
        },
        {
          'image': {
            'url': 'http://placehold.it/304x455',
            'width': 304,
            'height': 455
          },
          'type': 'photo'
        }
      ]
    },
    {
      type: 'tinder-like',
      question: 'Угадай, фото или рисунок?',
      answers: [
        {
          image: {
            url: 'http://placehold.it/705x455',
            width: 705,
            height: 455
          },
          type: 'photo'
        }
      ]
    },
    {
      type: 'one-of-three',
      question: 'Найдите рисунок среди изображений',
      answers: [
        {
          'image': {
            'url': 'http://placehold.it/304x455',
            'width': 304,
            'height': 455
          },
          'type': 'photo'
        },
        {
          'image': {
            'url': 'http://placehold.it/304x455',
            'width': 304,
            'height': 455
          },
          'type': 'painting'
        },
        {
          'image': {
            'url': 'http://placehold.it/304x455',
            'width': 304,
            'height': 455
          },
          'type': 'photo'
        }
      ]
    },
  ]
};

export default questsData;
