
import React, {Switch, Route} from 'react';

import Creator from '../components/creator.component';
import { Menu, Tab, MenuItem, Label } from 'semantic-ui-react'
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import Docs from '../components/docs.component'

const STATES = {
  c1: 'creator',
  c2: 'docs'
};

const panes = [
  {
    menuItem: <MenuItem>Creator</MenuItem>,
    render: () => <Tab.Pane><Creator/></Tab.Pane>
  },
  {
    menuItem: <MenuItem>Docs</MenuItem>,
    render: () => <Tab.Pane>Oh suso</Tab.Pane>
  }
]

export default class AppContainer extends React.Component {
  render() {
    return (
      <Tab panes={panes} />
    );
  }
}
