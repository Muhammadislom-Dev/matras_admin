
import './Header.scss'


const Header = ({items}) =>{
    // const [data, setData] = useState([]);

    // const getOrders = async() =>{
    //     let token = window.localStorage.getItem("token")

    //     let response = await fetch(constants.API_URL+"/v1/orders", {
    //         method: "GET",
    //         headers:{
    //             "Content-Type": "application/json",
    //             "Authorization": token
    //         }
    //     })
    //     response = await response.json();
    //     if(response?.data.order){
    //         setData(response?.data.order)
    //     }
    // }

    //  const deleteCustomerService = async(id) => {
    //     let token = window.localStorage.getItem("token") 
	// 	let response = await fetch(constants.API_URL+`/v1/customers/delete/${id}`,{
	// 		method: "DELETE", 
	// 		headers: {
	// 			"Content-Type": "application/json",
    //             "Authorization": token
	// 		}
	// 	})  

    //     response = await response.json();
    //     // console.log(response);
    //     if(response.ok == true) {
            
    //         getOrders()
    //     }
    // }

    // useEffect(async () => {
    //    await getOrders()  
    // }, []) 

    return(
        <div className="header">
            
                            
                            
                            
                            {/* <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                            </label> */}
        </div>




    )
}
export default Header