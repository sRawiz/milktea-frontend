import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menus',
  imports: [
    CommonModule,
    FormsModule,
    SidebarComponent
  ],
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css'],
})
export class MenusComponent implements OnInit {
  searchText: string = '';
  menus: any[] = [];
  filteredMenus: any[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.getMenus().subscribe(data => {
      this.menus = data;
      this.filteredMenus = data;
    });
  }

  onSearch() {
    this.filteredMenus = this.menus.filter(menu =>
      menu.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      menu.description.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
