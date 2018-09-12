import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  sayHi,
} from '../../actions/testActions';

import { homeDisplay } from './homeDisplay';

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

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(
  homeDisplay
);

export default HomeContainer;