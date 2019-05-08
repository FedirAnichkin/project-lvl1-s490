#!/usr/bin/env node

import { greeting, progressionNumber } from '../games/progress';
import gameEngine from '..';

gameEngine(greeting, progressionNumber);
