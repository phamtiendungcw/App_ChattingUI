/*
 * Copyright (c) 2022. DungCW
 */

import { Component, OnInit } from '@angular/core';
import { AccountService } from "../_services/account.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => console.log(err)
    })
  }

  logout() {
    this.accountService.logout();
  }
}
