//
//  ExampleInterface.h
//  learn
//
//  Created by zhangjin on 2018/4/28.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>

@interface ExampleInterface : NSObject<RCTBridgeModule>
@property (nonatomic, strong)NSString *contactName;
@property (nonatomic, strong)NSString *contactPhoneNumber;
@end
