import { Injectable } from "@angular/core";
import { Peep } from "./peep.model";

@Injectable()
export class PeepsService {
   private peeps: Peep[] = [
       {
           id: null,
           title: 'First Peep Ever',
           content: 'This is my first peep ever! How exciting!'
       },
       {
        id: null,
        title: 'Second Peep Ever',
        content: 'This is my second peep ever! How exciting!'
        },
        {
            id: null,
            title: 'Third Peep Ever',
            content: 'This is my third peep ever! How exciting!'
        }
   ];

   getPeeps(): Peep[] {
       return [...this.peeps];
   }
}