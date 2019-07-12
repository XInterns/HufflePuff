import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  
    render() {    
    return (
      <div className="dashboard container">
          In Dashboard!!
          {console.log(this.props)}
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
  // return {
    // modalStatus: !!state.modal.isModalOpen
    // projects: state.project.projects
    // obj that represents the properties that are attatched to the props of this component
  // }
// }

// export default connect(mapStateToProps)(Dashboard);
// export default connect()(Dashboard);
export default Dashboard;