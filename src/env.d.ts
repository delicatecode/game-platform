/// <reference types="vite/client" />



/**
 * @interface
 */
interface ImportMetaEnv {
    readonly VITE_ENV: string;

    readonly VITE_NEWT_SPACE_UID: string;
    readonly VITE_NEWT_APP_UID: string;
    readonly VITE_NEWT_API_TOKEN: string;
    readonly VITE_NEWT_API_TYPE: string;
    readonly VITE_NEWT_ARTICLE_MODEL_UID: string;
    readonly VITE_NEWT_CATEGORY_MODEL_UID: string;
    readonly VITE_NEWT_PAGE_LIMIT: number;
  
    readonly VITE_FIREBASE_APIKEY: string;
    readonly VITE_FIREBASE_AUTHDOMAIN: string;
    readonly VITE_FIREBASE_PROJECTID: string;
    readonly VITE_FIREBASE_STORAGEBUCKET: string;
    readonly VITE_FIREBASE_MESSAGINGSENDERID: string;
    readonly VITE_FIREBASE_APPID: string;
    readonly VITE_FIREBASE_MEASUREMENTID: string;

    readonly VITE_WEMODEL_API_VERSION: string;
    readonly VITE_WEMODEL_API_URL: string;

    readonly VITE_MODELUSER_PUBLICURL: string;
  }
  
  
  /**
   * @interface
   */
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  