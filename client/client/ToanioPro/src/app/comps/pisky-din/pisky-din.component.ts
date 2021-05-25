
import { Component, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Users {
  type: string;
  date: string;
  link: string;
}
let nLink = `https://dintora.org/article/1546`;
const PEOPLE: Users[] = [
  {
    type: 'חלוקת רכוש',
    date: '02.04.2020',
    link: nLink,
  },
  {
    type: 'חיוב כתובה',
    date: '02.04.2020',
    link: nLink,
  },
  {
    type: 'חיוב כתובה',
    date: '02.03.2019',
    link: nLink,
  },
  {
    type: 'מזונות ילדים',
    date: '02.04.2020',
    link: nLink,
  }
];

function search(text: string, pipe: PipeTransform): Users[] {
  return PEOPLE.filter(users => {
    const term = text.toLowerCase();
    return users.type.toLowerCase().includes(term)
        || pipe.transform(users.date).includes(term)
        || pipe.transform(users.link).includes(term);
  });
}

@Component({
  selector: 'app-pisky-din',
  templateUrl: './pisky-din.Component.html',
  // styleUrls: ['./pisky-din.component.css']
  providers: [DecimalPipe]
})
export class PiskyDinComponent {

  users$: Observable<Users[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe) {
    this.users$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }

}







// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-pisky-din',
//   templateUrl: './pisky-din.component.html',
//   styleUrls: ['./pisky-din.component.css']
// })
// export class PiskyDinComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
// }




