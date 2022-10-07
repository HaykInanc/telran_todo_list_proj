import React, { useContext } from 'react';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import s from './style.module.sass';
import { Context } from '../../context';

export default function SearchForm() {
  const { setSearchWord } = useContext(Context);

  const change = event => setSearchWord(event.target.value);

  return (
    <div className={s.container}>
        <form >
            <Input 
              onChange={ change }
              placeholder='Название' 
              name='search' 
            />
        </form>
    </div>
  )
}
