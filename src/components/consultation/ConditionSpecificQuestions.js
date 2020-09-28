import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ConditionSpecificForm() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Condition Specific Questions
      </Typography>
      <Grid container spacing={3} style={{marginTop:'30px'}}>
        <Grid item xs={12}>
          <FormControl className={classes.formControl} fullwidth>
            <InputLabel htmlFor="bloodPressure">What is your blood pressure</InputLabel>
            <Select
              native
              value=''
              onChange={handleChange}
              inputProps={{
                name: 'bloodPressure',
                id: 'bloodPressure',
              }}
            >
              <option aria-label="None" value="" />
              <option value='high'>High(above 140/90)</option>
              <option value='normal'>Normal(140/90 - 90/60</option>
              <option value='low'>Low(below 90/60)</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl} fullwidth>
            <InputLabel htmlFor="type2Diabetes">What is your blood pressure</InputLabel>
            <Select
              native
              value={value}
              onChange={handleChange}
              inputProps={{
                name: 'type2Diabetes',
                id: 'type2Diabetes',
              }}
            >
              <option aria-label="None" value="" />
              <option value='yes-gp'>Yes, my GP</option>
              <option value='yes-specialist'>Yes, a specialist doctor</option>
              <option value='no'>No, I have not been diagonized</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="diabetesDose"
            label="diabetesDose"
            helperText="What diabetes medication are you currently taking? (including dose)"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}