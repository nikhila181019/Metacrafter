// Create a variable to hold your NFTs
let nftCount = 0;

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, description, data) {
  // Create an object to hold the NFT metadata
  const nft = {
    name: name,
    description: description,
    data: data
  };

  // Increment the NFT count
  nftCount++;

  // Return the created NFT object
  return nft;
}

// Create an array to hold the minted NFTs
const nfts = [];

// This function will loop through the array of NFTs
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    const nft = nfts[i];
    console.log("Name: " + nft.name);
    console.log("Description: " + nft.description);
    console.log("Data: " + nft.data);
    console.log("------------------");
  }
}

// This function will return the total number of minted NFTs
function getTotalSupply() {
  return nftCount;
}

// Call your functions below this line

// Mint some NFTs and store them in the nfts array
const nft1 = mintNFT("NFT 1", "First NFT", "Data 1");
nfts.push(nft1);

const nft2 = mintNFT("NFT 2", "Second NFT", "Data 2");
nfts.push(nft2);

const nft3 = mintNFT("NFT 3", "Third NFT", "Data 3");
nfts.push(nft3);

// List all the minted NFTs
listNFTs();

// Print the total number of minted NFTs
console.log("Total Supply: " + getTotalSupply());
