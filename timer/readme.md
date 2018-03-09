# “番茄钟”介绍
番茄钟，是根据一个[瑞典人](http://baike.sogou.com/v569565.htm)所写的番茄工作法理论进行开发的一款方便、实用的日程管理软件。指的是把工作任务分解成半小时左右，集中精力工作25分钟后休息5分钟，如此视作种一个“番茄”，而“番茄工作法”的流程能使下一个30分钟更有动力。
# 使用说明
## 1)开始界面
a)开始界面的中央处有倒计时钟，分布在其下的为“工作”与“休息”的两个button，点下任一个button即可触发响应的倒计时进行计时工作。
b)在buttons下发有一个自动聚焦的input，在此处输入想要专注的任务，然后点击上方的button即可进行专注工作
c)最下方为tabBar，第一个对应的即为开始界面，第二个位记录界面，第三个为设置界面。选中图标会跳转到相应的界面同时图标会变成蓝色。
## 2)记录界面
会显示“时间段+任务名“，时刻提醒自己做了些什么，底部正中央有个“清除记录”的选项，点击后会清空所有记录。
## 3)设置界面
a)工作时长和休息时长可调，最上方有连个slider，华东即可进行调节
b)两个switch:一个控制倒计时的时候可以播放音乐，另外一个保证倒计时的时候屏幕不会熄灭。
## 4)待增加的功能 
a)统计界面，讲一天记录的时间按类别进行区分，并利用图表的形式进行表示
b)处理交互效果，增加触发事件的动画特性
c)美化界面，这个界面太简洁了，后续可能会增加自定义背景的功能，还会对当前的UI界面记性重构
d)音乐播放功能，会多增加几首音乐并实现可选项

## 5)发现的bug
发布了体验版本，邀请了即为好友进行了测试，发现线上版本出了很多bug。由于自己当时进行小程序开发的时候选择的样机为iPhone6，只对图片的大小进行了适配性设置，但是经朋友的安卓手机测试会出现以下bug:
界面标题没有居中、音乐无法播放(音乐播放我利用的是请求百度音乐，在以往程序都成功了，但是不知道这次为什么不行，是音乐的地址问题还是请求参数的问题还有待测试)、休息时长有时候不能正确显示(emm，我觉得这个逻辑是对的，难不成是小程序的一个bug)、开始界面的图标文字位置有些错乱(这个的确是个问题，我没又想到屏幕的大小的问题，不能仅仅指定图标和文字的大小，因为当前手机型号较多，如果利用margin-left来设置位置的话，肯定会有位置上的错误)

## 实机测试
![开始界面1.png](https://upload-images.jianshu.io/upload_images/7154520-3e1ab124c53f08f1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![开始界面2.png](https://upload-images.jianshu.io/upload_images/7154520-14c98e461c3a4cc7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![记录界面.png](https://upload-images.jianshu.io/upload_images/7154520-b589513d16f49313.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![设置界面.png](https://upload-images.jianshu.io/upload_images/7154520-ce4ced2840ed13af.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![说明界面.png](https://upload-images.jianshu.io/upload_images/7154520-ad1e04e7dd6ed022.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 项目地址
[地址](https://github.com/YunLambert/WeChat_mini/tree/master/timer)







