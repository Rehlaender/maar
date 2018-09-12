import HomeContainer from '../home/homeContainer';
import HelpContainer from '../help/helpContainer';

export const RouterModule = [
    {name: 'Home', route: '/', component: HomeContainer},
    {name: 'Help', route: '/help', component: HelpContainer}
];
  