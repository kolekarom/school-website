#!/bin/bash

# Create public/images directory if it doesn't exist
mkdir -p public/images

# Move all images from src/assets/images to public/images
mv src/assets/images/*.{svg,png,jpg,jpeg} public/images/

# Create symbolic link for backward compatibility (optional)
# mkdir -p src/assets
# ln -s ../../public/images src/assets/images

echo "Images moved successfully to public/images/"
