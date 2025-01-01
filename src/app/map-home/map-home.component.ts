import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapService } from '../services/map.service';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './map-home.component.html',
  styleUrl: './map-home.component.scss',
})
export class MapHomeComponent {
  @ViewChild('map', { static: true }) mapRef: ElementRef;
  loader = new Loader({
    apiKey: '',
    version: 'weekly',
    libraries: ['places', 'drawing', 'geometry'],
  });

  map: google.maps.Map;
  mapService = inject(MapService);

  constructor() {}

  ngOnInit() {
    this.renderMapLayout();
  }

  async renderMapLayout() {
    this.loader
      .importLibrary('maps')
      .then(({ Map }) => {
        this.map = new Map(this.mapRef.nativeElement, {
          mapId: 'map-layout',
          mapTypeId: google.maps.MapTypeId.SATELLITE,
          center: { lat: 51.9279653, lng: 4.420789 },
          zoom: 20,
          maxZoom: 25,
          minZoom: 18,
        });

        this.map.setOptions({
          zoomControl: true,
        });
      })
      .catch((e) => {
        // do something
      });

    this.loader.importLibrary('marker').then(({ AdvancedMarkerElement }) => {
      const marker = new AdvancedMarkerElement({
        map: this.map,
        position: { lat: 51.9279653, lng: 4.420789 },
      });
    });
  }
}
