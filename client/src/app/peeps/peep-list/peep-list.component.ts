import { Component, OnInit } from '@angular/core';
import { Peep } from '../peep.model';
import { PeepsService } from '../peeps.service';

@Component({
  selector: 'app-peep-list',
  templateUrl: './peep-list.component.html',
  styleUrls: ['./peep-list.component.css']
})
export class PeepListComponent implements OnInit {
  peeps: Peep[] = [];

  constructor(public peepsService: PeepsService) { }

  ngOnInit(): void {
    this.peeps = this.peepsService.getPeeps();
  }

}
