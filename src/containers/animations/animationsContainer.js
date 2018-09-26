import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  sayHi,
} from '../../actions/testActions';

import { animationsDisplay } from './animationsDisplay';

const mapStateToProps = state => ({
  hiState: state.testReducer.saidHi,
  user: state.testReducer.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sayHi,
      goToHelp: () => push('/help')
    },
    dispatch
  );

export const AnimationsContainer = connect(mapStateToProps, mapDispatchToProps)(
  animationsDisplay
);

export default AnimationsContainer;