import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { homeDisplay } from './homeDisplay';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  );

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(
  homeDisplay
);

export default HomeContainer;