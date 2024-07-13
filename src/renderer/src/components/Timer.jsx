import React from 'react'
import InputField from './InputField'
import { useState,useEffect } from 'react';
import alarm from "../assets/sounds/alarm1.mp3"
export const Timer = ({isOverlay}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [minutes,setMinutes]=useState(1)
    const [hours,setHours]=useState(0)
    const [seconds,setSeconds]=useState(0)
    const [isActive,setisActive]=useState(false)
    const audio =new Audio(alarm)
    useEffect(()=>{

        let intervalId;
        if(isActive){
            intervalId=setInterval(()=>{
                if(seconds>0){
                    setSeconds((seconds)=>seconds-1)
                }else{
                    if(minutes===0 && hours===0){

                        audio.play()
                        clearInterval(intervalId)
                        setisActive(false)
                    }else{
                        if(minutes===0){
                            setHours((hours)=>hours-1)
                            setMinutes(59)
                        }else{
                            setMinutes((minutes)=>minutes-1)
                        }
                        setSeconds(59)
                    }
                }
            },1000)
        }else{
            clearInterval(intervalId)
        }
        return ()=> clearInterval(intervalId)
    },[isActive,hours,minutes,seconds])

    return (
    <div>
        {isEditing ?(
    <div className='flex justify-center'>      
    <div>
        <InputField 
        label={"Hours"}
        value={hours}
        onChange={(e)=>setHours(parseInt(e.target.value))}
        ></InputField>
        <InputField 
        label={"Minutes"}
        value={minutes}
        onChange={(e)=>setMinutes(parseInt(e.target.value))}
        ></InputField>
        <InputField 
        label={"Seconds"}
        value={seconds}
        onChange={(e)=>setSeconds(parseInt(e.target.value))}
        ></InputField>
        <button className='bg-blue-500 text-stone-200 px-20 py-1 rounded-xl text-xl mt-1 ml-1'
        onClick={()=>setIsEditing(false)}
        >&#10004;</button>
    </div>
    </div>  
    ):(
    <div>
    <div className='flex justify-center'>
        <h1 className='text-green-500 text-6xl'>
            {`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`}</h1>
    </div>
    <div id='timer-buttons' className='text-stone-500 flex justify-center'>
        {isActive?(
            <>
            <button className='start text-5xl text-yellow-500 m-2' onClick={()=>setisActive(false)}>||</button>
            <button className='start text-5xl text-red-500 m-2' 
            onClick={()=>{setisActive(false)
            setHours(0)
            setMinutes(0)
            setSeconds(0)    
        }   
            }>&#9632;</button>
            </>
        ):<>
            <button className='start text-5xl text-green-500 m-2' onClick={()=>setisActive(true)}>&#9658;</button>
            <button className='start text-5xl text-yellow-500 m-2' onClick={()=>setIsEditing(true)}>&#9998;</button>
        </>}
    </div>
    </div>
    )}
    </div>
  )
}
