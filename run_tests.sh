#!/bin/bash
rm -f cucumber-json/*.json
rm -f cucumber-json/*.ndjson
# npm run test:local
npm run currents
npm run report:formatter
npm run report:multiple