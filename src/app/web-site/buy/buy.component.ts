import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent implements OnInit{

  paymentForm: FormGroup<any>;

 
  constructor(private fb:FormBuilder, private router:Router){}
ngOnInit(): void {
  this.paymentForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    fullName: ['',Validators.required],
    phone: ['',Validators.required],
    address: ['',Validators.required]
  })
}


  
OnBuy() {
  if(this.paymentForm.valid){
    this.router.navigate(['/kit'])
  }
}


OnBuyTest() {
 
  this.router.navigate(['/kit'])
}

}
