import { Injectable } from '@angular/core';
import { Activity, ActivityType, Channel } from '../interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private url = 'https://salt-api.vercel.app/api'

  constructor(private http: HttpClient) { }

  getActivity(): Observable<{message: string, data: Activity[]}> {
    return this.http.get<{message: string, data: Activity[]}>(`${this.url}/activity/featured`)
  }

  getChannel(): Observable<{message: string, data: Channel[]}> {
    return this.http.get<{message: string, data: Channel[]}>(`${this.url}/channel/featured`)
  }

  getActivityMessageType(type: ActivityType): string {
    switch (type) {
      case ActivityType.Comment:
        return 'commented';
      case ActivityType.Video:
        return 'added a new video';
      case ActivityType.Document:
        return 'shared a document';
      case ActivityType.Badge:
        return 'unlocked a new badge';
      case ActivityType.Like:
        return 'liked';
      default:
        return '';
    }
  }
}
