import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() maximoRating = 5;
  @Input() ratingSeleccionado = 3;

  @Output() rated: EventEmitter<number> = new EventEmitter<number>();

  maximoRatingArr: any[] = [];
  ratingAnteriror: number = 0;

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  mouseEnter(index: number): void {
    this.ratingSeleccionado = index + 1;
  }

  mouseLeave(): void {
    if (this.ratingAnteriror != 0)
      this.ratingSeleccionado = this.ratingAnteriror;
    else
      this.ratingSeleccionado = 0;
  }

  rate(index: number): void {
    this.ratingSeleccionado = index + 1;
    this.ratingAnteriror = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }

}
