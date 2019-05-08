#!/usr/bin/env node

import { greeting, gcdNumber } from '../games/gcd';
import gameEngine from '../index';

gameEngine(greeting, gcdNumber);
