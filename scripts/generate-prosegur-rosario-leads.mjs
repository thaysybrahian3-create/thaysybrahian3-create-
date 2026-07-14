import fs from 'node:fs/promises';

const OUTPUT_DIR = 'generated-prosegur-leads';
const MAX_TOTAL = 500;
const OVERPASS_ENDPOINTS = [
  'https://maps.mail.ru/osm/tools/overpass/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
  'https://overpass-api.de/api/interpreter',
];

const areas = [
  { name: 'Rosario', zone: 'Rosario', bbox: [-60.80, -33.07