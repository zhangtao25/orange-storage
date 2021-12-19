// var libCoverage = require('istanbul-lib-coverage');

import * as colors from 'colors'
import * as moment from 'moment'

export function getUrl() {
  const env = process.env.NODE_ENV || 'dev'
  const obj = {
    dev: 'http://127.0.0.1:8080',
    prod: 'http://127.0.0.1:8080',
  }
  return obj[env]
}

export function getDb() {
  const env = process.env.NODE_ENV || 'dev'
  const obj = {
    dev: 'canyon_dev',
    prod: 'canyon_prod',
  }
  return obj[env]
}

export function getUuid() {
  const s = []
  const hexDigits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4'
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
  s[8] = s[13] = s[18] = s[23] = '-'
  const uuid = s.join('')
  return uuid
}

// 扭转覆盖率对象路径
export function reverseCoveragePath({
  coverage,
  projectName,
  commitSha,
  processCwd,
}) {
  function reversePath(p) {
    return p.replace(
      processCwd,
      `/usr/src/app/code/${projectName}-${commitSha}`,
    )
  }

  const obj = {}
  for (const coverageKey in coverage) {
    obj[reversePath(coverageKey)] = {
      ...coverage[coverageKey],
      path: reversePath(coverageKey),
    }
  }
  return {
    coverage: obj,
  }
}

export function configLog({ type, info }) {
  console.log(
    colors.green(`[Conf] ${process.pid}  - `) +
      colors.black(moment().format('MM/DD/YYYY, h:mm:ss A')) +
      colors.green(`     LOG `) +
      colors.bgYellow(`[${type}] `) +
      colors.bgGreen(`${info} `),
  )
}
