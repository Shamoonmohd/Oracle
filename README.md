# Tokenized Real Estate Oracle

Imagine you've heard about tokenized real estate and all its benefits: backing by a hard asset, inflation protection, and an 8% Cash-on-Cash return.   Where do you go to find a list of properties available?  It turns out that information is spread accross Gnosis, Ethereum, Algorand, and BSC.  Well we solve that by bridging that information from multiple chains and provide it on Polygon (a low cost Ethereum layer 2), so that you can consult our on-chain Proxy to get a list of tokenized real estate assets.  But even then a second problem is you can't get the information you need to decide which token to buy.  For example, what is the Cash On Cash return of the property?  To get that you need on chain information on the property (the price of the token and number of tokens) and off chain information (the net operating income of the property).   We solve that problem by bringing the on chain and off chain information into an Oracle that gives you all the information on tokenized real estate deals.  

### The Oracle has four parts: 
1. A Proxy - each property is represented by a series of ERC-20 tokens on Polygon, which we call Proxy Tokens.  

2. An Aggregator - which provides a data feed on each property via JSON.  Buying the Proxy Tokens serves as a method of payment for access to the data feed provided by the Aggregator.  We will operate the Aggregator initially and then spin it off into a DAO.  

3. Decentralized Information Providers -  Over time we will add information providers that will supply the off chain property information to the Aggregator.  Anyone can serve as an information provider, and in exchange for their work receive a share of the income generated by Proxy Token sales.  Property Management Companies, Asset Managers, and Issuers of Tokenized Real Estate  tokenized real estate are likely to serve as the information providers.   
        
4. Customers - We anticipate three types of users of the oracle.  First, it can be used by sophisticated players such as crypto funds that want to make markets and do arbitrage in tokenized real estate transactions.  Second, it can be used by traditional information providers that want to operate a web front end showing the various tokenized real estate properties.  Third, it can be used by Exchanges that want to offer tokenized real estate tokens for sale to digital asset investors.   The total available real estate market is gigantic, $280 Trillion, with traditional information providers like CoStar valued at $30B and generating $2B in annual revenue.  As Tokenized Real Estate, currently $140M of TVL, grows to eventually become the majority of a real estate, our Oracle can become even more valuable than these traditional providers.

## Demo

![](https://github.com/Shamoonmohd/blockown_info/blob/master/public/ezgif.com-gif-maker.gif).

![](https://youtu.be/8pw7DfTMdXk).



### Smart Contract Deployed on Polygon(Depolyed on Mumbai Testnet)

        1. Utiliy Token: BT_4318_Clybourne_Ave
        2. Link: [mumbai.polygonscan]([https://mumbai.polygonscan.com/token/0x916dc17755aa4b5f716a3808778db8d50268f9b4])
        3. [mumbai.polygonscan]([https://link-url-here.org](https://mumbai.polygonscan.com/token/0x916dc17755aa4b5f716a3808778db8d50268f9b4))
         
      
In the project directory, you can run:

### `npm start` b

