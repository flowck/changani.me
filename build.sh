#!/bin/sh

# Remove current build folder
rm -rf blog

# Navigate to source folder
cd src

# Generate static files
hexo generate

# Move the generated folder to the build folder
mv public ../blog

cd ..

git add .

git commit -m "Deploy"

git push origin master

echo "Build is complete"

