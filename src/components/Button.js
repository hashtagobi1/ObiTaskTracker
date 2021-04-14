import PropTypes from 'prop-types'


// const onClick= () => {
// }


const Button = ({ color, text, onClick, textColor }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color, color: textColor}}
            className="btn">
            {text}
        </button>

    )
}


// Button.defaultProps = {
//     // color:'steelblue'
// }

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,

}
export default Button
