import React,{ useState, useEffect} from 'react';
import { useSelector } from 'react-redux'
import Loader from '../utils/loader';



const authGuard = (ComposedComponent) => {
    const AuthenticationCheck = (props) => {
        const [isAuth,setIsAuth] = useState(false);
        const users  = useSelector( state => state.users );
        const tickets = useSelector( state => state.tickets )

        useEffect(()=>{
            if(!users.auth){
                props.history.push('/')
            }else{
                setIsAuth(true);
            }
        },[props,users]);


        if(!isAuth){
            return(
                <Loader full={true}/>
            )
        } else {
            return(
                <ComposedComponent users={users} tickets={tickets}  {...props}/>
            )
        }

    }
    return AuthenticationCheck;
}

export default authGuard;