#!/bin/sh

# Use GNU's `mv`, which accepts the `-t` (target) argument
if [[ "$(uname)" = "Darwin" ]]; then

  move="$(command -v gmv)"

  if [[ $move = "" ]]; then
    echo "Please install \"GNU mv\" with `brew install coreutils`"
    exit 1
  fi
else
  move="$(command -v mv)"
fi

# Remove old build
rm -rf build/

# Build with react-scripts
yarn build-react

# Create public folder for built React files
mkdir build/public

# Move built files to the new public folder
find build/ ! -name public ! -name build -maxdepth 1 -print0 | xargs -0 $move -t build/public/

# Copy server to build folder
cp -r server build
