import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { SortableElement } from 'react-sortable-hoc';

/**
 * Sortable list item
 * @author Ryazanov I.A
 */
@SortableElement
@observer
export default class Item extends Component {
  render() {
    const { props } = this;
    return (
      <li className="home__list-item">
        { props.value }
        <button
          type="button"
          className="home__item-action"
          onClick={() => props.onItemDelete(props.sortIndex)}
        >
          Remove
        </button>
      </li>
    );
  }
}
