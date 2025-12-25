#!/bin/bash
sudo docker rmi -f $(sudo docker images -q) ##this is not recommned step, i am deleting existing images to save space
sudo rm -r gold ## these steps are not recommened instead you can modify script as shown below
sudo mkdir gold
cd gold/
sudo git clone https://github.com/adya1554/royal-challengers-glory.git
cd royal-challengers-glory/code/
sudo docker build -t rcb-nginx -f rcb-docfile .
sudo docker tag rcb-nginx adityamagadum1/royals ##make sure you did docker login
sudo docker push adityamagadum1/royals

##recommended script###
#!/bin/bash
#cd gold/Gold_Site_Ecommerce
#sudo git pull why git 
#sudo docker build -t react-nginx -f goldockerfile .
#sudo docker tag react-nginx:latest reactdemo/react-nginx:latest ##make sure you did docker login
#sudo docker push reactdemo/react-nginx:latest
