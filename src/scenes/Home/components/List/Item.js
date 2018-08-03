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
        { props.value } &nbsp;
        <button
          type="button"
          className="home__action-delete"
          title="Delete item"
          onClick={() => props.onItemDelete(props.sortIndex)}
        >
          &#x2716;
        </button>
      </li>
    );
  }
}
