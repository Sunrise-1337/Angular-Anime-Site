import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuHidden: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(request: string) {
    this.router.navigate(['/search'], {queryParams: {request}})
  }

  changeMenuVisibility(){
    this.menuHidden = !this.menuHidden
  }

}
