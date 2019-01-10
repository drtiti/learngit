const context = require.context('./', true, /\/lib\/((?!\/)[\s\S])+\.js$/)
context.keys().map(key => context(key))
