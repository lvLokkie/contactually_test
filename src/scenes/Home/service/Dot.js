import { computed } from 'mobx';

/**
 * Dot model
 * @author Ryazanov I.A.
 */
export default class Dot {
  constructor(name, coordinates) {
    this.name = name;
    this.coordinates = coordinates;
  }

  @computed get caption() {
    return `${this.name} (${this.coordinates[0].toFixed(2)}, ${this.coordinates[1].toFixed(2)})`;
  }
}
