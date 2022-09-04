
const http=require("http");

const url=require("url");

const express= require("express")
const app =express();
const cors =require("cors")

app.use(
  cors(
    {

      origin:"http://localhost:3000"
      }
    
  )
)




const users=
[{
  "id": 1,
  "name": "Winfield",
  "email": "wsimonnin0@craigslist.org",
  "gender": "Male",
  "ip_address": "221.69.181.247"
}, {
  "id": 2,
  "name": "Ashley",
  "email": "afeckey1@blogtalkradio.com",
  "gender": "Female",
  "ip_address": "59.159.232.114"
}, {
  "id": 3,
  "name": "Hana",
  "email": "htipple2@instagram.com",
  "gender": "Female",
  "ip_address": "78.196.162.83"
}, {
  "id": 4,
  "name": "Tome",
  "email": "treedman3@meetup.com",
  "gender": "Male",
  "ip_address": "103.242.99.78"
}, {
  "id": 5,
  "name": "Hayward",
  "email": "hlaughlin4@bbb.org",
  "gender": "Male",
  "ip_address": "250.232.164.28"
}, {
  "id": 6,
  "name": "Elisabeth",
  "email": "emacvean5@ezinearticles.com",
  "gender": "Female",
  "ip_address": "233.125.100.237"
}, {
  "id": 7,
  "name": "Ina",
  "email": "isumption6@examiner.com",
  "gender": "Female",
  "ip_address": "83.1.213.55"
}, {
  "id": 8,
  "name": "Dawn",
  "email": "dapplewhaite7@cyberchimps.com",
  "gender": "Female",
  "ip_address": "15.102.190.165"
}, {
  "id": 9,
  "name": "Verina",
  "email": "vfrier8@samsung.com",
  "gender": "Female",
  "ip_address": "173.89.203.32"
}, {
  "id": 10,
  "name": "Sissie",
  "email": "sarthy9@de.vu",
  "gender": "Female",
  "ip_address": "88.9.3.249"
}, {
  "id": 11,
  "name": "Kary",
  "email": "kduferiea@flavors.me",
  "gender": "Female",
  "ip_address": "174.89.72.25"
}, {
  "id": 12,
  "name": "Bobbye",
  "email": "bdziwiszb@gmpg.org",
  "gender": "Female",
  "ip_address": "187.167.85.95"
}, {
  "id": 13,
  "name": "Brodie",
  "email": "bdoerrlingc@over-blog.com",
  "gender": "Male",
  "ip_address": "247.227.89.13"
}, {
  "id": 14,
  "name": "Wylie",
  "email": "wsaveged@example.com",
  "gender": "Male",
  "ip_address": "229.217.242.208"
}, {
  "id": 15,
  "name": "Sherm",
  "email": "srisebarere@imgur.com",
  "gender": "Male",
  "ip_address": "66.49.105.83"
}, {
  "id": 16,
  "name": "Marylee",
  "email": "msowdenf@youku.com",
  "gender": "Female",
  "ip_address": "1.114.171.234"
}, {
  "id": 17,
  "name": "Zeb",
  "email": "zmuldowneyg@harvard.edu",
  "gender": "Male",
  "ip_address": "205.118.187.198"
}, {
  "id": 18,
  "name": "Cristobal",
  "email": "cbrunningh@tmall.com",
  "gender": "Male",
  "ip_address": "49.31.181.54"
}, {
  "id": 19,
  "name": "Marcille",
  "email": "mruslingi@mashable.com",
  "gender": "Female",
  "ip_address": "5.169.251.166"
}, {
  "id": 20,
  "name": "Myrtice",
  "email": "mzaniolettij@usda.gov",
  "gender": "Female",
  "ip_address": "125.66.122.93"
}]



app.get("/",(req,res) =>
{

  res.json(users)
}


)



app.listen(8080);
console.log("the server is running on port : 8080")





//?active=1