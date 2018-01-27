import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  // add the service we need
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // handle any redirects if a user isn't authenticated
      return  this.auth.user
                  .map(authState  => {
                      if (!authState) {
                        this.router.navigate(['login']);
                        return false;
                      }
                      return true;
                  });
  }
}
