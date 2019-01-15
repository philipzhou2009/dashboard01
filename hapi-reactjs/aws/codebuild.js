const AwsCodeBuild = require('./AwsCodeBuild');


class CodeBuildService {
  constructor() {
    this.awsCodeBuild = new AwsCodeBuild();
  }

  async getLatestBuildData() {
    const build = await this.awsCodeBuild.getLatestBuild();
    const buildData = await this.awsCodeBuild.getLatestBuildData(build);

    // console.log(buildData);

    return buildData;
  }

  getBuildResult(buildData) {
    return new CodeBuildResult(buildData.projectName, buildData.currentPhase, buildData.buildStatus);
  }

}

class CodeBuildResult {
  constructor(projectName, currentPhase, buildStatus) {
    this.projectName = projectName;
    this.currentPhase = currentPhase;
    this.buildStatus = buildStatus;
  }
}

module.exports = {
  CodeBuildService,
  CodeBuildResult,
};