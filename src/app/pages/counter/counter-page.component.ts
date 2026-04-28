import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counter = 15;
  counterSignal = signal(15);

  increaseBy(value: number){
    this.counter += value;
    //this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update((current) => current + value);
  }

  constructor(){
    setInterval(() => {
      // this.counter += 1;
      this.counterSignal.update((v) => v + 1);
      console.log('Tick');
    }, 2000);
  }

  resetCounter(){
    this.counter = 15 ;
    this.counterSignal.set(15);
  }

}
