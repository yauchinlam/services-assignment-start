import { Injectable } from "@angular/core";

@Injectable()
export class CounterService{
    ActiveToInActivecounter=0;
    InActiveToActivecounter = 0;

    incrementActiveToInactive(){
        this.ActiveToInActivecounter++;
        console.log(this.ActiveToInActivecounter);
    }

    incrementInactiveToActive(){
        this.InActiveToActivecounter++;
        console.log(this.InActiveToActivecounter);     
    }
}