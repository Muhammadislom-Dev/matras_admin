import './Home.scss'
import { useEffect, useState } from 'react'

import place from '../../assets/img/place.png'
import edit from '../../assets/img/edit.png'
import deletes from '../../assets/img/delete.png'
import close from '../../assets/img/close.png'
import vector from '../../assets/img/Vector.png'

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

const Home = () =>{

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
<div className="home">
    <div className="home__page">
        <table className="home__pages">
            <thead>
                <tr className="home__list">
                    <th className="home__name">Manzil</th>
                    <th className="home__name">Matn</th>
                    <th className="home__name">Location</th>
                </tr>
            </thead>
            <tbody className='home__title'>
                <tr>
                    <td className="home__names">Toshkent, Parkent</td>
                    <td className="home__names">Mo'ljal, Qoraqamish..</td>
                    <td className='home__names'>
                        <img src={place} alt="" />
                    </td>
                    <td className='technology__item'>
                        <button className="technology__left">
                            <img src={edit} alt="" className="technology__img" />
                        </button>
                        <button className="technology__right">
                            <img src={deletes} alt="" className="technology__imgs" />
                        </button>
                    </td>
                </tr>
                {
                items.map((elem, ind) => {
                return(
                <tr key={ind}>
                    <td className='home__names'>{elem}</td>
                    <td className='home__names'>{elem}</td>
                    <td className='home__names'><img src={place} alt="" /></td>
                    <td className='technology__item'>
                        <button className="technology__left">
                            <img src={edit} alt="" className="technology__img" />
                        </button>
                        <button className="technology__right" onClick={() => deleteItem(ind)}>
                            <img src={deletes} alt="" className="technology__imgs" />
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

    <dialog open={modal} className='home__dialog'>
        <div className="home__closes">
            <button onClick={()=> setModal(!modal)} className="home__close">
                <img src={close} alt="" />
            </button>
        </div>
        <h3>Tahrirlash</h3>
        <div className="home__left">
            <button type='file' className='home__file'>
                <img className='home__img' src={vector} alt="" />
            </button>
            <div className="home__right">
                <div className="home__item">
                    <p>Manzil</p>
                    <input value={inputData} onChange={(e)=> setInputData(e.target.value) } className='home__input'
                    type="text" />
                </div>
                <div className="home__item">
                    <p>Location</p>
                    <input value={inputData} onChange={(e)=> setInputData(e.target.value) } className='home__input'
                    type="text" />
                </div>
                <div className="home__items">
                    <p>Holat</p>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            <div className="home__rights">
                <p>Matn</p>
                <textarea className='home__surname' placeholder='Izoh' required></textarea>
            </div>
        </div>
        <button className='home__btns' onClick={addItem}>Saqlash</button>
    </dialog>
</div>
)
}
export default Home