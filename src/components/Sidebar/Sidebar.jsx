import './Sidebar.scss'
import { Link } from 'react-router-dom'

import bed from '../../assets/img/bed.png'
import Home from '../Svgs/Home'
import Technology from '../Svgs/Technology'
import Address from '../Svgs/Address'
import Message from '../Svgs/Message'
import Product from '../Svgs/Product'
import Customer from '../../assets/img/Customer.svg'

const Sidebar = ()=>{
const handleAddClass = (evt) =>{
const links = document.querySelectorAll('.sidebar__link-active');
links.forEach(link =>{
link.classList.remove('sidebar__link-active')
})
evt.currentTarget.classList.add('sidebar__link-active')
}

return(
<div className="sidebar">
    <div className="sidebar__left">
        <Link className="sidebar__link" to="/">
        <img src={bed} alt="" className="sidebar__img" />
        <h2 className='sidebar__home'>Matrassue</h2>
        </Link>
        <div className="sidebar__list">
            <Link onClick={handleAddClass} className='sidebar__links' to="/">
            <Home />
            <h3 className="sidebar__name">Buyurtmalar</h3>
            </Link>
            <Link onClick={handleAddClass} className='sidebar__links' to="/customer">
            <img src={Customer} alt="" />
            <h3 className="sidebar__name">Customers</h3>
            </Link>
            <Link onClick={handleAddClass} className='sidebar__links' to="/message">
            <Message />
            <h3 className="sidebar__name">Toifalar</h3>
            </Link>
            <Link onClick={handleAddClass} className='sidebar__links' to="/product">
            <Product />
            <h3 className="sidebar__name">Mahsulotlar</h3>
            </Link>
            <Link onClick={handleAddClass} className='sidebar__links' to="/technology">
            <Technology />
            <h3 className="sidebar__name">Tehnologiyalar</h3>
            </Link>
            <Link onClick={handleAddClass} className='sidebar__links' to="/addres">
            <Address />
            <h3 className="sidebar__name">Manzil</h3>
            </Link>
        </div>
    </div>
</div>
)
}
export default Sidebar