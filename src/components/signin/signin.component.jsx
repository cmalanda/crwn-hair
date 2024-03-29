import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './signin.styles.scss';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                       type="email" 
                       name="email" 
                       label='Email'
                       value={this.state.email} 
                       handleChange={this.handleChange}
                       required 
                    />
                    <FormInput 
                       type="password" 
                       name="password" 
                       label='Password'
                       value={this.state.password} 
                       handleChange={this.handleChange}
                       required 
                    />
                    <div className="buttons">
                        <CustomButton type="submit"> SIGN IN </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE</CustomButton> 
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;