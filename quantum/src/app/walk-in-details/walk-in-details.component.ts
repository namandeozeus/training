import { Component } from '@angular/core';
import walkInDetails from './walk-in-details.json'

interface walkInDetails{
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
  selector: 'app-walk-in-details',
  templateUrl: './walk-in-details.component.html',
  styleUrls: ['./walk-in-details.component.scss'],
})
export class WalkInDetailsComponent {
  details: walkInDetails[] = walkInDetails;
}
