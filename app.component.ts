import { Component } from '@angular/core';

interface Profile {
  name: string;
  description: string;
  imageURL: string; // Add an imageURL property for the profile image
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';

  // Define a profile object using the Profile interface
  profile: Profile = {
    imageURL: 'https://picsum.photos/200/200',// Provide the URL to the image
    name: 'Poonam Singh',
    description: 'Poonam Singh is a software engineer at Google. He lives in Mountain View, California.'
    
    
  };
  profile1: Profile = {
    imageURL: 'https://picsum.photos/200/200',// Provide the URL to the image
    name: 'Priya Kulkarni',
    description: 'Priya Kulkarni is a doctor at Stanford University. She lives in Palo Alto, Californi.'
};
}





