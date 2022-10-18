import { deleteDoc, doc } from 'firebase/firestore';
import { createContext, useEffect } from 'react'
import { db } from '../services/firebaseConfig';



export const DeleteVideosContext = createContext({})

export const DeleteVideosProvider = ({ children }) => {

  let isYoursDeleteID

  const deletVideo = async (isYoursDeleteID) => {
    await deleteDoc(doc(db, "postsVideos", isYoursDeleteID)); 
  }

   
  return (
    <DeleteVideosContext.Provider
      value={{
        deletVideo,
        isYoursDeleteID
      }}
    >
      {children}
    </DeleteVideosContext.Provider>
  )
}
