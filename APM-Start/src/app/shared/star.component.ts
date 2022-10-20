import { Component, OnChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    rating: number = 4.5;
    cropWidth: number = 68;

    ngOnChanges(): void {
        this.cropWidth = this.rating * (75/5);
    }
}