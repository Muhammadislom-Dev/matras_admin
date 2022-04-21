import { useState } from 'react'
import './Section.scss'

const Section = ()=>{

    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    const [showEdit, setShowEdit] = useState(-1);
    const [updatedText, setUpdatedText] = useState("");

    function addItem(){

        if(!newItem) {
            alert("Press enter an item");
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem,
        }

        setItems((oldList) => [...oldList, item]);

        setNewItem("");
    }

    function deleteItem(id) {
        const newArray = items.filter((item) => item.id !== id);
        setItems(newArray);
    }

    function editItem(id, newText){

        const currentItem = items.filter((item) => item.id === id);

        const newItem = {
            id: currentItem.id,
            value:newText,
        };

        deleteItem(id);

        setItems((oldList) => [...oldList, newItem]);
        setUpdatedText("");
        setShowEdit(-1);
     }

    return(
        <div className="section">
            <input type="text"
            placeholder='Add in item..'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            />

            <button onClick={ () => addItem()  }>Add btn</button>

            <ul>
        {items.map((item) => {
          return (
            <div>
              <li key={item.id} onClick={() => setShowEdit(item.id)}>
                {item.value}
                <button
                  className="delete-button"
                  onClick={() => deleteItem(item.id)}
                >
                  ❌
                </button>
              </li>

              {showEdit == item.id ? (
                <div>
                  <input
                    type="text"
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                  <button onClick={() => editItem(item.id, updatedText)}>
                    Update
                  </button>
                </div>
              ) : null}
            </div>
          );
        })}
      </ul>

      <table className="section__table">
          <thead>
              <tr>
                  <th>Toifalar</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td></td>
              </tr>
          </tbody>
      </table>
        </div>
    )
}
export default Section