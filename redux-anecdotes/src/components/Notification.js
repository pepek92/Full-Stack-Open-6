import { connect } from 'react-redux'

const Notification = (props) => {

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const hidden = {
    display: 'none'
  }

  return (
    <div style={props.notification === '' ? hidden : style}>
      { props.notification }
    </div>
  )
}

const mapDispatchToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect
(mapDispatchToProps)
(Notification)