feedback
========

Fancier console.log for Node.js cli apps

## Install

```
npm install feedback --save
```

## Usage

```javascript
var feedback = require('feedback');

// Strips all color from output
feedback.color = false;

//
feeback.write('message') // same as process.stdout
feedback.writeln('message') // same as write() but begins with a new line
feedback.info('message') // same as console.log()
feedback.success('message') // same as console.log(), but adds "Success: " to beginning
feedback.warn('message') // same as console.log(), but adds "Warning: " to beginning
feedback.error('message') // same as console.log() but add "Error: " to beginning
```
