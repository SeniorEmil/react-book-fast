import React from 'react';

export default class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch(this.props['data-url'])
            .then((response) => response.json())
            .then((users) => this.setState({ users: users }))
    }
    
    render(){
        return(
            <>
            <table>
                <tbody>
                    {this.state.users.map((user)=>
                    <tr key = {user.id}>
                        <td>{user.first_name} {user.last_name}</td>
                        <td>{user.email}</td>                        
                    </tr>
                    )}
                </tbody>
            </table>
            </>
        )
    }

}