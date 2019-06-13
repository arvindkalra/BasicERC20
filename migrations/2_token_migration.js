const Token = artifacts.require("IaToken");

module.exports = function(deployer) {
    deployer.deploy(Token, 'IAT', 'IAT', 18, 4500000000 * 10 ** 18);
};