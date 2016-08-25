//
//  AppDelegate.m
//  JS写的tableView
//
//  Created by 王鹏华 on 16/8/19.
//  Copyright © 2016年 condentast. All rights reserved.
//

#import "AppDelegate.h"
#import "ViewController.h"
#import <JSPatch/JPEngine.h>

@interface AppDelegate ()

@property (assign, nonatomic) BOOL isNew;

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    [JPEngine startEngine];
    _isNew = YES;
    if (_isNew) {
//        NSString *sourcePath = [[NSBundle mainBundle] pathForResource:@"main" ofType:@"js"];
//        NSString *script = [NSString stringWithContentsOfFile:sourcePath encoding:NSUTF8StringEncoding error:nil];
//        [JPEngine evaluateScript:script];
        NSString *scriptRootPath = [[[NSBundle mainBundle] bundlePath] stringByAppendingPathComponent:@"src"];
        NSString *mainScriptPath = [NSString stringWithFormat:@"%@/%@", scriptRootPath, @"/main.js"];
        
        NSLog(@"%@",mainScriptPath);
        [JPEngine evaluateScriptWithPath:mainScriptPath];
        //打印错误信息
        [JPEngine handleException:^(NSString *msg) {
            NSLog(@"%@",msg);
        }];
    }
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    ViewController *rootViewController = [[ViewController alloc] init];
    UINavigationController *navigationController = [[UINavigationController alloc] initWithRootViewController:rootViewController];
    self.window.rootViewController = navigationController;
    [self.window makeKeyAndVisible];
    [[UINavigationBar appearance] setBackgroundImage:nil forBarMetrics:UIBarMetricsCompact];
    return YES;
    
}

- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
}

- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}

- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}

- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}

@end
