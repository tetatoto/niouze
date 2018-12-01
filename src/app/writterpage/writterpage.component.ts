import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-writterpage',
  templateUrl: './writterpage.component.html',
  styleUrls: ['./writterpage.component.scss']
})
export class WritterpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/result']);
  }

}
