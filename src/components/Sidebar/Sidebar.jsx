import './Sidebar.scss'
import { Link } from 'react-router-dom'

import bed from '../../assets/img/bed.png'
import Home from '../Svgs/Home'
import Customer from '../Svgs/Customer'
import Technology from '../Svgs/Technology'
import Address from '../Svgs/Address'
import Message from '../Svgs/Message'
import Product from '../Svgs/Product'

const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <div className="container">
                <div className="sidebar__left">
                    <Link className="sidebar__link" to="/">
                        <img src={bed} alt="" className="sidebar__img" />
                        <h2 className='sidebar__home'>Matrassue</h2>
                    </Link>
                    <ul className="sidebar__list">
                        <li className="sidebar__item">
                            <Link className='sidebar__links' to="/">
                                <span>
                                    <Home />
                                </span>
                                <h3 className="sidebar__name">Buyurtmalar</h3>
                            </Link>
                            <Link className='sidebar__links' to="/customer">
                                <span>
                                    <Customer />
                                </span>
                                <h3 className="sidebar__name">Customers</h3>
                            </Link>
                            <Link className='sidebar__links' to="/message">
                                <span>
                                    <Message />
                                </span>
                                <h3 className="sidebar__name">Toifalar</h3>
                            </Link>
                            <Link className='sidebar__links' to="/product">
                                <span>
                                    <Product />
                                </span>
                                <h3 className="sidebar__name">Mahsulotlar</h3>
                            </Link>
                            <Link className='sidebar__links' to="/technology">
                                <span>
                                    <Technology />
                                </span>
                                <h3 className="sidebar__name">Tehnologiyalar</h3>
                            </Link>
                            <Link className='sidebar__links' to="/addres">
                                <span>
                                    <Address />
                                </span>
                                <h3 className="sidebar__name">Manzil</h3>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Sidebar