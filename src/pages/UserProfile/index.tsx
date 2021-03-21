import userService from '../../services/UserService';
import UserProfileModel from '../../models/UserProfile';

import React, { useState, useEffect } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

type State = {
	username: string;
  	firstName: string;
  	middleName: string;
  	lastName: string;
  	gender: string;
  	birthDate: string;
  	phoneNumber: string;
  	zipcode: string;
  	hasPreExistingConditions: boolean;
  	followingHygieneGuidelines: boolean;
  	adheringToPPPGuidelines: boolean;
  	vaccineStatus: string;
  	hasRoommates: boolean;
  	directlyExposedCount: number;
  	indirectlyExposedCount: number;
  	firstResponder: boolean;
  	essentialWorker: boolean;
}
export default class UserProfile extends React.Component<{}, State> {
    constructor(props){
        super(props);
        this.state = {
			"username": '',
			"firstName": '',
			"middleName": '',
			"lastName": '',
			"gender": '',
			"birthDate": '',
			"phoneNumber": '',
			"zipcode": '',
			"hasPreExistingConditions": false,
			"followingHygieneGuidelines": false,
			"adheringToPPPGuidelines": false,
			"vaccineStatus": '',
			"hasRoommates": false,
			"directlyExposedCount": 0,
			"indirectlyExposedCount": 0,
			"firstResponder": false,
			"essentialWorker": false
        };
    }

    componentDidMount() {
    	userService.getUserProfile().then(userProfileModel => {
			let model = Object.assign(new UserProfileModel(), JSON.parse(userProfileModel));

			this.setState({ "username": model.username });
			this.setState({ "firstName": model.firstName });
			this.setState({ "middleName": model.middleName });
			this.setState({ "lastName": model.lastName });
			this.setState({ "gender": model.gender });
			this.setState({ "birthDate": model.birthDate });
			this.setState({ "phoneNumber": model.phoneNumber });
			this.setState({ "zipcode": model.zipcode });
			this.setState({ "hasPreExistingConditions": model.hasPreExistingConditions });
			this.setState({ "followingHygieneGuidelines": model.followingHygieneGuidelines });
			this.setState({ "adheringToPPPGuidelines": model.adheringToPPPGuidelines });
			this.setState({ "vaccineStatus": model.vaccineStatus });
			this.setState({ "hasRoommates": model.hasRoommates });
			this.setState({ "directlyExposedCount": model.directlyExposedCount });
			this.setState({ "indirectlyExposedCount": model.indirectlyExposedCount });
			this.setState({ "firstResponder": model.firstResponder });
			this.setState({ "essentialWorker": model.essentialWorker });
		});
  	}

