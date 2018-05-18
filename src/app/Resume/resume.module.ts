import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component'

@NgModule({
    imports:[CommonModule, ResumeRoutingModule],
    declarations:[ResumeComponent]//,
    //bootstrap: [ ResumeComponent ]
})

export class ResumeModule{}