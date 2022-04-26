import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Section from './Section';
import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';

const Wrapper = styled.div`
    background-color: #fff;
    border-radius: 0.375rem;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.15);
    min-width: 600px;
    width: 100%;
`

const Header = styled.div`
    border-bottom: 1px solid #e2e8f0;
    padding: 1rem 2rem;
`

const Title = styled.h3`
    margin: 0;
    font-weight: 300;
`

const Content = styled.div`
    padding: 1rem 2rem;
`

const Footer = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: flex-end;
`

const Button = styled.button`
    border: 1px solid ${(props) => (props.primary ? '#68d391' : '#e2e8f0')};
    background-color: ${(props) => (props.primary ? '#68d391' : '#fff')};
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.15);
    color: ${(props) => (props.primary ? '#fff' : '#000')};
    padding: 0.5rem 2rem;
    border-radius: 0.375rem;
    transition: all 0.25s ease-in-out;
    &:focus {
        outline: 0;
    }
    &:hover {
        cursor: pointer;
        border: 1px solid ${(props) => (props.primary ? '#9ae6b4' : '#e2e8f0')};
        background-color: ${(props) => (props.primary ? '#9ae6b4' : '#fff')};
    }
    &:nth-child(2) {
        margin-left: 1rem;
    }
`

class Form extends Component {
    state = {
        userName: '',
        bio: '',
        firstName: '',
        lastName: '',
        email: '',
        country: 'other',
        notifications: [
            {
                label: 'Newsletter',
                value: 'newsletter',
                checked: false
            },
            {
                label: 'Updates',
                value: 'updates',
                checked: false
            },
            {
                label: 'Reports',
                value: 'reports',
                checked: false
            }
        ]
    }

    handleTextChange = (name) => (event) => {
        this.setState({ [name]: event.target.value })
    }

    handleCheckBoxChange = (name) => (event) => {
        const newNotif = [...this.state.notifications]
        const neededNotif = newNotif.filter(
            (item) => item.value === name
        )[0]
        neededNotif.checked = !neededNotif.checked

        this.setState({  notifications: newNotif })
    }

    handleSubmitAndClear = () => {
        this.props.onFormSubmit(this.state)
        this.setState({
            userName: '',
            bio: '',
            firstName: '',
            lastName: '',
            email: '',
            country: 'other',
            notifications: [
                {
                    label: 'Newsletter',
                    value: 'newsletter',
                    checked: false
                },
                {
                    label: 'Updates',
                    value: 'updates',
                    checked: false
                },
                {
                    label: 'Reports',
                    value: 'reports',
                    checked: false
                }
            ]
        })
    }

    handleCancel = () => {
        this.setState({
            userName: '',
            bio: '',
            firstName: '',
            lastName: '',
            email: '',
            country: 'other',
            notifications: [
                {
                    label: 'Newsletter',
                    value: 'newsletter',
                    checked: false
                },
                {
                    label: 'Updates',
                    value: 'updates',
                    checked: false
                },
                {
                    label: 'Reports',
                    value: 'reports',
                    checked: false
                }
            ]
        })
    }

    render () {
        const { userName, bio, firstName, lastName, email, country, notifications } = this.state
        return (
            <Wrapper>
                <Header>
                    <Title>Add a User</Title>
                </Header>
                <Content>
                    <Section title='Profile' description='Basic Information'>
                        <Input label='Username' name='userName' value={userName} onChange={this.handleTextChange} />
                        <Input label='Bio' name='bio' value={bio} onChange={this.handleTextChange} type='textarea' />
                    </Section>
                    <Section title='Information' description='In Detail'>
                        <Input label='First Name' name='firstName' value={firstName} onChange={this.handleTextChange} />
                        <Input label='Last Name' name='lastName' value={lastName} onChange={this.handleTextChange} />
                        <Input label='Email' name='email' value={email} onChange={this.handleTextChange} type='email' />
                        <Select label='Country' value={country} name='country' onChange={this.handleTextChange} />
                    </Section>
                    <Section title='Email Notifications' description='How do you want it?'>
                        <Checkbox name='emailNotif' label='Email' values={notifications} onChange={this.handleCheckBoxChange} />
                    </Section>
                </Content>
                <Footer>
                    <Button onClick={this.handleCancel}>Cancel</Button>
                    <Button primary onClick={this.handleSubmitAndClear}>Add</Button>
                </Footer>
            </Wrapper>
        )
    }
}

export default Form