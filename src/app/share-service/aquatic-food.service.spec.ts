import { TestBed } from '@angular/core/testing';

import { AquaticFoodService } from './aquatic-food.service';

describe('AquaticFoodService', () => {
  let service: AquaticFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AquaticFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
