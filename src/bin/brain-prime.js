#!/usr/bin/env node

import { greeting, primeNumber } from '../games/prime';
import gameEngine from '../index';

gameEngine(greeting, primeNumber);
