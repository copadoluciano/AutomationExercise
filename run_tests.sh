#!/bin/bash
rm -f cucumber-json/*.json
rm -f cucumber-json/*.ndjson
# npm run test:local
npm run staging-e2e 024122da-9f30-4f9c-8f6e-43462be7c21b
npm run report:formatter
# npm run report:multiple