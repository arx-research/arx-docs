# Smart Contracts

As secp256k1 ECDSA signers, HaLo signatures can easily be verified in smart contracts on most blockchains. LibHaLo offers a number of built-in helpers for producing both EIP-191 and EIP-712 formatted signatures.

## Ethereum

- [Chiru Labs Simple PBT Example](https://github.com/chiru-labs/PBT/blob/main/src/PBTSimple.sol) 

An EIP-191 compatible signature from a HaLo chip is used to claim ownership of a PBT or "physically-backed token". The PBT example does not currently integrate LibHaLo for capturing signatures, which we would recommend as LibHaLo will can directly produce EIP-191 prefixed signatures.

- [KONG Land $RERRO ERC-20](https://github.com/kong-org/kong-rerro/blob/main/contracts/RerroToken.sol) 

Using HaLos as wallets directly via EIP-712 signatures and an ERC-2771 relay contract. Gas is subsidized by a relay so that the HaLo chip itself doesn't need to contain any `ETH` to pay for transaction fees. The $RERRO example leverages the `signTypedData` option in LibHaLo to directly produce EIP-712 compatible signatures.

- [Cattestation](https://ethglobal.com/showcase/cattestation-2st8u) 

A demonstration of HaLo chips generating [EAS-comptabile](https://attest.sh/) signatures using the `signTypedData` option in LibHaLo. The signature can then be presented to the Cattestation contract to mint an NFT.