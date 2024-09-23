# Smart Contracts

As secp256k1 ECDSA signers, HaLo signatures can easily be verified in smart contracts on most blockchains. LibHaLo offers a number of built-in helpers for producing both EIP-191 and EIP-712 formatted signatures.

## Ethereum

- [Chiru Labs Simple PBT Example](https://github.com/chiru-labs/PBT/blob/main/src/PBTSimple.sol) 

An EIP-191 compatible signature from a HaLo chip is used to claim ownership of a PBT or "physically-backed token". The PBT example does not currently integrate LibHaLo for capturing signatures, which we would recommend as LibHaLo will can directly produce EIP-191 prefixed signatures.

- [KONG Land $RERRO ERC-20](https://github.com/kong-org/kong-rerro/blob/main/contracts/RerroToken.sol) 

Using HaLos as wallets directly via EIP-712 signatures and an ERC-2771 relay contract. Gas is subsidized by a relay so that the HaLo chip itself doesn't need to contain any `ETH` to pay for transaction fees. The $RERRO example leverages the `signTypedData` option in LibHaLo to directly produce EIP-712 compatible signatures.

- [Cattestation](https://ethglobal.com/showcase/cattestation-2st8u) 

A demonstration of HaLo chips generating [EAS-comptabile](https://attest.sh/) signatures using the `signTypedData` option in LibHaLo. The signature can then be presented to the Cattestation contract to mint an NFT.

### Verifying Messages in Smart Contracts

Note that depending on the way in which you verify EIP-191 messages in your contract -- for instance by using the OpenZeppelin ECDSA library -- you may see different recovery addresses as compared to libraries like ethersjs. This is typically due to ambiguous typing of the message. In the case of ethersjs, there is ambiguity with respect to the `type` of a message as compared to what is expected by `ECDSA.sol` by OpenZeppelin.

When preparing a message, we recommend using `solidityPack` and `arrayify` to the string you are signing and verifying. Likewise, in order to correctly verify the message using ethersjs' `verifyMessage`, first `arrayify` the string that was signed in order to recover the expected address.

#### Example

```js copy
// Signing
const signer = ethers.Wallet.createRandom() // See https://github.com/arx-research/halo-wallet for using a HaLo as an ethersjs "signer"
const packedMessage = ethers.utils.solidityPack(["string"], ["hello"]);
const signature = await signer.signMessage(ethers.utils.arrayify(packedMessage));

// Verifying
const recoveredAddress = ethers.utils.verifyMessage(ethers.utils.arrayify(packedMessage), signature)

// recoveredAddress should match signer.address
```
