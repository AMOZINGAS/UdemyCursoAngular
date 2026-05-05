import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../../interface/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
  listName = input.required<string>();
}
