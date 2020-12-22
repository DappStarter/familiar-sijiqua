require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remind honey heavy entire front seek'; 
let testAccounts = [
"0xb2e90d3f9c39a233a39d58012e7dcb8ca52200ee1b9d1053c0d31f43c7d4a4e5",
"0x6579fa028684700a23a0dac4774e8d2b6c34da9ec663ced580f988054dee3c1c",
"0x75bb1a9cb1a5c3830fd37f8ec63057d908e64c3d3517a1f2ad8f48e6bbf833ad",
"0x0a50aa1cc5e468768483ed9da527cd56e136cdf2fdeca9229bc6709e00ab0c2d",
"0xb4a5007ebc2113de20c126e5062eb51f64e4e03f3fe8908ed0a8702b8d4bbaab",
"0xc58ea106c136c0e464296b321934c57d674430bbbe5e9b494a1ec0f9626b805c",
"0x3de2270ce1029f86ae284457de785e72f003237074483d1c12e1aed808d90697",
"0x79214f4da497dcd2cf760e0101734102b4170a6d3c5e243dd7429e6dbdecae07",
"0x575140776264badb794e9e63a98f2d9b2b7f3a77e6cba5e151e33c748ff28985",
"0x5c96c2eaca59ed9f9ccc9933f57112890537c45a87da8f5a3cd6655181d5628a"
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
            version: '^0.5.11'
        }
    }
};
