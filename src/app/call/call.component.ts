import { Call } from './../models/call';
import { CommonService } from './../services/common.service';
import { Router } from '@angular/router';
import { CallService } from './../services/call.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnDestroy {

  subscription: Subscription;
  calls: Call[];
  call: Call;
  filteredCalls: any[];

  constructor(
    private callService: CallService,
    public commonService: CommonService) {
      this.subscription = this.callService.getAll().subscribe(calls => {
      this.filteredCalls = this.calls = calls;
    });
  }

  showDeletePopup(call) {
    this.call =  call;
  }

  delete(callId) {
    this.callService.delete(callId);
  }

  filter(query: string) {
    this.filteredCalls = (query) ?
      this.calls.filter(p =>
        p.callNo.toLowerCase().includes(query.toLowerCase())
      ) :
      this.calls;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
