import './Sidebarpage.scss'
import Search from '../../assets/img/search.png'
import Profile from '../../assets/img/Profile.png'

const Sidebarpage =() =>{
    return(
        <div className="sidebarpage">
            <div className="sidebarpage__list">
                    <div className="sidebarpage__items">
                        <input className='sidebarpage__input' type="text" placeholder='User' />
                        <img src={Search} className="sidebarpage__img" alt="" />
                    </div>
                <div className="sidebarpage__title">
                    <span className="sidebarpage__span">
                        <img src={Profile} className="sidebarpage__pic" alt="" />
                    </span>
                    <h3 className='sidebarpage__name'>
                        John Doe
                    </h3>
                </div>
            </div>
        </div>
    )
}
export default Sidebarpage