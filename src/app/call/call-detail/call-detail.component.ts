import { CommonService } from './../../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CallService } from './../../services/call.service';
import { Call } from './../../models/call';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-detail',
  templateUrl: './call-detail.component.html',
  styleUrls: ['./call-detail.component.css']
})
export class CallDetailComponent implements OnInit {
  call: Call;
  id;

  constructor(private callService: CallService,
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.callService.get(this.id)
          .take(1)
          .subscribe((p) => {
            this.call = p;
          });
    }
  }

  ngOnInit() {
  }

  gotoCustomerPage() {
    const url = this.commonService.getCustomersURL() + '/' + this.call.customerKey +
            '?returnUrl=' + this.commonService.getCallsURL() + '/' + this.call.$key;
    this.router.navigateByUrl(url);
  }

  cancel() {
    this.router.navigate([this.commonService.getCallsURL()]);
  }

}
