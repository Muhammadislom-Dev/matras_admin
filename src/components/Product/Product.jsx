import './Product.scss'

import edit from '../../assets/img/edit.png'
import deletes from '../../assets/img/delete.png'
import close from '../../assets/img/close.png'
import vector from '../../assets/img/Vector.png'
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

const Product = () =>{

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



const [modal, setModal] = useState(false);

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
                            <img src={deletes} alt="" />
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
                        <button  className='product__right'>
                            <img src={deletes} alt="" />
                        </button>
                    </td>
                </tr>
                {
                items.map((elem, ind) =>{
                return(
                <tr key={ind} className="product__title">
                    <td className='product__names'>{elem}</td>
                    <td className='product__names'>{elem}</td>
                    <td className='product__names'>{elem}</td>
                    <td className='product__names'>{elem}</td>
                    <td className='product__names'>{elem}</td>
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
                        <button onClick={() => deleteItem(ind)} className='product__right'>
                            <img src={deletes} alt="" />
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

    <dialog className='product__dialog' open={modal}>
        <div className="home__closes">
            <button onClick={()=> setModal(!modal)} className="home__close">
                <img src={close} alt="" />
            </button>
        </div>
        <h3>Qo'shish</h3>
        <div className="product__box">
            <button type='file' className='product__file'>
                <img src={vector} alt="" />
            </button>
            <div className="product__aside">
                <p>Toifalar</p>
                <select onChange={(e)=> setInputData(e.target.value) } className='product__select' name="" id=""
                    placeholder='masalan:'>
                    <option value="">Model C</option>
                    <option value="">Model A</option>
                    <option value="">Model B</option>
                </select>
                <p>Tovar nomi</p>
                <input onChange={(e)=> setInputData(e.target.value) } className='product__input' type="text"
                placeholder='masalan:' />
                <p>Narxi</p>
                <input onChange={(e)=> setInputData(e.target.value) } className='product__input' type="number"
                placeholder='masalan:20000' />
                <p>Yuklama</p>
                <input onChange={(e)=> setInputData(e.target.value) } type="number" className='product__input'
                placeholder='masalan:200kg' />
            </div>
            <div className="product__aside">
                <p>Razmeri</p>
                <input onChange={(e)=> setInputData(e.target.value) } className='product__input' type="text"
                placeholder='masalan:200x140x40' />
                <p>Kafolat</p>
                <input className='product__input' type="number" placeholder='masalan:' />
                <p>Sig'im</p>
                <input className='product__input' type="number" placeholder='masalan:20000' />
                <p>Aksiya narxi</p>
                <input type="number" className='product__input' placeholder='masalan:200kg' />
            </div>
            <div className="product__asides">
                <p>Ma'lumot</p>
                <textarea placeholder='info' name="" id="">
                    info
                </textarea>
                <div className="product__item">
                    <p>New</p>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                </div>
                <div className="product__item">
                    <p>New</p>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                </div>
                <button onClick={addItem} className='product__btn'>Qo'shish</button>
            </div>
        </div>
    </dialog>
</div>
)
}

export default Product