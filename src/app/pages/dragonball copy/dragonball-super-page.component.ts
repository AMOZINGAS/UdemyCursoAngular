import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from '../../services/dragonball.service';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent]
  // imports: [NgClass],
})
export class DragonballSuperPageComponent {

  public dragonballService = inject(DragonballService);

}
