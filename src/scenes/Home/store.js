import { observable, action } from 'mobx';
import { arrayMove } from 'react-sortable-hoc';


/**
 * Home page store
 * @author Ryazanov I.A.
 */
export default class HomeStore {
  /**
   * Yandex maps state
   * @type {{center: number[], zoom: number}}
   */
  // @observable mapState = ;
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
   * FIXME: save coords
   * Change dot coordinates
   * @param {Number} pos of dot
   * @param {Number[]} newCoordinates
   */
   changeCoordinates(pos, newCoordinates) {
     if (this.items[pos]) {
       this.items[pos].coordinates = newCoordinates;
     }
   }
}
