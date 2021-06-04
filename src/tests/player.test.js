import Player from '../models/Player';

test('initializes class', () => {
    const player = new Player();
    expect(player).toBeDefined();
});

test('initializes class with values', () => {
    const player = new Player('john', 3.2);
    expect(player.GetInitiation()).toBe(3.2);
    expect(player.GetName()).toBe('john');
});

test('initializes class with string init', () => {
    const player = new Player('john2', '5');
    expect(player.GetInitiation()).toBe(5);
    expect(player.GetName()).toBe('john2');
});

test('initializes class with numeric name', () => {
    const player = new Player(2, 2.0);
    expect(player.GetInitiation()).toBe(2.0);
    expect(player.GetName()).toBe('2');
});

test('initializes class with bad init', () => {
    const player = new Player('john3', 'abc');
    expect(player.GetInitiation()).toBe(0);
    expect(player.GetName()).toBe('john3');
});

test('does not equal non Player Object', () => {
    const player = new Player('james', 2);
    expect(player.Equals('something')).toBe(false);
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