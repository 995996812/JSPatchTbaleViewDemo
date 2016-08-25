global.SCREEN_WIDTH = require('UIScreen').mainScreen().bounds().width;
global.SCREEN_HEIGHT = require('UIScreen').mainScreen().bounds().height;

//点击方式枚举
global.UIControlEventTouchUpInside = 1 <<  6;
//布局枚举
global.NSLayoutAttributeLeft = 1;
global.NSLayoutAttributeRight = 2;
global.NSLayoutAttributeTop = 3;
global.NSLayoutAttributeBottom = 4;
global.NSLayoutAttributeLeading = 5;
global.NSLayoutAttributeTrailing = 6;
global.NSLayoutAttributeWidth = 7;
global.NSLayoutAttributeHeight = 8;
global.NSLayoutAttributeCenterX = 9;
global.NSLayoutAttributeCenterY = 10;
//布局关系枚举
global.NSLayoutRelationLessThanOrEqual = -1;
global.NSLayoutRelationEqual = 0;
global.NSLayoutRelationGreaterThanOrEqual = 1;

global.UIHelper = {
bottomY: function(view) {
    var f = view.frame();
    return f.height + f.y;
},
topY: function(view) {
    return 0;
},
rightX: function(view) {
    var f = view.frame();
    return f.width + f.x;
},
leftX: function(view) {
    return 0;
},
setWidth: function(view, width) {
    var f = view.frame();
    f.width = width
    view.setFrame(f)
},
setHeight: function(view, height) {
    var f = view.frame();
    f.height = height
    view.setFrame(f)
},
setX: function(view, x) {
    var f = view.frame();
    f.x = x
    view.setFrame(f)
},
setY: function(view, y) {
    var f = view.frame();
    f.y = y
    view.setFrame(f)
}
}