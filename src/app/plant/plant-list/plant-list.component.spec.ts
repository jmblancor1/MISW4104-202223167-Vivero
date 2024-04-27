/* tslint:disable:no-unused-variable */
import { async,ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantListComponent } from './plant-list.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PlantService } from '../plant.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Plant } from '../plant';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;
  //let plantService: PlantService;
  //let mockPlants: Plant[];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ PlantListComponent ],
      imports: [ HttpClientModule ],
      providers: [ PlantService ]
    }).compileComponents();
  });  

  beforeEach(() => {  
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    
    
    for(let i=0;i<3;i++){
      const plant=new Plant(
        faker.number.int(),
        faker.commerce.productName(),
        faker.lorem.sentence(),
        faker.helpers.arrayElement(['interior', 'exterior']),
        faker.number.int({ min: 5, max: 15 }),
        faker.location.country(),
        faker.commerce.productMaterial()
      );
      component.plants.push(plant);
    }
    fixture.detectChanges();
    debug=fixture.debugElement;
  }); 
    

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 3 <tbody tr> elements', () => {
    expect(debug.queryAll(By.css('tbody tr'))).toHaveSize(3)
  });
  it('should have 2 <tr> elements and the deleted book should not exist', () => {
    const plant = component.plants.pop()!;
    fixture.detectChanges();
    expect(debug.queryAll(By.css('tbody tr'))).toHaveSize(2)
 
    debug.queryAll(By.css('tbody tr')).forEach((selector, i)=>{
      expect(selector.nativeElement.textContent).not.toContain(Plant.name);
    });
  });
  
  
});

