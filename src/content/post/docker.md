---
title: Git命令汇总
description: git命令汇总
tags:
  - git
  - 命令
pubDate: 2025-06-08
---

在这篇博客文章中，我们将全面介绍Git命令，从基础的安装和配置开始，到高级功能如分支管理和合并冲突的处理。Git是目前世界上最流行的版本控制系统，广泛用于软件开发中，用于追踪代码的变更记录。

## Git安装和配置

### 安装Git

- **Windows**: 可以从 [Git官网](https://git-scm.com/) 下载Git的安装程序。
- **Mac**: 通过Homebrew安装命令 `brew install git`。
- **Linux**: 大部分Linux发行版都可以通过包管理器安装，如Ubuntu的 `sudo apt install git`。

### 配置Git

- 设置用户名和邮箱

  ：这是在提交时用于标识提交者的信息。

  ```bash
  git config --global user.name "你的名字"
  git config --global user.email "你的邮箱"
  ```

## 基本Git命令

### 初始化仓库

- `git init`：在当前目录创建新的Git仓库。

### 克隆仓库

- `git clone [url]`：克隆远程仓库到本地。

### 查看状态

- `git status`：查看当前仓库的状态，如哪些文件被修改了但还没提交。

### 添加和提交更改

- `git add [文件名]`：将文件添加到暂存区。
- `git commit -m "提交信息"`：将暂存区的内容提交到仓库。

## 分支管理

### 查看分支

- `git branch`：列出所有本地分支。
- `git branch -a`：列出所有分支，包括远程分支。

### 创建和切换分支

- `git branch [分支名]`：创建新分支。
- `git checkout [分支名]`：切换到指定分支。

### 合并分支

- `git merge [分支名]`：将指定分支合并到当前分支。

## 高级功能

### 撤销更改

- `git revert [提交ID]`：撤销指定的提交。
- `git reset --hard [提交ID]`：将HEAD重置到指定的提交，丢弃之后的所有更改。

### 标签管理

- `git tag`：列出所有标签。
- `git tag [标签名]`：创建新标签。

### 查看历史

- `git log`：查看提交历史。
- `git log --graph`：以图形方式查看分支历史。

这些是Git的基础和一些高级功能。掌握这些命令可以帮助你更有效地管理代码版本和团队协作。希望这篇文章能帮助你入门Git，并在你的开发工作中发挥重要作用。