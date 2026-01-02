!/bin/bash
cd /home/ubuntu/workdir/royal-challengers-glory/react-helm/ # change directory to heml 

aws s3 cp s3://git-commit-bucket/old_value.txt . # copy files from s3 to working directory
aws s3 cp s3://git-commit-bucket/new_value.txt .


old_value=$(cat old_value.txt) # assingning values to vareable
new_value=$(cat new_value.txt)

#using sed command cahnge the tag with this tag helm upgrate the version
sed -i "s/${old_value}/${new_value}/g" values.yaml

#cahnges will add to staging area and commit with those laatest values
git add .
git commit -m "${new_value} is updated"
git push https://$GIT_TOKEN@github.com/adya1554/royal-challengers-glory.git

# git token must be update in server using following commands
# echo# 'export GIT_TOKEN=Your_generated_token' >> ~/.bashrc
# source ~/.bashrc


#re,ovce old value from s3 buclet
aws s3 rm s3://git-commit-bucket/old_value.txt


echo $new_value > old_value.txt
aws s3 cp old_value.txt s3://git-commit-bucket/
rm old_value.txt new_value.txt
helm upgrade react-chart .
