// @flow

import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './Styles/NavItemsStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Metrics } from '../Themes'
import Ionicons from 'react-native-vector-icons/Ionicons';

const openDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    open: true
  })
}

export default {
  backButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.pop}>
        <Icon name='angle-left'
          size={Metrics.icons.large}
          color={Colors.snow}
          style={styles.backButton}
        />
      </TouchableOpacity>
    )
  },

  hamburgerButton () {
    return (
      <TouchableOpacity onPress={openDrawer}>
        <Ionicons name='md-menu'
          size={Metrics.icons.small}
          color={Colors.snow}
          style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    )
  },

  searchButton (callback: Function) {
    return (
      <TouchableOpacity onPress={callback}>
        <Icon name='search'
          size={Metrics.icons.small}
          color={Colors.snow}
          style={styles.searchButton}
        />
      </TouchableOpacity>
    )
  },

  nearbyButton () {
    return (
      <TouchableOpacity>
        <Icon name='map-marker'
          size={Metrics.icons.small}
          color={Colors.snow}

        />
      </TouchableOpacity>
    )
  },


}