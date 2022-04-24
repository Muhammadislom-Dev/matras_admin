import './Technology.scss'

import edit from '../../assets/img/edit.png'
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

const Technology=() =>{

const [inputData, setInputData] = useState("");
const [items, setItems] = useState(getLocalItmes());

const addItem = () =>{
if(!inputData){

}
else{
setItems([...items, inputData]);
setInputData('')
}
}

const deleteItem = (id) => {
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
<div className="technology">
    <div className="technology__box">
        <table className="technology__page">
            <thead>
                <tr>
                    <th className='technology__name'>Nomlari</th>
                    <th className='technology__name'>Matn</th>
                    <th className='technology__name'>Video</th>
                </tr>
            </thead>
            <tbody className='technology__title'>
                <tr>
                    <td className="technology__names">Menory foam</td>
                    <td className="technology__names">Enim urna...</td>
                    <td className="technology__names">youtube.com</td>
                    <td className='technology__item'>
                        <button onClick={openModal} className="technology__left">
                            <img src={edit} alt="" className="technology__img" />
                        </button>
                        <button  className="technology__right">
                            <img src={deletes} alt="" className="technology__imgs" />
                        </button>
                    </td>
                </tr>

                {
                items.map((elem, ind, elems) =>{
                return(
                <tr key={ind} className="technology__box">
                    <td className='technology__names'>{elem}</td>
                    <td className='technology__names'>{elem}</td>
                    <td className='technology__names'>{elems}</td>
                    <td className='technology__item'>
                        <button  className="technology__left">
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

    <div className="technology__button">
        <button onClick={openModal} className="technology__buttons">Qo'shish</button>
    </div>

    <dialog className='technology__dialog' open={modal}>
        <div className="technology__closes">
            <button onClick={()=> setModal(!modal)} className="technology__close">
                <img src={close} alt="" />
            </button>
        </div>
        <h3 className='technology__full'>Qo'shish</h3>
        <div className="technology__list">
            <div className="technology__items">
                <p>Nomi</p>
                <input type="name" className="technology__input" placeholder='masalan:' value={inputData}
                    onChange={(e)=> setInputData(e.target.value) }
                />
            </div>
            <div className="technology__items">
                <p>Rasm</p>
                <input type="password" className="technology__input" />
            </div>
            <div className="technology__items">
                <p>Nomi</p>
                <input type="text" className="technology__input" placeholder='masalan:' value={inputData}
                    onChange={(e)=> setInputData(e.target.value) }
                />
            </div>
            <div className="technology__items">
                <p>Video</p>
                <input type="text" className="technology__input" value={inputData} onChange={(e)=>
                setInputData(e.target.value) }
                />
            </div>
        </div>

        <div className="technology__pages">
            <div className="technology__titles">
                <p className='technology__surname'>Holat</p>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>
            <div className="technology__lists">
                <button className="technology__btn" onClick={addItem}>Qo'shish</button>
            </div>
        </div>
    </dialog>
</div>
)
}

export default Technology