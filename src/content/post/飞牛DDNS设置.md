---
title: 飞牛DDNS设置
description: 飞牛 ddns
tags:
  - cloudfalre
  - ddns
pubDate: 2025-06-15
---


## 飞牛 NAS 直接集成 Cloudflare 的 DDNS 解析

如果家庭局域网有一台飞牛 NAS 使用的话，飞牛 OS 直接集成 Cloudflare 的 DDNS 解析功能。

各家 NAS 一般都会自带 DDNS 功能，也都会集成常见域名服务商，如 Dnspod、阿里云等；稍微筛查了下，直接集成 Cloudflare，飞牛确实独一家，顿时好感提升。


### cloudfalre添加解析

第一步：先在 Cloudflare 新增 A 解析，IP 随意填写一个即可；如 fn.aabaac.xyz 解析到 4.5.6.7 不用设置云代理。

### 飞牛上配置域名

第二步：按照飞牛 DDNS 设置中，除了域名 fn.aabaac.xyz 已确定，我们还需要 appid 和 密钥。

打开 Cloudflare 的 dash 控制面板；用户 ID ——在域名详情页的右下角 " 账户 ID"

### cloudfalre获取账户 ID

密钥要稍微复杂一点点：也就是这个位置，点击 " 获取您的 API 令牌 "，然后创建令牌，再选择 " 编辑区域 DNS" 的 " 使用模板 "。

### cloudfalre创建令牌

Cloudflare 对权限管理很严谨，严格控制每个 API 密钥对应的管理权限；我们按照操作即可。

点击 " 继续 " 即可获取到一个字符串，这就是密钥。

将账号 ID 和密钥，填入飞牛 DDNS 界面，点击测试一下。

### 飞牛 DDNS

确认后，飞牛 DDNS 通过 API 方式与 Cloudflare 后端开始互通，飞牛 OS 的公网 IP 将同步更新给 Cloudflare 的解析结果。

后续，主要家里公网 IP 变动，飞牛 DDNS 将直接最新 IP 更新给 Cloudflare，然后解析也随之更新。

一般，这个时间差，也就等待几分钟，甚至一分钟内。