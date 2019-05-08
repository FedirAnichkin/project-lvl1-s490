#!/usr/bin/env node

import { greeting, calcNumber } from '../games/calc';
import gameEngine from '..';

gameEngine(greeting, calcNumber);
