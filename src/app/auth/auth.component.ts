import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: [ './auth.component.css' ]
})
export class AuthComponent implements OnInit {
	authType: string = 'login';

	loginForm: FormGroup;
	registerForm: FormGroup;
	resetPasswordForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.loginForm = formBuilder.group({
			email: [ '', Validators.compose([ Validators.required, Validators.email ]) ],
			password: [ '', Validators.compose([ Validators.required, Validators.minLength(6) ]) ]
		});
		this.registerForm = formBuilder.group({
			email: [ '', Validators.compose([ Validators.required, Validators.email ]) ],
			password: [ '', Validators.compose([ Validators.required, Validators.minLength(6) ]) ],
			repassword: [ '', Validators.compose([ Validators.required, Validators.minLength(6) ]) ],
			name: [ '', Validators.compose([ Validators.required ]) ],
			phone: [
				'',
				Validators.compose([ Validators.required, Validators.minLength(10), Validators.maxLength(10) ])
			]
		});
		this.resetPasswordForm = formBuilder.group({
			email: [ '', Validators.compose([ Validators.required, Validators.email ]) ]
		});
	}

	ngOnInit(): void {}
	onViewChange(viewType: string): void {
		this.authType = viewType;
	}
	onLogin(): void {
		console.log(this.loginForm.value);
	}

	onRegister(): void {
		console.log(this.registerForm.value);
	}

	onForgotPassword(): void {
		console.log(this.resetPasswordForm.value);
	}
}
