import { observable, action } from 'mobx';
import { arrayMove } from 'react-sortable-hoc';


/**
 * Home page store
 * @author Ryazanov I.A.
 */
export default class HomeStore {
  /**
   * Yandex maps center coordinates
   * Moscow is default
   * @type {Number[]}
   */
  @observable centerCoordinates = [55.76, 37.64];

  /**
   * Dots collection
   * @type {Dot[]}
   */
   @observable items = [];
  /**
   * Dot name input value
   * @type {String}
   */
   @observable inputVal = 'Goose there';

  /**
   * Add dot to collection
   * @param {Dot} dot
   * @param {Number} [pos] index or append if empty
   */
   @action addDot(dot, pos) {
     if (pos) {
       this.items.splice(pos, 0, dot);
     } else {
       this.items.push(dot);
     }
   }

  /**
   * Remove dot from collection
   * @param {Number} pos Dot collection`s index
   */
   @action deleteDot(pos) {
     if (this.items[pos]) {
       this.items.splice(pos, 1);
     }
   }


  /**
   * Move dot to new position at collection
   * @param {Number} oldIndex
   * @param {Number} newIndex
   * @returns {boolean}
   */
   @action moveDot(oldIndex, newIndex) {
     this.items = arrayMove(this.items, oldIndex, newIndex);
   }

  /**
   * Save dot inputVal
   * @param {String} val
   */
   @action setCaption(val) {
     this.inputVal = val;
   }

  /**
   * Changes placemark coordinates
   * @param {Number} pos of dot
   * @param {Number[]} coordinates
   */
   @action changePlaceMarkCoordinates(pos, coordinates) {
     if (this.items[pos]) {
       this.items[pos].coordinates = coordinates;
     }
   }

  /**
   * Save ya map center coodrinates
   * @param {Number[]} coordinates
   */
   @action setMapCenter(coordinates) {
     this.centerCoordinates = coordinates;
   }
}
