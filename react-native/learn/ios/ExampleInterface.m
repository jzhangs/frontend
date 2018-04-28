//
//  ExampleInterface.m
//  learn
//
//  Created by zhangjin on 2018/4/28.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "ExampleInterface.h"
#import "CallAdressbookViewController.h"

@interface ExampleInterface()
@property (nonatomic, strong)NSDictionary *dic;
@end

@implementation ExampleInterface
- (instancetype) init {
  return self;
}
- (NSString *)contactName {
  if (!_contactName) {
    _contactName = @"";
  }
  return _contactName;
}

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(sendMessage:(NSString *)msg) {
  NSLog(@"Recevied msg from React Native: %@", msg);
  NSData *data=[msg dataUsingEncodeing:NSUTF8StringEncoding];
  NSError *error;
  NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableLeaves error:&error];
  if (error != nil) {
    NSLog(@"Parse Error:%@", error);
  }
  NSString *login = [dic objectForKey:@"msgType"];
  if ([login isEqualToString:@"pickContact"]) [self callAdress];
}

- (void)callAddress {
  UIViewController *controller = (UIViewController*)[[[UIApplication sharedApplication] keyWindow] rootViewController];
  CallAddressbookViewController *addressbookViewControlller = [[CallAdressbookViewController alloc] init];
  [controller presentViewController:addressbookViewControlller animated:YES completion:nil];
  self.contactName = addressbookViewControlller.contactName;
  self.contactPhoneNumber = addressbookViewControlller.contactPhoneNumber;
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(calenderEventReminderReceived) name:@"Num" object:nil];
}

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

- (void)calenderEventReminderReceived:(NSNotification *)notification {
  if (notification.object == nil) return;
  self.contactPhoneNumber = notification.object;
  self.contactName = notification.userInfo[@"name"];
  self.contactPhoneNumber = [self.contactPhoneNumber stringByReplacingOccurrencesOfString:@"-" withString:@""];
  self.contactPhoneNumber = [self.contactPhoneNumber stringByReplacingOccurrencesOfString:@"(" withString:@""];
  self.contactPhoneNumber = [self.contactPhoneNumber stringByReplacingOccurrencesOfString:@")" withString:@""];
  self.contactPhoneNumber = [self.contactPhoneNumber stringByReplacingOccurrencesOfString:@" " withString:@""];
  NSMutableDictionary *dic = [[NSMutableDictionary alloc] init];
  [dic setObject:@"pickContactResult" forKey:@"msgType"];
  if (self.contactPhoneNumber == nil) {
    self.contactPhoneNumber = @"";
  }
  
  [dic setObject:self.contactName forKey:@"displayName"];
  self.dic = [dic copy];
  NSError *error = [[NSError alloc] init];
  NSData *data = [NSJSONSerialization dataWithJSONObject:self.dic options:0 error:&error];
  NSString *str = [[NSString alloc] initWithData:data, encoding:NSUTF8StringEncoding];
  [self.bridge.eventDispather sendAppEventWithName:@"NativeModuleMsg" body:@{@"message": str}];
}

@end
