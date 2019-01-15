// https://medium.com/@notrab/using-create-react-app-with-hapi-js-8f4ef3dcd311
const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');
const CodeBuild = require('./aws/codebuild');

const server = Hapi.server({
  port: 3001,
  host: 'localhost',
  routes: {
    cors: true,
  },
});

// server.route({
//   method: 'GET',
//   path: '/',
//   handler: (request, h) => {
//     return 'Hello, world!';
//   }
// });

// server.route({
//   method: 'GET',
//   path: '/{name}',
//   handler: (request, h) => {
//     return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
//   }
// });

// const init = async () => {
//     await server.start();
//     console.log(`Server running at: ${server.info.uri}`);
// };

const init = async () => {
  await server.register(Inert);

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: Path.join(__dirname, 'build'),
        listing: false,
        index: true,
      },
    },
  });

  server.route({
    method: 'GET',
    path: '/codebuild',
    handler: async (request, h) => {
      console.log('calling codeBuildService');
      const codeBuildService = new CodeBuild.CodeBuildService();
      const buildData = await codeBuildService.getLatestBuildData();
      const buildResult = codeBuildService.getBuildResult(buildData);
      return buildResult;
    },
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();