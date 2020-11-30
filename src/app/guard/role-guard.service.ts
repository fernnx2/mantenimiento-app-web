import { AuthService } from './../services/authService/authService.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import decode from 'jwt-decode';
@Injectable()
export class RoleGuard implements CanActivate {


  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const token = sessionStorage.getItem('token');
    // decode the token to get its payload
    const tokenPayload: any = decode(token);
    if (
      !this._authService.isAuthenticate() || 
      tokenPayload.role !== expectedRole
    ) {
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }

}