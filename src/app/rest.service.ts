import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public get(url: string) {
    return this.http.get(url) // TODO GET http://localhost:3004/posts
  }
  public post(url: string, body) {
    return this.http.post(url, body) // TODO POST http://localhost:3004/posts
  }
}
