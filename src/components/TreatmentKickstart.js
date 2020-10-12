import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "100px auto",
    textAlign: 'center',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    {
      heading: "Choose your treatment",
      p: "Sit back, relax and choose your one-off or subscription of medication on any device from anywhere",
      img: "/images/choose.jpg"
    },
    {
      heading: "Complete a consultation",
      p: "Sit back, relax and choose your one-off or subscription of medication on any device from anywhere",
      img: "/images/consultation.jpg"
    },
    {
      heading: "Recieve your delivery",
      p: "Sit back, relax and choose your one-off or subscription of medication on any device from anywhere",
      img: "/images/delivery.jpg"
    }
  ];
}

export default function TreatmentKickstart() {
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

      <Typography variant="h5" style={{margin: "30px auto"}}>
        Your treatment discreetely to your door in three easy steps
      </Typography>

      <Stepper activeStep={activeStep} alternativeLabel style={{backgroundColor:'#ececec75',padding:'30px',margin:'40px 0'}}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>
              <div><img src={step.img} alt="Healthfare" style={{marginBottom: "30px",width:'100%'}}/></div>
              <h4>{step.heading}</h4>
              <p>{step.p}</p>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions} variant="h5">
              See How Our Service Works In Detail
            </Typography><br />
            <Link to="/consultation-details" style={{backgroundColor:'#169b60',color:'#fff', padding:'10px 20px', borderRadius:'10px',margin:'20px auto'}}>Our Service</Link>
          </div>
        ) : (
          <div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
