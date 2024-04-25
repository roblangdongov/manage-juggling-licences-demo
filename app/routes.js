//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const flash = require('connect-flash')
router.use(flash())

router.all('*', (req, res, next) => {
  res.locals.flash = req.flash('success')
  next()
})

// Add your routes here
require('./routes/account')(router)
require('./routes/activity')(router)
require('./routes/applications')(router)
require('./routes/application--approve')(router)
require('./routes/application--reject')(router)
require('./routes/application--edit-name')(router)