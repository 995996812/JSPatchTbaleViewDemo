//
//  ViewController.m
//  JS写的tableView
//
//  Created by 王鹏华 on 16/8/19.
//  Copyright © 2016年 condentast. All rights reserved.
//

#import "ViewController.h"
#import "SecondViewController.h"
#import <UIButton+WebCache.h>
#import <Masonry.h>

@interface ViewController ()

@property (strong, nonatomic)  UIButton *jumpButton;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"demo";
    self.view.backgroundColor = [UIColor whiteColor];
    // Do any additional setup after loading the view, typically from a nib.
    [self.view addSubview:self.jumpButton];
    
    self.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc]initWithImage:[UIImage imageNamed:@"exit"] style:UIBarButtonItemStylePlain target:self action:@selector(clickButton)];
    [self.navigationController.navigationBar setBackgroundColor:[UIColor redColor]];
    
}

- (void)clickButton{
    NSLog(@"我爱你");
}

- (void)handleBtn:(id)sender
{
    NSLog(@"11111111");
}
- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
#pragma mark - lazy
- (UIButton *)jumpButton{
    if (!_jumpButton) {
        _jumpButton = [[UIButton alloc]initWithFrame:CGRectMake(100, 100, 100, 100)];
        [_jumpButton setBackgroundColor:[UIColor redColor]];
        [_jumpButton addTarget:self action:@selector(handleBtn:) forControlEvents:UIControlEventTouchUpInside];
        [_jumpButton sd_setImageWithURL:[NSURL URLWithString:@"http://img.hb.aicdn.com/0e083676be02babd08eecdba1645b838884697a7f505-1C41NI_fw580"] forState:UIControlStateNormal];
    }
    return _jumpButton;
}

@end
