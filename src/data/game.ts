

import type { GameDetailResponse } from "../models/game";


export const data: GameDetailResponse = {
  gameId: 'game-1',
  developerId: 'kubocker',
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
  ruleDescription: '<h1>ルールその1</h1><p></p>',
  coverImage: {
    imageId: '',
    url: 'https://ionicframework.com/docs/img/demos/card-media.png',
  },
  updatedAt: new Date(),
  developer: {
    developerId: 'aaaaaaa',
    codeName: 'kubocker',
    profileImage: {
      imageId: '',
      url: '',
    },
    biography: 'bbbbbbbbbbbb',
  }
}
