

import React from 'react'
import { Grid, Menu, Image, List, Button } from 'semantic-ui-react'
import { readDocs } from '../../lib/ModernDocManager'
import { install } from '../../lib/GitbookSetupManager'

const deployImages = {
  'heroku': 'src/img/heroku.jpg',
  'gh-pages': 'src/img/github.png',
  'gitbook': 'src/img/gitbook.png'
}



export default class Docs extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Grid>
        <div className="ui dimmer install">
          <div className="ui big indeterminate text loader">Downloading needed files</div>
        </div>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Menu fluid vertical>
              {readDocs().map((doc, inx) =>
                <Menu.Item key={inx} className='header' >
                  <h2>{doc.name}</h2>
                    <h4>This document is a {doc.template}</h4>
                  <Grid columns={2} divided>
                    <Grid.Row>
                      <Grid.Column>
                        <List>
                          {doc.authors.map((author,i) => { return <List.Item key={i}><Image avatar src='src/img/user.png'/><List.Content><List.Header as='a'>{author}</List.Header></List.Content></List.Item>})}
                        </List>
                      </Grid.Column>
                      <Grid.Column>
                        {doc.deploys.length > 0 &&
                          <h4>Deploys: </h4>
                        }
                        <List>
                          {doc.deploys.map((deploy,i) => { return <List.Item key={i}><List.Content><List.Header as='d'>{deploy}</List.Header></List.Content></List.Item>})}
                        </List>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  {doc.private == "yes" && <h4> Authorized organization: {doc.organization} </h4>}
                  {doc.private == "no" && <h4> This document is public.</h4>}
                  <h5>Located at {doc.path}</h5>
                  <Button content='Install' onClick={install(doc.path)}/>
                </Menu.Item>
              )}
            </Menu>
          </Grid.Column>
        </Grid.Row>
    </Grid>
    );
  }
}
