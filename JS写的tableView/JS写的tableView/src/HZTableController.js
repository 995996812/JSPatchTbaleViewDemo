var HZTableViewCellIdentifier = "HZTableViewCellIdentifier";
var dataArray = new Array();
require('UIBarButtonItem,UIImage,UIViewController,UIColor');
defineClass('HZTableController : UITableViewController <UIAlertViewDelegate>',
            [
             'data',
             'callBack',
             ],{
            viewDidLoad: function() {
            self.super().viewDidLoad();
            var weakSelf = __weak(self)
            DBDataSource.shareInstance()._get(null,null,function(data){
                                              console.log(data);
                                              dataArray = data.toJS()['deals'];
                                              weakSelf.tableView().reloadData();
                                              },function(error){
                                              
                                              })
            },
            
            numberOfSectionsInTableView: function(tableView) {
            return 1;
            },
            tableView_numberOfRowsInSection: function(tableView, section) {

            return dataArray.length;
            },
            tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
            var cell = tableView.dequeueReusableCellWithIdentifier(HZTableViewCellIdentifier)
            if (!cell) {
            cell = HZTableViewCell.alloc().initWithStyle_reuseIdentifier(0, HZTableViewCellIdentifier)
            var slf = self;
            cell.setCallBack(function(user){
                             slf._handleGotoIconController(user);
                                    })
            }
            cell.renderWithData(dataArray[indexPath.row()]);
            
            return cell
            },
            tableView_heightForRowAtIndexPath: function(tableView, indexPath) {
            return 60
            },
            tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
            //            var alertView = require('UIAlertView').alloc().initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles("Alert",self.dataSource()[indexPath.row()], self, "OK",  null);
            //            alertView.show()
            var controller = require('SecondViewController').alloc().init()
            self.navigationController().pushViewController_animated(controller, YES)
            },
            //  alertView_willDismissWithButtonIndex: function(alertView, idx) {
            //  console.log('click btn ' + alertView.buttonTitleAtIndex(idx).toJS())
            //      },
            //代理
            tableView_heightForRowAtIndexPath: function(tableView, indexPath) {
            return avatarSize + 20 + 20 + (SCREEN_WIDTH - gap * 2 ) * 3/4;
            },
            _handleGotoIconController: function(user) {
               console.log(user);
            require('UIViewController,UIColor');
            var iconVC = IconViewController.alloc().init();
            self.presentViewController_animated_completion(iconVC, YES, null);
            },
            });

require('UITableViewCell,UILabel,UIFont,UIColor');
var gap = 10;
var avatarSize = 40;
var avatarButton;
var nameLabel;
var timeLabel;
var contentImageView;
defineClass('HZTableViewCell: UITableViewCell',
            [
             'commentData',
             'callBack',
             ],{
            initWithStyle_reuseIdentifier: function(style, reuseIdentifier) {
            self = self.super().initWithStyle_reuseIdentifier(style, reuseIdentifier);
            if (self) {
            self.setSelectionStyle(0);
            
            avatarButton = require('UIButton')
            .alloc()
            .initWithFrame({x:gap, y:gap, width:avatarSize, height:avatarSize});
            avatarButton.setBackgroundColor(UIColor.greenColor());
            avatarButton.addTarget_action_forControlEvents(self, 'handleTapUser', UIControlEventTouchUpInside);
            
            nameLabel = UILabel
            .alloc()
            .initWithFrame({x: gap * 2 + avatarSize, y:gap, width:SCREEN_WIDTH - avatarSize - gap * 3 , height:20});
            nameLabel.setText("AvengerHell");
            nameLabel.setFont(UIFont.systemFontOfSize(14));
            
            timeLabel = UILabel
            .alloc()
            .initWithFrame({x: gap * 2 + avatarSize, y:gap + 20, width:SCREEN_WIDTH - avatarSize - gap * 3 , height:20});
            timeLabel.setFont(UIFont.systemFontOfSize(12));
            timeLabel.setText("15:51 2016-8-23");
            timeLabel.setTextColor(UIColor.grayColor());
            
            contentImageView = require('UIImageView')
            .alloc()
            .initWithFrame({x: gap, y:gap * 2 + avatarSize, width:SCREEN_WIDTH - gap*2, height:(SCREEN_WIDTH - gap * 2 ) * 3/4});
            contentImageView.setBackgroundColor(UIColor.grayColor());
            
            self.addSubview(avatarButton);
            self.addSubview(nameLabel);
            self.addSubview(timeLabel);
            self.addSubview(contentImageView);
            }
            return self;
            },
            renderWithData: function(data) {
            nameLabel.setText(data['title'])
            contentImageView.sd__setImageWithURL(require('NSURL').URLWithString(data['image']));
            avatarButton.sd__setImageWithURL_forState(require('NSURL').URLWithString(data['tiny_image']), 0);
            self.setCommentData(data);
            },
            handleTapUser: function(){
            var cb = self.callBack();
            if (cb) cb(self.commentData()['deal_id']);
            },
            });

require('UITapGestureRecognizer');
defineClass('IconViewController: UIViewController',{
            viewDidLoad: function() {
            self.super().viewDidLoad();
            self.view().setBackgroundColor(UIColor.greenColor());
            var tap = UITapGestureRecognizer.alloc().initWithTarget_action(self, 'click');
            self.view().addGestureRecognizer(tap);
            },
            click: function(){
            console.log("111111");
            self.dismissViewControllerAnimated_completion(YES, null);
            }
            });

var _dataSourceShareInstance;
var urlStr;
defineJSClass('DBDataSource',{
              init: function(){
              var httpUrl = "http://apis.baidu.com/baidunuomi/openapi/shopdeals";
              var httpArg = "shop_id=1745896";
              urlStr = httpUrl + "?" + httpArg;
              this.dribbbleHost = urlStr;
              this.requestManager = require('AFHTTPSessionManager').manager();
              this.requestManager.requestSerializer().setValue_forHTTPHeaderField("0a7653f680526d11828129d78c856810", "apikey");
              return this;
              },
              _get: function(path, params, succ, fail){
              var dataTask = this.requestManager.GET_parameters_progress_success_failure
              (urlStr, params, null,
               block('NSURLSessionDataTask*,NSDictionary*', function(task, responseObject) {
                     if(succ) succ(responseObject);
                     }),
               block('NSURLSessionDataTask*,NSError*',function(task, error){
                     if(fail) fail(error);
                     }));
              dataTask.resume();
              },
              },{
              shareInstance: function(){
              if (!_dataSourceShareInstance) {
              _dataSourceShareInstance = DBDataSource.alloc().init();
              }
              return _dataSourceShareInstance;
              },
              })


