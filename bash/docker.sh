#!/bin/bash
sudo docker rmi -f $(sudo docker images -q) ##this is not recommned step, i am deleting existing images to save space
sudo rm -r gold ## these steps are not recommened instead you can modify script as shown below
sudo mkdir gold
cd gold/
sudo git clone https://github.com/adya1554/royal-challengers-glory.git
cd royal-challengers-glory/code/
git_commit=$(sudo git rev-parse HEAD)
sudo docker build -t rcb-nginx:$git_commit -f rcb-docfile .
sudo docker tag rcb-nginx:$git_commit  adityamagadum1/royals:$git_commit ##make sure you did docker login
sudo docker push adityamagadum1/royals:$git_commit

sudo docker push sagarkakkalasworld/react-microk8s:$git_commit

aws s3 rm s3://git-commit-bucket/new-value.txt
sudo touch new_value.txt
sudo chmod 777 new_value.txt
sudo echo $git_commit > new_value.txt
aws s3 cp new_value.txt s3://git-commit-bucket/
sudo rm new_value.txt


