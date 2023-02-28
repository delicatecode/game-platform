import type { GameResponse } from "../models/game";


export const data: GameResponse[] = [
  {
    gameId: 'game-1',
    title: 'じゃんけん',
    thumbnailImage: {
      imageId: '',
      url: 'https://ionicframework.com/docs/img/demos/card-media.png',
    },
    category: {
      name: '',
      slug: ''
    },
    subTitle: 'シンプルじゃんけんゲームです',
    url: 'https://first-feather.surge.sh',
    developer: {
      developerId: 'aaaaaaa',
      codeName: 'kubocker',
      profileImage: {
        imageId: '',
        url: '',
      },
      biography: 'bbbbbbbbbbbb',
    }
  },
  {

    gameId: 'game-2',
    title: 'ポーカー',
    thumbnailImage: {
      imageId: '',
      url: 'https://ionicframework.com/docs/img/demos/card-media.png',
    },
    category: {
      name: '',
      slug: ''
    },
    subTitle: '',
    url: '',
    developer: {
      developerId: 'aaaaaaa',
      codeName: 'kubocker',
      profileImage: {
        imageId: '',
        url: '',
      },
      biography: 'bbbbbbbbbbbb',
    }
  },
  {

    gameId: 'game-3',
    title: 'ハイアンドロー',
    thumbnailImage: {
      imageId: '',
      url: 'https://ionicframework.com/docs/img/demos/card-media.png',
    },
    category: {
      name: '',
      slug: ''
    },
    subTitle: '',
    url: '',
    developer: {
      developerId: 'bbbbbbbb',
      codeName: 'shinriyo',
      profileImage: {
        imageId: '',
        url: '',
      },
      biography: 'ccccccccccccccccc',
    }
  }
]
