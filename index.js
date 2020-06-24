import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'

import pages from './src/routes'

AppRegistry.registerComponent(appName, () => pages)