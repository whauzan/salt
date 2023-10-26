import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { HomeService } from '../data-access/home.service';
import { Document, People, Video } from 'src/app/shared/interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  videoList: Video[] = [];
  peopleList: People[] = [];
  documentList: Document[] = [];

  constructor(private homeService: HomeService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.homeService.getFeaturedVideos().subscribe((resp) => {
      this.videoList = resp.data;
      this.cdr.markForCheck();
    })

    this.homeService.getFeaturedPeoples().subscribe((resp) => {
      this.peopleList = resp.data;
      this.cdr.markForCheck();
    })

    this.homeService.getFeaturedDocuments().subscribe((resp) => {
      this.documentList = resp.data;
      this.cdr.markForCheck();
    })
  }
}
