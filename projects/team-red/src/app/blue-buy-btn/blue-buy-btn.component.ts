import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-blue-buy-btn',
  templateUrl: './blue-buy-btn.component.html',
  styleUrls: ['./blue-buy-btn.component.css']
})
export class BlueBuyBtnComponent implements OnInit {

  constructor(
    private vcref: ViewContainerRef
  ) { }

  async ngOnInit() {
    const BlueBuyModule = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './BlueBuyCmp',
      
    });
    const componentRef: ComponentRef<{}> = this.vcref.createComponent(BlueBuyModule.BlueBuyComponent);
  }

}
