import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = (state, ownProps) => {
  return {
    //activeTruth: state.setTruth
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    //onGetTruth: ()=>dispatch(getTruth())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
