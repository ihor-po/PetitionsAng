import { Component, Input} from '@angular/core';
import {Petition} from '../classes/Petition';

@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.css']
})
export class PetitionComponent {
  @Input() model: Petition;
}
