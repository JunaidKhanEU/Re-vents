import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import SettingNav from '../SettingNav/SettingNav'
import { Route, Switch, Redirect } from 'react-router-dom'
import BasicPage from '../BasicPage/BasicPage'
import AboutPage from '../AboutPage/AboutPage'
import PhotosPage from '../PhotosPage/PhotosPage'
import AccountPage from '../AccountPage/AccountPage'

const SettingsDashboard = () => {
  return (
    <Grid>
      <GridColumn width={12}>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basic' />
          <Route exact path='/settings/basic' component={BasicPage} />
          <Route exact path='/settings/about' component={AboutPage} />
          <Route exact path='/settings/photos' component={PhotosPage} />
          <Route exact path='/settings/account' component={AccountPage} />
        </Switch>
      </GridColumn>
      <GridColumn width={4}>
        <SettingNav />
      </GridColumn>
    </Grid>
  )
}

export default SettingsDashboard
