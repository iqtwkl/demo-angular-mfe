import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ComponentRef, EventEmitter, Input, OnChanges, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';

interface BlueBasketCmpInstance {
  buyItem: EventEmitter<string>;
  classname: string;
  count: number;
  items: string[];
}

@Component({
  selector: 'app-blue-basket-cmp',
  templateUrl: './blue-basket-cmp.component.html',
  styleUrls: ['./blue-basket-cmp.component.css']
})
export class BlueBasketCmpComponent implements AfterViewInit {
  @Input() buyItem = new EventEmitter<string>();
  componentRef: ComponentRef<BlueBasketCmpInstance> | undefined = undefined;

  constructor(
    private vcref: ViewContainerRef
  ) { }

  ngAfterViewInit() {
    this.render();
  }

  async render() {
    const BlueBasketModule = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './BlueBasketCmp',

    });
    this.componentRef?.destroy();
    this.componentRef = this.vcref.createComponent(BlueBasketModule.BlueBasketComponent);
    this.componentRef.instance.buyItem = this.buyItem;
  }

}
