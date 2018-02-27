import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit() {
  }

  hideMenu() {
    document.getElementById('navbarCollapse').classList.remove('show');
  }
}
