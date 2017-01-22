import {BaseElement} from './base-element.js';

export class GoogleMap extends BaseElement {

    constructor(centerOfMap, data) {
        super();
        this.centerOfMap = centerOfMap;
        this.data = data;
    }

    // Overriding base class
    createElement() {
        super.createElement();

        // setTimeout - used to wait for DOM creation first
        setTimeout(() => {
            // From Google, but customized it
            var map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: this.centerOfMap
            });

            // Loop through vehicle data, split lat and long by space, and assign it to a variable 'myLatLng'
            for (let vehicle of this.data) {
                let [lat, long] = vehicle.latLong.split(' ');
                console.log('lat:' + lat);
                let myLatLng = new window.google.maps.LatLng(lat, long);

                var marker = new window.google.maps.Marker({
                    position: myLatLng,
                    map: map
                });

                marker.setMap(map);
            }

        }, 0);

    }

    getElementString() {
        return `<div style="width:800px; height: 400px;" id="map"></div>`;
    }

}