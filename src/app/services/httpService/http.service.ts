import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable()
export class HttpService {

    apiUrl: string;

    constructor(private httpService: HttpClient){
        this.apiUrl = environment.apiUrl;
    }

    get(path: string, options: object){
        return this.httpService.get(this.apiUrl + path, options);
    }

    post(path: string, data: any, options: object){
        return this.httpService.post(this.apiUrl + path, data, options);
    }

    update(path: string, data: any, options: object){
      return this.httpService.put(this.apiUrl + path, data, options);
    }
}
