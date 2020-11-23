import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging2178101Navigator from '../features/Messaging2178101/navigator';
import Messaging3178100Navigator from '../features/Messaging3178100/navigator';
import Messaging4178099Navigator from '../features/Messaging4178099/navigator';
import Messaging5178098Navigator from '../features/Messaging5178098/navigator';
import Messaging6178097Navigator from '../features/Messaging6178097/navigator';
import Dashboard27178096Navigator from '../features/Dashboard27178096/navigator';
import Messaging8178095Navigator from '../features/Messaging8178095/navigator';
import Messaging9178094Navigator from '../features/Messaging9178094/navigator';
import BlankScreen0178093Navigator from '../features/BlankScreen0178093/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging2178101: { screen: Messaging2178101Navigator },
Messaging3178100: { screen: Messaging3178100Navigator },
Messaging4178099: { screen: Messaging4178099Navigator },
Messaging5178098: { screen: Messaging5178098Navigator },
Messaging6178097: { screen: Messaging6178097Navigator },
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
