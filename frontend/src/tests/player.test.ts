import Player from '../models/Player';

test('initializes class', () => {
  const player = new Player('', 0);
  expect(player).toBeDefined();
});

test('initializes class with values', () => {
  const player = new Player('john', 3.2);
  expect(player.GetInitiation()).toBe(3.2);
  expect(player.GetName()).toBe('john');
});

test('does equal same Player', () => {
  const player = new Player('james', 2);
  const player2 = new Player('james', 2);
  expect(player.Equals(player2)).toBe(true);
});

test('does equal same Player with different initiation', () => {
  const player = new Player('james', 2);
  const player2 = new Player('james', 12);
  expect(player.Equals(player2)).toBe(true);
});

test('does not equal different Player name', () => {
  const player = new Player('james', 2);
  const player2 = new Player('walker', 2);
  expect(player.Equals(player2)).toBe(false);
});
