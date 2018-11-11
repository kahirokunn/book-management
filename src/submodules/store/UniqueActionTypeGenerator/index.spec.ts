import UniqueActionTypeGenerator, {generate} from './index';

test('strict mode onで同名のキーを生成した場合エラーが起こる', () => {
  UniqueActionTypeGenerator.strictMode(true);
  generate('hello');
  expect(() => generate('hello')).toThrow();
});

test('strict mode offで同名のキーを生成した場合エラーが起こらない', () => {
  UniqueActionTypeGenerator.strictMode(false);
  expect(generate('world')).toBe('world_0');
  expect(generate('world')).toBe('world_1');
  expect(generate('world', 'space')).toBe('space/world_0');
  expect(generate('world', 'space')).toBe('space/world_1');

  expect(generate('world', '/////space/////')).toBe('space/world_2');
});

test('namespaceが良い感じになる', () => {
  UniqueActionTypeGenerator.strictMode(false);
  expect(generate('world', 'container/helloWorld')).toBe('container/helloWorld/world_0');
  expect(generate('world', 'container/helloWorld/')).toBe('container/helloWorld/world_1');
  expect(generate('world', '/container/helloWorld/')).toBe('container/helloWorld/world_2');
});
