//
//  ViewController.h
//  JS写的tableView
//
//  Created by 王鹏华 on 16/8/19.
//  Copyright © 2016年 condentast. All rights reserved.
//

#import <UIKit/UIKit.h>
@protocol ViewControllerDelegate<NSObject>

@end

@interface ViewController : UIViewController

@property (nonatomic, weak) id<ViewControllerDelegate> delegate;

@property (nonatomic, strong) id data;
@end

