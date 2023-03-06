import { Component } from '@angular/core';
import walkInList from './walk-in-list.json'

interface walkInList{
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  jobRoles: {
    img: string;
    title: string;
  }[];
  tags: string[];
}

@Component({
  selector: 'app-walk-in-list',
  templateUrl: './walk-in-list.component.html',
  styleUrls: ['./walk-in-list.component.scss'],
})
export class WalkInListComponent {
  list: walkInList[] = walkInList;
}
