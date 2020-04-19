import {Component} from '@angular/core';
import {lorem} from 'faker';

//npm install @types/faker

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing-master';
  randomText = lorem.sentence();
  enteredText = '';

  onInput(input: string) {
    console.log(input);
    this.enteredText = input;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
