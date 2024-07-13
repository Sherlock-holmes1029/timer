import React from 'react'

export default function TopBar() {

    const handleClose=()=>{
        window.electron.ipcRenderer.send("close-window")
    }
    const handleMinimize=()=>{
        window.electron.ipcRenderer.send("minimize-window")
    }

  return (
    <>
    {/* the code in the style to make the top bar dragable (drag the hole window) */}
    <div className='rounded-t-xl bg-blue-400  bg-opacity-80 w-screen h-6 flex justetify-between'>
        <div className='w-5/6'style={{webkitAppRegion:"drag"}} ></div>
        <div id="control-buttons" className='text-stone-200 w-1/6 '>
        <button id="minimize" className='bg-blue-500 w-1/2 bg-opacity-60 hover:bg-opacity-100' onClick={handleMinimize}>&#128469;</button>
        <button id='close' className='bg-red-500 w-1/2 rounded-tr-xl bg-opacity-60 hover:bg-opacity-100' onClick= {handleClose}>&#x2715;</button>
        </div>
        </div>
</>
  )
}

