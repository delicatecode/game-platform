
/**
 * 環境変数
 * 定義
 * @interface
 */
interface Env {
  url: string;
  api: {
    version: string;
    baseUrl: string;
  },
  newt: {
    spaceUid: string;
    appUid: string;
    apiToken: string;
    apiType: string;
    articleModelUid: string;
    categoryModelUid: string;
    page_limit: number;
  },
  firebase: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    databaseURL: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
  },
}


/**
 * 環境変数
 * @constant
 */
export const environment: Env = {
  url: '',
  api: {
    version: '',
    baseUrl: '',
  },
  newt: {
    spaceUid: import.meta.env.VITE_NEWT_SPACE_UID!,
    appUid: import.meta.env.VITE_NEWT_APP_UID!,
    apiToken: import.meta.env.VITE_NEWT_API_TOKEN!,
    apiType: import.meta.env.VITE_NEWT_API_TYPE!,
    articleModelUid: import.meta.env.VITE_NEWT_ARTICLE_MODEL_UID!,
    categoryModelUid: import.meta.env.VITE_NEWT_CATEGORY_MODEL_UID!,
    page_limit: import.meta.env.VITE_NEWT_PAGE_LIMIT!,
  },
  firebase: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY!,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN!,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID!,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL!,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID!,
    appId: import.meta.env.VITE_FIREBASE_APP_ID!,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID!,
  }
}
