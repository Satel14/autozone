import React from 'react'
import './css/Modal.css'

export default class Modal extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <React.Fragment>
        <button className='rules' onClick={() => this.setState({ isOpen: true })}>
        Security policy
        </button>

        {this.state.isOpen && (
          <div className='modal'>
            <div className='modal-body'>
              <h1>Transmission of Personal Data</h1>
              <p>The user acknowledges and agrees that by providing American Express with any personal or proprietary information of the user through the Online Sites and Services, the user consents to the transfer of such personal or proprietary information of the user across international borders as necessary for processing in accordance with standard business practices. American Express.</p>
              <button className='accept' onClick={() => this.setState({ isOpen: false })}>
                Close policy
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}
