
1. Create a database , give it name like ""Human_Resource"". Create a collection inside this named ""employee""

Ans:- const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(url);

console.log('created client');

async function main() {
    await client.connect();
    // console.log('client connected...');

    const database = client.db('prepbyte2');
    const collection = database.collection('mongodb2');

    const data = {
        first : "Hello",
        last: "World"
    };

    await collection.insertOne(data);

    console.log('done..');
    
}


main();


2. Query the collection ""employee"" and list all the documents

Ans:-  

const collection = database.collection('mongodb2');

const data = {
            Put data 
        };

await collection.insertMany(data);



3. Query the collection ""employee"" and list the employees who are having salary more than 30000

Ans:- 

const data = await collection
        .find({salary:{$gt:"30000"}})
        .toArray();

[{ "_id" : { "oid" : "61cc522daf6ba4fcb54e8c3b" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" },
{ "_id" : { "oid" : "61cc522daf6ba4fcb54e8c3d" }, "firstName" : "Jame", "lastName" : "roh", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" },
{ "_id" : { "oid" : "61cc533baf6ba4fcb54e8c3f" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" },
{ "_id" : { "oid" : "61cc533baf6ba4fcb54e8c41" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" },
{ "_id" : { "oid" : "61cc5515af6ba4fcb54e8c43" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" },
{ "_id" : { "oid" : "61cc5515af6ba4fcb54e8c45" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }]



4. Query the collection ""employee"" and list the employees who are having experience more than 2 years.

Ans:- const data = await collection
        .find({overallExp:{$gt:"2"}})



5.Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year 

Ans:- const data = await collection.find({yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}})
{ "_id" : { "oid" : "61cc5034af6ba4fcb54e8c38" }, "firstName" : "John", "lastName" : "Doe", "salary" : "25000", "department" : "HR", "lastCompany" : "X", "lastSalary" : "10000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2016", "gradStream" : "CSE" }
{ "_id" : { "oid" : "61cc522daf6ba4fcb54e8c3d" }, "firstName" : "Jame", "lastName" : "roh", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : { "oid" : "61cc533baf6ba4fcb54e8c41" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : { "oid" : "61cc5515af6ba4fcb54e8c45" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }




6. Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.

Ans:- const data = await collection.updateMany(
    {salary:{$gt:"70000"}},
    {$set:{salary:"65000"}})
{ "acknowledged" : true, "matchedCount" : 0, "modifiedCount" : 0 }



7. Delete all the documents from ""employee"" where last company is Y"

Ans:-  const data = await collection.deleteMany({lastCompany:"Y"})
{ "acknowledged" : true, "deletedCount" : 6 }