import HomeContainer from './containers/home/homeContainer';
import HelpContainer from './containers/help/helpContainer';
import AnimationsContainer from './containers/animations/animationsContainer';

export const RouterModule = [
    {name: 'Home', route: '/', component: HomeContainer},
    {name: 'Help', route: '/help', component: HelpContainer},
    {name: 'Animations', route: '/animations', component: AnimationsContainer}
];