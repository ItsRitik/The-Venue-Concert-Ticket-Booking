import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import Loader from 'components/utils/loader';
import { errorHelper } from '../utils/tools'
import { useDispatch, useSelector } from 'react-redux';
import { userRegister, userSignIn } from '../../store/actions/user.actions';
import { TextField , Button } from '@mui/material';


const AuthForm = (props) => {
    const notifications = useSelector(state=> state.notifications);
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{ firstname:'', lastname:'',email:'',password:'' },
        validationSchema:Yup.object({
            email:Yup.string()
            .required('Sorry the email is required')
            .email('This is an invalid email'),
            password:Yup.string()
            .required('Sorry the password is required')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                'Password must contain at least 8 characters, one letter, and one number'
            ),

        }),
        onSubmit:( values)=>{
            // setLoading(true);
            handleSubmit(values)
        }
    })


    const handleSubmit = (values) => {

        if(props.formType){
            dispatch(userRegister(values))
        } else {
            dispatch(userSignIn(values))
        }

    }


    useEffect(()=>{
        if(notifications && notifications.success){
            props.history.push('/')
        } else{
            setLoading(false);
        }
    },[notifications,props.history])


    return(
        <>  
           <div className="auth_container">

{ loading ?
    <Loader/>
    :
    <form className="mt-3" onSubmit={formik.handleSubmit}>

            <div className="form-group">
            <TextField
                style={{width:'100%'}}
                name="email"
                label="Enter your email"
                variant="outlined"  
                {...formik.getFieldProps('email')}
                {...errorHelper(formik,'email')}
            />
        </div>
        <div className="form-group">
            <TextField
                style={{width:'100%'}}
                name="password"
                label="Enter your password"
                variant="outlined"  
                type="password"
                {...formik.getFieldProps('password')}
                {...errorHelper(formik,'password')}
            />
        </div>
        <Button
            variant="contained"
            color="primary"
            type="submit"
            size="small"
        >
            { props.formType ? 'Register':'Login'}
        </Button>

    </form>    
}


</div>
        </>
    )
}

export default AuthForm;