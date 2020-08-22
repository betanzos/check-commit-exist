#!/usr/bin/env bash

git log --format=format:%H | grep $INPUT_COMMIT

result=$?

if [ $result -eq 0 ]; then
    echo "[INFO] - Commit was found"
else
    echo "[INFO] - Commit NOT found"
fi

if [ $INPUT_INVERT == 'true' ]; then
    if [ $result -eq 0 ]; then
        result=1
    else
        result=0
    fi
fi

exit $result