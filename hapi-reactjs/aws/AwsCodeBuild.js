// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/node-configuring-proxies.html
const AWS = require('aws-sdk');
const proxy = require('proxy-agent');

class AwsCodeBuild {
  constructor() {
    AWS.config.update({
      region: 'ap-southeast-1',
    });

    AWS.config.update({
      httpOptions: { agent: proxy('http://proxy2.sq.com.sg') },
    });

    this.codebuild = new AWS.CodeBuild();
  }

  async getLatestBuildData(build) {
    const buildData = await this.batchGetBuild(build);
    return buildData.builds[0];
  }

  batchGetBuild(build) {
    const params = {
      ids: [
        build,
      ],
    };
    return new Promise(((resolve, reject) => {
      this.codebuild.batchGetBuilds(params, (error, result) => {
        if (error) {
          reject(error);
        } else {
          // console.log(result);
          resolve(result);
        }
      });
    }));
  }

  async getLatestBuild() {
    const builds = await this.getLatestBuilds();
    return builds.ids[0];
  }

  async getLatestBuilds() {
    const params = {
      projectName: 'pp-frontend',
      sortOrder: 'DESCENDING',
    };

    const result = await this.listBuildsForProject(params);
    return result;
  }

  listBuildsForProject(params) {
    return new Promise(((resolve, reject) => {
      this.codebuild.listBuildsForProject(params, (error, result) => {
        if (error) {
          reject(error);
        } else {
          // console.log(result);
          resolve(result);
        }
      });
    }));
  }
}

module.exports = AwsCodeBuild;
