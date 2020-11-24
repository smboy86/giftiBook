import React, {Component} from 'react';

import MainBottomTabNavigator from './MainBottomTabNavigator';

class RootNavigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MainBottomTabNavigator />;
  }
}

export default RootNavigator;
