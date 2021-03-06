import packageJson from '..';

test('should get package metadata from UNPKG by default', async () => {
  const pkg = await packageJson('@tunnckocore/package-json');

  expect(pkg.name).toStrictEqual('@tunnckocore/package-json');
});

test('get package metadata from npm registry', async () => {
  function endpoint(name: any, tag: any) {
    return `https://registry.npmjs.org/${name}/${tag}`;
  }

  const pkg = await packageJson('package-json@4.0.0', endpoint);

  expect(pkg.name).toStrictEqual('package-json');
});
