const hre = require("hardhat")

async function main() {

    // get the name of the factory
    const Contract = await hre.ethers.getContractFactory("Pagination")

    // attach the instance of the contract
   
    const pagination = await Contract.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3")

    // Adding images to be stored
    const imgUrl = "a.png"
    const description = "A cool cow boy that is doing great"
    const imgname = "cow boy"

    // Adding images to be stored
    const imgUrl2 = "a.png"
    const description2 = "A cool cow boy that is doing great"
    const imgname2 = "cow boy"

    // Adding images to be stored
    const imgUrl3 = "a.png"
    const description3 = "A cool cow boy that is doing great"
    const imgname3 = "cow boy"


    const addImage = await pagination.addImage(imgUrl, description, imgname)
    await addImage.wait()
    const addImage2 = await pagination.addImage(imgUrl2, description2, imgname2)
    await addImage2.wait()
    const addImage3 = await pagination.addImage(imgUrl3, description3, imgname3)
    await addImage3.wait()
    // console.log(await pagination.getImgs())
    console.log(await pagination.getPagination(1, 2))

}
main()
    .then(() => {
        console.log("Success")
        process.exit(0)
    })
    .catch((error) => {
        console.log("Error", error)
        process.exit(1)
    })