import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Authentication from '../components/Authentication'
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.global.isAuthenticated
    }
}

const mapDispatchToProps = {

}
export default function (ComposedComponent) {
    return connect(mapStateToProps, mapDispatchToProps)(withRouter(Authentication(ComposedComponent)))
}