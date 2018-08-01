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
    return (
      <li className="home__list-item">
        { this.props.value }
        <button
          type="button"
          className="home__item-action"
          onClick={() => this.props.onDelete(this.props.sortIndex)}
        >
          Remove
        </button>
      </li>
    );
  }
}
