# docker 安装部署

### 卸载旧版本
```sh
apt-get remove docker docker-engine docker.io containerd runc
```

### 安装 依赖包
```sh
sudo apt-get install \
   apt-transport-https \
   ca-certificates \
   curl \
   gnupg-agent \
   software-properties-common
```

### 添加 Docker 的官方 GPG 密钥
```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-get update
```

### 安装 Docker-ce
```sh
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli docker-ce docker-ce-cli containerd.io
```

### docker服务
```sh
# 启动
sudo service docker start
 
# 停止
sudo service docker stop
 
# 重启
sudo service docker restart
```

```
sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
