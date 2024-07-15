#!/bin/sh
if [ -f .git/hooks/post-checkout ]; then
    echo "The post-checkout hook already exists."
else
    cp git-hooks/post-checkout .git/hooks/
    chmod +x .git/hooks/post-checkout
fi