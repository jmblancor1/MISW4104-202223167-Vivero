import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';
@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  plants: Array<Plant>=[];
  indoorPlantCount: number = 0;
  outdoorPlantCount: number = 0;

  constructor(private plantService: PlantService) { }
  getPlants(): void {
    this.plantService.getPlants().subscribe((plants)=>{
      this.plants=plants;
      this.indoorPlantCount = plants.filter(plant => plant.tipo.toLowerCase() === 'interior').length;
      this.outdoorPlantCount = plants.filter(plant => plant.tipo.toLowerCase() === 'exterior').length;
  
    });
  }
  
  ngOnInit() {
    this.getPlants();
  }

}
