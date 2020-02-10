# reactjs-blog
Personal blog done with reactjs

## Development
Package.json holds in "scripts" the following:
- **lint**: runs eslint againts all JavaScript files
- **lint:fix**: runs v and eslint againts all JavaScript files and fix them
- **clean**: empties the dist folder
- **prebuild**: ensure that when build runs, the clean script is called
- **build**: runs rullup -c -w

A pre-commit hook is present (husky) that will lint:fix the code.

Eslint configuration is withing "eslintConfig"
