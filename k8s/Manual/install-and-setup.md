# Cài đặt cụm k8s
## Phương pháp cài đặt
- Các cách thông dụng nhất: chọn cái phù hợp nhất
Search:"How many way are there to install kubernetes"
- Có 2 cách chính: thủ công(Kubeadm) và tự động (kyops)
### Cài đặt trên On-premise
- Mô hình K8s cluster
    ![Mô hình cluster](Images/image.png)
    - Server nào đóng vai trò là control plane thì mặc định nó không thể triển khai dự án lên đó
    - Việc điều hành có thể bị ảnh hưởng, gây ra cao tải và ảnh hướng đến server 
    - Một mô hình với 3 control plane và worker 
        - Có thể triển khai dự án trên cả 3 server 
        - Khá phổ biến 
        
        ![alt text](Images/image-1.png)
- Tạo các servers k8s
    - Tạo 3 server ubuntu 

    | Hostname	    |     OS	    |         IP	| RAM (tối thiểu) | CPU (tối thiểu) |
    |:-------------:|---------------|:-------------:|:---------------:|:---------------:|
    | k8s-master-1	| Ubuntu 22.04	| 192.168.1.111	|        3G	      |      2          |
    | k8s-master-2	| Ubuntu 22.04	| 192.168.1.112	|        3G	      |      2          |
    | k8s-master-3	| Ubuntu 22.04	| 192.168.1.113	|        3G	      |      2          |

    - Thực hiện trên cả 3 servers
        - Thêm hosts:(vi /etc/hosts): 
            - Nội dung cấu hình:

            ```
            192.168.1.111 k8s-master-1
            192.168.1.112 k8s-master-2
            192.168.1.113 k8s-master-3
            ```

        - Cập nhật và nâng cấp hệ thống
            ```
            sudo apt update -y && sudo apt upgrade -y
            ```
        - Tạo user devops và chuyển sang user devops
            ```
            adduser devops
            usermod -aG sudo devops
            su devops
            cd /home/devops
            ```
        - Tắt swapoff: 
          -  Tạm thời: `sudo swapoff -a`
          - Vĩnh viễn
            ```
            vi /etc/fstab 
            #/swap.img
            hoặc 
            sudo sed -i '/swap.img/s/^/#/' /etc/fstab
            ```
        - Cấu hình module kernel: `vi /etc/modules-load.d/containerd.conf`
            ```
            sudo tee /etc/modules-load.d/containerd.conf <<EOF
            overlay
            br_netfilter
            EOF
            ```
        - Tải module kernel
            ```
            sudo modprobe overlay
            sudo modprobe br_netfilter
            ```
        - Cấu hình hệ thống mạng:
            ```
            sudo tee /etc/sysctl.d/kubernetes.conf <<EOF
            net.bridge.bridge-nf-call-ip6tables = 1
            net.bridge.bridge-nf-call-iptables = 1
            net.ipv4.ip_forward = 1
            EOF
            ```
            Áp dụng cấu hình sysctl
            > sudo sysctl --system
        - Cài đặt các gói cần thiết và thêm kho Docker
            ```
            sudo apt install -y curl gnupg2 software-properties-common apt-transport-https ca-certificates
            sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmour -o /etc/apt/trusted.gpg.d/docker.gpg
            sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
            ```
        - Cài đặt containerd 
            ```
            sudo apt update -y
            sudo apt install -y containerd.io
            ```
        - Cấu hình containerd        
            ```
            containerd config default | sudo tee /etc/containerd/config.toml >/dev/null 2>&1
            sudo sed -i 's/SystemdCgroup = false/SystemdCgroup = true/g' /etc/containerd/config.toml
            ```
            - Khởi động containerd
                ```
                sudo systemctl restart containerd
                sudo systemctl enable containerd
                ```
        - Thêm kho lưu trữ Kubernetes
            ```
            echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.30/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes.list
            curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.30/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
            ```
        - Cài đặt các gói Kubernetes
            ```
            sudo apt update -y
            sudo apt install -y kubelet kubeadm kubectl
            sudo apt-mark hold kubelet kubeadm kubectl
            ```
