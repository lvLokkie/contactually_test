import { computed, observable, toJS } from 'mobx';

const DIGITS_COUNT = 2;

/**
 * Dot model
 * @author Ryazanov I.A.
 */
export default class Dot {
  @observable name;
  @observable coordinates;

  constructor(name, coordinates) {
    this.name = name;
    this.coordinates = coordinates;
  }

  /**
   * Convert observable array to native js array
   * @returns {any}
   */
  @computed get coordinatesAsArray() {
    return toJS(this.coordinates);
  }

  @computed get latitude() {
    return this.coordinates[0];
  }

  @computed get longitude() {
    return this.coordinates[1];
  }

  @computed get latitudeBrief() {
    return this.latitude.toFixed(DIGITS_COUNT);
  }

  @computed get longitudeBrief() {
    return this.longitude.toFixed(DIGITS_COUNT);
  }

  @computed get caption() {
    return `${this.name} (${this.latitudeBrief}, ${this.longitudeBrief})`;
  }
}
