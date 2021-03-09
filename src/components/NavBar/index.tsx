import React from 'react'
import { Link} from 'react-router-dom';
import { withRouter, RouteComponentProps } from "react-router";

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';

import './styles.css';

interface Props {
   logout: Function
}

class NavBar extends React.Component<Props & RouteComponentProps> {
    render() {
        return(
            <div className="wrapper">
                <AppBar position="static" color="transparent">
                    <Toolbar>
                        <Box display='flex' flexGrow={1}>
                            <Typography>
                                <Link className='nav-bar-link' to="/">Home</Link>
                            </Typography>
                            <Typography>
                                <Link className='nav-bar-link' to="/covid-restrictions">Covid Restrictions</Link>
                            </Typography>
                            <Typography>
                                <Link className='nav-bar-link' to="/vaccine-data">Vaccine Data</Link>
                            </Typography>
                            <Typography>
                                <Link className='nav-bar-link' to="/hospital-data">Hospital Data</Link>
                            </Typography>
                        </Box>

                        <Typography>
                            <Link className='nav-bar-link' to="/user-profile">User Profile</Link>
                        </Typography>
                        <Typography>
                            <Link className='nav-bar-link' to="/" onClick={() => this.props.logout()}>Logout</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withRouter(NavBar);