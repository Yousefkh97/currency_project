# Currency Project
 
A Simple Project that helps you with currency convert and swap. 

![alt text](https://www.calculatorsoup.com/images/thumbnails/calculators_financial_currency-converter.png)

As a user you can choose the currency you need and the amount in order to convert it to the exchange currency.

After you choose , you can click on convert button to get the result. 

Also, you have the choice to see all the logs using the Audit Button. In this table you can see the time for the action and all related information.
 

# How to run in Terraform:  
git clone https://github.com/Yousefkh97/currency_project.git  
cd currency_project  
go to main.tf file  
Change the key name in line 152 to your Keypair name in your aws  
Add your privte key file to the folder and set it in line 191 (./test.pem)  
set your access_key and secret_key of aws in variables.tf file in access_key_var and secret_key_var  
Run this command in terminal/cmd: terraform init  
Run this command in terminal/cmd: terraform apply

You can remove every resource that you used by running this command:  
terraform destroy
  
**go to your aws console and get your instance public ip**  
**and you will find the app in "your-instance-ip:4000"**  

# How to run in K8S:  
git clone https://github.com/Yousefkh97/currency_project.git  
cd currency_project/k8s  
kubectl apply -f . (where dot represents the current working directory) 

**you will find the app in "127.0.0.1:30037"**
