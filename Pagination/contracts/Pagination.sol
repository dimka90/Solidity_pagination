// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract  Pagination {

    struct Image{
        string imgUri;
        string description;
        string imgName;
    }

    // array of images
    Image[] public images;
    
    // save Images meta-data to the blockchain 
    function addImage(
        string memory _imgUri,
        string memory _description,
        string memory _imageName
    ) external
    {
        // create a new array in memory to store add the image meta
        // data tot he blockchain

       images.push(Image(_imgUri, _description, _imageName));

    }
    function getImgs() view external returns(Image[] memory)
    {
        return images;
    }

    function getPagination (uint _start, uint _to) view 
    external returns(Image[] memory)
    {
        require(_start < images.length, " offset out of bounds");
        uint result = (_start + _to > images.length)? images.length - _start : _to;
    //create a new array to store the new array

    Image[] memory img = new Image[](result); 
    // loop through the store 

    for(uint i = 0; i < result; i++)  {
    // populate the new array with the image to be return
    img[i] = images[_start + i];
    }
    

    return img;
    }
    
}




