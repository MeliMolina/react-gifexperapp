import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    
    /*const handleAdd = () => {
    
        //setCategories([...categories, 'HunterXHunter']);
        //cats es el valor anterior (El estado anterior) y luego debe regresar el nuevo estado
        setCategories(cats => [...cats, 'HunterXHunter']);
    }*/
    
    return (
      <>
       <h2>ChilliDogs App</h2>
       <AddCategory setCategories={setCategories}/>
        <hr />

        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                    key={category}
                    category={category}/>
                ))
            }
        </ol>
      </>
   
  )
}
export default GifExpertApp;
