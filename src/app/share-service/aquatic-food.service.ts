import { EventEmitter, Injectable } from '@angular/core';
import { AquaticFood } from '../share-module/aquatic-food.module';

@Injectable({
  providedIn: 'root',
})
export class AquaticFoodService {

  dataDeteil = new EventEmitter<AquaticFood>();

  aquaticFoods:AquaticFood[] = [
    new AquaticFood(
      'ปลาทู',
      'อย่อยมาก อยากบอกต่อ',
      'https://upload.wikimedia.org/wikipedia/commons/c/c5/%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%97%E0%B8%B9%E0%B8%AA%E0%B8%B2%E0%B8%A7.jpg',
      100
    ),
    new AquaticFood(
      'ปลาข้างเหลือ',
      'ทอดกรอบ เหมาะเป็นกับแกล้ม',
      'https://www.bloggang.com/data/p/poungchompoo/picture/1508581214.jpg',
      100
    ),
    new AquaticFood(
      'ปลาโอ',
      'ตัวโตพอดี ต้มก็ดี ทอดก็ได้ นึ่งก็อร่อย',
      'https://upload.wikimedia.org/wikipedia/commons/e/ef/Thunnus_tonggol.jpg',
      100
    ),
  ];

  checkDeteil(booleanDeteil: boolean) {
    let dataDetailcheck: any;
    this.dataDeteil.subscribe((data) => {
      dataDetailcheck = data;
    });
    if (dataDetailcheck !== undefined) {
      booleanDeteil = true;
    }
  }

  constructor() {}
}
