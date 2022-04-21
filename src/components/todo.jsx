import React, { useEffect, useState } from "react";
import './Customer/Customer.scss'

import plus from '.././assets/img/plus.png'
import deletee from '.././assets/img/deletes.png'

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

const Todo = () =>{

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

    return(
        <>
          <div className="main-div">
              <div className="child-div">
                  <figure>
                      <figcaption>Add your List Here</figcaption>
                  </figure>

                  <div className="addItems">
                      <input type="text" placeholder="Add items..." 
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value) }
                      />
                      <i className="fas fa-plus add-btn" title="Add item" onClick={addItem}>
                          <img className="delete" src={plus} alt="" />
                      </i>
                  </div>

                  <div className="showItems">

                      {
                          items.map((elem, ind) => {
                              return(
                                <div className="eachItem" key={ind}>
                                    <h3>{elem}</h3>
                                    <i className="far fa-trash-alt add-btn" title="delete Item" 
                                       onClick={() => deleteItem(ind)}>
                                        <img className="delete" src={deletee} alt="" />
                                    </i>
                                </div>
                              )
                          })
                      }
                  </div>

                  <div className="showItems">
                      <button className="btn" data-sm-link-text="Remove All" onClick={removeAll} > Check List</button>
                  </div>
              </div>
          </div>
        </>
    )
}
export default Todo