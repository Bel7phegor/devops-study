<h1>Mục lục</h1>

- [1. Khởi đầu](#1-khởi-đầu)
  - [1.1. Kubernetes là gì? (K8S) {c}](#11-kubernetes-là-gì-k8s-c)
  - [1.2. Mô hình triển khai](#12-mô-hình-triển-khai)
  - [1.3. Khi nào nên sử dụng k8s](#13-khi-nào-nên-sử-dụng-k8s)
  - [1.4. Hạ tầng k8s](#14-hạ-tầng-k8s)
    - [1.4.1. Kiến trúc k8s](#141-kiến-trúc-k8s)
    - [1.4.2. Lấy ví dụ về mô hình](#142-lấy-ví-dụ-về-mô-hình)
- [2. Cài đặt cụm k8s](#2-cài-đặt-cụm-k8s)
  - [2.1. Phương pháp cài đặt](#21-phương-pháp-cài-đặt)
    - [2.1.1. Cài đặt trên On-premise](#211-cài-đặt-trên-on-premise)
    - [2.1.2. Cloud](#212-cloud)
- [3. Triển khai dự án thực tế](#3-triển-khai-dự-án-thực-tế)
  - [3.1. Quy trình kiến khai dự án k8s](#31-quy-trình-kiến-khai-dự-án-k8s)
    - [3.1.1. Yaml trong k8s](#311-yaml-trong-k8s)
    - [3.1.2. Namespace k8s](#312-namespace-k8s)
  - [3.2. Tư duy triển khai dự á trên Kubernetes](#32-tư-duy-triển-khai-dự-á-trên-kubernetes)
  - [3.3. Các công cụ quản lý k8s](#33-các-công-cụ-quản-lý-k8s)
  - [3.4. Cài đặt Rancher và kết nối Kubernetes](#34-cài-đặt-rancher-và-kết-nối-kubernetes)
    - [3.4.1. Rancher làm được gì?](#341-rancher-làm-được-gì)
    - [3.4.2. Các cách cài đặt](#342-các-cách-cài-đặt)
      - [3.4.2.1. Chạy bằng docker](#3421-chạy-bằng-docker)
      - [3.4.2.2. Cài đặt trên Rancher trên Cloud (GCP)](#3422-cài-đặt-trên-rancher-trên-cloud-gcp)
  - [3.5. Pod K8s](#35-pod-k8s)
    - [3.5.1. Triển khai ví dụ một pod](#351-triển-khai-ví-dụ-một-pod)
      - [3.5.1.1. Cấu hình chịu tải cho pod](#3511-cấu-hình-chịu-tải-cho-pod)
  - [3.6. Deployment k8s](#36-deployment-k8s)
    - [3.6.1. Ví dụ một file yaml Deployment đơn giản](#361-ví-dụ-một-file-yaml-deployment-đơn-giản)
  - [3.7. Các câu lệnh Deployment K8s](#37-các-câu-lệnh-deployment-k8s)
  - [3.8. Các chiến lược deployment k8s](#38-các-chiến-lược-deployment-k8s)
    - [3.8.1. Rolling Update](#381-rolling-update)
    - [3.8.2. Recreate](#382-recreate)
  - [3.9. Services](#39-services)
    - [3.9.1. NodePort](#391-nodeport)
      - [3.9.1.1. On-premit](#3911-on-premit)
      - [3.9.1.2. On Cloud](#3912-on-cloud)
    - [3.9.2. ClusterIP](#392-clusterip)
  - [3.10. Helm](#310-helm)
    - [3.10.1. Mục đích của Helm](#3101-mục-đích-của-helm)
    - [3.10.2. Cấu trúc của Helm Chart](#3102-cấu-trúc-của-helm-chart)
    - [3.10.3. Một số lệnh Helm cơ bản](#3103-một-số-lệnh-helm-cơ-bản)
    - [3.10.4. Helm Repo là gì?](#3104-helm-repo-là-gì)
    - [3.10.5. Lợi ích của Helm](#3105-lợi-ích-của-helm)
  - [3.11. Ingress](#311-ingress)
    - [3.11.1. On-Premit](#3111-on-premit)
      - [3.11.1.1. Thành phần chính của Ingress:](#31111-thành-phần-chính-của-ingress)
      - [3.11.1.2. Cài đặt và cấu hình Nginx Ingress Controller](#31112-cài-đặt-và-cấu-hình-nginx-ingress-controller)
      - [3.11.1.3. Triển khai loadbalancer](#31113-triển-khai-loadbalancer)
    - [3.11.2. On Cloud](#3112-on-cloud)
  - [3.12. Template yaml](#312-template-yaml)
  - [3.13. Triển khai dự án Fullstack](#313-triển-khai-dự-án-fullstack)
    - [3.13.1. Mô hình dự án](#3131-mô-hình-dự-án)
      - [3.13.1.1. Frontend](#31311-frontend)
      - [3.13.1.2. Backend](#31312-backend)
  - [3.14. Configmaps](#314-configmaps)
    - [3.14.1. Mục đích sử dụng ConfigMap](#3141-mục-đích-sử-dụng-configmap)
    - [3.14.2. Cách tạo và sử dụng ConfigMap](#3142-cách-tạo-và-sử-dụng-configmap)
    - [3.14.3. Lưu ý](#3143-lưu-ý)
  - [3.15. Secret](#315-secret)
    - [3.15.1. Các loại secret phổ biến](#3151-các-loại-secret-phổ-biến)
    - [3.15.2. Cách sử dụng](#3152-cách-sử-dụng)
  - [3.16. Request và limit](#316-request-và-limit)
    - [3.16.1. Mục đích:](#3161-mục-đích)
    - [3.16.2. Khác biệt](#3162-khác-biệt)
    - [3.16.3. Các loại tài nguyên chính](#3163-các-loại-tài-nguyên-chính)
  - [3.17. HPA (autoscale)](#317-hpa-autoscale)
    - [3.17.1. Horiontal Pod Autoscaler (HPA)](#3171-horiontal-pod-autoscaler-hpa)
    - [3.17.2. Metric Server](#3172-metric-server)
  - [3.18. Sử dụng Rancher](#318-sử-dụng-rancher)
  - [3.19. Sử dụng RBAC Rancher](#319-sử-dụng-rbac-rancher)
- [4. Xây dựng công cụ dự án](#4-xây-dựng-công-cụ-dự-án)
  - [4.1. Triển khai công cụ](#41-triển-khai-công-cụ)
  - [4.2. StorageClass](#42-storageclass)
    - [4.2.1. Ứng dụng](#421-ứng-dụng)
    - [4.2.2. NFS](#422-nfs)
    - [4.2.3. Cú pháp khai báo](#423-cú-pháp-khai-báo)
  - [4.3. PV (Persistent Volume) và PVC (Persistent Volume Claim)](#43-pv-persistent-volume-và-pvc-persistent-volume-claim)
    - [4.3.1. PV là gì?](#431-pv-là-gì)
    - [4.3.2. PVC là gì?](#432-pvc-là-gì)
    - [4.3.3. Những phần đặc biệt phải biết khi sử dụng PV và PVC](#433-những-phần-đặc-biệt-phải-biết-khi-sử-dụng-pv-và-pvc)
    - [4.3.4. Cú pháp, câu lệnh](#434-cú-pháp-câu-lệnh)
      - [4.3.4.1. PVC Example](#4341-pvc-example)
    - [4.3.5. Sử dụng vào dự án](#435-sử-dụng-vào-dự-án)
  - [4.4. Triển khai mariadb](#44-triển-khai-mariadb)
    - [4.4.1. StatefulSet](#441-statefulset)
    - [4.4.2. Triển khai](#442-triển-khai)
  - [4.5. Triển khai Redis (Helm)](#45-triển-khai-redis-helm)
- [5. Giám sát và quản trị Kubernetes](#5-giám-sát-và-quản-trị-kubernetes)
  - [5.1. Daemonsets](#51-daemonsets)
  - [5.2. Giám sát sử dụng prometheus](#52-giám-sát-sử-dụng-prometheus)
    - [5.2.1. Mô hình PNG (prometheus node exporter grafana)](#521-mô-hình-png-prometheus-node-exporter-grafana)
    - [5.2.2. Cài đặt (helm)](#522-cài-đặt-helm)
  - [5.3. DashBoard Grafana](#53-dashboard-grafana)
  - [5.4. Uptime kuma (helm)](#54-uptime-kuma-helm)
    - [5.4.1. Cấu hình](#541-cấu-hình)
    - [5.4.2. Truy cập và tùy chỉnh giao diện](#542-truy-cập-và-tùy-chỉnh-giao-diện)
  - [5.5. Backup](#55-backup)
    - [5.5.1. Backup những gì?](#551-backup-những-gì)
    - [5.5.2. Backup and Restore](#552-backup-and-restore)
      - [5.5.2.1. Velero](#5521-velero)
      - [5.5.2.2. Cài đặt](#5522-cài-đặt)
      - [5.5.2.3. Tiến hành backup từng phần](#5523-tiến-hành-backup-từng-phần)

# 1. Khởi đầu
## 1.1. Kubernetes là gì? (K8S) {c}

```
Là nền tảng mã nguồn mở để tự động triển khai, scaling, mở rộng và quản lý các ứng dụng đóng gói trong container, hoạt động như một hệ điều hành cho các container (thường là Docker)
```

## 1.2. Mô hình triển khai
- Mô hình triển khai
    ![alt text](Images/image-6.png)
## 1.3. Khi nào nên sử dụng k8s 
- Cần phải đảm bảo 4 yếu tố để áp dụng giải pháp nào đó: Hiệu quả, vận hành, minh bạch, khả năng vận hành, tối ưu chi phí

    ![alt text](Images/image-10.png)
## 1.4. Hạ tầng k8s
### 1.4.1. Kiến trúc k8s 

![alt text](Images/image-11.png)

### 1.4.2. Lấy ví dụ về mô hình
- Trong 1 công ty thì có: 
    - Ban quản lý có chứa:  
        - 1 ông giám đốc thường sẽ 0 lam vc trực tiếp với mn mà sẽ thông qua 1 thư ký
        mn sẽ nhận yc cũng như đưa yc đến trợ lý này.
        - VD: Ai muốn gặp GD sẽ phải gặp thư ký dể sắp xếp lịch hay những yc về nv ban xuống 
        - CTy sẽ có vp để lưu trữ những tài liệu về thuế, nhân sự, phòng ban,...(Kho tài liệu)
        - Có 1 ông GD nhân sự: chịu trách nhiệm phân bổ nhân viên vào các phòng ban phù hợp dựa trên khả năng và yc của từng dự án, ô này sẽ xem phòng ban nào sẽ cần nv sau đó sẽ đưa nv vào đúng vị trí.
        - Để đảm bảo công việc được trơn tru thì sẽ có một cá nhân hoặc 1 phòng ban giám sát chất lượng là người theo dõi cv hằng ngày để đảm bảo rằng mọi thứ đều được hd trơn tru. 
        VD: nếu có vấn đề về nhân viên nghỉ vc thì bộ phận giám sát này sẽ ngay lập tức thay thế hoặc bàn giao cv mới cho nhân sự mới để đảm bảo công việc sẽ không bị đình trệ
    - Có các phòng ban làm việc chung: {c}
        - Từng phòng ban sẽ có trưởng phòng: có trách nhiệm quản lý và theo dõi công việc của phòng ban mình, khi ban quản lý giao nv thì trưởng phòng sẽ đảm bảo rằng mọi người đều hiểu và thực hiện đúng công việc nv của mình 
        - Nhân sự làm vc chuyên môn, mỗi bạn sẽ có 1 hoặc nhiều kĩ năng chuyên môn. VD: code fullstack, AI,...
        - Nhân viên kết nối: Các phòng ban giao tiếp được với nhau và giao tiếp đi ra bên ngoài sẽ có 1 nhân sự hỗ trợ ở các phòng giúp vc hợp tác giữa các nhân sự được trơn tru hơn


- Control Plane: (ban quản lý):
    - Cloud-control-manager: Nếu cụm k8s cần cloud thì sẽ có.
    - kube-api-server: Là 1 api để có 1 quy chuẩn chung để giao tiếp ở ngoài vào trong cụm. 
    - etcd: cơ sở dữ liệu phân tán, lưu trữ mọi cấu hình của k8s các trạng thái của pod, node các tài nguyên ý như một kho lưu trữ.
    - scheduler: Trách nhiệm phân phối pod đến các node ở trong cluster và xem xét các yếu tố như tài nguyên, cpu, ram, các chính sách, các yc cụ thể khác. (VD: Chỉ định pod vào cái node nào ), chạy một thực toán lập lệnh để tối ưu hóa phân bổ work lot: xác định xem node nào có tài nguyên phù hợp nhất để triển khai các pod lên.
    - Controller Manager: quản ý các controller là những tiến trình chịu trách nhiệm giám sát trạng thái của cluster và thực hiện các hành động sửa chữa tự động nếu cần (pod có vấn đề thì CM sẽ quản lý).
- Node: Có nhiều node tương ứng với phòng ban làm việc trong đó
    - pod: nhân sự chuyên môn, một node sẽ có nhiều pod và 1 pod sẽ có nhiều container (đơn vị nhỏ nhất)
    - kubelet(trưởng phòng): Nhận yêu cầu từ kube-api-server để thực thi các pod trên nod (hay việc trưởng phòng sẽ giao và giám sát các công việc của các nhân sự ở trg phòng v)
    - kube-proxy (Nhân viên kết nối): Thành phần network chạy trên mỗi node để cho phép các pod giao tiếp với nhau và giao tiếp ra bên ngoài(hay kết nối các nhân sự với nhau)
# 2. Cài đặt cụm k8s
## 2.1. Phương pháp cài đặt
- Các cách thông dụng nhất: chọn cái phù hợp nhất
Search:"How many way are there to install kubernetes"
- Có 2 cách chính: thủ công(Kubeadm) và tự động (kyops)
### 2.1.1. Cài đặt trên On-premise
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
### 2.1.2. Cloud 
[Google Cloud console](https://cloud.google.com/cloud-console?utm_source=bing&utm_medium=cpc&utm_campaign=japac-VN-all-en-dr-bkws-all-pkws-trial-e-dr-1710102&utm_content=text-ad-none-none-DEV_c-CRE_-ADGP_Hybrid+%7C+BKWS+-+EXA+%7C+Txt+-Management+Tools-Cloud+Console-google+console-main-KWID_43700080475310202-kwd-71537784136902:loc-166&userloc_142907-network_o&utm_term=KW_console+google&gclid=41fd680d0d341fdaf6fa003bbd08b139&gclsrc=3p.ds&)
- Khởi tạo cụm K8s cloud
    - Kubenetes Engine -> Clusters -> Create (standard) 
    - Cluster basics: 
        - Tên đặt theo dự án, theo môi trường
        - Location: chọn asian để kết nối ổn định hơn 
        - Release channel: chọn kênh phát hành cho k8s trong cụm, chiến lược để nâng cấp cụm k8s giúp cân bằng giữa tính khả dụng của các tính năng mới và tính ổn định 
            Rapid: sử dụng những tính năng mới cảu GKE ngay khi vừa phát hành -> 0 ổn định
            Regular: Cân bằng giữa tính năng và tính ổn định, cập nhật các tính năng mới 1 cách có kiểm soát (nên chọn)
            Stable: phù hợp cho môi trường production cần tính ổn định hơn tính năng mới
            Extended: Giữ nguyên phiên bản trong 1 thời gian dài  kể cả khi nó đã bị kết thúc thời gian hỗ trợ chuẩn
            No channel: Không theo dõi bất kì channel nào và không tự động cập nhật -> gây khó khăn trong vc quản lý
    - Fleet registration: Cho phép gom nhóm và quản lý các cụm k8s giúp quản lý từng cụm riêng lẻ sang quản lý theo nhóm -> Tận dụng khả năng multi cluster (đa cụm) và áp dụng các policy nhất quán trên tổ chức giúp đồng nhất policy và vận hành 
    - default-pool: 
        - Compact placement: Các node sẽ được càng gần nhau -> hữu ích giúp tôi ưu hóa tài nguyên trên máy chủ vật lý 
        - Queued ...: 
        - size: số lượng node, sl server 
        - automation: tự động nâng cấp các node lên phiên bản có sẵn giúp cho các node theo các phiên bản mới, tự đọng bật sửa chữa 
    - node pool upgrade strategy: Chiên lược cập nhật của node
        - Surge update: bổ xung các node khi tiến hành cập nhật
        - Blue-green: pp tạo các node hoàn toàn mới và chuyển sang các node mới 
    - Nodes: Chọn cấu hình server (ubuntu)
        - Machine config: cấu hình phần cứng
    - Metadata:
        - k8s labels: gán nhãn
            - env: development
    - Backup plane
    -> create 
# 3. Triển khai dự án thực tế
## 3.1. Quy trình kiến khai dự án k8s
- Ví dụ quy trình:

    ![Quy trình](Images/image-2.png)

- Hướng nghiên cứu từ node -> services -> Ingress (Ingress controller) -> traffic và hướng đi thì ngược lại
### 3.1.1. Yaml trong k8s
- Ưu điểm: 
    - Cú pháp đơn giản (key: value)
    - Định dạng phong phú
        - Dạng list: thêm dấu - ở trước -> thành 1 danh sách 
    - Cấu trúc rõ ràng: lùi vào đúng dòng sẽ thành cấu trúc con
    - Cộng đồng lớn
- Thành phần cấu trúc yaml:
    - apiVersion: v1, apps/v1, batch/v1
    - kind: thuộc tính để khai báo các tài nguyên

        ![alt text](Images/image-3.png)
    - metadata: chứa các thông tin liên quan đến tài nguyên (tên, nhãn, namespace)
    - spec: Định nghĩa chi tiết cấu hình của tài nguyên

        ![alt text](Images/image-4.png)
### 3.1.2. Namespace k8s
```
Là 1 cách tổ chức và phân tách các tài nguyên trong 1 cụm k8s để quản lý tốt hơn. Nó được sử dụng để chia nhỏ tài nguyên của 1 cụm lớn thành các không gian làm việc logic nhỏ hơn, giúp dễ dàng quản lý và vận hành hơn.
```

![alt text](Images/image-5.png)

    Giúp quản lý và phân chia tài nguyên 1 cách rõ ràng hơn khi có nhiều nhóm làm vc trên 1 cụm dựa trên CPU, ram, phân tách các môi trường giúp quản lý tập trung và tối ưu chi phí, tài nguyên này, ai được cấu hình trên nó

- Mặc đinh trên k8s sẽ có 1 cụm mặc định là default: 
    ```
    kubectl get pod --namespace default
    kubectl get ns
    ```
- Tạo 1  namespace riêng để cho 1 không gian riêng cho dự án sau đó xóa 
    ```
    kubectl create ns project-1
    kubectl delete ns project-1
    ```
- Tạo file yaml để dễ cấu hình và lưu trữ

    ```
    mkdir projects
    cd projects
    mkdir project-1
    cd project-1
    vi ns.yaml

    apiVersion: v1
    kind: Namespace
    metadata:
        name: project-1

    Áp dụng cấu hình: 
    kubectl apply -f ns.yaml
    kubectl get ns

    Xóa cấu hình: 
    kubectl delete -f ns.yaml
    ```

- Cấu hình giới hạn tài nguyên cho namespace sử dụng: `vi resourcequota.yaml`
    ```
    apiVersion: v1
    kind: ResourceQuota
    metadata: 
        name: mem-cpu-quota
        namespace: project-1
    spec: 
        hard:
            requests.cpu: "2"
            requests.memory: 4Gi
    
    kubectl apply -f resourcequota.yaml
    ```
## 3.2. Tư duy triển khai dự á trên Kubernetes
- ![alt text](Images/image-8.png)

## 3.3. Các công cụ quản lý k8s 
- Có 3 loại chính: command, desktop, website đều có ưu, nhược điểm riêng
- Search "k8s management tools"
- Ưu tiên công nghệ opensource: k9s, lens k8s, rancher 
## 3.4. Cài đặt Rancher và kết nối Kubernetes
    Rancher là 1 cc giúp triển khai và quản lý và giám sát nhiều cụm k8s trên các môi trường khác nhau, bao gồm On-premies và các nhà cc dịch vụ đám mây như AWS, Azure, GG, ... 

### 3.4.1. Rancher làm được gì? 
- Quản lý nhiều cụm K8s
- Phân quyền mạnh mẽ (Based RBAC K8s)
- Hỗ trợ giám sát cụm k8s
- Bảo mật tốt
### 3.4.2. Các cách cài đặt
- Có 2 cách chính: 
    - Chạy bằng docker thuần
    - Chạy trực tiếp k8s
#### 3.4.2.1. Chạy bằng docker
- Tạo 1 server mới 1 processors, 2 Gi RAM, tạo thêm 1 ổ cứng với 20Gi
    ```
    | rancher-server | 192.168.1.144 | rancher-server | 2GB | 1 | 20GB | 20GB | rancher.server.tech
    ```
    Cấu hình host, ip, hostname reboot 

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
- Nối cụm k8s trên rancher để quản lý 
    - Chọn Import Exitsting có 2 lựa chọn chính: (chọn generic)

        ![alt text](Images/image-9.png)

    - Cluster Name: learnmyselfvn là cụm k8s dựng nên, nhằm mục đích gì, ghi cụ thể và tường minh 
    - Copy dòng tự ký và sau khi tải về lấy được 1 file yaml và apply file yaml đó và tài nguyên đã được tạo.

#### 3.4.2.2. Cài đặt trên Rancher trên Cloud (GCP)
- Tạo 1 VM để cài rancher lên đó
    - Vào Compute engine -> VM Instance -> Create Instance
        ```
        Name: rancher-server
        Region: (asia-Tokyo)
        Zone: asia-..-c
        ```
    - Machine config: e2-medium 
    - OS and storage: Ubuntu - size 20Gi
        + add new disk: 20Gi
            - Name: disk-mount-data-rancher
            - Source: Blank
            - Size: 40Gi
    - Networks
        - Enable: http, https
- Sau khi đã hoàn tất thì ssh vào và cấu hình 
    - Update, cài đặt docker, docker-compose
    - Tiến hành mount disk rỗng đã được tạo trước đó như ở trên 
        ```
        sudo mkfs.ext4 -m 0 /dev/sdb
        mkdir /data
        echo "/dev/sdb  /data  ext4  defaults  0  0" | sudo tee -a /etc/fstab
        mount -a
        sudo df -h
        ```
    - Docker run trên server 
        ```
        docker run --name rancher-server -d --restart=unless-stopped -p 80:80 -p 443:443 -v /data/rancher:/var/lib/rancher --privileged rancher/rancher:v2.9.2
        ```
    - Sau đó truy cập vào địa chỉ public đã được cấp, khi tắt máy thì địa chỉ public này se bị thay đổi
    - Truy cập vào vpc network -> ip addressses -> Reserver externel -> tạo ra được 1 địa chỉ public ip và gán được vào máy ảo
    - Lấy mật khẩu và vào trang chính giao diện
    
        ```
        docker logs  rancher-server  2>&1 | grep "Bootstrap Password:"
        ```

## 3.5. Pod K8s
    Là đơn vị triển khai nhỏ nhất và đơn giản nhất trong k8s 1 pod sẽ đại diện cho 1 hoặc nhiều container được nhóm lại với nhau rồi chia sẽ tài nguyên cũng như là mạng 
    Mỗi pod có một ip riêng có thể hiểu  nó như một môi trường chia sẽ hoặc là máy chủ ứng dụng 

- Không nên chạy độc lập các pod: 
    - Thiếu khả năng tự động khôi phục (self-healing) nó sẽ không tự động tạo lại nếu bị lỗi hoặc xóa 
    - Không quản lý được số lượng bản sao (replica): chạy độc lập chỉ có 1 bản duy nhất nếu muốn chạy nhiều bản phải tự tạo thử công, không hiệu quả và dễ lỗi 
    - Không hỗ trợ cập nhật tự động(rolling update)
    - Không hỗ trợ quản lý trạng thái và lịch sử triển khai: không có lịch sử thay đổi, rollback hay phiên bản.
    - Thiếu khả năng tích hợp các công cụ quản lý cáo hơn: Các công cụ CI/CD, auto-scaling, monitoring,... thường làm việc với các đối tượng như Deployment chứ không phải Pod độc lập.

<div style="display: flex; justify-content: center; align-items: center;">
<img src="Images/image-12.png" alt="Hình ảnh"/>
</div>

### 3.5.1. Triển khai ví dụ một pod 
Quay lại k8s-master-1 server và tạo ra thư mục project-1 bên trong /projects và truy cập vào [docker hub](https://hub.docker.com/) tạo thư mục riêng và tải car-serv của elroydevops về 

    cd projects/
    mkdir car-serv
    cd car-serv
vi ns.yaml
    
    apiVersion: v1 
    kind: Namespace
    metadata: 
        name: car-serv 
vi pod.yaml

    apiVersion: v1 
    kind: Pod
    metadata: 
        name: car-serv
        namespace: car-serv
    spec: 
        containers:
          - name: car-serv
            image: elroydevops/car-serv
            ports:
            - containerPort: 80
<br>
    
    kuberctl apply -f ns.yaml 
    kuberctl apply -f pod.yaml
    kublectl get pod -n car-serv

<br> Truy cập vào bên trong môi trường container

    kubectl exec -it car-serv -n car-serv -- /bin/bash
    ls /usr/share
<h3>*Chỉ nên triển khai 1 container trên 1 pod để giảm thiểu tối da sự phụ thuộc

#### 3.5.1.1. Cấu hình chịu tải cho pod
    kubectl -get delete -f pod.yaml

## 3.6. Deployment k8s 
    Không nên chạy độc lập các pod như đã nói ở pod ta nên sử dụng các workload resource như Deployment hoặc Job để hoạt động đúng cách và chạy nhiều pod.
    Khi sử dụng Deployment ta có thể phân bổ được bao nhiêu pod được chạy đồng thời giống nhau đảm bảo được website chạy ổn định 
    Là 1 đối tượng để quản lý pod, có thể quản lý phiên bản ứng dụng, lưu lịch sử, scale ứng dụng, tự dộng khôi phục lỗi khởi tạo lại 1 pod mới
### 3.6.1. Ví dụ một file yaml Deployment đơn giản 
    apiVersion: apps/v1           # API version cần thiết cho Deployment
    kind: Deployment              # Kiểu đối tượng là Deployment
    metadata:
        name: nginx-deployment      # Tên của Deployment
        labels:
            app: nginx                # Nhãn gắn cho Deployment (không bắt buộc)
    spec:
        replicas: 2                 # Số lượng Pod muốn chạy
        selector:
            matchLabels:
            app: nginx              # Deployment sẽ quản lý các Pod có label này
        template:                   # Mẫu để tạo các Pod
            metadata:
                labels:
                    app: nginx            # Nhãn gắn cho Pod (phải khớp với selector)
            spec:
            containers:
            - name: nginx           # Tên container trong Pod
                image: nginx:1.25     # Ảnh Docker để chạy container
                ports:
                - containerPort: 80   # Mở cổng trong container
---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
        labels:
            workload.user.cattle.io/workloadselector: apps.deployment-car-serv-car-serv-deployment
        name: car-serv-deployment
        namespace: car-serv
    spec:
        replicas: 2
        revisionHistoryLimit: 11
        selector:
            matchLabels:
                workload.user.cattle.io/workloadselector: apps.deployment-car-serv-car-serv-deployment
        template:
            metadata:
                labels:
                    workload.user.cattle.io/workloadselector: apps.deployment-car-serv-car-serv-deployment
                namespace: car-serv
            spec:
                containers:
                    - image: elroydevops/car-serv
                    imagePullPolicy: Always
                    name: car-serv
                    ports:
                        - containerPort: 80
                        name: tcp
                        protocol: TCP
    
- Với mô hình ở dưới: 
    <div style="display: flex; justify-content: center; align-items: center;">
        <img src="Images/image-13.png" alt="Hình ảnh">
    </div> <br>

    ```
    Ta không thể thấy được deployment bởi vì  đi từ bên ngoài vào chỉ xác định được pod là gì, và service sẽ làm việc với deployment để đảm bảo chiến lược đó sẽ đủ pod và hiệu quả 
    ```

## 3.7. Các câu lệnh Deployment K8s
- 
    | Nội dung | Câu lệnh |
    |---|---|
    |Lấy danh sách Deployment | `kubectl get deployment -n car-serv` |
    |Lấy danh sách ReplicaSet | `kubectl get rs -n car-serv` |
    |Edit deployment|`kubectl edit deployment -n car-serv`|
    |Xem rollout status|`kubectl rollout status -n ...`|
    |Cập nhật trực tiếp số lượng replicas|`kubectl scale deployment <ten-deployment> --replicas=<so-replicas> -n <ns>`|
    |Xem chi tiết cụ thể về một Deployment|`kubectl describe deployment -n <namespace>`|
    |Xem cấu hình YAML của một Deployment|`kubectl get deployment <ten-deployment> -o yaml`|
    |Cập nhật Deployment bằng cách thay đổi hình ảnh container|`kubectl set image deployment/<ten-deployment> <ten-container>=<ten-image>:<tag-moi>`|
    |Rollback Deployment về phiên bản trước|`kubectl rollout undo deployment <ten-deployment>`|
    |Kiểm tra lịch sử các phiên bản của Deployment|`kubectl rollout history deployment <ten-deployment>`|
    |Liệt kê các Pod được tạo bởi một Deployment cụ thể|`kubectl set env deployment/<ten-deployment> <key>=<value>`|
    |Cập nhật biến môi trường cho các container trong Deployment|`kubectl set env deployment/<ten-deployment> <key>=<value>`|

- Auto scale: tự động tăng giảm pod khi có số lượng truy cập tăng cao thì hệ thống scale lên hoặc scale xuống 
- Pause, Resume: Giúp kiểm soát được phiên bản trước khi triển khai các pod
## 3.8. Các chiến lược deployment k8s
- Có 2 chiến lược triển khai chính Rolling update và Recreate<br>
    ![alt text](Images/image-14.png)
    </br>
    ```
    Rolling Update: Cập nhật lần lượt các pod 
    Recreate: Tạo mới hoàn toàn các pod
    ```
### 3.8.1. Rolling Update
```Ví dụ: Ta có 2 pod, khi triển khai version mới chúng ta thiết lập 1 pod mới lên thì xóa 1 pod cũ đi thì ta sẽ có 1 pod cũ và 1 pod mới -> đảm bảo dự án hoạt động được``` 
- Được áp dụng trong hầu hết các trường hợp
- Khi cập nhật version mới thì version cũ vẫn đang hoạt động
- Chiến lược mặc định kho 0 cấu hình 

    ```
    Thêm trường strategy vào bên dưới replicas

    strategy:
        type: RollingUpdate
    -> Thêm dần các pop mới lên và xóa các pod cũ:
        rollingUpdate:
            maxSurge: Là số lượng pod mới được phép tạo thêm (vượt quá số replicas ban đầu) trong quá trình cập nhật.

            maxUnavalilabe: Là số lượng pod cũ được phép "mất" (tạm dừng hoặc xóa) tại cùng một thời điểm trong quá trình update.
    ....
    template:
        ....
        containers: 
        # image: elroydevops/car-serv
        image: nginx
    
    Sau đó import apply vào rancher 
    ```
- Để việc update được diễn ra thì thường cập nhật image container, sửa file yaml,... 
### 3.8.2. Recreate
```Ví dụ: Xóa toàn bộ pod và khởi tạo lại toàn bộ pod```
- Triển khai nhanh
    ```
    Thêm trường strategy vào bên dưới replicas

    strategy:
        type: Recreate
    ....
    template:
        ....
        containers: 
        # image: elroydevops/car-serv
        image: nginx
    
    Sau đó import apply vào rancher 
    ```
-> Nó sẽ xóa toàn bộ các pod đi và tiến hành khởi tạo nên pod mới -> Khi cập nhật thì có thể image có thể rất nặng thì nó sẽ xảy ra downtime
=> Sử dụng chạy job, chạy tác vụ clean data, clean version và tạo version mới 
## 3.9. Services
Là 1 đối tượng dùng để định nghĩa cách tiếp cận đến các pod thường là 1 nhóm pod hay là việc triển khai các pod qua deployment trong k8s

Đóng vai trò điều phối traffic vào trong các pod 
- Có 4 loại chính 

    | Loại | Mục đích | Truy cập từ |
    | --- | --- | --- |
    | **ClusterIP (mặc định)** | Cho phép các Pod **trong cluster** giao tiếp với nhau | Nội bộ cluster |
    | **NodePort** | Mở cổng trên mỗi Node để truy cập app từ **bên ngoài cluster** | Từ bên ngoài (IP node + port) |
    | **LoadBalancer**         | Tích hợp với cloud provider để tạo IP public                   | Truy cập ngoài internet       |
    | **ExternalName**         | Trỏ đến một hostname bên ngoài cluster                         | Dùng DNS alias                |

- ClusterIP: tạo các IP cho phép các pod có thể giao tiếp nội bộ bên trong và bên ngoài không thể giao tiếp được, muốn truy cập được thì phải expose ra bên ngoài thông qua Ingress hoặc Gateway
- NodePort: mở 1 port từ ứng dụng ra bên ngoài, truy cập trực tiếp vào pod mà không đi qua bất kỳ đường nào.
- Loadbalancer: (Dành cho các nền tảng cloud) Điều phối lưu lượng đến các pod tương ứng, phải đi qua 1 cỗng nữa r mới qua được k8s 
- ExtenalName: Lk với 1 domain ở bên ngoài, không tương tác vs k8s mà tương tác vs domain

### 3.9.1. NodePort
#### 3.9.1.1. On-premit
- Range port của service NodePort
    - Thường được sử dụng dãy port từ **30000-32767**
- Sử dụng NodePort
    - Tạo service để truy cập được vào tài nguyên 
    - Service Discovery -> Services -> Node Port 
    ```
    Name: car-serv-service 
    Portname: TCP
    Listening port: 80 
    Target port: 80
    Node port: 32000
    ```
    - Selector: Chỉ định deployment nào
    ```
    Key: app
    Values: Đặt trùng với labels app: car-serv-deployment
    ```
- Thường không được sử dụng và chỉ được sd khi export ứng dụng ra bên ngoài nhanh chóng để có thể debug, thu thập thông tin,.. 
#### 3.9.1.2. On Cloud
- Truy cập vào server và thực hiện các lệnh
    ```
    mkdir devops
    cd devops
    vi car-serv.yaml
    ```
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
        name: car-serv-deployment
        namespace: car-serv
    spec:
        selector:
            matchLabels: 
                app: car-serv
        replicas: 1
        template:
            metadata:
                labels:
                    app: car-serv
            spect:
                containers:
                  - name: car-serv
                    images: elroydepops/car-serv
                    ports:
                        - containerPort: 80
    ---
    apiVersion: v1
    kind: Services
    metadata:
        name: car-serv-service
        namespace: car-serv
    spec: 
        type: NodePort
        selector:
            app: car-serv
        ports:
          - protocols
            port: 80
            targetPort: 80
            nodePort: 32000
    ```
    Tạo namespace
    ```
    kubectl create ns car-serv
    kubectl apply -f car-serv.yaml
    ```
    Lấy toàn bộ tài nguyên của car-serv
    ```
    kubectl get all -n car-serv
    kubectl get node -o wide
    ```
    Mở Firewall:  Kube Engine -> VPC networks -> firewall -> create firewall rule
    ```
    Name: allow port 32000  
    target: All instance, ... 
    Source: 0.0.0.0/24
    Specified ...
        TCP: 32000 
    -> Create 
    ```

### 3.9.2. ClusterIP
- Khởi tạo Service Discovery -> Services -> Create ClusterIP
`
Name: car-serv1-service
; PortName: tcp
; Listenning Port: 80
; Target Port: 80
`
- selectors: `Key: app; Value: car-serv-deployment`
## 3.10. Helm 
**Helm là trình quản lý package cho k8s dùng chart để deploy ứng dụng phức tạp - tương tự như apt trong ubuntu hay yum trong CentOS, nhưng dành cho ứng dụng chạy trong k8s Giúp tái sử dụng YAML, cấu hình linh hoạt qua biến**

### 3.10.1. Mục đích của Helm
| Tính năng                 | Mô tả                                                           |
| ------------------------- | --------------------------------------------------------------- |
| 🧳 Đóng gói ứng dụng      | Helm dùng các **Chart** để đóng gói cấu hình Kubernetes         |
| ⚙️ Tái sử dụng & cấu hình | Cho phép tái sử dụng YAML với biến động cao, dễ tùy chỉnh       |
| 🧠 Quản lý version        | Triển khai, nâng cấp, rollback phiên bản ứng dụng               |
| 📈 Triển khai nhanh       | Có thể deploy 1 ứng dụng phức tạp chỉ với 1 lệnh `helm install` |

### 3.10.2. Cấu trúc của Helm Chart 
Một Helm Chart là một thư mục chứa các cái template:
```
mychart/
├── Chart.yaml        # Metadata của chart (tên, version, mô tả...)
├── values.yaml       # Giá trị cấu hình mặc định (biến)
├── templates/        # Các file YAML Kubernetes có thể dùng biến
│   ├── deployment.yaml
│   ├── service.yaml
│   └── _helpers.tpl  # Hàm template phụ
```

Cách hoạt động:
```
Viết các template YAML như deployment.yaml, service.yaml...
Định nghĩa các giá trị (biến) trong values.yaml
Khi chạy: `helm install myapp ./mychart` 
→ Helm sẽ render các template với giá trị, và tạo tài nguyên Kubernetes tương ứng
```

### 3.10.3. Một số lệnh Helm cơ bản

| Lệnh               | Tác dụng                      |
| ------------------ | ----------------------------- |
| `helm install`     | Cài ứng dụng                  |
| `helm upgrade`     | Nâng cấp ứng dụng             |
| `helm uninstall`   | Gỡ ứng dụng                   |
| `helm list`        | Liệt kê các release đang chạy |
| `helm repo add`    | Thêm Helm repository          |
| `helm search repo` | Tìm ứng dụng trong repo       |
| `helm template`    | Render YAML ra xem trước      |
### 3.10.4. Helm Repo là gì?
> **Helm cho phép bạn sử dụng các Helm Chart đã được viết sẵn từ cộng đồng.**

- Ví dụ: 
    ```
    helm repo add bitnami https://charts.bitnami.com/bitnami
    helm install my-nginx bitnami/nginx
    ```
→ Deploy nginx cực nhanh, có thể custom qua --set hoặc -f values.yaml
### 3.10.5. Lợi ích của Helm
| Ưu điểm          | Lợi ích thực tế                                           |
| ---------------- | --------------------------------------------------------- |
| Tái sử dụng      | 1 chart có thể dùng cho nhiều môi trường                  |
| Quản lý config   | Dễ chỉnh bằng `values.yaml` hoặc `--set`                  |
| Triển khai nhanh | Nhiều ứng dụng lớn (MySQL, Redis, Jenkins...) đã có chart |
| Rollback dễ dàng | Dễ trở lại version trước nếu lỗi                        |

## 3.11. Ingress 
### 3.11.1. On-Premit
- Tài nguyên quản lý cách thức truy cập từ bên ngoài vào services bên trong k8s
- Giúp điều hướng lưu lượng http/ https tới các service nội bộ và thường thông qua một ingress Controller (ví dụ: NGINX Ingress Controller).
- Thực tế thường dùng Nginx ingress, HAProxy, Kong Ingress Controller
#### 3.11.1.1. Thành phần chính của Ingress:
- Ingress Resource (file YAML định nghĩa đường routing)
- Ingress Controller (phần mềm thực tế xử lý routing, ví dụ: NGINX, Traefik, HAProxy, Contour...)
#### 3.11.1.2. Cài đặt và cấu hình Nginx Ingress Controller 
- Search: `Nginx Ingress` -> `Installation` -> `Intall NGINX ...` -> `Install with Helm`
- Thông thường khi triển khai các dự án k8s ta hay có các file deployment, services, ingress,... Thay vì từng dự án ta phải apply như vậy thì ta chỉ cần đóng gói thành 1 template đầy đủ các file deployment, services, ... sau này khi triển khai dự án ta chỉ cần lôi template này ra và sử dụng, chỉ cần thay đổi 1 số các giá trị, port, tên, services,... 
- Cài đặt Helm: Search`Helm release`
- Sử dụng user root ở master-1 
    ```
    wget https://get.helm.sh/helm-v3.16.2-linux-amd64.tar.gz
    tar xvf helm-v3.16.2-linux-amd64.tar.gz
    sudo mv linux-amd64/helm /usr/bin/
    helm version
    ```
- Cài đặt Ingress controller
    ```
    helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
    helm repo update
    helm search repo nginx
    helm pull ingress-nginx/ingress-nginx
    tar -xzf ingress-nginx-4.11.3.tgz
    ```
    `vi ingress-nginx/values.yaml`

    ![alt text](Images/image-type.png)
    ```
    Sửa type: LoadBalancing => type: NodePort
    Sửa nodePort http: "" => http: "30080"
    Sửa nodePort https: "" => https: "30443"
    helm -n ingress-nginx install ingress-nginx -f ingress-nginx/values.yaml ingress-nginx
    ```
    
    ```
    NAME: ingress-nginx
    LAST DEPLOYED: Wed Jun 25 11:41:15 2025
    NAMESPACE: ingress-nginx
    STATUS: deployed
    REVISION: 2
    TEST SUITE: None
    NOTES:
    The ingress-nginx controller has been installed.
    Get the application URL by running these commands:
      export HTTP_NODE_PORT=30080
      export HTTPS_NODE_PORT=30443
      export NODE_IP="$(kubectl get nodes --output jsonpath="{.items[0].status.addresses[1].address}")"

      echo "Visit http://${NODE_IP}:${HTTP_NODE_PORT} to access your application via HTTP."
      echo "Visit https://${NODE_IP}:${HTTPS_NODE_PORT} to access your application via HTTPS."

    An example Ingress that makes use of the controller:
      apiVersion: networking.k8s.io/v1
      kind: Ingress
      metadata:
        name: example
        namespace: foo
      spec:
        ingressClassName: nginx
        rules:
          - host: www.example.com
            http:
              paths:
                - pathType: Prefix
                  backend:
                    service:
                      name: exampleService
                      port:
                        number: 80
                  path: /
        # This section is only required if TLS is to be enabled for the Ingress
        tls:
          - hosts:
            - www.example.com
            secretName: example-tls

    If TLS is enabled for the Ingress, a Secret containing the certificate and key must also be provided:

      apiVersion: v1
      kind: Secret
      metadata:
        name: example-tls
        namespace: foo
      data:
        tls.crt: <base64 encoded cert>
        tls.key: <base64 encoded key>
      type: kubernetes.io/tls

    ```
    * Ở môi trường cloud thì type: Loadbancer còn On-premit thì type: NodePort
-> Sau khi đã thêm thành công ta copy các dòng được hiển thị 
#### 3.11.1.3. Triển khai loadbalancer
- Loadbalance: cân bằng tải các node pod của k8s đi ra bên ngoài client (Nginx hoặc HAProxy)
- Tạo 1 server loadbalance riêng: **`|loadbalancer|192.168.1.110|loadbalancer-k8s|1GB|CPU 1|Disk 20|`** <br>

    ```
    Đổi hostname: loadbalancer
    Địa chỉ IP: 192.168.1.110
    sudo -i

    apt install nginx -y
    vi /etc/nginx/sites-available/default
    Đổi port listen thành port khác 9999 chẳng hạn
    ```
    vi /etc/nginx/conf.d/devopsedu.vn.conf
    ```
    upstream my_servers {
    server 192.168.1.111:30080;
    server 192.168.1.112:30080;
    server 192.168.1.113:30080;
    }

    server {
        listen 80;
        hostname anphuc-onpremit.tech.vn;
        location / {
            proxy_pass http://my_servers;
            proxy_redirect off;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }

    sudo ln -s /etc/nginx/sites-available/anphuc.tech.vn.conf /etc/nginx/sites-enabled/
    nginx -t 
    systemctl restart nginx
    ```
- Vào rancher truy cập vào Ingresses -> Copy file yaml từ lúc cài đặt Ingress controller 
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: car-serv-ingress
      namespace: car-serv-ns
    spec:
      defaultBackend:
        service:
          name: car-serv-service
          port:
            number: 80
      ingressClassName: nginx
      rules:
        - host: anphuc-onpremit.tech.vn
          http:
            paths:
              - backend:
                  service:
                    name: car-serv-service
                    port:
                      number: 80
                path: /
                pathType: Prefix
    ```
- Add host trên win 192.168.1.110 car-serv-onpre.devopsedu.vn
### 3.11.2. On Cloud
- Xóa các resource đã khởi tạo 
`kubectl delete -f car-serv.yaml`
- Cài đặt helm, cài ingress nginx 
    ```
    wget https://get.helm.sh/helm-v3.16.2-linux-amd64.tar.gz
    tar xvf helm-v3.16.2-linux-amd64.tar.gz
    sudo mv linux-amd64/helm /usr/bin/
    helm version
    ```
    ```
    helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
    helm repo update
    helm pull ingress-nginx/ingress-nginx
    tar -xzf ingress-nginx-4.11.3.tgz
    - Giữ nguyên cấu hình type là loadbalancer trên cloud
    kubectl create ns ingress-nginx
    helm -n ingress-nginx install ingress-nginx -f ingress-nginx/values.yaml ingress-nginx
    ```
- Tạo ra 1 file với deployment car-serv-dp-sv-ig
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
        name: car-serv-deployment
        namespace: car-serv
    spec:
        selector:
            matchLabels: 
                app: car-serv
        replicas: 1
        template:
            metadata:
                labels:
                    app: car-serv
            spect:
                containers:
                  - name: car-serv
                    images: elroydepops/car-serv
                    ports:
                        - containerPort: 80
    ---
    apiVersion: v1
    kind: Services
    metadata:
        name: car-serv-service
        namespace: car-serv
    spec: 
        type: ClusterIP
        selector:
            app: car-serv
        ports:
          - protocols: TCP
            port: 80
            targetPort: 80
    ---
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
        name: car-serv-ingress
        namespace: car-serv
        annotations:
            kubernetes.io/ingress.class: "nginx"
    spec:
        rules:
            - host: car-serv-cloud.devopsedu.vn
            http:
                paths:
                - backend:
                    service:
                        name: car-serv1-service
                        port:
                        number: 80
                    path: /
                    pathType: Prefix
    ```
-> Lưu và Apply cấu hình: `kubectl apply -f car-serv-dp-ig.yaml`
- Vào trình quản lý domain và trỏ domain vào cái public ip của loadbalancer 
- Tiến hành tìm ip để trỏ tới: `kubectl get all -n car-serv`, `kubectl get ingress -n car-serv`-> address vào host
## 3.12. Template yaml 
- Ở các phần trên ta đã triển khai ở On-premit: deployment, services, Ingress -> download các file cấu hình này về sau đó tối ưu file tất cả phần nào là cấu hình mặc định như annoitaion, timestamp hay managerFied thì sẽ xóa bỏ 
## 3.13. Triển khai dự án Fullstack
### 3.13.1. Mô hình dự án 
![alt text](Images/image-15.png)
```
Database: Mariadb 
Backend: java string boot api
Frontend: Angular
Triển khai phương án fullstack với backend có domain là api-ecommerce.networks.vn và frontend có domain là ecommerce.networks.vn cần phải có 1 server để chứa database 
```
- Tạo ra 1 server: `|database|192.168.1.115|database-server|2GB|1|`

    ```
    apt update -y
    apt install mariadb-server
    vi /etc/mysql/mariadb.conf.d/50-server.cnf
    bind-add: 0.0.0.0
    systemctl restart mariadb
    ```
    
- Tải file dự án xuống 
    **Nếu muốn đổi lại domain thì hãy tìm kiếm trong thư mục của dự án tất cả các domain "devopsedu.vn" và thay thế thành domain mà mình muốn**
- Sau đó tiến hành pull dự án đó lên dockerhub hoặc registry, đơn giản hơn là chuyển file dự án đó vào trong server để build sau khi chuyển dự án vào thư mục tmp thì giải nén và cài đặt docker
    ```
    Trên win: scp /file.zip ip@username:/tmp
    Trên database-server linux:
        unzip file.zip 
        mkdir /projects
        cp /tmp/file.zip /projects
        apt install unzip -y
        apt install docker.io -y
    ```
#### 3.13.1.1. Frontend
- Di chuyển đến thư mục frontend và trong đó có chứa 1 Dockerfile build nó lên 
    ```
    docker build -t ecommerce-frontend:v1 . 
    docker images
    ```
- Sau đó push lên dockerhub: 
    ```
    docker login
    docker tag ecommerce-frontend:v1 username/ecommerce-frontend:v1 
    docker images
    docker push
    ```
- Với cấu trúc file được build sẵn deployment, và các chức năng khác hoàn chỉnh ở phần loadbancer ta lấy về và thay đổi tên dự án và tên docker images đã push ở trên về và apply lại trên rancher 
- Tạo Project ecommerce và namespace là ecommerce, nen tách ra các project nhỏ giữa các dự án để có thể dễ dàng phân quyền hơn 
- Import YAML mà đã sửa ở trên vào -> kiểm tra cá giá trị -> Build thành công 
#### 3.13.1.2. Backend
- Trở lại database-server và di chuyển vào thư mục 02-backend và vào file application.properties sửa cấu hình địa chỉ đúng đến database-server 192.168.1.115
- Chạy các dữ liệu database trước để tránh gặp lỗi 
- Vào lại thư mục 01 sử dụng lệnh `pwd && ls` để lấy chính xác cái path để cấu hình database 
    ```
    mysql 
    source ... (Với đường dẫn ở trên và từng file database)
    show tables
    ```
- Quay trở lại project 02-backend trong này có sẵn 1 docker file 
    ```
    docker build -t ecommerce-backend:v1
    docker tag ecommerce-backend:v1 anphuc2370/ecommerce-backend:v1
    docker push username/ecommerce-backend:v1
    ```
- Sau khi push lên dockerhub ta quay lại file yaml sửa chữa và thêm vào rancher
    ```
    Đổi deployment từ frontend thành backend
    Sửa container port là 8080
    Sửa domain: api-encommerce.anphuc.vn
    Apply trên rancher ở namespace ecommerce 
    ```
- Thành công
## 3.14. Configmaps
```
ConfigMap là một đối tượng API trong Kubernetes cho phép lưu trữ dữ liệu cấu hình không nhạy cảm dưới dạng cặp key-value. 
Điều này giúp tách biệt cấu hình môi trường khỏi hình ảnh container, làm cho ứng dụng dễ dàng di chuyển và quản lý hơn.
```
### 3.14.1. Mục đích sử dụng ConfigMap
- Tách biệt cấu hình khỏi mã nguồn: Giúp quản lý cấu hình môi trường riêng biệt, tránh việc phải chỉnh sửa và rebuild lại hình ảnh container khi có thay đổi về cấu hình.
- Quản lý cấu hình cho nhiều môi trường: Dễ dàng tạo và áp dụng các cấu hình khác nhau cho các môi trường như phát triển, kiểm thử và sản xuất.
### 3.14.2. Cách tạo và sử dụng ConfigMap
- Từ file hoặc thư mục:
`kubectl create configmap my-config --from-file=path/to/directory/`
- Lệnh này sẽ tạo một ConfigMap với mỗi file trong thư mục được chuyển thành một cặp key-value, trong đó key là tên file và value là nội dung file. 
- Cú pháp yaml có 2 cách: 
  - Cách 1: Sử dụng cấu trúc key và value 
    ```
    data:
        # property-like keys; each key maps to a simple value
        player_initial_lives: "3"
        ui_properties_file_name: "user-interface.properties"
    ```
  - Cách 2: Khai báo dưới dạng file
    ```
    data:
        # file-like keys
        game.properties: (tên file)|
            enemy.types=aliens,monsters
            player.maximum-lives=5    
        user-interface.properties: |
            color.good=purple
            color.bad=yellow
            allow.textmode=true  
    ```
- Sửa lại dockerfile ở backend vì chưa chỉ định bất cứ một cấu hình nào để đọc được file nên mặc định nó sẽ lấy file gốc trong thư mục của dự án
- Cần phải chỉ định đến file config trong container 
    ```
    ENTRYPOINT java ... --spring.config.location=/run/src/main/resources/application.properties
    ```
- Tạo 1 configmaps với nội dun file và cấu hình của application.properties và map vào đường dẫn trên ở container thì lúc đó dự án backend có thể đọc được file cấu hình
- Lưu lại và build lại file cấu hình và chừng sau sẽ chỉ cần cấu hình lại ở trên configmaps thôi không cần build lại dockerfile 
    ```
    docker images 
    docker build -t username/ecommerce-backend:v2 .
    docker push username/ecommerce-backend:v2
    ```
- Quay lại rancher và tạo tài nguyên configmaps 
    ```
    apiVersion: v1
    kind: ConfigMap
    metadata:
        name: ecommerce-backend-application-properties-configmap
        namespace: ecommerce
    data: 
        application.properties: |
            spring.datasource.url=jdbc:mysql://192.168.1.115:3306/full-stack-ecommerce #chú ý thay đổi địa chỉ IP của bạn 
            spring.datasource.username=ecommerceapp
            spring.datasource.password=StrongPa55WorD
            spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver
            spring.datasource.sql-script-encoding=UTF-8

            spring.jpa.properties.hibernate.globally_quoted_i/dentifiers=true
            spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
            spring.jpa.hibernate.ddl-auto=none
            spring.jpa.show-sql=true
            spring.jpa.properties.hibernate.format_sql=true

            spring.data.rest.base-path=/api
            spring.data.rest.detection-strategy=ANNOTATED

            allowed.origins=http://ecommerce.devopsedu.vn

            okta.oauth2.client-id=0oab0lzwjoN1Rjsar5d7
            okta.oauth2.issuer=https://dev-82108115.okta.com/oauth2/default
    ```
- Vào Storage Configmaps và chọn đúng namespace để hiển thị rõ
- Sau khi tạo xong thì phải mount configmaps vào dự án rồi thay đổi docker images 
- Khai báo volumes thẳng với container tên và volumeMounts: thẳng với image : khai báo tên giống với volumes và mountPath là đường dẫn được mount vào container 
- Edit yaml deployment
    ```
    spec:
        containers:
          - image: ...
            volumeMounts: 
                - mountPath: /run/src/main/resources/application.properties
                name: ecommerce-backend-application-properties-config-volume
                subPath: application.properties
        volumes:
          - configMap:
                defaultMode: 420
                name: ecommerce-backend-application-properties-configmap
          - name: ecommerce-backend-application-properties-config-volume
    ```
- Đầu tiên cần tạo 1 volume để có 1 vị trí lưu trữ dữ liệu của configmaps 
- Tiếp theo trong container mình sẽ tạo ra 1 volume mount nó sẽ mount giá trị của volume mà mình vừa tạo vào bên trong container đó ở trong thư mục /run/src/main/resources/application.properties 
- Vào deployment thử execute để kiểm tra xem thử có file đó chưa 
- Khi cập nhật cấu hình mới thì mình cần redeploy lại và update image lại lên v2
### 3.14.3. Lưu ý 
- Không sử dụng ConfigMap cho dữ liệu nhạy cảm: ConfigMap không được thiết kế để lưu trữ thông tin nhạy cảm như mật khẩu, khóa API. Đối với dữ liệu nhạy cảm, hãy sử dụng đối tượng Secret của Kubernetes.
- Giới hạn kích thước: Dữ liệu trong ConfigMap không nên vượt quá 1 MiB. Nếu cần lưu trữ cấu hình lớn hơn, hãy xem xét sử dụng volume hoặc dịch vụ lưu trữ bên ngoài. 
- Cập nhật ConfigMap: Khi ConfigMap được cập nhật, các container sử dụng nó thông qua volume sẽ tự động nhận được thay đổi. Tuy nhiên, đối với các biến môi trường, cần phải khởi động lại Pod để áp dụng cấu hình mới. 
## 3.15. Secret
- Là đối tượng k8s dùng để lưu trữ dữ liệu nhạy cảm như: mật khẩu, token, ssh-key, chứng chỉ tls
- Thay vì lưu trực tiếp vào cấu hình pod, giúp bảo vệ thông tin nhạy cảm và quản lý dễ hơn.
- Mã hóa bằng base64 để đảm bảo dữ liệu được truyền qua không bị lỗi định dạng
### 3.15.1. Các loại secret phổ biến 

| Built-in Type	| Usage |
|---|---|
| Opaque	| arbitrary user-defined data (lưu trữ dưới dạng key-value) base64 | 
| kubernetes.io/service-account-token	| ServiceAccount token (Xác thực account) | 
| kubernetes.io/dockercfg	| serialized ~/.dockercfg file (Lưu trữ những thông tin đăng nhập của docker registry như username, password, token )| 
| kubernetes.io/dockerconfigjson	| serialized ~/.docker/config.json file (Lưu trữ những thông tin đăng nhập của docker registry như username, password, token) dưới dạng json | 
| kubernetes.io/basic-auth	| credentials for basic authentication (Chứa 2 loại giá trị) |
| kubernetes.io/ssh-auth	| credentials for SSH authentication | 
| kubernetes.io/tls	| data for a TLS client or server (Lưu trữ chứng chỉ) |
| bootstrap.kubernetes.io/token |	bootstrap token data (Lưu trữ token bootstrap được sử dụng khi muốn thêm 1 k8s cluster) |

### 3.15.2. Cách sử dụng 
- Opaque
    ```
    apiVersion: v1
    kind: Secret
    metadata: 
        name: ecommerce-backend-database-connection
        namespace: ecommerce
    type: Opaque
    * Có 2 cách sử dụng ở đây 
    Cách 1: là nhập data và cái key phải được mã hóa trước với base64 
    Cách 2: là sử dụng stringData ghi giá trị chính xác, khi k8s sử lý sẽ chuyển sang dạng mã hóa 
    stringData:
        MARIADB_HOST: "192.168.1.115"
        MARIADB_DB: "full-stack-ecommerce"
        MARIADB_PORT: '3306'
        MARIADB_USERNAME: "ecommerceapp"
        MARIADB_PASSWORD: "StrongPa55WorD"
    ```
- Sau đó cần phải mount secret vào deployment như mapconfig (Sửa bằng file yaml hoặc giao diện rancher)
- Sửa trên giao diện (edit ) -> Enviroment Variables -> Secret -> file -> Save 
- Excuse vào trong container và kiểm tra xem các giá trị đã được truyền vào hay chưa 
- Vào lại configmap chỉnh sửa lại các thông số 
    ```
    HOST, PORT, DB
    USERNAME, PASSWORD
    Sau đó redepoy lại
    ```

* Nếu sử dụng Docker private Registry (Harbor)

- Step 0. Đảm bảo đã cài đặt Harbor như trong link hướng dẫn.
- Step 1. Cấu hình xác thực
Tạo secret chứa thông tin xác thực Harbor (Thực hiện trên server k8s-master-1 hoặc kubectl shell rancher)
    ```
    # kubectl create secret docker-registry auth-registry --docker-email=yourmail@gmail.com --docker-username=username-harbor --docker-password=password-harbor --docker-server=domain-harbor.com --namespace ecommerce
    ```
- Step 2: Thêm secret vào Deployment
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
        name: your-deployment
        namespace: your-namespace
    spec:
        replicas: 1
        selector:
            matchLabels:
            app: your-app
        template:
            metadata:
                labels:
                    app: your-app
            spec:
                containers:
                - name: your-container
                    image: harbor-domain.com/devopseduvn/ecommerce-backend:v1
                imagePullSecrets:
                - name: auth-registry # thêm tên secret như thế này
    ```
## 3.16. Request và limit 
Request: yêu cầu tài nguyên đại diện cho tài nguyên tối thiểu mà container cần để chạy ổn định, Số tài nguyên mà k8s dành riêng để đảm bảo container luôn luôn có thể chạy
Limit: lượng tài nguyên tối đa mà k8s được phép sử dụng 
### 3.16.1. Mục đích:
Đảm bảo container có đủ tài nguyên để hoạt động.
Tránh việc container chiếm dụng quá nhiều tài nguyên, ảnh hưởng đến các container khác.
### 3.16.2. Khác biệt

![alt text](Images/image-16.png)
### 3.16.3. Các loại tài nguyên chính
- CPU:
    - Được đo bằng đơn vị cores (nhân CPU).
    - Có thể sử dụng giá trị thập phân (ví dụ: 0.5 = 500m – millicores).
    - Kubernetes sử dụng CPU shares (cơ chế Cgroups) để phân bổ CPU.
- Bộ nhớ (Memory):
    - Được đo bằng bytes (có thể dùng đơn vị Mi, Gi, Ki).
    - Ví dụ: 256Mi = 256 mebibytes, 1Gi = 1 gibibyte.
    - Kubernetes dùng cgroup để giới hạn bộ nhớ.

## 3.17. HPA (autoscale)
- Làm sao dự án có khả năng chịu tải và tính ổn định của dự án cũng như làm thế nào để giúp dự án có thể tăng giảm tài nguyên khi mà lượng traffic biến động 
- Scale là quá trình mở rộng hay thu nhỏ tài nguyên của hệ thống để đáp ứng được tốt hơn nhu cầu sử dụng khi lưu lượng hoặc khối lượng công việc tăng hoặc giảm 
- Những tác nhân làm cho dự án bị chậm thường đến từ CPU, RAM, Network, Loadbance, ...
- Có 2 loại chính (Vertial Scaling và Horizontal Scaling)
  - Tăng theo chiều dọc (Vertial Scaling): Tăng giảm CPU, memory 
  - Tăng Theo chiều ngang (Horizontal Scaling): Thêm số lượng intance, pod (HPA)
### 3.17.1. Horiontal Pod Autoscaler (HPA)
- Dựa theo 2 tài nguyên: CPU và memory 
- Ví dụ ở pod dự án backend khi nào lượng truy cập vượt quá 80% của limit thì lúc đó sẽ tiến hành scale ra các pod khác và set giá trị min và max của pod 
- Cần tinh chỉnh kỹ vì có khi sử dụng autoscale nó sẽ kiểm tra memory hoặc CPU nó sẽ tiến hành thêm các pod mới dễ bị tăng quá nhanh pod có thể bị over resource 
### 3.17.2. Metric Server 
- Công cụ thu thập tài nguyên của pod để đánh giá được pod đang sử dụng (Metric Server) [Metric Server Git](https://github.com/kubernetes-sigs/metrics-server)

- Cài đặt bằng helm trên k8s (master-1)
    ```
    helm repo add  metric-server https://kubernetes-sigs.github.io/metrics-server/
    helm pull metric-server/metrics-server
    tar -xvf metrics-server-*
    helm install metric-server metrics-server -n kube-system
    ```
- Sửa deployment của kube-system
    ```
    spec:
        containers:
            - args:
                **Đổi tất cả port 1110 -> 4443**
                '--secure-port-4443'
                -'--kubelet-insecure-tls-true'
    ```
- Kiểm tra nhanh: 
    ```
    kubectl top nodes 
    kubectl top pod -n ecommerce
    ```
- HPA trên giao diện ở trong Service Discovery -> HPA
- Tạo HPA bằng file cấu hình
    ```
    apiVersion: autoscaling/v1
    kind: HoriontalPodAutoscaler
    metadata:
        name: ecommerce-backend-autoscaling
        namespace: ecommerce
    spec:
        scaleTargetRef:
            apiVersion: apps/v1
            kind: deployment
            name: ecommere-backend-deployment
        minReplicas: 2
        maxReplicas: 4
        targetCPUUtilizationPercentage: 50
    ```
    > Định nghĩa: 
    > - scaleTargetRef: Thuộc tính xác định theo dõi, giám sát tài nguyên nào
    > - targetCPUUtilizationPercentage: Chỉ định giá trị nào vượt ngưỡng thì tiến hành scale lên 
- Test hệ thống bằng cách stress 
excuse vào pod sau đó cài đặt stress
    ```
    apk update
    apk add stress-ng
    stress-ng --cpu 1
    stress
    ```
## 3.18. Sử dụng Rancher 
## 3.19. Sử dụng RBAC Rancher 
- Role-based access control(RBAC): Để phân quyền được chính xác 
- Trên Rancher:
  - Users and Authentication: Tạo user và thiết lập quyền cho user
  - Global Permisions
    - Admin: toàn quyền
    - Restriced Admin: Full control ở các tài nguyên cluster nhưng mà không đc access ở cái local 
    - Standard User: Tạo user mới và quản lý cluster các project mà được gán quyền (Thường được sử dụng trong 1 team)
- Sau đó vào role templates để gán quyền 
    - Owner hoặc memmber
    - Custom: các role có sẵn ở template hoặc tạo thêm các quyền

# 4. Xây dựng công cụ dự án 
## 4.1. Triển khai công cụ
- Các công cụ database
- Với dự án nhỏ thì nên triển khai trực tiếp lên server 
## 4.2. StorageClass
- Để triển khai các công cụ như database, cache,... ta cần phải có một nơi để lưu trữ dữ liệu
- Lưu trữ dự liệu trên k8s ntn? 
- Seach `How to manage storage on k8s`
  - Có các keywork chính PV, PVC và StorageClasses
  ![alt text](Images/storage-manager.png)
- Là 1 đối tượng giúp định nghĩa các loại lưu trữ khác nhau VD: "Tiệm bánh: giống như các loại kho hàng khác nhau ở trong tiệm bánh để lưu trữ bánh và các vật phẩm liên quan tùy vào tính chất của từng loại kho như `Kho lạnh: dùng để lưu trữ các loại bánh lạnh, bánh kem cần nhiệt độ thấp` hay `Kho khô: lưu trữ các loại bánh khô, bánh mì`"
-  Storageclass là tài nguyên toàn cục (tài nguyên trong toàn bộ hệ thống trên cụm Kubernetes) nên không cần phải thêm namespace
### 4.2.1. Ứng dụng
- Muốn lưu trữ các ứng dụng có tốc độ đọc ghi nhanh sử dụng loại storage class ssh chẳng hạn, các ứng dụng lưu trữ lâu dài 0 cần nhanh thì sd hdd
- Các loại phổ biến trên On-pre: NFS, CephFS
### 4.2.2. NFS 
- VD trên server-database, ta cài NFS sau đó có chức năng chia sẽ 1 thư mục ra bên ngoài và trên k8s cài NFS client thì có thể truy cập được cái thư mục NFS server chia sẻ vì vậy mà ta có thể mount dữ liệu của db server lên 1 server riêng để lưu trữ dữ liệu và cũng lưu dưới dạng tập trung
### 4.2.3. Cú pháp khai báo
```
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: nfs-storage
provisioner: kubernetes.io/no-provisioner (tùy vào môi trường khác nhau sẽ có giá trị khác)
VolumeBindingMode: WaitForFirstComumser
parameters:
  type: pd-ssd
```
VolumeBindingMode: 
- Immediate: tiến hành liên kết vào khi mà PVC được tạo 
- WaitForFirstComumser: nó sẽ chờ có 1 consumer sử dụng đầu tiên thì mới được áp dụng chỉ được tạo khi có Pod sử dụng
## 4.3. PV (Persistent Volume) và PVC (Persistent Volume Claim)
### 4.3.1. PV là gì? 
- Là 1 đối tượng cung cấp khả năng lưu trữ bền vững
- Có thể lưu trữ các nguồn khác nhau như PVs, EVs... 
- Ví dụ: "Tiệm bánh: `Là 1 phần cụ thể trong kho, như cái tủ chứa bánh mà tiệm sẵn sàng để lưu trữ, có tủ nhỏ tủ lớn tùy theo kích thước`". Còn trong k8s: `Là tài nguyên được khai báo 1 vùng chứa. Như khởi tạo 1 vùng chứa với 10GB bộ nhớ => dành ra 1 vùng nhớ riêng với 10GB bộ nhớ `
### 4.3.2. PVC là gì? 
- Là 1 yêu cầu từ người dùng để sử dụng 1 lượng lưu trữ cụ thể, cho phép người dùng yêu cầu dung lượng lưu trữ và chế độ truy cập 
- Ví dụ: "Tiệm bánh: `PVC như cách mà nhân sự yêu cầu Tôi muốn 1 cái tủ để tôi để 10 chiếc bánh cũng như nguyên liệu của chiếc bánh đó và có thể để vừa cái tủ đó `. Còn trong k8s: `PVC như 1 yêu cầu sd tài nguyên như là PV mà ta đã tạo, như tạo 1 PV với 10GB và 1 PVC là 5GB thì nó sẽ tìm cái PV nào phù hợp yêu cầu đó và sd`"
### 4.3.3. Những phần đặc biệt phải biết khi sử dụng PV và PVC 
- Type of Persistent Volumes: Có rất là nhiều loại và mỗi loại sẽ có một yêu cầu khác nhau 

    ![alt text](Images/Type-of-PV.png)
- hostPath: lưu trữ trực tiếp trên server cài đặt k8s luôn nhưng khó đồng bộ vì nếu pod chuyển sang server khác tì sẽ không có dữ liệu -> SD để test
- Access Modes: 
    - ReadWriteOnce: QH 1:1 đang mount 1 pod vào 1 mount point và nếu scale lên 2 pod thì chắc chắn sẽ 0 được 
    - ReadOnlyMany: Chỉ có quyền đọc
    - ReadWriteMany: QH 1:N (1mount point có từ bên ngoài có thể được đọc từ nhiều pod trong cụm)
    - ReadWriteOncePod: Chỉ có 1 pod duy nhất được đọc-ghi nó. Đảm bảo rằng trên toàn cụm chỉ có pod đó được phép đọc PVC hoặc ghi.
- Reclaim Policy: Quyết định PV khi PVC bị xóa đi -> quyết định PV làm gì và chỉ có (nfs và hostPath thì mới hỗ trợ tính năng này)
  - Retain(Giữ lại): Khi PVC không sd PV này nữa thì nó sẽ giữ lại dữ liệu
  - Recycle: Xóa đơn giảm (rm -rf /thevolume/*)
  - Delete: Khi không có yêu cầu nào cho PV thì nó sẽ xóa hết dữ liệu
- Phase: Các giai đoạn
### 4.3.4. Cú pháp, câu lệnh
#### 4.3.4.1. PVC Example
    ```
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
    name: app-storage
    spec:
    accessModes: ["ReadWriteOnce"]
    resources:
        requests:
        storage: 1Gi
    ```
- Pod using the PVC
    ```
    volumes:
    - name: app-data
        persistentVolumeClaim:
        claimName: app-storage

    containers:
    - name: web
        volumeMounts:
        - name: app-data
            mountPath: /data
    ```
### 4.3.5. Sử dụng vào dự án 
- Tạo 1 server hoặc sử dụng `database-server` tạo 1 disk riêng sau đó sử dụng nó để lưu trữ dữ liệu 
- Cài đặt NFS server `sudo apt install nfs-server`
- Sau đó muốn mount dữ liệu vào thư mục /data
    ```
    sudo -i
    mkdir /data
    chown -R nobody:nogroup  /data
    chmod -R 777 /data
    ```
    `sudo vi /etc/exports` thêm 1 dòng `/data *(rw,syn,no_subtree_check)`: Mount thư mục /data với * tất cả các địa chỉ truy cập mode rqq syn
    
    ```
    exportfs -rav
    sudo systemctl restart nfs-kernal-server
    ```
- Và trên k8s muốn kết nối được thì `k8s-master-1` phải cài nfs-common thì mới kết nối được ***Cài trên tất cả các server**
    ```
    sudo -i
    apt install nfs-common -y
    ```
- Sau đó quay lại rancer và triển khai PV và PVC
    - PV
    ```
    apiVersion: v1
    kind: PersistenVolume
    metadata:
        name: nfs-pv
    spec:
        capacity:
            storage: 10Gi
        accessModes:
            - ReadWriteMany
        nfs:
            path: /data
            server: 192.168.1.115
        persistenVolumeReclaimPolicy: Retain
        storageClassName: nfs-storage
    ```
    - PVC
    ```
    apiVersion: v1
    kind: PersistenVolumeClaim
    metadata:
        name: nfs-pvc
        namespace: ecommerce
    spec:
        accessModes:
            - ReadWriteMany
        resources:
            requests:
                storage: 5Gi
        storageClassName: nfs-storage
    ```
    - Sau đó vào phần Recent Events để kiểm tra trạng thái -> message `waiting for first common,...` cần phải có 1 pod sử dụng
    - Tạo 1 pod để kết nối dữ liệu: Pod nginx mount dữ liệu từ Pod vào thư mục /data của NFS server
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: nfs-nginx
      namespace: ecommerce
    spec:
      containers:
        - image: nginx
          name: nginx
          volumeMounts:
            - mountPath: /usr/share/nginx/html
              name: nfs-storage
      volumes:
        - name: nfs-storage
          persistentVolumeClaim:
            claimName: nfs-pvc
    ```
- **Tóm tắt lại quy trình: Đầu tiên cần tạo 1 storageClass để khai báo loại gì, tiếp đến tạo 1 server NFS để lưu trữ dữ liệu -> Sau đó tạo 1 PV để khai báo 1 vùng chứa trống và PVC để yêu cần nơi lưu trữ dữ liệu dựa trên các PV có sẵn và cuối cùng là mount thư mục bên trong pod trên k8s vào NFS-server**
## 4.4. Triển khai mariadb 
### 4.4.1. StatefulSet
- Giúp quản lý trạng thái, tính ổn định cao như database
- Tài nguyên được nhắc đến khi sd cùng với PV, được dùng để tạo database trên k8s
- Là 1 API resource được sd để quản lý việc triển khai và mở rộng các ứng dụng có trạng thái và khác với deployment, phù hợp cho việc đảm bảo tính toàn vẹn của dữ liệu và duy trình tính ổn định của các pod 
- Cũng khởi tạo các pod nhưng các pod sẽ khởi tạo lần lượt có tên và thứ tự 
### 4.4.2. Triển khai 
- Triển khai 1 mariadb
    ```
    apiVersion: v1
    kind: StatefulSet
    metadata:
        name: mariadb
        namespace: ecommerce
    spec:
        serviceName: mariadb-service
        replicas: 1
        selector: 
            matchLabels:
                app: mariadb
        template:
            metadata:
                labels:
                    app: mariadb
            spec:
                securityContext:
                    fsGroup: 65534
                containers:
                    - name: mariadb
                    image: mariadb-latest
                    env:
                        - name: MYSQL_ROOT_PASSWORD
                        value: "devopseduvn"
                    ports:
                        - contianerPort: 3306
                        name: mysql
                    volumeMounts:
                        - name: mariadb-storage
                        mountPath: /var/lib/mysql
                volumes:
                    - name: mariadb-storage
                    persistenVolumeClaim:
                        claimName: nfs-pvc
    ```
    > securityContext:
    >                fsGroup: 65534
    `Đại diện cho UID là nobody`
- Sau đó sửa lại file `vi /etc/exports` 
    - Thêm tùy chọn `/data *(rw,sync,no_subtree_check,no_root_squash)` và áp dụng `sudo exportfs -rav`
    ```
    sudo exportfs -rav
    sudo systemctl restart nfs-server
    ```
- Lưu trữ dữ liệu trong /data
- Tạo NodePort để kết nối từ bên ngoài vào kiểm tra kết nối 

    ```
    apiVersion: v1
    kind: Service
    metadata:
        name: mariadb-service
        namespace: ecommerce
    spec:
        selector:
            app: mariadb
        type: NodePort
        ports:
            - port: 3306
            targetPort: 3306
            nodePort: 31306
    ```
- Kết nối `mysql -h 192.168.1.111 -P 31306 -u root -p`
- Kết nối trực tiếp với nhau
##  4.5. Triển khai Redis (Helm)
- Là công cụ hệ hống quản trị CSDL no SQL lưu trữ dưới dạng **key: value** cho phép truy cập cực nhanh và các dự án theo mô hình microservices 
- Bài toán: Triển khai 1 redis đảm báo tính HA trên 1 namespace riêng sẽ thử kết nối từ dự án ecommerce đến cái redis đó ở bên trong môi trường cụm k8s và không kết nối ra bên ngoài
- Truy cập vào `k8s-master-1`: **kubectl create ns architecture**
- Quay trở lại `database-server`
    ```
    ls /data
    mkdir /data/redis
    chown -R nobody:nogroup /data/
    chmod -R 777 /data/
    ```
- Tạo PV và PVC
    ```
    apiVersion: v1
    kind: PersistenVolume
    metadata:
        name: redis-pv
    spec:
        capacity:
            storage: 10Gi
        accessModes:
            - ReadWriteMany
        nfs:
            path: /data/redis/
            server: 192.168.1.115
        persistenVolumeReclaimPolicy: Retain
        storageClassName: nfs-storage
    ---
    apiVersion: v1
    kind: PersistenVolumeClaim
    metadata:
        name: redis-pvc
        namespace: architecture
    spec:
        accessModes:
            - ReadWriteMany
        resources:
            requests:
                storage: 10Gi
        storageClassName: nfs-storage
    ```
- Quay lại `k8s-master-1` và bắt đầu cài đặt Redis bằng helm chart 

    ```
    mkdir redis
    cd redis
    ```
# 5. Giám sát và quản trị Kubernetes 
- Triển khám sát node, pod, namespace, ... các tài nguyên trên cụm k8s, cảnh báo downtime của website
- Giám sát ngoài cụm 
## 5.1. Daemonsets
- Tài nguyên quy chuẩn cho monitoring và loging
- Được sử dụng để đảm bảo rằng mỗi pod sẽ chạy trên tất cả các node trong cluster khi sử dụng daemonsets thì k8s sẽ tự động tạo bản sao của pod đó trên mỗi node và khi có một node nào đó được thêm trong k8s thì daemonsets sẽ tự động tạo thêm pod với tài nguyên daemonsets trên node đó 
- Chính vì daemonsets chạy pod trên tất cả các node nên sẽ có thể thu thập được các trạng thái của tài nguyên.
- Tài nguyên có sẵn calico trên k8s cung cấp tính năng network policy cho k8s cho phép thiết lập các quy tắt bảo mật cho mạng ở trong cụm k8s để hạn chế lưu lượng truy cập giữa các pod, các namespace 
- Lấy các daemonset: `kubectl get ds -A`
- Taints and tolerations: Mặc định sẽ triển khai trên tất cả các worker nhưng mà có thể ngăn chặn daemonsets khởi tạo pod trên 1 node cụ thể nào đó để không cho phép giám sát cái node đó 
## 5.2. Giám sát sử dụng prometheus 
- APM (application performance management): Công cụ giám sát dự án đang chạy có hiệu suất như thế nào, các độ trễ cao hay thấp, phần trăm tỉ lệ lỗi
### 5.2.1. Mô hình PNG (prometheus node exporter grafana)
![alt text](Images/diagram-monitoring.png)
- Giám sát thông qua các công cụ **Node exporter, SNMP exporter,..** sau đó prometheus sẽ tiến hành thu thập các dữ liệu về và được gọi mà metric -> Grafana
### 5.2.2. Cài đặt (helm)
- `Prometheus chart`
1. Lưu dữ liệu ra bên ngoài để đảm bảo rằng nếu hệ thống monitoring có bị reset cũng không mất dữ liệu 
2. Truy cập vào `database-server` 

    ```
    mkdir /data/monitoring
    chown -R nobody:nogroup /data/
    chmod -R 777 /data/
    ```
3. Quay lại rancher và tạo một project và namespace mới (monitoring) và tiến hành triển khai png stack trên đây
4. Tạo 1 pv mới 
    ``` 
    apiVersion: v1
    kind: PersistentVolume
    metadata: 
        name: monitoring-pv
    spec:
        capacity:
            storage: 10Gi
        accessMode: 
            - ReadWriteOnce
    nfs:
        path: /data/monitoring
        server: 192.168.1.115
    persistentVolumeReClaimPolicy: Retain
    storageClassName: nfs-storage
    ```
5. Sau đó vào git helm chart của prometheus để triển khai lên k8s-master-1
    ```
    helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
    helm repo update
    helm upgrade --install anphucvn prometheus-community/kube-prometheus-stack 
      --namespace monitoring 
      --set prometheus.prometheusSpec.storageSpec.volumeClaimTemplate.spec.accessModes[0]=ReadWriteOnce 
      --set prometheus.prometheusSpec.storageSpec.volumeClaimTemplate.spec.resources.requests.storage=10Gi 
      --set prometheus.prometheusSpec.storageSpec.volumeClaimTemplate.spec.storageClassName=nfs-storage
    ```
6. Sau khi cấu hình thành công quay lại kiểm tra các trạng thái trên monitoring 
![alt text](Images/status-workloads.png)
    
    ```
    helm pull prometheus-community/kube-prometheus-stack
    tar -xvf kube-prometheus-stack...
    ```
    vi values.yaml
    ```
    /ingress
    enabled: true
    ```
7. Tạo nhanh ingress bằng cách Services-> Ingress 
    
    ```
    host: grafana.anphuc.vn
    Prefix: /
    anphucvn-grafana
    port: 80
    IngressClass: nginx
    ```
    Add host trên win: `192.168.1.110 grafana.anphuc.vn`
    Sau đó truy cập với username và mk ở Store-> Secret `anphuc-grafana`
8. Làm tương tự với prometheus port 8080
## 5.3. DashBoard Grafana
- Dashboards quan trọng
    - Khi làm việc trên k8s thực thi những câu lệnh, những thao tác mà nó bị chậm thì vào **API server** kiểm tra các rate, các loại SLI-request , dộ trễ
    - Dự án bị chậm ví dụ `ecommerce` xác nhận xem dự án đó có bị chaamh hay không ta thường xem vào 2 phần tài nguyên `Namespace(workloads)`, `Pod`, `Cluster`(CPU, memory) và mạng (bandwitch) `Namespace(workloads)`
- Khi bị request cao thì nên vào xem dashboard giám sát
## 5.4. Uptime kuma (helm)
- Theo dõi được khả năng uptime của 1 website 
- Search: `http request status` để xem các trạng thái của website
- blackbox uptume trong prometheus
- Uptime-kuma helm chart
### 5.4.1. Cấu hình 
- Tạo PV và PVC để lưu trữ lại những trạng thái mà ta giám sát

    - Trên `k8s-master-1`
    ```
    mkdir uptime
    cd uptime 
    ```
    vi values.yaml
    ``` 
    volume:
        enable: true
        accessMode: ReadWriteOnce
        existingClaim: "uptime-kuma-pvc"
    ---
    helm install anphucvn-uptime uptime-kuma/uptime-kuma -n monitoring -f values.yaml
    ```
- Sau đó tạo ingress để có thể truy cập được vào uptime
    ```
    Name: uptime-ingress
    requestHost: uptime.anphuc.vn
    Prefix: /
    Target: anphucvn-uptime-uptime-kuma
    Port: 3001
    IngressClass: Nginx
    ```
- Add host trên win: **192.168.1.110 uptime.anphuc.vn**
### 5.4.2. Truy cập và tùy chỉnh giao diện
- Add new Monitor
    ```
    Friendly Name: ecommerce.anphuc.vn
    url: ....
    Retries: 3 (Kiểm tra lỗi quá số lần thì tiến hành cảnh báo )
    Accepted Status Codes: 200-299
    Setup Notification: ....
    ```
- Tích hợp công cụ lên grafana để tiến hành giám sát tập trung 
  - Phải add host vào deployment `anphucvn-uptime-uptime-kuma` -> Networking -> Host Alias: ....
  - Tạo API Keys và dùng cái key để xác thực, có thể **/metrics** để kiểm tra các trạng thái có thể thu thập được lên prometheus sau đó đưa vào giao diện grafana
- Có nhiều phần nừa: 
  - Hạ tần container, loging của dự án
  - Làm sao để biết performent của dự án đang ở mức nào
  - Lượng trafic vào ra 
## 5.5. Backup
### 5.5.1. Backup những gì?
- **PV và PVC**: Sử dụng **NF Server** lưu trữ dữ liệu khác ngoài cụm, đảm bảo dữ liệu, và có thể chạy **crontab**(Backup tự động)
- **Sử dụng 1 cluster và 2 replica** tạo bản backup ở server bên ngoài thường 5 bản
- Backup các file yaml ra 1 nơi tập trung như git-ops, infastructor upcode giúp đảm bảo khi khởi tạo lại cũng như đồng bộ dự án hạ tầng sẽ đồng nhất và bảo đảm 
- Các **Secrets** và **config-map**: như kms, pause 
- Các manifest triển khai trên k8s
- ECTD: lưu trữ toàn bộ trạng thái của cụm
- Các Cluster lớn và phức tạp: backup cả cluster metadata hay infastructer config ..., các cơ sở hạ tầng, thông tin về network, firewall rules, ... Ensible, Cloud (Teraform)
- Monitoring & logging: các tài nguyên dashboard, cấu hình metric,...
### 5.5.2. Backup and Restore 
- Backup k8s và công cụ: `K8S backup`
- Velero: Công cụ backup ECTD: cả trạng thái của ectd, PV khôi phục và sao lưu theo lịch trình
- ectdclt: Công cụ backuo được ectd chủ yếu sao lưu và khôi phục trạng thái của ectl không hộ trợ PV và PVC
#### 5.5.2.1. Velero
- Velero release: [GitHub](https://github.com/vmware-tanzu/velero/releases)

    ![alt text](image.png)
- Trên `k8s-master-1`
    ```
    wget https://github.com/vmware-tanzu/velero/releases/download/v1.16.1/velero-v1.16.1-linux-amd64.tar.gz
    tar -xvf ...
    sudo mv velero-version... /usr/local/bin
    velero version
    ```
- Lưu bản backup ra đâu: `MinIO` kho lưu trữ và tạo các packet lưu trữ dữ liệu lên đó có thể thấy doanh nghiệp có bank, thuật toán, tự dựng ở on-premit
- Sử dụng `database-server` để lưu dữ liệu hoặc mount ra ở 1 vụ trí khác bên ngoài
#### 5.5.2.2. Cài đặt
- Cài đặt sử dụng docker: trên `database-server`
    ```
    mkdir /minio
    cd minio
    ```
    vi docker-compose.yml
    ```
    version: '3'
    services:
      minio:
        image: minio/minio
        container_name: minio
        ports:
          - "9000:9000"
          - "9001:9001"
        volumes:
          - ./storage:/data
        environment:
          MINIO_ROOT_USER: anphuc
          MINIO_ROOT_PASSWORD: Anphuc@1231
        command: server --console-address ":9001" /data

    ```
- Chạy lệnh `docker-compose up -d` sử dụng port 9000 và 9001, `docker ps`
- Truy cập `192.168.1.115:9001`
- Create buket `k8s-anphucvn-cluster-backup`
- Để lưu trữ thì cần qua API và xác thực qua `secret key và access key`
- Quay lại `k8s-master-1` 

    ![alt text](image-1.png)

    ```
    export MINIO_URL="192.168.1.115:9000"
    export MINIO_ACCESS_KEY_ID="..."
    export MINIO_ACCESS_KEY_ID="..."
    export MINIO_BUCKET="k8s-anphucvn-cluster-backup"
    ```
- Chạy lệnh để cài đặt Velero với MinIO làm backend lưu trữ các bản sao lưu của Kubernetes (thực hiện trên server `k8s-master-1` hoặc kubectl shell Rancher)
    ```
    velero install 
    --provider aws 
    --bucket $MINIO_BUCKET 
    --secret-file <(echo -e "[default]naws_access_key_id=$MINIO_ACCESS_KEY_IDnaws_secret_access_key=$MINIO_SECRET_KEY_ID") 
    --use-node-agent 
    --backup-location-config region=minio,s3ForcePathStyle="true",s3Url=$MINIO_URL 
    --plugins velero/velero-plugin-for-aws:v1.5.0 
    --namespace velero
    ```
- Kiểm tra trên rancher-server sẽ thấy được một namespace `velero` mà ta tạo ra 
    - Vào namespace kiểm tra thì thấy các tài nguyên, workloads đã được tạo ra 
    - Vào Storage -> Secrets: có 2 cái secret như các key mình tạo ra 
    - Câu lệnh xem log: 
#### 5.5.2.3. Tiến hành backup từng phần 
1. Backup dự án ecommece 
- Trên `k8s-master-1`: Backup toàn bộ dự án ecommerce luôn còn ta có thể tự tìm hiểu thêm ví dụ như backup chính xác cái deployment nào hay cái PV nào đó
    ```
    velero backup create ecommerce-v1 --include-namespaces=ecommerce
    velero backup get (Xem backup)
    ```
- Quay lại web Velero thì thấy lượng tài nguyên đã được sử dụng

    ![alt text](image-2.png)
- Thử xóa đi dự án `ecommerce backend` delete deployment sau đó dựa theo backup ta tiến hành restore lại bằng lệnh: 
    ```
    velero restore create ecommerce-v1 --from-backup ecommerce-v1 --include-namespaces ecommerce
    velero get restore
    ```
- Quay lại web rancher thì thấy dự án đã được backup lại và tương ứng thì trên web velero thì sẽ có một bản restore tương ứng
- Và nếu muốn xóa backup thì ta dùng lệnh
    ```
    velero backup detete ecommerce-v1
    ```
- Thử backup toàn cụm
    ```
    velero backup create all-cluster-v1 --include-namespaces '*'
    ```
- Và khi tìm hiểu thêm thì hoàn hoàn có thể đặt lịch để nó có thể tự động backup và nó có thể backup hằng ngày 
    ```
    velero schedule create daily-cluster-backup --schedule="0 0 * * *" --include-namespaces '*'
    velero schedule get
    velero schedule delete daily-cluster-backup
    ```