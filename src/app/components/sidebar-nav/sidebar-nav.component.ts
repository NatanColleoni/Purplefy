import { Component, OnInit } from '@angular/core';
import { faHome, faSearch, faGuitar, faMusic } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit {

  selectedOption = 'Home'

  homeIcon = faHome
  searchIcon = faSearch
  artistIcon = faGuitar
  playlistIcon = faMusic

  constructor() { }

  ngOnInit(): void {
    
  }

  buttonClick(buttonName: string) {
    this.selectedOption = buttonName
  }
}
