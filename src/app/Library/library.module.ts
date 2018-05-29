import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LibraryComponent } from './library.component';
import { InputComponent } from './input/input.component';

const libraryRoutes: Routes = [
    {path:'', component: LibraryComponent}
];

@NgModule({
    imports:[CommonModule, FormsModule, RouterModule.forChild(libraryRoutes)],
    declarations:[
        LibraryComponent,
        InputComponent
        ]
})

export class LibraryModule{}