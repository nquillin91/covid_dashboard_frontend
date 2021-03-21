import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
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

interface Props {
   setToken: Function
}
export default function SignUp(props: Props) {
  const history = useHistory();
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [hasPreExistingConditions, setHasPreExistingConditions] = useState(false);
  const [isFollowingHygieneGuidelines, setIsFollowingHygieneGuidelines] = useState(false);
  const [isAdheringToPPPGuidelines, setIsAdheringToPPPGuidelines] = useState(false);

  const [vaccineStatus, setVaccineStatus] = useState('Not Vaccinated');
  const [hasRoommates, setHasRoommates] = useState(false);
  const [directExposureCount, setDirectExposureCount] = useState(0);
  const [indirectExposureCount, setIndirectExposureCount] = useState(0);
  const [isFirstResponder, setIsFirstResponder] = useState(false);
  const [isEssentialWorker, setIsEssentialWorker] = useState(false);

  const handleSubmit = async (e : React.SyntheticEvent) => {
    e.preventDefault();

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "username": email,
          "password": password,
          "firstName": firstName,
          "middleName": middleName,
          "lastName": lastName,
          "gender": gender,
          "birthDate": birthdate,
          "hasPreExistingConditions": hasPreExistingConditions,
          "followingHygieneGuidelines": isFollowingHygieneGuidelines,
          "adheringToPPPGuidelines": isAdheringToPPPGuidelines,
          "vaccineStatus": vaccineStatus,
          "hasRoommates": hasRoommates,
          "directlyExposedCount": directExposureCount,
          "indirectlyExposedCount": indirectExposureCount,
          "firstResponder": isFirstResponder,
          "essentialWorker": isEssentialWorker
        })
    };

    fetch(`https://covid-dashboard-backend-se430.herokuapp.com/sign-up`, requestOptions)
      .then(response => {
        response.text().then(text => {
          const data = text && JSON.parse(text);
          
          if (!response.ok) {
              const error = (data && data.message) || response.statusText;
              return Promise.reject(error);
          }

          let tokenStr = 'Bearer ' + data.jwtToken;
          localStorage.setItem('token', tokenStr);
          props.setToken(tokenStr);
          history.push("/");
        })
      });
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </Grid>
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
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
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
                value={middleName}
                onChange={({ target }) => setMiddleName(target.value)}
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
                value={lastName}
                onChange={({ target }) => setLastName(target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="gender"
                label="Gender"
                name="gender"
                autoComplete="gender"
                value={gender}
                onChange={({ target }) => setGender(target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="birthdate"
                label="Birthdate"
                type="date"
                required
                style={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={({ target }) => setBirthdate(moment(target.value).format('MM/DD/YYYY'))}
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
                value={phoneNumber}
                onChange={({ target }) => setPhoneNumber(target.value)}
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
                value={zipcode}
                onChange={({ target }) => setZipcode(target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControlLabel
                control={
                  <Switch
                    checked={hasPreExistingConditions}
                    onChange={({ target }) => setHasPreExistingConditions(target.checked)}
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
                    checked={isFollowingHygieneGuidelines}
                    onChange={({ target }) => setIsFollowingHygieneGuidelines(target.checked)}
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
                    checked={isAdheringToPPPGuidelines}
                    onChange={({ target }) => setIsAdheringToPPPGuidelines(target.checked)}
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
                    value={vaccineStatus}
                    onChange={({ target }) => setVaccineStatus(String(target.value))}
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
                    checked={hasRoommates}
                    onChange={({ target }) => setHasRoommates(target.checked)}
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
                value={directExposureCount}
                onChange={({ target }) => setDirectExposureCount(Number(target.value))}
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
                value={indirectExposureCount}
                onChange={({ target }) => setIndirectExposureCount(Number(target.value))}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={isFirstResponder}
                    onChange={({ target }) => setIsFirstResponder(target.checked)}
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
                    checked={isEssentialWorker}
                    onChange={({ target }) => setIsEssentialWorker(target.checked)}
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
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}