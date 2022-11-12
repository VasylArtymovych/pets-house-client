import {useLogInMutation} from 'redux/fetchUser'
import {authSelectors} from "redux/sliceAuth"
import { useSelector } from "react-redux"
export const Test=()=>{
    const [logIn]=useLogInMutation()
    const email="anjI@gmail.com"
    const name="ANJELA"
    const password="12345678"
    const city= "Gonduras" 
    const phone="+380945876635"
    logIn({email,name,password,city,phone})

    const { 
        // getUserEmail,
        getUserName,
        // getUserCity,
        // getUserPhone,
        // getToken,
        // isLogged,
        // isLoadUser,
        // isErrorServer,
        // isErrorRegistration
    }= authSelectors;

//         const nameUser= useSelector(getUserName)
// console.log(nameUser)
    return(<div><h2>ЗАДРАЛО</h2></div>)
}
