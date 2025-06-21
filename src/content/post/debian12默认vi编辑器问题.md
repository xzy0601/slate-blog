---
title: debian12默认vi编辑器设置
description: debian vi
tags:
  - debian
  - vi编辑器
pubDate: 2025-06-21
---


## debian默认vi编辑器


在某些Debian的发行版本中，vi编辑器启用了兼容模式，就是兼容更古老版本的vi编辑器，导致无法正常按i键后输入字符，回退键也不好用，需要设置一下。

### 按i键后输入字符问题解决办法

编辑vimrc.tiny文件

```sh
vi /etc/vim/vimrc.tiny
```

打开后，将代码

```sh
set compatible
```
改为：
```sh
set nocompatible
```

因为光标和输入都不好用，反正挺费劲的。最好把光标移到准确的位置，再输入no就行了。

此时，保存后退出，再用vi打开，发现输入就正常了。

### 回退键不好用问题解决办法
如果回退键不好用，在刚才的文件中添加：
```sh
set backspace=2
```

再退出就可以了。