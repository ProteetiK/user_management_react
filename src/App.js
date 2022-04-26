import { React, Component } from 'react';

import styled from 'styled-components/macro';
import Form from './components/Form/Form';
import User from './components/User/User';

const MyComponent = styled.div`
    display: flex;
    background-color: #fafafa;
    min-height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const UserList = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin-top: 1rem;
`

class App extends Component {
    state = {
        users: [
            {
                userName: 'DonnaN',
                firstName: 'Donna',
                lastName: 'Noble',
                email: 'Donna.Noble@who.com'
            },
            {
                userName: 'RoseT',
                firstName: 'Rose',
                lastName: 'Tyler',
                email: 'Rose.Tyler@who.com'
            },
            {
                userName: 'ClaraO',
                firstName: 'Clara',
                lastName: 'Oswald',
                email: 'Clara.Oswald@who.com'
            },
            {
                userName: 'MarthaJ',
                firstName: 'Martha',
                lastName: 'Jones',
                email: 'Martha.Jones@who.com'
            },
        ]
    }

    handleFormSubmit = (formUser) => {
        this.setState({ users: [formUser, ...this.state.users]})
    }

    render () {
        return (
            <MyComponent>
                <Wrapper>
                    <Form onFormSubmit={this.handleFormSubmit} />
                    <UserList>
                        {this.state.users.map(user => (
                            <User 
                                key={user.userName} 
                                firstName={user.firstName} 
                                lastName={user.lastName} 
                                email={user.email} 
                                userName={user.userName} 
                            />
                        ))}
                    </UserList>
                </Wrapper>
            </MyComponent>
        )
    }
}

export default App