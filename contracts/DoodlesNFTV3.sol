// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";
import '@openzeppelin/contracts/utils/Strings.sol';

contract DoodlesNFTV3 is ERC721A {
    using Strings for uint256;

    // set contract name and ticker.
    constructor() ERC721A("DoodlesNFTV3", "XDL3") {}

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        if (!_exists(tokenId)) revert URIQueryForNonexistentToken();
        return Strings.toString(tokenId);
    }


    function mintItem(uint256 quantity)
        external payable
    {
        _safeMint(msg.sender, quantity);
    }

}
