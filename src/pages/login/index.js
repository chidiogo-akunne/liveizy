import React, {useState} from 'react';

import Layout from '../../components/layout';
import Input from '../../commons/input';
import Button from '../../commons/button';

import './styles.scss';

export default function Login(){
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    function handleChange(e){
        e.persist();
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
    }

    const {email, password} = state;
    return(
        <Layout>
           <h4 className="title">Login</h4>
           <form onSubmit={handleSubmit}>
           <Input placeholder="email" label="Email address" name="email" value={email} type="email" onChange={handleChange} /> 
           <Input placeholder="password" label="Password" name="password" value={password} type="password" onChange={handleChange} /> 
           <p className="forgot">forgot password?</p>
           <Button buttonClass="buttonClass">Login</Button>
           <p className="create">Need a Liveizy account? <span className="account">
               Create an account</span></p>
           </form>
        </Layout>
    )
}