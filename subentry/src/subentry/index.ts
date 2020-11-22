import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function subentry(options: { dirPath: string }): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const {dirPath} = options;
    const indexContent = `export * from './public_api';`;
    const packageJsonContent = `{\n  "ngPackage": {\n    "lib": {\n      "entryFile": "public_api.ts"\n    }\n  }\n}`;
    tree.create(`${dirPath}/index.ts`, indexContent);
    tree.create(`${dirPath}/package.json`, packageJsonContent);
    tree.create(`${dirPath}/public_api.ts`, '');
    return tree;
  };
}
