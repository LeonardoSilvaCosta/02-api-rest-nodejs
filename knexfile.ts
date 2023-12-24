import type { Knex } from 'knex'
import { config as myConfig } from './src/database'

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: myConfig,
}

module.exports = config
