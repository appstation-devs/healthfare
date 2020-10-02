import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GeneralHealthForm from './GeneralHealthQuestions';
import ConditionSpecificForm from './ConditionSpecificQuestions';
import AccountCreationForm from './AccountCreation';
import Success from './Success';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['General Health Questions', 'Condition Specific Questions', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <GeneralHealthForm />;
    case 1:
      return <ConditionSpecificForm />;
    case 2:
      return <AccountCreationForm />;
    case 3:
      return <Success />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Consultation() {
  const classes = useStyles();

  // const [value, setValue] = React.useState({
    
  // });

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if(window.innerWidth < 500) {
      window.scrollTo(300, 300);
      setActiveStep(activeStep + 1);
    } else {
      window.scrollTo(400, 400);
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if(window.innerWidth < 500) {
      window.scrollTo(300, 300);
      setActiveStep(activeStep - 1);
    } else {
      window.scrollTo(400, 400);
      setActiveStep(activeStep - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center" style={{marginBottom:'20px'}}>
            Healthfare - Consultation
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}<br /></StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom style={{marginTop:'50px auto',textAlign:'center'}}>
                  Thank you for reaching out.
                </Typography>
                <Typography variant="subtitle1" style={{marginBottom:'50px',textAlign:'center'}}>
                  Your request has been sent successfully. You will recieve an email shortly.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Continue Consultation'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}