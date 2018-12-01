import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WritterpageComponent } from './writterpage/writterpage.component';
import { ArticleComponent } from './article/article.component';
import { ResultComponent } from './result/result.component';
import { VideoComponent } from './video/video.component';
import { RootContainerComponent } from './root-container/root-container.component';

const routes: Routes = [
  { path: '', component: RootContainerComponent,
        children: [
          { path: 'homepage', component: HomepageComponent },
          { path: 'writter', component: WritterpageComponent },
          { path: 'result', component:  ResultComponent},
          { path: 'article', component:  ArticleComponent},
          { path: 'video', component:  VideoComponent},
          { path: '**', component: HomepageComponent }
        ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
