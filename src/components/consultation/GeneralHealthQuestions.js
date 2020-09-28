import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function GeneralHealthForm() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        General Health Questions
      </Typography>
      <Grid container spacing={3} style={{marginTop:'30px'}}>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Are you registered with a GP practice in the UK?</FormLabel>
            <RadioGroup aria-label="registeredGP" name="registeredGP" value={value} onChange={handleChange}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Do you give consent to write to your GP for approval of this supply and to share informationwe hold about you</FormLabel>
            <RadioGroup aria-label="consent" name="consent" value={value} onChange={handleChange}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="GPPractice"
            name="GPPractice"
            label="Please enter the name of your GP practice"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Do you believe you have the capacity to make decisions about your own healthcare</FormLabel>
            <RadioGroup aria-label="healthcareDecision" name="healthcareDecision" value={value} onChange={handleChange}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Have you been diagonized with any medical conditions</FormLabel>
            <RadioGroup aria-label="medicalConditions" name="medicalConditions" value={value} onChange={handleChange}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="moreInfo"
            name="moreInfo"
            label="Please provide more information, including diagnosis, symptoms and treatment"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="height"
            name="height"
            label="What is your height(ft)"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="weight"
            name="weight"
            label="What is your weight(kg)"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}