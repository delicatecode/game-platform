import { app } from "$lib/firebase/client";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import type { Developer } from "../types/developer";



interface IDeveloperRepository {
  getAll: () => void;
}



const col = 'developers'



export default class DeveloperRepository implements IDeveloperRepository {
  constructor () {}


  getAll () {}


  get (developerId: string): Promise<Developer> {
    const fs = getFirestore(app);
    return new Promise(async (resolve, reject) => {
        const docRef = await doc(fs, `${col}/${developerId}`)
        const res = await getDoc(docRef);
        if (res.exists()) {
          const data = await res.data() as Developer;
          resolve(data)
        } else {
          resolve({
            developerId: '',
            fullNanme: '',
            codeName: '',
            profileImage: {
              imageId: '',
              url: '',
            },
            biography: '',
            stripe: []
          })
        }
    })
  }

}
