/*
 * Copyright (c) 2022. DungCW
 */

import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { delay, finalize, Observable } from 'rxjs';
import { BusyService } from "../_services/busy.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private busyService: BusyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.busyService.busy();

    return next.handle(request).pipe(
      delay(800),
      finalize(() => {
        this.busyService.idle();
      })
    );
  }
}
