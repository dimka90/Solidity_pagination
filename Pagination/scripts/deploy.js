// import ethers
const hre = require("hardhat")

// declare a function that handles the deployment

async function main()
{
// Get the name of the contract
const Contract = await hre.ethers.getContractFactory("Pagination")
// deploy the contract
const pagination = await Contract.deploy();
// Wait for approval
await pagination.deployed;

// Adding images to be stored
const imgUrl= "a.png"
const description = "A cool cow boy that is doing great"
const imgname = "cow boy"

// Adding images to be stored
const imgUrl2= "a.png"
const description2 = "A cool cow boy that is doing great"
const imgname2 = "cow boy"

// Adding images to be stored
const imgUrl3= "a.png"
const description3 = "A cool cow boy that is doing great"
const imgname3 = "cow boy"

const addImage = await pagination.addImage(imgUrl, description, imgname)
const addImage2 = await pagination.addImage(imgUrl2, description2, imgname2)
const addImage3 = await pagination.addImage(imgUrl3, description3, imgname3)
// console.log(await pagination.getImgs())
console.log(await pagination.getPagination(4,7))

// console.log("Contract address ", pagination.target)

}

main()
.then(()=>
{
    console.log("Succees")
    process.exit(0)
})
.then(()=>
{
    console.log("Error")
    process.env.exit(1)
})