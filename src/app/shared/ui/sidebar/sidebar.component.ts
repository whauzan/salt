import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { SidebarService } from '../../data-access/sidebar.service';
import { Activity, Channel } from '../../interface';
import { getTimestamp } from '../../utils';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  activityList: Activity[] = [];
  channelList: Channel[] = [];
  sidebarService: SidebarService = inject(SidebarService)

  constructor(private cdr: ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.sidebarService.getActivity().subscribe((resp) => {
      this.activityList = resp.data.map((item) => ({
        ...item, createdAt: getTimestamp(item.createdAt)
      }))
      this.cdr.markForCheck();
    })

    this.sidebarService.getChannel().subscribe((resp) => {
      this.channelList = resp.data;
      this.cdr.markForCheck();
    })
  }
}
