# Check Commit Exists

![CI](https://github.com/betanzos/check-commit-exist/workflows/CI/badge.svg)

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