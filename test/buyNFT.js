const BuyNFT = artifacts.require('BurnToken.sol');

contract('BurnToken', ()=>{
    describe('BurnToken', async () =>{
        const burnToken = await BurnToken.new();
        await burnToken.burnToken();
        const data = await burnToken.readData();
        assert(data.toString === '100');
    });
}); 
