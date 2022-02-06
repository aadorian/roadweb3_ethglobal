# Tweet@Polygon ![](https://i.imgur.com/8gAClAR.png)



**Name:** Tweet@Polygon  
**Description:**  Own any tweet as an NFT @Polygon display in a Dapp and query in Discord with a BOT
**Problem**
Censorship @Twitter and integration Web2/Web3 
**Solution**
Deploy the tweet @polygon with the URI as the IPFS of the snapshot tweet. Also view transactions and Nft using a Discord BOT.

**Idea:** The main use case is that a user can own the tweets through an ERC721 contract @ Polygon network using TweetID and the uploaded tweet as IPFS as URI. Also, the user will be able to query the available TweetsID and view them through the different APIs provided by the event sponsors. 
Finally, integrate Web3 Discord Bot to query the @Polygon Network



**Design**
![](https://i.imgur.com/NOFckkf.png)


# Video 
**Video**
https://youtu.be/6rcqlsskXqo

**Online**

https://vg8il995a1n6thi7133ev8s91e3pmmvnulh16b3ev3tokmtsmk2ikoo.siasky.net/

**Public URL**: https://showcase.ethglobal.co/roadtoweb3/tweet-polygon

**Deployed** ERC-721 @mumbai 
https://mumbai.polygonscan.com/address/0x8a6d28514c53650ea649c0d4bb5f7cbfbd0bb9fb

# Snapshots

|  Menu Option| Description| Snapshot
| -------- | -------- | -------- | 
| Balance |  returns the balance of the account and also the Tweets owned|   ![](https://i.imgur.com/Ps0WHk6.png)|
| Send    | Simple ERC-20 transfer from accounts |![](https://i.imgur.com/u2YVg7o.png)| 
| Buy    | Select a TweeterID (or other ID) and safeMint the NFT with and URI (best IPFS snapshot of tweet) | ![](https://i.imgur.com/f8Jsi5W.png)|  |
| Search Tweets   | Displays the Tweet @ Twitter and the owner of the Tweet @ Blockchain | ![](https://i.imgur.com/mSZ6U85.png)|  
| Covalent API  | Returns JSON of token balances ERC20/ERC721/ERC1155 of the deploy contract using Covalent API.   |   ![](https://i.imgur.com/Qkc0Egm.png)| |
| NFTPort API   | Retrieve NFTs owned by an account using NFTPort API   |  ![](https://i.imgur.com/ZdFOtvY.png)| |
| PolygonScan API | Returns JSON of ERC-721 Token Transfer Events @Polygon using PolygonScan API   |  ![](https://i.imgur.com/FiEYFT5.png)| 
TheGraph | Display a GraphQL Query  |   ![](https://i.imgur.com/uh1i8iG.png)||
About ||![](https://i.imgur.com/VwvfClC.png)
| |

**Discord BOT**
![](https://i.imgur.com/gIu3dr7.jpg)
| Bot Command| Snapshot
| -------- | -------- | 
|   !balance 0x.. |  ![](https://i.imgur.com/BgImh1V.png)
   |!mybalance | ![](https://i.imgur.com/c8KHw8D.png)
  |  !myNFT| ![](https://i.imgur.com/YNI9W7Z.png)| 
| !transaction | ![](https://i.imgur.com/dTprpNQ.png)
 |   !price  |![](https://i.imgur.com/UrOYqFB.png)
| !web3 (link to web3App)| ![](https://i.imgur.com/rKBwY1r.png)

 
## Example  in the video 

- *address: * 0xA73721242EeAb1B96B79fd6Cdd5ac7182Ad21cEe
- *ERC-721 address: *0x8a6d28514c53650ea649c0d4bb5f7cbfbd0bb9fb
Example Token: 
**TweetID** 1489694312900214787
**URI:**
https://ipfs.io/ipfs/bafybeibl2mjhvzusu6eqs6bnpnbzmbw3lv7d6fh4rm5nieawvt53lvpekq/1489694312900214787.png

**Transactions:**
https://mumbai.polygonscan.com/tx/0xf64c6f172022cf8e314727b7802bce3ff255e1461e15131ea099a9585dcf776a/internal-transactions

## Deployed Contract @mumbai
```javascript=
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC721, ERC721URIStorage, Ownable {
    constructor() ERC721("Web3", "W3") {}

    function safeMint(address to, uint256 tokenId, string memory uri)
        public
        onlyOwner
    {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
```

## Deploy TheGraph
![](https://i.imgur.com/rxXnAte.png)

#### Transfers Snapshots
![](https://i.imgur.com/kw3QVx3.png)

## Build and run Dapp

```json=
   "start": "webpack serve --mode development",
    "build": "tsc --noEmit && rimraf build && webpack --mode production --progress",
  

```
## Build and run Bot
```json=
  npm run compile
  npm run start
```

#### IPFS files

- [ x] TweetID 1489694312900214787

https://ipfs.io/ipfs/bafybeibl2mjhvzusu6eqs6bnpnbzmbw3lv7d6fh4rm5nieawvt53lvpekq/1489694312900214787.png
![](https://i.imgur.com/Q1SoN0H.png)

#### Dependencies

```json=
 "@dhaiwat10/react-link-preview": "^1.12.2",
    "@maticnetwork/wallet-widget": "^1.3.5",
    "@types/styled-components": "^5.1.7",
    "@use-gesture/react": "^10.2.4",
    "@usedapp/coingecko": "^0.3.25",
    "@usedapp/core": "^0.8.0",
    "add": "^2.0.6",
    "dotenv": "^11.0.0",
    "dotenv-webpack": "^7.0.3",
    "file-loader": "^6.2.0",
    "framer-motion": "^4.1.5",
    "fs": "^0.0.1-security",
    "prop-types": "^15.8.1",
    "qrcode.react": "^1.0.1",
    "react": "^17.0.0",
    "react-avatar": "^4.0.0",
    "react-dom": "^17.0.0",
    "react-iframe": "^1.8.0",
    "react-json-view": "^1.21.3",
    "react-nft-gallery": "^0.6.1",
    "react-router-dom": "^5.2.0",
    "react-tweet-embed": "^1.3.1",
    "react-twitter-embed": "^4.0.4",
    "rsuite": "^5.5.2",
    "styled-components": "^5.2.1",
    "use-clipboard-copy": "^0.2.0",
```
![](https://i.imgur.com/MZ1MYjg.png)


# Resourses 


https://usedapp.io

###### tags: `RoadWEB3` `Polygon`

