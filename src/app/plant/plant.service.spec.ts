/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantService } from './plant.service';
import { PlantListComponent } from './plant-list/plant-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Plant', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantListComponent ],
      imports: [ HttpClientModule ],
      providers: [PlantService]
    });
  });

  it('should response service ', inject([PlantService], (service: PlantService) => {
    expect(service).toBeTruthy();
  }));
});
