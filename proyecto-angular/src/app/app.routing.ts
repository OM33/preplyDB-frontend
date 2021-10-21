import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { StudentsComponent } from './components/students/students.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'sobre-mi', component: AboutComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'create-student', component: CreateComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'student/:id', component: DetailComponent },
  { path: 'edit-student/:id', component:EditComponent },
  { path: '**', component: ErrorComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

