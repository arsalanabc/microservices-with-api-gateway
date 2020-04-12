import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import TextInput from "../shared/TextInput/TextInput";


const Label = styled.label`
    display: block;

    :not(:first-child) {
            margin-top: .75rem;
    }
`;

const LabelText = styled.strong`
    display: block;
    font-size: .9rem;
    margin-bottom: .25rem;
`;

const LoginButtom = styled.button`
    display: inline-block;
    margin-top: .5rem;
`;

const Login = () => {

    const {
        formState: { isSubmitting },
        handleSubmit,
        register
    } = useForm();

    const onSubmit = handleSubmit(({ email, password }) => {
        console.log(email, password);
    });

    return (
        <form onSubmit={onSubmit} >
            <Label>
                <LabelText> Email </LabelText>
                <TextInput disabled={isSubmitting} type="email" name="email"
                ref={register} placeholder="Email" />
            </Label>
            <Label>
                <LabelText> Password </LabelText>
                <TextInput disabled={isSubmitting} type="password" name="password"
                ref={register} placeholder="Password" />
            </Label>
            <LoginButtom disabled={isSubmitting} type="submit" >
                Login
            </LoginButtom>
        </form>
    );
}

export default Login;