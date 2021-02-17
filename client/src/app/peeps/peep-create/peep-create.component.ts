import { Component } from "@angular/core";

@Component({
    selector: 'app-peep-create',
    templateUrl: './peep-create.component.html',
    styleUrls: ['./peep-create.component.css']
})
export class PeepCreateComponent {
    defaultPeep = "Write your peep here...";
}