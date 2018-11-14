import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Authentication from '../components/Authentication'
const mapStateToProps = (state) => {
    console.log(state, 'state')
    return {
        isAuthenticated: state.global.isAuthenticated
    }
}

const mapDispatchToProps = {

}
export default function (ComposedComponent) {
    console.log(ComposedComponent, 'ComposedComponent');
    console.log(Authentication(ComposedComponent), 'Auth')
    console.log(withRouter(Authentication(ComposedComponent)), 'with router')
    console.log(connect(mapStateToProps, mapDispatchToProps), 'connect')
    return connect(mapStateToProps, mapDispatchToProps)(withRouter(Authentication(ComposedComponent)))
}