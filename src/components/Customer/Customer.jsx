import './Customer.scss'

import deletes from '../../assets/img/delete.png'

const Customer = () =>{
    return(
        <div className="customer">
            <div>
                <table className="customer__list">
                    <thead>
                        <tr className="customer__title">
                            <th className="customer__name">ID</th>
                            <th className="customer__name">Sana</th>
                            <th className='customer__name'>Telefon Raqami</th>
                            <th className='customer__name'>Qayta Aloqa</th>
                        </tr>
                    </thead>
                    <tbody className='customer__page'>
                        {
                            Array.from(new Array(5)).map(e =>(
                                <tr>
                            <td className='customer__text'>6</td>
                            <td className="customer__text">12:13- <span>12.05.2021</span></td>
                            <td className='customer__text'>+998 90 123 45 67</td>
                            <td className='customer__text'>
                                <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                                </label>
                            </td>
                            <td className='customer__texts'>
                                <img className='customer__img' src={deletes} alt="" />
                            </td>
                        </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Customer