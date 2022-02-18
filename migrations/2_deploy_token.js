const nft = artifacts.require("DoodlesNFTV3");

module.exports = async function (deployer) {
 await deployer.deploy(nft);
};
