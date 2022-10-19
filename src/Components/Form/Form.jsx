import React, { useState } from 'react'
import styled from "styled-components";

const  FormStyled = styled.form `
margin-left:${(props) => props.marginLeft};

`

const Form = ({children, Submit}) => {
    return (
       <FormStyled onSubmit={Submit}>
        {children}
       </FormStyled>
    )
}

export default Form