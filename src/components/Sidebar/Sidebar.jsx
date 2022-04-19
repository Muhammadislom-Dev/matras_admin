import './Sidebar.scss'
import { Link } from 'react-router-dom'

import bed from '../../assets/img/bed.png'
import Home from '../Svgs/Home'

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
                            <Link>
                                <span>
                                    <Home />
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Sidebar