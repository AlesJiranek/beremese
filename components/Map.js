import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';

import {
  DirectionsRenderer,
  GoogleMap,
  InfoWindow,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps';

class Map extends React.Component {
  static contextTypes = {
    __SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      place: null,
      showInfoWindow: false,
      directions: null,
      planingRoute: false
    };
    this.toggleInfoWindow = this.toggleInfoWindow.bind(this);
    this.planRoute = this.planRoute.bind(this);
  }

  componentWillMount() {
    this.map_ = this.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    this.getPlace();
  }

  getPlace() {
    const places = new google.maps.places.PlacesService(this.map_);
    places.getDetails(
      { placeId: 'ChIJ4WB081NpC0cRAlr2KwjZTAA' },
      (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.setState(state => ({ ...state, place }));
        }
      }
    );
  }

  toggleInfoWindow() {
    this.setState(state => ({
      ...state,
      showInfoWindow: !state.showInfoWindow
    }));
  }

  planRoute() {
    this.setState(state => ({ ...state, planingRoute: true }));

    navigator.geolocation.getCurrentPosition(
      position => {
        const directionsService = new google.maps.DirectionsService();
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const startPosition = {
          lat: latitude,
          lng: longitude
        };
        directionsService.route(
          {
            origin: startPosition,
            destination: this.state.place.geometry.location,
            travelMode: 'DRIVING'
          },
          (directions, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.setState(state => ({
                ...state,
                directions,
                planingRoute: false
              }));
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          }
        );
      },
      error => {
        window.alert('Nepodařilo se zjistit vaší pozici.');
      }
    );
  }

  render() {
    const { place, showInfoWindow, directions, planingRoute } = this.state;
    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 49.5659141, lng: 14.1788348 }}
        options={{ scrollwheel: false }}
      >
        {place && (
          <Marker
            defaultIcon="/static/images/marker.png"
            position={place.geometry.location}
            title={place.name}
            onClick={this.toggleInfoWindow}
          >
            {showInfoWindow && (
              <InfoWindow>
                <div style={{ maxWidth: 200 }}>
                  <h5>{place.name}</h5>
                  <address>{place.formatted_address}</address>
                  {navigator.geolocation && (
                    <button
                      className="btn btn-default btn-xs"
                      disabled={planingRoute}
                      onClick={this.planRoute}
                    >
                      Naplánovat trasu {planingRoute && <Loader />}
                    </button>
                  )}
                </div>
              </InfoWindow>
            )}
          </Marker>
        )}

        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              suppressMarkers: true
            }}
          />
        )}
      </GoogleMap>
    );
  }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default () => (
  <WrappedMap
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC-Kiz9QS-I4QdNb78n9dOfxPO1VKL6Ghg&libraries=places"
    loadingElement={<div style={{ height: `500px` }} className="loader" />}
    containerElement={
      <div
        id="fh5co-map"
        style={{
          width: '100%',
          height: `500px`,
          overflow: 'hidden',
          position: 'relative'
        }}
      />
    }
    mapElement={<div id="map" style={{ height: `500px` }} />}
  />
);
