import './Home.scss'

import place from '../../assets/img/place.png'

const Home = () =>{
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home