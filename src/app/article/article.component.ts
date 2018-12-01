import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createVideo() {
    this.router.navigate(['/video']);
  }

}
