import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: [  ]
})
export class RentalListComponent  {
  @Input() rentalList;
  @Output() clearMovies = new EventEmitter();

  onRentalListButtonClicked() {
    // Inform parent
    this.clearMovies.emit()
  }
}

/*
Exercise: 
Add a "Clear Rentals" button to the rental list component and a new event that the parent component should listen to and clear out the rental list (and count)
*/