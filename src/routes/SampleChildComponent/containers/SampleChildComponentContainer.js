import { connect } from 'react-redux';
import SampleChildComponent from '../components/SampleChildComponent'
const mapStateToProps = (state) => {

}

const mapDispatchToProps = {

}
export default function () {
    return connect(mapStateToProps, mapDispatchToProps)(SampleChildComponent)
}