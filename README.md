# Ledger Bittensor App

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

---

_Forked from [Zondax/ledger-picasso](https://github.com/Zondax/ledger-picasso)_

---

This project contains the Bittensor app (https://www.bittensor.com/) for Ledger Nano S and X.    
Supporting transfers and staking after the Finney fork.  

- Ledger Nano S/X BOLOS app
- Specs / Documentation
- C++ unit tests
- Zemu tests

For more information: [How to build](docs/build.md)

## ATTENTION

Please:

- **Do not use in production**
- **Do not use a Ledger device with funds for development purposes.**
- **Have a separate and marked device that is used ONLY for development and testing**
# Bittensor 1.1.x

## System

| Name                    | Nano S             | Nano S XL          | Nano SP/X          | Nesting            | Arguments                         |
| ----------------------- | ------------------ | ------------------ | ------------------ | ------------------ | --------------------------------- |
| Fill block              |                    |                    |                    |                    | `Perbill`ratio<br/>               |
| Remark                  |                    |                    |                    |                    | `Bytes`remark<br/>                |
| Set heap pages          |                    |                    |                    |                    | `u64`pages<br/>                   |
| Set code                | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | `Vecu8`code<br/>                  |
| Set code without checks |                    |                    |                    |                    | `Vecu8`code<br/>                  |
| Set storage             |                    |                    |                    |                    | `VecKeyValue`items<br/>           |
| Kill storage            |                    |                    |                    |                    | `VecKey`keys<br/>                 |
| Kill prefix             |                    |                    |                    |                    | `Key`prefix<br/>`u32`subkeys<br/> |
| Remark with event       |                    |                    |                    |                    | `Bytes`remark<br/>                |

## Timestamp

| Name | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments            |
| ---- | ------ | --------- | --------- | ------- | -------------------- |
| Set  |        |           |           |         | `Compactu64`now<br/> |

## Sudo

| Name                  | Nano S             | Nano S XL          | Nano SP/X          | Nesting            | Arguments                                           |
| --------------------- | ------------------ | ------------------ | ------------------ | ------------------ | --------------------------------------------------- |
| Sudo                  | :heavy_check_mark: Partial | :heavy_check_mark: Partial | :heavy_check_mark: Partial |                    | `Call`call<br/>                                     |
| Sudo unchecked weight |                    |                    |                    |                    | `Call`call<br/>`Weight`weight<br/>                  |
| Set key               | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | `LookupasStaticLookupSource`new\_<br/>              |
| Sudo as               |                    |                    |                    |                    | `LookupasStaticLookupSource`who<br/>`Call`call<br/> |

## Balances

| Name                | Nano S             | Nano S XL          | Nano SP/X          | Nesting            | Arguments                                                                                               |
| ------------------- | ------------------ | ------------------ | ------------------ | ------------------ | ------------------------------------------------------------------------------------------------------- |
| Transfer            | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | `LookupasStaticLookupSource`dest<br/>`CompactBalance`amount<br/>                                        |
| Set balance         |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | `LookupasStaticLookupSource`who<br/>`CompactBalance`new_free<br/>`CompactBalance`new_reserved<br/>      |
| Force transfer      | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | `LookupasStaticLookupSource`source<br/>`LookupasStaticLookupSource`dest<br/>`CompactBalance`amount<br/> |
| Transfer keep alive | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | `LookupasStaticLookupSource`dest<br/>`CompactBalance`amount<br/>                                        |
| Transfer all        | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    | `LookupasStaticLookupSource`dest<br/>`bool`keep_alive<br/>                                              |
| Force unreserve     |                    | :heavy_check_mark: | :heavy_check_mark: |                    | `LookupasStaticLookupSource`who<br/>`Balance`amount<br/>                                                |
                                                  |


## Subtensor Module

| Name                | Nano S             | Nano S XL          | Nano SP/X          | Nesting            | Arguments                                                                                                 |
| ------------------- | ------------------ | ------------------ | ------------------ | ------------------ | -------------------------------------------------------------------------------------------------------    |
| Add stake            | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | `LookupasStaticLookupSource`hotkey<br/>`Balance`stake_amount<br/>                                        |
| Remove stake         | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | `LookupasStaticLookupSource`hotkey<br/>`Balance`unstake_amount<br/>      |
| Become delegate      |        |        |        |        | `LookupasStaticLookupSource`hotkey<br/> |
| Register             |        |        |        |        | `u16`netuid<br/>`u64`blockNumber<br/>`u64`nonce<br/>`Bytes`work<br/>`LookupasStaticLookupSource`hotkey<br/>`LookupasStaticLookupSource`coldkey<br/> |
| Serve Axon           |        |        |        |        | `u32`version<br/>`u128`ip<br/>`u16`port<br/>`u8`ipType<br/>`u8`protocol<br/>`u8`placeholder1<br/>`u8`placeholder1<br/> |
| Serve Prometheus     |        |        |        |        |`u32`version<br/>`u128`ip<br/>`u16`port<br/>`u8`ipType<br/> |
| Set Weights          |        |        |        |        | `u16`netuid<br/>`Vecu16`dests<br/>`Vecu16`weights<br/>`u64`versionKey<br/> |
| Sudo Add Network     | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | `u16`netuid<br/>`u16`tempo<br/>`u16`modality<br/> |
| Burned Register          | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |:heavy_check_mark: | `u16`netuid<br/>`LookupasStaticLookupSource`hotkey<br/> |
