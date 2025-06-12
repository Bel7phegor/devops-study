#!/bin/bash

# Sao lưu tất cả các database từ server thứ nhất sang server thứ 2
## Cách 1: server thứ nhất database server cài đặt bằng docker
## Cách 2: server thứ nhất database server cài đặt trực tiếp trên server

# Cách 1:
DOCKER_CONTN="66a064316a47"
PG_U="root"
BACKUP_DIR="/home/backup-database"
FILE_NB="db_dump.sql"
mkdir -p $BACKUP_DIR

docker exec -it $DOCKER_CONTN pg_dumpall -U $PG_U -f $BACKUP_DIR/$FILE_NB

#scp $BACKUP_DIR/$FILE_NB root@10.32.4.152


