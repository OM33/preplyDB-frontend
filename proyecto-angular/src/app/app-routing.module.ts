// import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { StudentsComponent } from './components/students/students.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { EditComponent } from './components/edit/edit.component';

const appRoutes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'sobre-mi', component: AboutComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'crate-student', component: CreateComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'edit-student/:id', component:EditComponent},
  {path: '**', component: ErrorComponent},
];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
