import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ComponentRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewContainerRef } from '@angular/core';

interface BlueBuyBtnInstance {
  buyItem?: EventEmitter<string>;
  price?: string
  sku?: string;
}

@Component({
  selector: 'app-blue-buy-btn',
  templateUrl: './blue-buy-btn.component.html',
  styleUrls: ['./blue-buy-btn.component.css']
})
export class BlueBuyBtnComponent implements AfterViewInit, OnChanges {
  @Input() sku: string = 't_porsche';
  @Output() buyItem = new EventEmitter<string>();
  componentRef: ComponentRef<BlueBuyBtnInstance> | undefined = undefined;

  constructor(
    private vcref: ViewContainerRef,
  ) { }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['sku'] && changes['sku'].currentValue) {
      this.render();
    }
    if (changes['componentRef'] && changes['componentRef'].currentValue) {
      console.log(this.buyItem);
    }
  }

  ngAfterViewInit() {
    this.render();
  }

  async render() {
    const BlueBuyModule = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './BlueBuyCmp',

    });
    this.componentRef?.destroy();
    this.componentRef = this.vcref.createComponent(BlueBuyModule.BlueBuyComponent);
    this.componentRef.instance.sku = this.sku;
    this.componentRef.instance.buyItem?.subscribe((event:any) => {
      this.buyItem.emit(event);
    });
  }

}
