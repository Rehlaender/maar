import HomeContainer from './containers/home/homeContainer';
import HelpContainer from './containers/help/helpContainer';

export const RouterModule = [
    {name: 'Home', route: '/', component: HomeContainer},
    {name: 'Help', route: '/help', component: HelpContainer}
];
  