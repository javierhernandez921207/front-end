import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Icon, LeafletMouseEvent, Marker, icon, latLng, marker, tileLayer } from 'leaflet';
import { CoordandaDTO } from './coordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  
  @Input() coordenadaInical?: CoordandaDTO;
  @Output() coordenada: EventEmitter<CoordandaDTO> = new EventEmitter<CoordandaDTO>();
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 10,
    center: latLng(22.49037510952713, -79.55474853515626)
  };

  capas: Marker<any>[] = [];

  ngOnInit(): void {
    if(this.coordenadaInical !== undefined)
    {
      this.capas.push(marker([this.coordenadaInical.latitud, this.coordenadaInical.longitud], {
        icon: icon({
          ...Icon.Default.prototype.options,
          iconUrl: 'assets/marker-icon.png',
          iconRetinaUrl: 'assets/marker-icon-2x.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      }));
    }
  }

  manejarClick($event: LeafletMouseEvent) {
    var lat = $event.latlng.lat;
    var lon = $event.latlng.lng;
    this.capas = [];
    this.capas.push(marker([lat, lon], {
      icon: icon({
        ...Icon.Default.prototype.options,
        iconUrl: 'assets/marker-icon.png',
        iconRetinaUrl: 'assets/marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    }));
    console.log(lat + " " + lon);
    this.coordenada.emit({ latitud: lat, longitud: lon })
  }

}
