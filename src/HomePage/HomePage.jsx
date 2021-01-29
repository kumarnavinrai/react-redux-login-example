import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, shows } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.name}!</h1>
                <p>You're logged in!!</p>
                <h3>All registered shows:</h3>
                {shows.loading && <em>Loading users...</em>}
                {shows.error && <span className="text-danger">ERROR: {shows.error}</span>}
                {shows.items &&
                    <ul>
                        {shows.items.map((show, index) =>
                            <li key={show.id}>
                                { 'Name : ' + show.name + '  Type: ' + show.type}

                                 <img src={ show.image } width="200" height="350" />
                               
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapState(state) {
    const { shows, authentication } = state;
    const { user } = authentication; 
    return { user, shows };
}

const actionCreators = {
    getUsers: userActions.getAllShows,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };