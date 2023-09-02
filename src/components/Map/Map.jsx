import { Component } from 'react'

import { Map, GoogleApiWrapper } from 'google-maps-react'

class Maps extends Component {
  render() {
    return (
      <>
        <Map
          google={this.props.google}
          style={style}
          zoom={10}
          initialCenter={{
            lat: 9.081999,
            lng: 8.675277,
          }}
        />
      </>
    )
  }
}

let style = {
  width: '100%',
  height: '100%',
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBKIf989QTzoVGkp0En7zKB6LhXkgGpAWg',
})(Maps)
