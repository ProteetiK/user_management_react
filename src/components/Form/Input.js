import React from 'react';
import styled from 'styled-components/macro';

const Component = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
`

const Label = styled.p`
    margin: 0 1rem 0 0;
    min-width: 8rem;
`

const InputStyles = `
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    border: 1px solid #e2e8f0;
    flex: 1;
`

const StyledInput = styled.input`
    ${InputStyles};
`

const TextArea = styled.textarea`
    ${InputStyles};
`

const Input = ({ name, label, value, onChange, type }) => {
    const generateField = () => {
        if (type === 'email') {
            return (
                <StyledInput id={name} onChange={onChange(name)} type='email' value={value} />
            )
        } else if (type === 'textarea') {
            return (
                <TextArea onChange={onChange(name)} type='textarea' value={value} rows='5' />
            )
        } else {
            return (
                <StyledInput onChange={onChange(name)} type='text' value={value} />
            )
        }
    }

    return (
        <Component>
            <Label htmlForm={name}>{label}:</Label>
            {generateField()}
        </Component>
    )
}

export default Input