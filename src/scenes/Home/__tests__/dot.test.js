import Dot from 'Scenes/Home/models/Dot';

let dot;
describe('Dot model', () => {
  it('creates new dot', () => {
    dot = new Dot('Goose?', [0.011, 1.021]);
    expect(dot).toEqual(dot);
    expect(dot.latitude).toEqual(0.011);
    expect(dot.longitude).toEqual(1.021);
    expect(dot.coordinatesAsArray).toEqual([0.011, 1.021]);
    expect(dot.caption).toEqual('Goose? (0.01, 1.02)');
  });
});
