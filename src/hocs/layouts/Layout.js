import { connect } from 'react-redux';

function Layout(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Layout);