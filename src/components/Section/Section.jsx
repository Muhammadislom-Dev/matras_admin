import './Section.scss'

import deletes from '../../assets/img/delete.png'
import close from '../../assets/img/close.png'
import { useState, useEffect } from 'react'

const getLocalItmes = () =>{
  let list = localStorage.getItem('lists')
  console.log(list);

  if(list){
      return JSON.parse(localStorage.getItem('lists'));
  }
  else{
      return [];
  }
}

const Section =() =>{


  const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalItmes());

    const addItem = () =>{
        if(!inputData){

        }

        else{
            setItems([...items, inputData]);
            setInputData('')
        }

        
    }

    const deleteItem = (id) =>{
        console.log(id);
        const updatedItems = items.filter((elem, ind) => {
            return ind != id; 
        });

        setItems(updatedItems)
    }

    const removeAll = () =>{
        setItems([]);
    }
   
    useEffect(() =>{
        localStorage.setItem('lists', JSON.stringify(items))
    }, [items])



  const  [modal, setModal] = useState(false);

  const openModal = (e) =>{
    e.preventDefault()
    setModal(!modal)
  }

  const todo = (event) =>{
    event.preventDefault()

    setModal(!modal)
     
    event.target[0].value = null;
    event.target[1].value = null;

    console.log(event.target[0].value);
  }

  return(
    <div className="section">
      <div className="section__pages">
         <table className='section__page'>
           <thead>
             <tr className='section__list'>
               <th className='section__name'>Toifalar</th>
             </tr>
           </thead>
           <tbody className='section__title'>
              <tr>
                <td className='section__names'>Model C</td>
                <td className='section__btns'>
                  <button className='section__btn'>
                    <img className='section__img' src={deletes} alt="" />
                  </button>
                </td>
              </tr>
              <tr className='section__title'>
                <td className='section__names'>Model C</td>
                <td className='section__btns'>
                  <button className='section__btn'>
                    <img className='section__img' src={deletes} alt="" />
                  </button>
                </td>
              </tr>
              
                {
                  items.map((elem, ind) => {
                    return(
                        <tr key={ind} className='section__title'>
                         <td className='section__names'>{elem}</td>
                         <td className='section__btns'>
                            <button onClick={() => deleteItem(ind)} className="section__btn">
                              <img className='section__img' src={deletes} alt="" />
                            </button>
                         </td>
                         </tr>
                    )
                  })
                }
           </tbody>
         </table>
      </div>
      <div className="section__button">
         <button onClick={openModal} className="section__buttons">
            Qo'shish
         </button>
      </div>

      <dialog open={modal} className="section__dialog">
           <div className="section__closes">
              <button onClick ={() => setModal(!modal)} className='section__close'>
                  <img src={close} alt="" />
              </button>        
           </div>
           
           <h3 className='section__full'>Qo'shish</h3>
           <p>Kategoriya nomi</p>
           <input 
           value={inputData}
           onChange={(e) => setInputData(e.target.value) }
           className='section__input' type="text" placeholder='masalan:model B' />

           <div className="section__left">
             <p className="section__surname">Holat</p>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
           </div>

           <button className="section__right"   onClick={addItem}>Qo'shish</button>
      </dialog>
    </div>
  )
}
export default Section