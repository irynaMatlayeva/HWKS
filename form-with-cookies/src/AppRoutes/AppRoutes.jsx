import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormPersonalInfo from '../Forms/FormPersonalInfo';
import UsersDataList from '../DataPage/UsersDataList';

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <Route path='/form'>
          <FormPersonalInfo/>
        </Route>
        <Route path='/data'>
          <UsersDataList/>
        </Route>
      </Switch>
    </>
  )
}

export default AppRoutes;
