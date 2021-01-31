# currency_project
 
A Simple Project that helps you with currency convert and swap. 


As a user you can choose the currency you need and the amount in order to convert it to the exchange currency.
After you choose , you can click on convert button to get the result. 
Also, you have the choice to see all the logs using the Audit Button. In this table you can see the time for the action and all related information.
 

# how to run in terraform:  
git clone https://github.com/mohamedgalia/currency_swap.git  
cd currency_swap  
go to main.tf file  
change the key name in line 179 "key_name = "gazal"" to your Keypair name in your aws  
add your privte key file to the folder and set it in line 239 (./gazal.pem)  
set your access_key and secret_key of aws in variables.tf file in access_key_var and secret_key_var  
terraform init  
terraform apply

if you want to remove every thing that build run:  
terraform destroy
  
**go to your aws console and get your instance public ip**  
**and you will find the app in "your-instance-ip:8000"**  

# how to run in k8s:  
git clone https://github.com/mohamedgalia/currency_swap.git  
cd currency_swap/k8s  
kubectl apply -f backend-dy.yml -f backend-sr.yml -f frontend-dy.yml -f frontend-sr.yml -f auti-dy.yml -f auti-sr.yml  

**you will find the app in "127.0.0.1:30037"**  

# using:  
python  
flask  
docker  
docker compose  
aws  
k8s  
html
