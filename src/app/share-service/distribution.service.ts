import { Injectable } from '@angular/core';
import { Distribution } from '../share-module/distribution.module';

@Injectable({
  providedIn: 'root'
})
export class DistributionService {
  distributions:Distribution[] = [
    new Distribution ('ปลาทู',1),
    new Distribution ('ปลาข้างเหลือ',2),
    new Distribution ('ปลาโอ',3)
  ]
  constructor() { }
}
