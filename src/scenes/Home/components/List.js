import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { SortableContainer } from 'react-sortable-hoc';
import uniqueKey from 'unique-key';

import Item from './List/Item';

/**
 * Sortable list
 * @author Ryazanov I.A
 */
@SortableContainer
@observer
export default class List extends Component {
  render() {
    return (
      <ul className="home__list">
        {
          this.props.items.map((item, index) => (
            <Item
              key={uniqueKey(16, index)}
              sortIndex={index}
              index={index}
              value={item.caption}
              onItemDelete={this.props.onItemDelete}
            />
          ))
        }
      </ul>
    );
  }
}
