require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan razor oil minor hover deposit frame general'; 
let testAccounts = [
"0x28d6d8bdf979a8e5789cef77b3bddcb286635c8f8f8090f601775eaa9ff52521",
"0x935dafe988b1e24a72fd4870225dc9edada11a04e6e00f02663fb1dccc69167e",
"0x3c3e85789e18f7cc9188db74c7652f5ad823176f526e0c7bc165d996518dd4a7",
"0xb9d2edd7dc2a8f0205a200744f4823b7e66cbfaa8f5612bf03892ec5726c02fa",
"0x2cadba3efeaae3aa9245df65f3b2109b4c62ea5bfe9c66dc557c72867189c6bb",
"0xdfc9803c1bfe3490a69236ed4fbe23f02c4ab6a16d7531d3bdf4efe1b938942a",
"0x1c5f18707f34337bca90cb49866d65c4e8879492739c8b17dbdbd19e1a5b2f7f",
"0xf88c5cfb522f3e12a09b74054624a9ad2c3c6af8b7d47336d21f12d860677b69",
"0x1d99316f374803f226591829825e96930ea41991c0266349b6eab57a677e434b",
"0xb3dd1c59cf8b36ef8435ab9ccaef908ec8c7e991bb70e2d06fefb8b3663d3242"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

