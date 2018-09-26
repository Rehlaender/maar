import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {
//   sayHi,
// } from '../../actions/testActions';

import { guyDisplay } from './guyDisplay';

const mapStateToProps = state => ({
  guyState: state.guyReducer.guyState,
  speech: state.guyReducer.speech,
  speechIsLoop: state.guyReducer.speechIsLoop,
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