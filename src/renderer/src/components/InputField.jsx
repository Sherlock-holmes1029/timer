import React from 'react'

export default function InputField({label,value,onChange,placeHolder}) {

    const handleInput=(e)=>{
        const inputValue =e.targert.value;
        if(/^\d+$/.test(inputValue)){
             onChange(e);
        }
    }

  return (
    <div className='text-3xl'>
    <label className='text-stone-300'>{label}:</label>    
    <input 
    type="number" 
    value={value} 
    min={0}
    onChange={onChange} 
    placeholder={placeHolder}
    className='w-20 bg-transparent text-blue-400'
    />
    </div>
  )
}
