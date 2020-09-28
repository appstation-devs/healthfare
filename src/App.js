import React from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ConsultationDetailsPage from './pages/ConsultationDetailsPage';
import ConsultationPage from './pages/ConsultationPage';

function App() {
  return (
    <Switch>
      <Route path="/consultation">
        <ConsultationPage />
      </Route>
      <Route path="/consultation-details">
        <ConsultationDetailsPage />
      </Route>
      <Route exactpath="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
