# docker 安装部署

### 1. 卸载旧版本
```sh
sudo yum remove docker \
        docker-client \
        docker-client-latest \
        docker-common \
        docker-latest \
        docker-latest-logrotate \
        docker-logrotate \
        docker-selinux \
        docker-engine-selinux \
        docker-engine
```

### 2. 设置Docker仓库:
```sh
sudo yum install -y yum-utils
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```
```sh
# 设置阿里云的Docker镜像仓库
yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo  #阿里云地址
```

### 3. 更新安装包
```sh
yum makecache fast
#centos8中为
yum makecache
```

### 4. 安装docker
```sh
sudo yum install docker-ce docker-ce-cli containerd.io
```

### 5. 启动docker
```sh
sudo systemctl start docker
```

# docker-compose

### 安装
```sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

### 赋权
```sh
sudo chmod +x /usr/local/bin/docker-compose
```