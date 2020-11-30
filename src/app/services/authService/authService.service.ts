import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable()
export class AuthService {
    
    constructor(private httpService: HttpService){}

    login(data: any){
      return this.httpService.post('users/login', data, {});
    }

}