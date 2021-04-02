import { StoriesComponent } from './stories/stories.component';
import { PoemsComponent } from './poems/poems.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompositionsComponent } from './compositions/compositions.component';

const routes: Routes = [
  {
    path: 'sections', children: [
      {path: 'stories', component: StoriesComponent},
      {path: 'poems', component: PoemsComponent},
      {path: 'compositions', component: CompositionsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
