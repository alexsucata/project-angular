import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../dashboard/dashboard.component';

@Component({
	selector: 'app-display-movies',
	templateUrl: './display-movies.component.html',
	styleUrls: [ './display-movies.component.css' ]
})
export class DisplayMoviesComponent implements OnInit {
	@Input() moviesAttribute: Array<Movie> = [];
	@Output() movieSelect: EventEmitter<Movie> = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	onSelect(movie): void {
		console.log(movie);
		this.movieSelect.emit(movie);
	}
}
