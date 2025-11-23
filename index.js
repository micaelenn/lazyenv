#!/usr/bin/env node
import { program } from "commander"
import getVariableNames from "./actions.js"

program.name('lazyenv').description('').version('1.0.0')
program.action(() => { getVariableNames() })
program.parse(process.argv)