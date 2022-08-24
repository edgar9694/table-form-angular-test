import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TableComponent implements OnInit {
  dataTable = [
    {
      nombre: 'Pedro',
      edad: 20,
      carrera: 'Ingeniería',
      hobbie: 'Futbol',
    },
    {
      nombre: 'Rodrigo',
      edad: 22,
      carrera: 'Arquitectura',
      hobbie: 'Bajo eléctrico',
    },
    {
      nombre: 'Romina',
      edad: 21,
      carrera: 'Abogacía',
      hobbie: 'Acrobacia',
    },
    {
      nombre: 'Ana',
      edad: 23,
      carrera: 'Contadora',
      hobbie: 'Astronomía',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
