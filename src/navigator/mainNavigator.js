import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard27178096Navigator from '../features/Dashboard27178096/navigator';
import Messaging8178095Navigator from '../features/Messaging8178095/navigator';
import Messaging9178094Navigator from '../features/Messaging9178094/navigator';
import BlankScreen0178093Navigator from '../features/BlankScreen0178093/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard27178096: { screen: Dashboard27178096Navigator },
Messaging8178095: { screen: Messaging8178095Navigator },
Messaging9178094: { screen: Messaging9178094Navigator },
BlankScreen0178093: { screen: BlankScreen0178093Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
