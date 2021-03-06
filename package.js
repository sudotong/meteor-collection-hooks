/* global Package */

Package.describe({
  name: 'sudotong:collection-hooks',
  summary: 'Extends Mongo.Collection with before/after hooks for insert/update/remove/find/findOne',
  version: '1.0.1-ff.1',
  git: 'https://github.com/sudotong/meteor-collection-hooks.git'
})

Package.onUse(function (api, where) {
  api.versionsFrom('1.7.0.5')

  api.use([
    'mongo',
    'tracker',
    'ejson',
    'minimongo',
    'ecmascript'
  ])

  api.use(['accounts-base'], ['client', 'server'], { weak: true })

  api.mainModule('client.js', 'client')
  api.mainModule('server.js', 'server')

  api.export('CollectionHooks')
})

Package.onTest(function (api) {
  // var isTravisCI = process && process.env && process.env.TRAVIS

  api.versionsFrom('1.7.0.5')

  api.use([
    'sudotong:collection-hooks',
    'underscore',
    'accounts-base',
    'accounts-password',
    'mongo',
    'tinytest',
    'test-helpers',
    'ecmascript'
  ])

  api.mainModule('tests/client/main.js', 'client')
  api.mainModule('tests/server/main.js', 'server')
})
