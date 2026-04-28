import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
  // imports: [NgClass],
})
export class DragonballPageComponent {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001},
    { id: 2, name: 'Vegeta', power: 8000},
    { id: 3, name: 'Gohan', power: 3000},
    { id: 4, name: 'Milk', power: 800}
  ]);

  powerClasses = computed(()=> {
    return {
      'text-danger' : true,
    };
  })

}
