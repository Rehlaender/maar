import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {
//   sayHi,
// } from '../../actions/testActions';

import { guyDisplay } from './guyDisplay';

const mapStateToProps = state => ({
  hiState: state.testReducer.saidHi,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

export const GuyContainer = connect(mapStateToProps, mapDispatchToProps)(
  guyDisplay
);

export default GuyContainer;