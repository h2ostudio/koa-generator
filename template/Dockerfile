FROM  foolsecret/alpine


# 安装 NodeJS 和 Yarn
RUN   apk update upgrade && \
      apk add --no-cache nodejs-current yarn


# 安装依赖项
#WORKDIR   /root/
#COPY  . .
#RUN   cd /root/ && yarn install && yarn tsc


# 默认目录 Root 用户目录
# 默认端口 4321
# 启动 开发模式
VOLUME  /root/
EXPOSE  4321
ENTRYPOINT   ["yarn", "docker"]