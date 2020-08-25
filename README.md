# Check Commit Exist

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?logo=apache&logoColor=d22128&labelColor=262b31)](https://opensource.org/licenses/Apache-2.0)
![CI](https://github.com/betanzos/check-commit-exist/workflows/CI/badge.svg)
[![Action type](https://img.shields.io/badge/JS%20action-262b31?logo=javascript&logoColor=f7df1e)](https://docs.github.com/en/actions/creating-actions/about-actions#types-of-actions)

**Supported runners**

[![Supported runner](https://img.shields.io/badge/Linux-262b31?style=for-the-badge&logo=linux&logoColor=fcc624)](https://docs.github.com/en/actions/creating-actions/about-actions#docker-container-actions)
[![Supported runner](https://img.shields.io/badge/Windows-262b31?style=for-the-badge&logo=windows&logoColor=0078d6)](https://docs.github.com/en/actions/creating-actions/about-actions#docker-container-actions)
[![Supported runner](https://img.shields.io/badge/MacOS-262b31?style=for-the-badge&logo=apple&logoColor=999)](https://docs.github.com/en/actions/creating-actions/about-actions#docker-container-actions)

This action check if a commit (see [`commit` param](#usage)) exists in the current fetched history of your repository.

If commit was not found the job using the action finish with status `failure` (see [`job` context doc](https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#job-context)).

# Usage
```yaml
- uses: betanzos/check-commit-exist@v1
  with:
    # SHA of the commit to check if it exists.
    # REQUIRED
    commit: ${{ github.sha }}

    # Inverts de action job finish status
    # (if `success` will be `failure` and if `failure` will be `success`).
    # Can be one of: 'true' or 'false'. Wrong values causes to use default.
    invert: 'false'
```

# License
The source code, scripts and documentation in this project are released under the [Apache-2.0 License](LICENSE)