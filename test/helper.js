var jsdom   = require('jsdom').jsdom,
    fs      = require('fs'),
    content = fs.readFileSync(__dirname + '/html/table.html');

global.document = jsdom(content);
global.window   = document.parentWindow;