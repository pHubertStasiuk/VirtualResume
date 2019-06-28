import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  contact: IContactInput;
  options: any;

  overlays: any[];

  constructor(private formBuilder: FormBuilder) {
     this.contact = <IContactInput>{};


    }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'subject': [null, Validators.compose([Validators.required])],
      'name': [null, Validators.compose([Validators.required])],
      'message': [null, Validators.compose([Validators.required])]
    });

    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });


    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
  };











  }

  showResponse(event) {
      // this.messageService.add({severity:'info', summary:'Succees', detail: 'User Responded', sticky: true});

      console.log('correct');
  }

}

interface IContactInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
}
