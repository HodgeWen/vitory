# Vue 3.x 组件库

## 开始

1. 依赖安装

```
yarn && yarn lerna bootstrap
```

2. 单独开发各个子包, 本地依赖软连接由 lerna 维护

```
# 开发网站示例
cd ./packages/website && yarn dev

# 如果要执行UI库主体的脚本先进入
cd ./packages/victory-ui
```

## 设计语言借鉴 ElementUI & Material

### 尺寸
分为4种组件尺寸(自定义样式除外)

- large 最大, 适合在屏幕比较大, 分辨率比较高的设备上使用
- medium 中等的, 默认尺寸(可以通过全局配置改变默认尺寸), 在普通的设备上使用
- small 小的, 在小屏幕小设备上使用
- mini 最小的, 适合在小屏且设辨率不高的设备上使用

在哪里定义组件的尺寸

- 自动的, 根据当前屏幕来自动判断应用何种尺寸 (优先级低)
- 在全局应用中设置 (优先级一般)
- 在组件中通过props传入 (优先级高)


### 主题

- color 主题色的字体色
- bg 主题色的背景色

### 颜色
分为5种颜色, 每种色系分为原色, 暗阶(dark, 比原色暗10%),
亮阶(light, 比原色亮10%)三种. 总共15中颜色,使用css变量存储.

- primary 主色, 普通的操作
- info 信息色, 通知
- success 成功色, 成功, 完成
- warning 警告色, 过程
- danger 危险色, 失败, 危险

