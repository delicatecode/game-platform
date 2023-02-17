/* firebase */
import { initializeApp } from 'firebase/app';

/* app */
import { environment as env } from '../../environment';



/**
 * firebase
 * @constant
 */
export const app = initializeApp(env.firebase);