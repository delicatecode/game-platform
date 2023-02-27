/* firebase */
import {
  collection,
  getDocs,
  getFirestore,
  query,
} from 'firebase/firestore';

/* app */
import supabase from '../lib/supabase/client';
import { app } from '../lib/firebase/client';
import type { GameResponse } from '../models/game';
import type { GamePresenter } from "../presenters/game";
import type { Game } from "../types/game";



const col = 'games';



export default class GameRepository implements GamePresenter {

  constructor () {}


  getAll (): Promise<Game[]> {
    const fs = getFirestore(app);
    return new Promise(async (resolve, reject) => {
      // const { data, error} = await supabase
      //   .from('Game')
      //   .select()
      // if (error) {
      //   console.log(error)
      //   reject(error)
      // } else {
      //   console.log(data)
      //   const items = data as Game[];
      //   resolve(items)
      // }
      try {
        const colRef = await collection(fs, col)
        const q = await query(
          colRef,
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.docs.length <= 0) {
          resolve([])
        } else {
          const data = await querySnapshot.docs.map(doc => doc.data());
          resolve(data as Game[]);
        }

      } catch (err) {
        reject(err);
      }
    })
  }

  get (gameId: string): Promise<Game> {
    const fs = getFirestore(app);
    return new Promise(async (resolve, reject) => {
      const { data, error } = await supabase
        .from("Game")
        .select()
        .match({ gameId })
        .single()
      if (error) {
        reject(error)
      } else {
        resolve(data as Game)
      }
    })
  }
}
