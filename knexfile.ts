import type { Knex } from 'knex'
import { config as myConfig } from './src/database'

const config: { [key: string]: Knex.Config } = {
  development: myConfig,
  test: myConfig,
}

module.exports = config