- Cài đặt k8s cluster 1 master 2 worker
    - Thực hiện trên server k8s-master-1
        ```
        sudo kubeadm init
        mkdir -p $HOME/.kube
        sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
        sudo chown $(id -u):$(id -g) $HOME/.kube/config
        (kiếm tra trạng thái các node)
        kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.25.0/manifests/calico.yaml
        kubectl get nodes 
        ```
    - Thực hiện trên server k8s-master-2 và k8s master-3
        ```
        sudo kubeadm join 192.168.1.111:6443 --token your_token --discovery-token-ca-cert-hash your_sha
        ```
- Khối lệnh reset cụm khi đã khởi tạo cụm (áp dụng trên cả 3 server)
    ```
    sudo kubeadm reset -f
    sudo rm -rf /var/lib/etcd
    sudo rm -rf /etc/kubernetes/manifests/*
    ```
- Cài đặt k8s cluster 3 master worker
    - Thực hiện trên server k8s-master-1
        ```
        sudo kubeadm init --control-plane-endpoint "192.168.1.111:6443" --upload-certs
        mkdir -p $HOME/.kube 
            --control-plane-endpoint "192.168.1.111:6443": Chỉ định ai là master khi join vào
            --upload-certs: Xác thực cho các server khác muốn join vào
        sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config 
        sudo chown $(id -u):$(id -g) $HOME/.kube/config
        kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.25.0/manifests/calico.yaml
    - Thực hiện trên server k8s-master-2 và k8s-master-3 
        ```
        sudo kubeadm join 192.168.1.111:6443 --token your_token --discovery-token-ca-cert-hash your_sha --control-plane --certificate-key your_cert
        mkdir -p $HOME/.kube 
        sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config 
        sudo chown $(id -u):$(id -g) $HOME/.kube/config
        ```        
    - Cấu hình để cả 3 control-plane đều làm việc
        ```
        kubectl taint nodes k8s-master-1 node-role.kubernetes.io/control-plane:NoSchedule-
        kubectl taint nodes k8s-master-2 node-role.kubernetes.io/control-plane:NoSchedule-
        kubectl taint nodes k8s-master-3 node-role.kubernetes.io/control-plane:NoSchedule-
        ```
### Triển khai k8s trên ổ /data
- Cấu hình Kubernetes sử dụng ổ /data để lưu trữ dữ liệu
1. Chuẩn bị ổ /data
    ```
    sudo mkfs.ext4 /dev/sdb
    sudo mkdir /data
    echo "/dev/sdb /data ext4 defaults 0 0" | sudo tee -a /etc/fstab
    sudo mount -a
    # Kiểm tra
    df -h /data
    ```
2. Di chuyển các thư mục quan trọng của Kubernetes sang /data
- Di chuyển thư mục containerd
    ```
    # Dừng các dịch vụ
    sudo systemctl stop kubelet
    sudo systemctl stop containerd

    # Di chuyển dữ liệu
    sudo mv /var/lib/containerd /data/
    sudo ln -s /data/containerd /var/lib/containerd
    ```
- Di chuyển thư mục kubelet

    ```
    # Tạo thư mục mới
    sudo mkdir -p /data/kubelet

    # Sao chép dữ liệu hiện có (nếu có)
    sudo cp -a /var/lib/kubelet/* /data/kubelet/

    # Cập nhật cấu hình kubelet
    sudo sed -i 's|/var/lib/kubelet|/data/kubelet|g' /var/lib/kubelet/config.yaml

    # Tạo symbolic link
    sudo mv /var/lib/kubelet /var/lib/kubelet.bak
    sudo ln -s /data/kubelet /var/lib/kubelet
    ```
- Di chuyển thư mục etcd (cho control plane)

    ```
    # Di chuyển dữ liệu etcd
    sudo mv /var/lib/etcd /data/
    sudo ln -s /data/etcd /var/lib/etcd

    # Sửa file manifest etcd
    sudo sed -i 's|/var/lib/etcd|/data/etcd|g' /etc/kubernetes/manifests/etcd.yaml

    sudo systemctl start kubelet
    ```
3. Cấu hình Kubernetes sử dụng /data

- Cấu hình kubeadm (cho các lần init sau)
    ```
    sudo mkdir -p /etc/kubernetes/pki/etcd
    sudo tee /etc/kubernetes/kubeadm-config.yaml <<EOF
    apiVersion: kubeadm.k8s.io/v1beta3
    kind: InitConfiguration
    nodeRegistration:
    kubeletExtraArgs:
        root-dir: "/data/kubelet"
    ---
    apiVersion: kubeadm.k8s.io/v1beta3
    kind: ClusterConfiguration
    etcd:
    local:
        dataDir: "/data/etcd"
    EOF
    ```
b. Cấu hình containerd
    ```

    sudo tee /etc/containerd/config.toml <<EOF
    version = 2
    root = "/data/containerd"
    state = "/run/containerd"
    [plugins."io.containerd.grpc.v1.cri"]
    sandbox_image = "registry.k8s.io/pause:3.9"
    [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
    runtime_type = "io.containerd.runc.v2"
    [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
        SystemdCgroup = true
    EOF
    sudo systemctl restart containerd
    ```

4. Kiểm tra
    ```
    # Kiểm tra mount point
    df -h /data
    # Kiểm tra các thư mục
    ls -l /data
    # Kiểm tra kubelet
    sudo systemctl status kubelet
    # Kiểm tra containerd
    sudo systemctl status containerd
    # Kiểm tra etcd
    kubectl get pods -n kube-system | grep etcd
    ```

### Lệnh reset cluster 
1. Dừng các dịch vụ
```
sudo systemctl stop kubelet
sudo systemctl stop containerd
```
2. Reset cluster
```
sudo kubeadm reset -f
```
3. Xóa các thư mục dữ liệu trong /data (thay vì /var/lib)
```
sudo rm -rf /data/etcd
sudo rm -rf /data/containerd/*
sudo rm -rf /data/kubelet/*
sudo rm -rf /etc/kubernetes/manifests/*
```
4. Xóa các file cấu hình
```
sudo rm -rf /etc/kubernetes/*
sudo rm -rf $HOME/.kube
```
# Cài đặt rancher

- format ổ cứng sdb gán ổ cứng vào thư mục /data
    ```
    mkfs.ext4 -m 0 /dev/sdb
    mkdir /data
    echo "/dev/sdb /data ext4 defaults 0 0" | tee -a /etc/fstab
    
    cat /etc/fstab
    mount -a  
    df -h
    ```
- Cài đặt rancher bằng docker
    ```
    apt update 
    apt install docker.io
    apt install docker-compose
    ```
- Search "rancher version matrix" -> chọn phiên bản phù hợp với k8s 

    ```
    mkdir /data/rancher
    cd /data/rancher
    vi docker-compose.yml

    version: '3'
    services:
        rancher-server:
            image: rancher/rancher:v2.9.2
            container_name: rancher-server
            restart: unless-stopped
            ports:
                - "80:80"
                - "443:443"
            volumes:
                - /data/rancher/data:/var/lib/rancher   
            privileged: true


    docker-compose up -d
    docker ps -a 
    ```
- Truy cập vào web rancher bằng địa chỉ ip của rancher-server https://192.168.1.144
- Lấy mật khẩu Rancher và thiết lập lại mk
    ```
    docker logs rancher-server 2>&1 | grep "Bootstrap Password:"
    ```

## Di chuyển hoàn toàn dữ liệu Rancher sang /data
### Di chuyển thư mục Docker
1. Dừng các dịch vụ
```
sudo systemctl stop docker
sudo systemctl stop rancher-server
```
2. Di chuyển thư mục docker
```
sudo mv /var/lib/docker /data/docker
sudo ln -s /data/docker /var/lib/docker
```
3. Cấu hình Docker sử dụng /data
```
sudo tee /etc/docker/daemon.json <<EOF
{
  "data-root": "/data/docker",
  "storage-driver": "overlay2"
}
EOF
```
4. Khởi động lại Docker
```
sudo systemctl start docker
```
### Di chuyển thư mục Rancher
1. Dừng container Rancher
```
docker stop rancher-server
```
2. Di chuyển dữ liệu Rancher
```
sudo mv /var/lib/rancher /data/rancher
sudo ln -s /data/rancher /var/lib/rancher
```
3. Sửa lại docker-compose.yml
```
cd /data/rancher
sudo sed -i 's|/var/lib/rancher|/data/rancher|g' docker-compose.yml
```
4. Khởi động lại Rancher
```
docker-compose up -d
```
5. Xóa và chạy lại docker
```
sudo docker-compose down
sudo rm -rf /data/rancher/*
docker-compose up -d
```