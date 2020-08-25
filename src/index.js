const core = require('@actions/core');
const exec = require('@actions/exec');

const main = async () => {
    // Get commit SHAs list
    let strOutput = '';

    const options = {};
    options.listeners = {
        stdout: (out) => {
            strOutput += out.toString();
        }
    };

    await exec.exec('git', ['log', '--format=format:%H'], options);

    // Check if target commit exists
    const commitSha = core.getInput('commit');
    let result = strOutput.includes(commitSha);

    core.info('\n');
    if (result) {
        core.info("[INFO] - Commit was found");
    } else {
        core.info("[INFO] - Commit was NOT found");
    }

    // Invert result if needed
    const invertResult = core.getInput('invert');
    if (invertResult === 'true') {
        core.warning("Result was inverted");
        result = !result;
    }

    // Finish
    if (result) {
        core.info('Successful!!');
    } else {
        core.setFailed('Failed :(');
    }
}

main();