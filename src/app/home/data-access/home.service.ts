import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Document, People, Video } from 'src/app/shared/interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = 'https://salt-api.vercel.app/api'

  constructor(private http: HttpClient) { }

  getFeaturedVideos(): Observable<{ message: string, data: Video[] }> {
    return this.http.get<{ message: string, data: Video[] }>(`${this.url}/video/featured`)
  }

  getFeaturedPeoples(): Observable<{message: string, data: People[]}> {
    return this.http.get<{message: string, data: People[]}>(`${this.url}/people/featured`)
  }

  getFeaturedDocuments(): Observable<{message: string, data: Document[]}> {
    return this.http.get<{message: string, data: Document[]}>(`${this.url}/document/featured`)
  }
}
