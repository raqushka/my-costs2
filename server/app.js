'use strict';

require('babel-polyfill');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
var router = (0, _koaRouter2.default)();

// response
app.use(function (ctx) {
  console.log('ctx?', ctx);
  ctx.body = 'Hello Koa2';
});

app.use(router.routes()).use(router.allowedMethods());

router.get('/', /*#__PURE__*/regeneratorRuntime.mark(function _callee(next) {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('wat?');
          this.body = 'Hello World!';

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

app.listen(3000);
