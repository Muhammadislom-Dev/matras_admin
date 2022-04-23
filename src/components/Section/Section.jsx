import './Section.scss'

import deletes from '../../assets/img/delete.png'

const Section =() =>{
  return(
    <div className="section">
      <div className="section__page">
         <table className='section__table'>
           <thead>
             <tr className='section__list'>
               <th className='section__name'>Toifalar</th>
             </tr>
           </thead>
           <tbody className='section__tbody'>
              <tr className='section__title'>
                <td className='section__text'>Model C</td>
                <td>
                  <button className='section__btn'>
                    <img src={deletes} alt="" />
                  </button>
                </td>
              </tr>
              <tr className='section__title'>
                <td className='section__text'>Model C</td>
                <td>
                  <button className='section__btn'>
                    <img src={deletes} alt="" />
                  </button>
                </td>
              </tr>
           </tbody>
         </table>
      </div>
    </div>
  )
}
export default Section