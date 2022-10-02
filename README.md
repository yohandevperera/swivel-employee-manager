# Employee Manager App
A simple app that can manage employees with CRUD.

**Prerequisites**
| Tool | Version |
| ------ | ------ |
| Node | 14.20.0 |
| Yarn | 1.22.15 |
| MySql | 8.0 or later |
| Docker | latest |

**Backend API documentation link**

> http://localhost:5000/api-docs/ 

## Setup

**Backend Setup**

Clone the repository using
```sh
git clone git@github.com:yohandevperera/swivel-employee-manager.git
```
Change the directory to the server using
```sh
cd server
```
Install the dependances using 
```sh
yarn or yarn i
```
Create a database in mysql 
```sh
dbname =  employee-manager-db
```

Copy the .env.example and rename into .env 
```sh
 cp .env.example .env
```
Edit the .env file and alter the DATABASE_URL
```sh
DATABASE_URL="mysql://root:{sqlPassword}@{hostname}:3306/employee-manager-db"
```

Push the table structure to the created database using
```sh
npx prisma db push
```

Run the seeders to insert the predefine system meta data using
```sh
npx prisma db seed
```

> Thats it with the backend !!! 

**Addtional Backend Commands**

Run the defined migrations
```sh
npx prisma migrate deploy
```

Create a new migration
```sh
npx run prisma migrate dev --name {migration name}
```


