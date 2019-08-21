/**
 * Created by cyb on 2019/8/16.
 */

import { connect } from 'react-redux';
import { setVisibilityFilter } from '../action/action'
import Link from './Link';


const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: ()=>{
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink;