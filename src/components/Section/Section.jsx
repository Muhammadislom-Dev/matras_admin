import './Section.scss'

import deletes from '../../assets/img/delete.png'
import { useState } from 'react'

const Section =() =>{

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
           </tbody>
         </table>
      </div>

      <div className="section__button">
         <button className="section__buttons">
            Qo'shish
         </button>
      </div>
    </div>
  )
}
export default Section