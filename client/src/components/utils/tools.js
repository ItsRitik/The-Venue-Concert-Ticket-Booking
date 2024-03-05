import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import cookie from 'react-cookies';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'


export const WavesButton = (props) => {
    let template = '';

    switch(props.type){
        case "default":
            template = <Link
                className={
                    !props.altClass ? 'link_default': props.altClass
                }
                to={props.linkTo}
                style={{
                    ...props.style
                }}
            >
                {props.title}
            </Link>
        break;
        case "bag_link":
                template = 
                <div
                    className="bag_link"
                    onClick={()=>{
                        props.runAction()
                    }}
                    style={{ ...props.style }}
                >
                    <AddShoppingCartIcon  style={{ fontSize: props.iconSize }}/>
                </div>
        break;
        case "add_to_cart_link":
                template = 
                    <div className="add_to_cart_link"
                        onClick={()=>{
                            props.runAction()
                        }}
                    >
                        <AddShoppingCartIcon/>
                        Add to cart
                    </div>
        break;
        default:
            template='';

    }

    return template;
}
export const showToast = (type, msg) => {
    const toastOptions = {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 5000, // Set the duration (in milliseconds) for which the toast will be displayed
    };

    switch (type) {
        case 'SUCCESS':
            toast.success(msg, toastOptions);
            break;
        case 'ERROR':
            toast.error(msg, toastOptions);
            break;
        default:
            return false;
    }
};


export const errorHelper = (formik,value) => ({
    error: formik.errors[value] && formik.touched[value] ? true : false,
    helperText: formik.errors[value] && formik.touched[value] ? formik.errors[value]:null
});


export const getTokenCookie = () => cookie.load('x-access-token');
export const removeTokenCookie = () => cookie.remove('x-access-token', {path:'/'});
export const getAuthHeader = () => {
    return { headers: { 'Authorization':`Bearer ${getTokenCookie()}`}}
}