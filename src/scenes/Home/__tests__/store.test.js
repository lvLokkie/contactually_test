import Dot from 'Scenes/Home/models/Dot';
import HomeStore from 'Scenes/Home/store';

const store = new HomeStore();
const dot1 = new Dot('Point 1', [0, 0]);
const dot2 = new Dot('Point 2', [0, 0]);

describe('HomeStore', () => {
  it('creates new points', () => {
    store.addDot(dot1);
    store.addDot(dot2, 1);
    expect(store.items.length).toBe(2);
    expect(store.items[0].name).toBe('Point 1');
    expect(store.items[1].name).toBe('Point 2');
  });
  it('change dots order', () => {
    store.moveDot(0, 1);
    expect(store.items.length).toBe(2);
    expect(store.items[0].name).toBe('Point 2');
    expect(store.items[1].name).toBe('Point 1');
  });
  it('delete point', () => {
    store.deleteDot(1);
    store.deleteDot(-1);
    expect(store.items.length).toBe(1);
    expect(store.items[0].name).toBe('Point 2');
  });
  it('change map center', () => {
    expect(store.centerCoordinates).toEqual([55.76, 37.64]);
    store.setMapCenter([55.76, 12.64]);
    expect(store.centerCoordinates).toEqual([55.76, 12.64]);
  });
  it('change dot caption', () => {
    expect(store.inputVal).toEqual('Goose there');
    store.setCaption('Not there');
    expect(store.inputVal).toEqual('Not there');
  });
  it('change placeMark coordinates', () => {
    expect(store.items[0].coordinatesAsArray).toEqual([0, 0]);
    store.changePlaceMarkCoordinates(0, [1, 1]);
    store.changePlaceMarkCoordinates(-1, [1, 1]);
    expect(store.items[0].coordinatesAsArray).toEqual([1, 1]);
  });
});
