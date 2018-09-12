import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { helpDisplay } from './helpDisplay';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  );

export const HelpContainer = connect(mapStateToProps, mapDispatchToProps)(
  helpDisplay
);

export default HelpContainer;