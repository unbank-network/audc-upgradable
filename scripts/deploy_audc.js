const { ethers, upgrades } = require("hardhat");

async function main() {
  const AUDC_V1 = await ethers.getContractFactory("AUDC_V1");
  console.log("Deploying AUDC_V1..");
  const audc_v1 = await upgrades.deployProxy(
    AUDC_V1,
    ["0x8E63DB8965B9cAe1b1Ba980F4730a4202198465A"], // ledger address
    {
      initializer: "initialize",
    }
  );
  await audc_v1.deployed();
  console.log("UpgradableToken deployed to:", audc_v1.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
