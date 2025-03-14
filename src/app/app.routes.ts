import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TareasComponent } from './tareas/tareas.component';

export const routes: Routes = [
    {path:'', component: InicioComponent},
    {path:'home', component: InicioComponent},
    {path:'profile', component: PerfilComponent},
    {path:'tasks', component: TareasComponent}
];
