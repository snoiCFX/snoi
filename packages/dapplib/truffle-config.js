require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grace glimpse flee trophy charge ranch remind attitude kidney arena outer student'; 
let testAccounts = [
"0x7694d937fd4d3cfb8a654601f3c1407c3300cd38cd6584546b9a0999ea9311c0",
"0xb72dfcee25efabf37f56e46dc5f0ebf6ba8a1686a9971ea87d795d09868df206",
"0x7a36c3b73daac60d26e0e11d4a06793fb7449dc5183ff1ed6bd21b96c0d93a26",
"0xa4fd9ed51d837c8bf79db42266c24b37151440a5444cc20010bd8530cf431368",
"0x48d6d104e9b64d818c8a3998c25ceeeabe2a1a3baece4acb4234c7a975feda08",
"0x45f2e78a3f2c9a238a6fe9353e6e672ad0f317ef84b9b13cb94f41a5b12c2cfc",
"0xa010ea3b9c877b8d3ca98fc27c2ac2e8adcf52f27e598107d123cf991c6279b7",
"0x7e50a10db2b6430c9fc09a2358aea99b2d996a9f14c8d4f410658af3a0256ed4",
"0x0a7cfcf1e8f3e045a9c1a34173c4f4126464b257ba4c54dcc23a4a92164a94de",
"0x735eb42f39017bcd2d1be513a8a6f3b61dba945f9a83aaf4ce26894e0d3676ff"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