    render() {
		const handleSubmit = async (e : React.SyntheticEvent) => {
		    e.preventDefault();
		    userService.updateUserProfile({
	          "username": this.state.username,
	          "firstName": this.state.firstName,
	          "middleName": this.state.middleName,
	          "lastName": this.state.lastName,
	          "gender": this.state.gender,
	          "birthDate": this.state.birthDate,
	          "phoneNumber": this.state.phoneNumber,
	          "zipcode": this.state.zipcode,
	          "hasPreExistingConditions": this.state.hasPreExistingConditions,
	          "followingHygieneGuidelines": this.state.followingHygieneGuidelines,
	          "adheringToPPPGuidelines": this.state.adheringToPPPGuidelines,
	          "vaccineStatus": this.state.vaccineStatus,
	          "hasRoommates": this.state.hasRoommates,
	          "directlyExposedCount": this.state.directlyExposedCount,
	          "indirectlyExposedCount": this.state.indirectlyExposedCount,
	          "firstResponder": this.state.firstResponder,
	          "essentialWorker": this.state.essentialWorker
	        });
		};

		return (
			<Container component="main" maxWidth="sm">
			  <CssBaseline />
			  <div>
			    <Typography component="h1" variant="h5">
			      Profile
			    </Typography>
			    <form onSubmit={handleSubmit}>
			      <Grid container spacing={2}>
			        <Grid item xs={12} sm={4}>
			          <TextField
			            autoComplete="fname"
			            name="firstName"
			            variant="outlined"
			            required
			            fullWidth
			            id="firstName"
			            label="First Name"
			            autoFocus
			            value={this.state.firstName}
			            onChange={({ target }) => this.setState({ "username": (target.value)})}
			          />
			        </Grid>
			        <Grid item xs={12} sm={4}>
			          <TextField
			            variant="outlined"
			            fullWidth
			            id="middleName"
			            label="Middle Name"
			            name="middleName"
			            autoComplete="mname"
			            value={this.state.middleName}
			            onChange={({ target }) => this.setState({ "middleName": (target.value)})}
			          />
			        </Grid>
			        <Grid item xs={12} sm={4}>
			          <TextField
			            variant="outlined"
			            required
			            fullWidth
			            id="lastName"
			            label="Last Name"
			            name="lastName"
			            autoComplete="lname"
			            value={this.state.lastName}
			            onChange={({ target }) => this.setState({ "lastName": (target.value)})}
			          />
			        </Grid>
			        <Grid item xs={12} sm={12}>
			          <TextField
			            variant="outlined"
			            required
			            fullWidth
			            id="gender"
			            label="Gender"
			            name="gender"
			            autoComplete="gender"
			            value={this.state.gender}
			            onChange={({ target }) => this.setState({ "gender": (target.value)})}
			          />
			        </Grid>
			        <Grid item xs={12} sm={6}>
			          <TextField
			            variant="outlined"
			            required
			            fullWidth
			            id="phoneNumber"
			            label="Phone Number"
			            name="phoneNumber"
			            autoComplete="pNumber"
			            value={this.state.phoneNumber}
			            onChange={({ target }) => this.setState({ "phoneNumber": (target.value)})}
			          />
			        </Grid>
			        <Grid item xs={12} sm={6}>
			          <TextField
			            variant="outlined"
			            required
			            fullWidth
			            id="zipcode"
			            label="Zipcode"
			            name="zipcode"
			            autoComplete="zipcode"
			            value={this.state.zipcode}
			            onChange={({ target }) => this.setState({ "zipcode": (target.value)})}
			          />
			        </Grid>
			        <Grid item xs={12} sm={4}>
			          <FormControlLabel
			            control={
			              <Switch
			                checked={this.state.hasPreExistingConditions}
			                onChange={({ target }) => this.setState({ "hasPreExistingConditions": (target.checked)})}
			                name="hasPreExistingConditions"
			                color="primary"
			              />
			            }
			            label="Have Pre-Existing Conditions?"
			          />
			        </Grid>
			        <Grid item xs={12} sm={4}>
			          <FormControlLabel
			            control={
			              <Switch
			                checked={this.state.followingHygieneGuidelines}
			                onChange={({ target }) => this.setState({ "followingHygieneGuidelines": (target.checked)})}
			                name="isFollowingHygieneGuidelines"
			                color="primary"
			              />
			            }
			            label="Following Hygiene Guidelines?"
			          />
			        </Grid>
			        <Grid item xs={12} sm={4}>
			          <FormControlLabel
			            control={
			              <Switch
			                checked={this.state.adheringToPPPGuidelines}
			                onChange={({ target }) => this.setState({ "adheringToPPPGuidelines": (target.checked)})}
			                name="isAdheringToPPPGuidelines"
			                color="primary"
			              />
			            }
			            label="Using PPP?"
			          />
			        </Grid>
			        <Grid item xs={12} sm={6}>
			          <FormControlLabel
			            control={
			              <Select
			                id="vaccineStatus"
			                value={this.state.vaccineStatus}
			                onChange={({ target }) => this.setState({ "vaccineStatus": String(target.value)})}
			              >
			                <MenuItem value="Not Vaccinated">Not Vaccinated</MenuItem>
			                <MenuItem value="First Dose">First Dose</MenuItem>
			                <MenuItem value="Fully Vaccinated">Fully Vaccinated</MenuItem>
			              </Select>
			            }
			            label="Vaccination Status?"
			          />
			        </Grid>
			        <Grid item xs={12} sm={6}>
			          <FormControlLabel
			            control={
			              <Switch
			                checked={this.state.hasRoommates}
			                onChange={({ target }) => this.setState({ "hasRoommates": (target.checked)})}
			                name="hasRoommates"
			                color="primary"
			              />
			            }
			            label="Have roommates?"
			          />
			        </Grid>
			        <Grid item xs={12} sm={6}>
			          <TextField
			            variant="outlined"
			            required
			            fullWidth
			            id="directExposureCount"
			            label="How many people are you directly exposed to?"
			            name="directExposureCount"
			            autoComplete="directExposureCount"
			            value={this.state.directlyExposedCount}
			            onChange={({ target }) => this.setState({ "directlyExposedCount": Number(target.value)})}
			          />
			        </Grid>
			        <Grid item xs={12} sm={6}>
			          <TextField
			            variant="outlined"
			            required
			            fullWidth
			            id="indirectExposureCount"
			            label="How many people are you indirectly exposed to?"
			            name="indirectExposureCount"
			            autoComplete="indirectExposureCount"
			            value={this.state.indirectlyExposedCount}
			            onChange={({ target }) => this.setState({ "indirectlyExposedCount": Number(target.value)})}
			          />
			        </Grid>
			        <Grid item xs={12} sm={6}>
			          <FormControlLabel
			            control={
			              <Switch
			                checked={this.state.firstResponder}
			                onChange={({ target }) => this.setState({ "firstResponder": (target.checked)})}
			                name="isFirstResponder"
			                color="primary"
			              />
			            }
			            label="Are you a first responder?"
			          />
			        </Grid>
			        <Grid item xs={12} sm={6}>
			          <FormControlLabel
			            control={
			              <Switch
			                checked={this.state.essentialWorker}
			                onChange={({ target }) => this.setState({ "essentialWorker": (target.checked)})}
			                name="isEssentialWorker"
			                color="primary"
			              />
			            }
			            label="Are you an essential worker?"
			          />
			        </Grid>
			      </Grid>
			      <Button
			        type="submit"
			        fullWidth
			        variant="contained"
			        color="primary"
			      >
			        Update Profile
			      </Button>
			    </form>
			  </div>
			</Container>
		);
    }
}