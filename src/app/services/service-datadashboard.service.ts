import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '@env/environment';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class ServiceDatadashboardService {

  // data del API
  API_URI = 'https://alw-lab.herokuapp.com';

  // data del mapa
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;
  lat = 4.6701141;
  lon = -74.1439034;
  zoom = 10;

  constructor(private http: HttpClient) {
    // añadir el token
    this.mapbox.accessToken = environment.mapBoxToken;
  }

  // Obtener datos para plot mapa
  getDataMap() {
    return this.http.get(`${this.API_URI}/commerces/layer`)
  }
  // Obtener comercios para tabla
  getCommerces() {
    return this.http.get(`${this.API_URI}/commerces`)
  }
  // Obtener datos para gráfica
  getDataGraph() {
    return this.http.get(`${this.API_URI}/commerces/graph`)
  }

  // Metodo para renderizar el mapa
  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lon, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }


  addMapSource(data) {

    this.map.addSource('commerces', {
      type: 'geojson',
      data: data
    })

    data.features.forEach(marker => {
      console.log(marker)
      if (marker.properties.name != undefined) {
        var el = document.createElement('div');
        el.className = 'marker';
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h4>' + marker.properties.name + '</h4>' +
              '<p>Nit: ' + marker.properties.nit + '<br>' +
              'Dirección: ' + marker.properties.address + '<br>' +
              'Teléfono: ' + marker.properties.phone + '<br>' +
              'Propietario: ' + marker.properties.owner + '<br>' +
              'Horario: ' + marker.properties.days + '<br>' +
              '' + marker.properties.schedule + '</p>'
            ))
          .addTo(this.map);
      }
    });

    this.map.addLayer({
      'id': 'commerces',
      'type': 'symbol',
      'source': 'commerces',
      'layout': {
        'icon-image': '{icon}-15',
        'icon-allow-overlap': true
      }
    });
    // this.map.on('click', 'places', function(e) {
    //   var coordinates = e.features[0].geometry.coordinates.slice();
    //   var description = e.features[0].properties.description;

    //   // Ensure that if the map is zoomed out such that multiple
    //   // copies of the feature are visible, the popup appears
    //   // over the copy being pointed to.
    //   while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    //   coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    //   }

    //   new mapboxgl.Popup()
    //   .setLngLat(coordinates)
    //   .setHTML(description)
    //   .addTo(this.map);
    //   });
  }
}