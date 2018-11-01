// @flow

// #region imports
import compose from 'recompose/compose';
import Ticker from './Ticker';
import withEnterAnimation from '../../hoc/withEnterAnimation';
// #endregion

export default compose(withEnterAnimation(/* no option yet */))(Ticker);
