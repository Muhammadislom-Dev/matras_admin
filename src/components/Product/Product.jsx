import './Product.scss'

import edit from '../../assets/img/edit.png'
import deletes from '../../assets/img/delete.png'

const Product = () =>{
    return(
        <div className="product">
            <div className="product__page">
                <table className='product__table'>
                    <thead>
                        <tr className='product__list'>
                            <th className='product__name'>Mahsulot nomlari</th>
                            <th className='product__name'>Toifalar</th>
                            <th className='product__name'>Narxi</th>
                            <th className='product__name'>Yuklama</th>
                            <th className='product__name'>Razmeri</th>
                            <th className='product__name'>Status</th>
                        </tr>
                    </thead>
                    <tbody className='product__title'>
                        <tr>
                            <td className='product__names'>Lux Soft Memory</td>
                            <td className='product__names'>Model C</td>
                            <td className='product__names'>1 600 000 so'm</td>
                            <td className='product__names'>150kg</td>
                            <td className='product__names'>200x134x40</td>
                            <td className='product__names'>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </td>
                            <td className='product__titles'>
                                <button className="product__left">
                                    <img src={edit} alt="" />
                                </button>
                                <button className='product__right'>
                                    <img src={deletes}  alt="" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='product__names'>Lux Soft Memory</td>
                            <td className='product__names'>Model C</td>
                            <td className='product__names'>1 600 000 so'm</td>
                            <td className='product__names'>150kg</td>
                            <td className='product__names'>200x134x40</td>
                            <td className='product__names'>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </td>
                            <td className='product__titles'>
                                <button className="product__left">
                                    <img src={edit} alt="" />
                                </button>
                                <button className='product__right'>
                                    <img src={deletes}  alt="" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Product