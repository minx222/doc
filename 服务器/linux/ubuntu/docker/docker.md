# docker 安装部署

### 卸载旧版本
```sh
apt-get remove docker docker-engine docker.io containerd runc
```

### 更新软件包
```sh
sudo apt update
sudo apt upgrade
```

### 添加Docker官方GPG密钥
```sh
sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
```

### 安装docker依赖
```sh
sudo apt-get install ca-certificates curl gnupg lsb-release
```

### 添加Docker软件源
```sh
sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
```

### 安装docker
```sh
sudo apt-get install docker-ce docker-ce-cli containerd.io
```