import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-blue-basket-cmp',
  templateUrl: './blue-basket-cmp.component.html',
  styleUrls: ['./blue-basket-cmp.component.css']
})
export class BlueBasketCmpComponent implements OnInit {

  constructor(
    private vcref: ViewContainerRef
  ) { }

  async ngOnInit() {
    const BlueBasketModule = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './BlueBasketCmp',
      
    });
    const componentRef: ComponentRef<{}> = this.vcref.createComponent(BlueBasketModule.BlueBasketComponent);
  }

}
