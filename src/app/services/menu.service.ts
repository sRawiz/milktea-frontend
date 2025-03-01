import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menus = [
    { id: 1, name: 'ชานมไตหวั่น', description: 'ชานมสูตรไต้หวัน หอม อร่อย', price: 40, image: 'taiwan-milktea.png' },
    { id: 2, name: 'ชานมโกโก้', description: 'ชานมโกโก้เข้มข้น หอมละมุน', price: 50, image: 'choco-milktea.png' },
    { id: 3, name: 'ชานมมัทฉะ', description: 'ชมนมมัทฉะแท้ 100%', price: 45, image: 'matcha-milktea.png' },
    { id: 4, name: 'กาแฟเย็น', description: 'กาแฟสดคั่วบด หอมกรุ่น', price: 55, image: 'icedcoffee-milktea.png' },
  ];

  constructor() {}

  getMenus(): Observable<any[]> {
    return of(this.menus);
  }
}
