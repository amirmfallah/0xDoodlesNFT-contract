const nft = artifacts.require("XDoodlesNFTV3");

module.exports = async function (deployer) {
  await deployer.deploy(nft);
};
