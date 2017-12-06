import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-search-customers',
templateUrl: './customer/search-customer.component.html',
  // styleUrls: ['./search-customers.component.css']
})

export class SearchCustomersComponent implements OnInit {
  lastName: string;
  customers: Customer[];
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.lastName = "";
  }

  private searchCustomers() {
    this.dataService.getCustomersByLastName(this.lastName).then(customers => this.customers = customers);
  }

  onSubmit() {
    this.searchCustomers();
  }
} 