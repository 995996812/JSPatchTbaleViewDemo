include('HZTableController.js');
include('CommonDefine.js');
require('NSString,AFHTTPSessionManager');
defineClass('ViewController', {
            handleBtn: function(sender) {
            var controller = HZTableController.alloc().init();
            self.navigationController().pushViewController_animated(controller, YES);
            }
            });

require('UIColor, UIButton, UIBarButtonItem,UIBarButtonItem,UIImage,UIImageView,NSURL,UIView,NSLayoutConstraint');
defineClass('SecondViewController', {
            viewDidLoad: function() {
            self.super().viewDidLoad();
            self.view().setBackgroundColor(UIColor.whiteColor());
            var button = UIButton.alloc().initWithFrame({x:0, y:44, width:SCREEN_WIDTH, height:SCREEN_HEIGHT - 44});
//          button.setBackgroundColor(UIColor.redColor());
            self.view().addSubview(button);
            button.sd__setImageWithURL_forState(NSURL.URLWithString("http://img.hb.aicdn.com/0e083676be02babd08eecdba1645b838884697a7f505-1C41NI_fw580"), 0);
            button.addTarget_action_forControlEvents(self, 'clickButton', 1 <<  6);
        self.navigationItem().setLeftBarButtonItem(UIBarButtonItem.alloc().initWithImage_style_target_action(UIImage.imageNamed("exit"), 0, self, 'exitCurrentController'));
            
            var redView = UIView.alloc().init();
            redView.setBackgroundColor(UIColor.redColor());
            self.view().addSubview(redView);
            redView.setTranslatesAutoresizingMaskIntoConstraints(NO);
            
            self.view().addConstraints([
                                        //顶部
                                        NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(redView, NSLayoutAttributeTop, NSLayoutRelationEqual, self.view(), NSLayoutAttributeTop, 1.0, 30),
                                        //左边
                                        NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(redView, NSLayoutAttributeLeft, NSLayoutRelationEqual, self.view(), NSLayoutAttributeLeft, 1.0, 10),
                                        //右边
                                        NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(redView, NSLayoutAttributeWidth, NSLayoutRelationEqual, self.view(), NSLayoutAttributeWidth, 0.45, 0),
                                        //底部
                                        NSLayoutConstraint.constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant(redView, NSLayoutAttributeBottom, NSLayoutRelationEqual, self.view(), NSLayoutAttributeBottom, 1.0, -30),
                                        ]);
            },
            clickButton: function(){
            console.log("你们都是一群大逗比!!!");
            },
            exitCurrentController: function(){
            console.log("退出当前控制器");
            self.navigationController().popViewControllerAnimated(YES);
            },
            prefersStatusBarHidden: function() {
            return YES;
            }
            });

