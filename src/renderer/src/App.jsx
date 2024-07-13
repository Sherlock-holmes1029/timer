import TopBar from './components/TopBar'
import { useState,useEffect } from 'react'
import { Timer } from './components/Timer'

function App() {
  // const [isOverlay,setisOverlay]=useState(false)

  // useEffect(()=>{

  //   window.electrom.ipcRenderer.on("overlay-mode",()=>{
  //     setisOverlay((prevState)=>!prevState)
  //   })

  //   return ()=>{
  //     window.electron.icpRenderer.removeAllListeners("overlay-mode")
  //   }

  // },[])



  return (
    <>
    <TopBar></TopBar>
    <div className='bg-black bg-opacity-40 p-2 rounded-b-xl'>
     <Timer></Timer>
     </div>
    </>
  )
}

export default App

