import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: "100px auto",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(5),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Complete a consultation', 'Choose your treatment', 'Recieve your delivery'];
}

const getStepContent1 = [
  {
    p1: `For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.`,
    p2: `For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more. For each ad campaign that you create, you can control how much`,
    l1: `For each ad campaign that you create`,
    l2: `Willing to spend on clicks and conversions`,
    l3: `Locations you want your ads to show on`
  },
  {
    p1: `An ad group contains one or more ads which target a shared set of keywords. For each ad campaign that you create, you can control how much you are willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more. For each ad campaign.`,
    p2: `For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.`,
    l1: `Willing to spend on clicks and conversions`,
    l2: `For each ad campaign that you create`,
    l3: `Locations you want your ads to show on`
  },
  {
    p1: `Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.`,
    p2: `For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.`,
    l1: `Locations you want your ads to show on`,
    l2: `Willing to spend on clicks and conversions`,
    l3: `For each ad campaign that you create`
  }
];

export default function ConsultationDetails() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>
                  <Typography variant="h5">{label}</Typography>
                </StepLabel>
                <StepContent style={{paddingTop:'10px'}}>
                  <Typography>{getStepContent1[index].p1}</Typography>
                  <Typography>{getStepContent1[index].p2}</Typography>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <ImageIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={getStepContent1[index].l1} />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <WorkIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={getStepContent1[index].l2} />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <BeachAccessIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={getStepContent1[index].l3} />
                    </ListItem>
                  </List>
                  <div className={classes.actionsContainer}>
                    <div style={{margin: '30px auto'}}>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>Let's Get Started Then</Typography><br />
              <Link to="/consultation" style={{backgroundColor:'#169b60',color:'#fff', padding:'10px 20px', borderRadius:'10px',margin:'20px auto'}}>Start Consultation</Link>
            </Paper>
          )}
        </Grid>
        <Grid item xs={12} md={3} style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#f07320'}}>
          <img src="/images/banner.png" alt="Healthfare" />
        </Grid>
      </Grid>
    </div>
  );
}