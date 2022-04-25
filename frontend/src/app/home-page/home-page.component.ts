import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

	constructor(
		private matIconRegistry: MatIconRegistry, 
		private domSanitizer: DomSanitizer ) { 

		this.matIconRegistry.addSvgIcon(
			'canvasMakerLogo',
			this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/logo.svg')
		);
	}

	ngOnInit() {
	}


}
