// import required packages
import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

// describe component
@Component({
  selector: 'app-root', // component name used in markup
  standalone: true, // component is self-contained
  // the component's markup
  templateUrl: './main.html',
})

// export component
export class AddOneButtonComponent {
  count = 0;
}

bootstrapApplication(AddOneButtonComponent);
