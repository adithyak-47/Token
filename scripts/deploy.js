async function main(){
  const hre = require("hardhat")
  const {formatEther} = require("ethers")
  const provider = await ethers.getDefaultProvider('sepolia');
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with the address: ", deployer.address);
  const weiamt = (await provider.getBalance(deployer.address)).toString();
  console.log("Account balance: ", formatEther(weiamt));

  const Token = await ethers.getContractFactory("MeenaToken");
  const token = await Token.deploy();
}

main()
      .then(() => process.exit(0))
      .catch((error) => {
        console.log(error);
        process.exit(1);
      });