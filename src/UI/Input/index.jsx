import React from 'react'
import s from './style.module.sass'

export default function Input(props) {
  return (
    <input 
        className={s.input}
        {...props}
    />
  )
}
