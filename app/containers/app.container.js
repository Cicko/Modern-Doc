
import React from 'react';

import Creator from '../components/creator.component';


export default class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="ui top attached tabular menu">
          <a className="item active" data-tab="creator">
            Creator
          </a>
          <a className="item" data-tab="docs">
            Docs
          </a>
        </div>
        <div className="ui bottom attached segment main content">
          <div className="ui tab active" data-tab="creator">
             <Creator/>
          </div>
          <div className="ui tab" data-tab="docs">
              muy bien
          </div>
          <p></p>
        </div>
      </div>
    );
  }
}
