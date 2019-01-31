import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service';
import {Petition} from '../classes/Petition';
import {PETITIONS} from '../tmp_beforeRequest/petitions_list';

@Component({
  selector: 'app-petitions',
  templateUrl: './petitions.component.html',
  styleUrls: ['./petitions.component.css']
})
export class PetitionsComponent implements OnInit {

  petitions = PETITIONS;

  constructor() {
  }

  ngOnInit() {
  }

}
