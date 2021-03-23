import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
	movieForm: FormGroup;
	movies: Array<Movie> = [];

	constructor(private formBuilder: FormBuilder) {
		this.movieForm = formBuilder.group({
			_id: [ '' ],
			title: [ '' ],
			description: [ '' ],
			year: [ '' ],
			director: [ '' ]
		});
	}

	ngOnInit(): void {
		let movie: Movie = {
			_id: '1',
			title: 'Justice League',
			description: 'Superhero action movie',
			year: 2021,
			director: 'Zack Snyder'
		};
		//adaug obiectul movie in lista Movies
		this.movies.push(movie);
	}

	onSave(): void {
		if (this.movieForm.controls['_id'].value == '') {
			//astfel se modifica o valoare din formular(form)
			this.movieForm.controls['_id'].setValue(this.movies.length + 1);
			console.log(this.movieForm.value);
			this.movies.push(this.movieForm.value);
			console.log(this.movies);
		} else {
			this.movies = this.movies.filter((item) => item._id != this.movieForm.controls['_id'].value);
			console.log(this.movies);
			this.movies.push(this.movieForm.value);
		}
		this.resetForm();
	}

	resetForm(): void {
		this.movieForm = this.formBuilder.group({
			_id: [ '' ],
			title: [ '' ],
			description: [ '' ],
			year: [ '' ],
			director: [ '' ]
		});
	}
	onEdit(movie: Movie): void {
		console.log('movie from dashboard');
		console.log(movie);
		this.movieForm = this.formBuilder.group({
			_id: [ movie._id ],
			title: [ movie.title ],
			description: [ movie.description ],
			year: [ movie.year ],
			director: [ movie.director ]
		});
	}
}

export interface Movie {
	_id: string;
	title: string;
	description: string;
	year: number;
	director: string;
}
