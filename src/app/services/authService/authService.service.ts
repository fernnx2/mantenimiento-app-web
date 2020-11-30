import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/models/User';
import { HttpService } from '../httpService/http.service';

@Injectable()
export class AuthService {
    
    constructor(private httpService: HttpService){}

    isAuthenticate(): boolean{
      const helper = new JwtHelperService();
      const token = sessionStorage.getItem('token');
      if(token){
        return !helper.isTokenExpired(token);
      }
      return false;
      
    }

    login(data: any){
      return this.httpService.post('users/login', data, {});
    }

    signup(user: User){
      return this.httpService.post('signup', user, {});
    }
}