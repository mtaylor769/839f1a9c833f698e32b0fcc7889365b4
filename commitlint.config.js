export const AppJiraIdentifier = 'VSS';
module.exports = {
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'scope-enum': [0],
    'function-rules/scope-enum': [
      2,
      'always',
      ({raw: message}) => {
        if (!message.includes('::')) {
          return [
            false,
            `Commit message divider must be ::, example:  ${AppJiraIdentifier}-0 :: commit message`,
          ];
        }

        const [header, body] = message.trim('\n').split('::');

        if (!body) {
          return [false, "Commit message's body must not be empty"];
        }

        const headers = header.trim().split(',');

        if (headers.some(testHeader => !/VSS+-([0-9])/.test(testHeader))) {
          return [
            false,
            `Header must starts with ${AppJiraIdentifier} followed by task's number, example: ${AppJiraIdentifier}-0`,
          ];
        }
        return [true];
      },
    ],
  },
};
