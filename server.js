const dev = process.env.NODE_ENV !== 'production'
// const goal = process.env.NODE_ENV

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const mobxReact = require('mobx-react')
const pathMatch = require('path-match')
const { basename } = require('path')
const accepts = require('accepts')
const glob = require('glob')

const app = next({ dev, quiet: false })
const handle = app.getRequestHandler()
const route = pathMatch()
const SERVE_PORT = 3000

// const moduleAlias = require('module-alias')
// For the development version, we'll use React.
// Because, it support react hot loading and so on.
/*
   if (!dev) {
   moduleAlias.addAlias('react', 'preact-compat')
   moduleAlias.addAlias('react-dom', 'preact-compat')
   }
 */

// const langMatch = route('/lang/:name')
mobxReact.useStaticRendering(true)

const supportLanguages = glob
  .sync('./lang/*.json')
  .map(f => basename(f, '.json'))

const messageCache = new Map()
const getMessages = locale => {
  if (!messageCache.has(locale)) {
    /* eslint-disable import/no-dynamic-require */
    /* eslint-disable global-require */
    let langData = {}

    try {
      langData = require(`./lang/${locale}.json`)
      messageCache.set(locale, langData)
    } catch (e) {
      return { error: 'this lang is not supported' }
    }
  }
  return messageCache.get(locale)
}

// const homeQuery = route('/home/:name')
// const communityQuery = route('/:main')
const indexQuery = route('/:index')
const userQuery = route('/user/:userId')
const postQuery = route('/post/:id')
const communitiesQuery = route('/communities/:category')
const communityQuery = route('/:community/:thread')
const heartQuery = route('/_next/:page?')
const localeQuery = route('/locale/:lang')

app.prepare().then(() => {
  createServer((req, res) => {
    const urlParts = parse(req.url, true)
    const { pathname, query } = urlParts

    const accept = accepts(req)
    const locale = accept.language(supportLanguages) // 'zh'

    /* console.log('server pathname: ', pathname) */
    /* console.log('server query: ', query) */

    if (localeQuery(pathname)) {
      res.setHeader('Content-Type', 'application/json;charset=utf-8')
      return res.end(JSON.stringify(getMessages(localeQuery(pathname).lang)))
    }
    // _next heart ping, only works in dev
    if (heartQuery(pathname)) return handle(req, res)

    // home page
    if (indexQuery(pathname)) return app.render(req, res, '/', query)
    // user page
    if (userQuery(pathname)) return app.render(req, res, '/user', query)
    // post page
    if (postQuery(pathname)) return app.render(req, res, '/post', query)
    // all communities page
    if (communitiesQuery(pathname))
      return app.render(req, res, '/communities', query)
    // gereral communit (pls, frameworks ..)
    if (communityQuery(pathname))
      return app.render(req, res, '/community', query)

    req.locale = locale
    req.messages = getMessages(locale)

    return handle(req, res)
  }).listen(SERVE_PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost: ${SERVE_PORT}`)
  })
})
