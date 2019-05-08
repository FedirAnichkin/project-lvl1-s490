#!/usr/bin/env node

import gameEngine from '../index';
import {
  greeting, even,
} from '../games/even';

gameEngine(greeting, even);
