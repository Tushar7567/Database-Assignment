const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/classdb"
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    language: {
        type: String,
    },
    edition: {
        type: String,
    },
    dateOfPublish: {
        type: Date,
    },
    prices : {
        type : Number,
    }
});

async function main() {
    try {
        console.log('connecting...');
    
        // connect to database
        await mongoose.connect(url);
        const BookModel = mongoose.model('books', BookSchema);

        // insert 3 data
        const data = {
            "title" : "Champak 4",
            "author": "Pooja",
            "language" : "Hindi",
            "edition": "first",
            "dateOfPublish" : new Date(),
            "prices" : 100,
        };
        const data2 = {
            "title" : "Champak 5",
            "author": "Pooja",
            "language" : "Hindi",
            "edition": "first",
            "dateOfPublish" : new Date(),
            "prices" : 100,
        };
        const data3 = {
            "title" : "Champak 6",
            "author": "Pooja",
            "language" : "Hindi",
            "edition": "first",
            "dateOfPublish" : new Date(),
            "prices" : 100,
        }

        const book1 = new BookModel(data);
        const book2 = new BookModel(data2);
        const book3 = new BookModel(data3);


        const response = await BookModel.insertMany([
            book1,
            book2,
            book3
        ]);
        

        console.log('response...', response);


        console.log('connected...');

        
    } catch (error) {
        console.log(error);
    }
    console.log('done....');
}    

main();







1. Create a database , give it name like ""Human_Resource"". Create a collection inside this named ""employee""

Ans:- const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/classdb"
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    language: {
        type: String,
    },
    edition: {
        type: String,
    },
    dateOfPublish: {
        type: Date,
    },
    prices : {
        type : Number,
    }
});

async function main() {
    try {
        console.log('connecting...');
    
        // connect to database
        await mongoose.connect(url);
        const BookModel = mongoose.model('books', BookSchema);
        

        console.log('response...', response);


        console.log('connected...');

        
    } catch (error) {
        console.log(error);
    }
    console.log('done....');
}    

main();

2. Query the collection ""employee"" and list all the documents

Ans:-  

const eModel = mongoose.model('employee', eSchema);

const data = {
            Put data 
        };

await eModel.insertMany(data);



3. Query the collection ""employee"" and list the employees who are having salary more than 30000

Ans:- 

const data = await eModel
        .find({salary:{$gt:"30000"}})
        .toArray();

[{ "_id" : { "oid" : "61cc522daf6ba4fcb54e8c3b" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" },
{ "_id" : { "oid" : "61cc522daf6ba4fcb54e8c3d" }, "firstName" : "Jame", "lastName" : "roh", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" },
{ "_id" : { "oid" : "61cc533baf6ba4fcb54e8c3f" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" },
{ "_id" : { "oid" : "61cc533baf6ba4fcb54e8c41" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" },
{ "_id" : { "oid" : "61cc5515af6ba4fcb54e8c43" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" },
{ "_id" : { "oid" : "61cc5515af6ba4fcb54e8c45" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }]



4. Query the collection ""employee"" and list the employees who are having experience more than 2 years.

Ans:- const data = await eModel
        .find({overallExp:{$gt:"2"}})



5.Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year 

Ans:- const data = await eModel.find({yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}})
{ "_id" : { "oid" : "61cc5034af6ba4fcb54e8c38" }, "firstName" : "John", "lastName" : "Doe", "salary" : "25000", "department" : "HR", "lastCompany" : "X", "lastSalary" : "10000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2016", "gradStream" : "CSE" }
{ "_id" : { "oid" : "61cc522daf6ba4fcb54e8c3d" }, "firstName" : "Jame", "lastName" : "roh", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : { "oid" : "61cc533baf6ba4fcb54e8c41" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }
{ "_id" : { "oid" : "61cc5515af6ba4fcb54e8c45" }, "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }




6. Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.

Ans:- const data = await eModel.updateMany(
    {salary:{$gt:"70000"}},
    {$set:{salary:"65000"}})
{ "acknowledged" : true, "matchedCount" : 0, "modifiedCount" : 0 }



7. Delete all the documents from ""employee"" where last company is Y"

Ans:-  const data = await eModel.deleteMany({lastCompany:"Y"})
{ "acknowledged" : true, "deletedCount" : 6 }