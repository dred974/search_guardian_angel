import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-ange-gardien',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HeaderComponent],
  templateUrl: './ange-gardien.component.html',
  styleUrl: './ange-gardien.component.scss'
})
export class AngeGardienComponent implements OnInit {
  ngOnInit(): void {
    
  }
}
