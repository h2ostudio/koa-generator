# 🧧 2021
> 🎉 元宵节快乐。 **^_^**<br>

# KOA-PROGRAM
基于koa的脚手架工具。
Koa脚手架（Koa - The scaffolded for Koa of NodeJs Application）。
为什么叫这个名字：<br>
因为网上基于 **`KOA`** 开头的项目和脚手架很多，但是方便大家好记，我采用了 **`koa-program`**。
**koa** 代表 koa 项目，**progrm** 代表程式。

## 使用方法
### 一、安装

```sh
npm install -g koa-program
```
or
```sh
yarn global add koa-program
```
### 二、使用
```sh
koa
```
命令行输入 `koa`，按照提示输入选项即可。

### 三、选项解释
- App Name：项目名称（必填：建议以大小写字母和 _ - 作为命名规范）
- Package Manager：Node包管理工具，默认选用 **`Yarn`**（必填，建议使用 Yarn）
- Your Name：你的名字（选填：默认使用你电脑账户名）

## 四、安装完成后需要执行的操作
- 使用tsc编译项目目录。（全局默认使用 **`TS`** 语言）
- 如果全局安装了tsc，则可以在当前项目根目录，执行 `yarn dev`，将会自动编译并启动项目
- 项目使用 **`::4321`** 端口，项目启动后，访问 `localhost:4321`即可

### Docker
项目根目录下已包含 `docker` 文件。使用下列命令即可使用 `docker` 开发环境
``` sh
docker compose up -d
```
or
``` sh
docker-compose up -d
```



## 版本简述
### 2.0.5 **`latest`**
- 修复 Mac 下启动报错：`env: node\r: No such file or directory`
### 2.0.1
- 修复脚本缺少 node 启动行的问题
### 2.0.0
- 修复1.0版本中模板生成阶段缺失文件的问题
- 重构了结构代码，做了进一步的系统结构调整
### 1.1.4
- 增加说明文档
### 1.1.3
- 修复了 `Unix`和`win`下由于目录分界符不一致，造成的目录创建BUG．

<br><br><br>

## 🎠项目简介
使用 **`koa`** 命令，生成的新项目，在这里做下简述。<br>
> 项目使用 **`TS`** 作为开发语言，并使用 **`Prettier`** 作项目的编写规范控制。使用 **`Nunjucks`** 作为项目模板。项目使用 **`MIT`** 版权

### 目录功能
- **`controller`** ：控制器目录，用于存放实际的业务
- **`extend`** ：拓展目录：存放工具类函数
- **`route`** ：路由目录：路由注册表，链接 **`controler`** 目录
- **`view`** ：模板目录：存放项目模板
- **`app.ts`** ：应用入口
- **`docker-compose.yml`** ：docker-compose 文件
- **`Dockerfile`** ：Dockerfile 文件
- **`LICENSE`** ：**`MIT`** 
- **`tsconfig.json`** ：**`TS`** 配置文件
<br><br><br>


## 📢作者的话

开发的初衷,是想对自己的KOA项目做一款简单易用的KOA脚手架工具,
方便在以后可以方便的生成自己的项目目录. 

当然，网上有很多KOA完善的脚手架，大家可以自由挑选．
由于正在初步使用KOA框架，所以有的地方可能并不全面，
大家可以根据自己的需求更改项目．

当前项目集成的功能很基础，本身是作为自己开发使用的，
但大家有需要的话，可以在此基础上更改．

本项目暂时还不太完善,但已可以正常使用.
后期我会继续更新这款脚手架,并继续更新项目模板.


> 疫情并不稳定，大家要注意卫生，记得戴口罩、通风、洗手👐、锻炼身体、按时吃饭、少熬夜哦。
