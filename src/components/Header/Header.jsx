// import { useEffect, useState } from 'react'
import './Header.scss'


const Header = () =>{
    // const [data, setData] = useState([]);
    // useEffect (async () =>{
    //     fetch(`https://jsonplaceholder.typicode.com/users`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [])


return(
<div className="header">
    <div>
        <table className="header__page">
            <thead>
                <tr className='header__list'>
                    <th className='header__name'>ID</th>
                    <th className='header__name'>Ismi</th>
                    <th className='header__name'>Telefon raqami</th>
                    <th className='header__name'>Mahsulot Nomlari</th>
                    <th className='header__name'>Miqdor</th>
                    <th className='header__name'>Qayta Aloqa</th>
                </tr>
            </thead>
            <tbody className='header__title'>
                {
                    Array.from(new Array(10)).map(e =>(
                <tr>
                    <td className='header__names'>6</td>
                    <td className='header__names'>Jenny Wilson</td>
                    <td className='header__names'>+998 90 123 45 67</td>
                    <td className='header__names'>Ortopedik Eko matras</td>
                    <td className='header__names'>4</td>
                    <td className='header__names'>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
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
export default Header