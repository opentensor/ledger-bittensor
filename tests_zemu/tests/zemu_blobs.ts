/** ******************************************************************************
 * (c) 2023 Opentensor Technologies  
 * (c) 2019 - 2023 Zondax AG
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 ******************************************************************************* */

export const txBalances_transfer =
  // 050000 3132333435363738393031323334353637383930313233343536373839303132 13d20a1feb8ca954ab d6038d24 13d20a1feb8ca954ab 01000000010000003c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d03c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0
  '050000313233343536373839303132333435363738393031323334353637383930313213d20a1feb8ca954abd6038d2413d20a1feb8ca954ab01000000010000003c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d03c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0'

export const txBalances_setBalance =
  // 050100 3132333435363738393031323334353637383930313233343536373839303132 13d20a1feb8ca954ab 13d20a1feb8ca954ab d6038d24 13d20a1feb8ca954ab 01000000010000003c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d03c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0
  '050100313233343536373839303132333435363738393031323334353637383930313213d20a1feb8ca954ab13d20a1feb8ca954abd6038d2413d20a1feb8ca954ab01000000010000003c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d03c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0'

export const txBalances_forceTransfer =
  // 050200 f40b12807921d12399b76bf2e7fbeed0795634d980fdfc5eaed0c933366999ba 00 3132333435363738393031323334353637383930313233343536373839303132 13d20a1feb8ca954ab d6038d24 13d20a1feb8ca954ab 0100000001000000 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0
  '050200f40b12807921d12399b76bf2e7fbeed0795634d980fdfc5eaed0c933366999ba00313233343536373839303132333435363738393031323334353637383930313213d20a1feb8ca954abd6038d2413d20a1feb8ca954ab01000000010000003c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d03c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0'

export const txBalances_transferKeepAlive =
  // 050300 3132333435363738393031323334353637383930313233343536373839303132 13d20a1feb8ca954ab d6038d24 13d20a1feb8ca954ab 0100000001000000 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0
  '050300313233343536373839303132333435363738393031323334353637383930313213d20a1feb8ca954abd6038d2413d20a1feb8ca954ab01000000010000003c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d03c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0'

export const txBalances_transferAll =
  // 050400 3132333435363738393031323334353637383930313233343536373839303132 00 d6038d24 13d20a1feb8ca954ab 0100000001000000 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0
  '050400313233343536373839303132333435363738393031323334353637383930313200d6038d2413d20a1feb8ca954ab01000000010000003c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d03c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0'

export const txBalances_forceUnreserve = // Note: The amount is a u64 not a Compact<u64>
  // 050500 3132333435363738393031323334353637383930313233343536373839303132 d20a1feb8ca954ab d6038d24 13d20a1feb8ca954ab 0100000001000000 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0
  '0505003132333435363738393031323334353637383930313233343536373839303132d20a1feb8ca954abd6038d2413d20a1feb8ca954ab01000000010000003c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d03c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0'

export const txSubtensor_Module_addStake = // Note: The amount_staked is a u64 not a Compact<u64>
  // 0802 3132333435363738393031323334353637383930313233343536373839303132 d20a1feb8ca954ab d6038d24 13d20a1feb8ca954ab 0100000001000000 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0
  '08023132333435363738393031323334353637383930313233343536373839303132d20a1feb8ca954abd6038d2413d20a1feb8ca954ab01000000010000003c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d03c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0'

export const txSubtensor_Module_removeStake = // Note: The amount_unstaked is a u64 not a Compact<u64>
// 0803 3132333435363738393031323334353637383930313233343536373839303132 d20a1feb8ca954ab d6038d24 13d20a1feb8ca954ab 0100000001000000 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0
'08033132333435363738393031323334353637383930313233343536373839303132d20a1feb8ca954abd6038d2413d20a1feb8ca954ab01000000010000003c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d03c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0'

export const txSubtensor_Module_burnedRegister =
  // call_idx netuid hotkey nonce era tip spec_version tx_version genesis_hash block_hash
  // 0807 0000 3132333435363738393031323334353637383930313233343536373839303132 d6038d24 13d20a1feb8ca954ab 0100000001000000 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0
  '080700003132333435363738393031323334353637383930313233343536373839303132d6038d2413d20a1feb8ca954ab01000000010000003c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d03c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0'
  
export const txSudo_Subtensor_Module_sudoAddNetwork = 
  // sudo call_idx netuid tempo modality nonce era tip spec_version tx_version genesis_hash block_hash
  // 0700 0809 0000 0a00 0000 d6038d24 13d20a1feb8ca954ab 0100000001000000 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0
  '0700080900000a000000d6038d2413d20a1feb8ca954ab01000000010000003c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d03c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0'

export const txSudo_Balances_forceTransfer = 
  // 0400 050200 f40b12807921d12399b76bf2e7fbeed0795634d980fdfc5eaed0c933366999ba 00 3132333435363738393031323334353637383930313233343536373839303132 13d20a1feb8ca954ab d6038d24 13d20a1feb8ca954ab 0100000001000000 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0
  '0400050200f40b12807921d12399b76bf2e7fbeed0795634d980fdfc5eaed0c933366999ba00313233343536373839303132333435363738393031323334353637383930313213d20a1feb8ca954abd6038d2413d20a1feb8ca954ab01000000010000003c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d03c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0'

export const txSudo_setKey = 
  // call_idx pubkey nonce era tip spec_version tx_version genesis_hash block_hash 
  // 0702 00 3132333435363738393031323334353637383930313233343536373839303132 d6038d24 13d20a1feb8ca954ab 0100000001000000 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0
  '0702003132333435363738393031323334353637383930313233343536373839303132d6038d2413d20a1feb8ca954ab01000000010000003c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d03c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0'

export const txSudo_System_setCode =
  // sudo call_idx code nonce era tip spec_version tx_version genesis_hash block_hash
  // 0700 0002 10 deadbeef d6038d24 13d20a1feb8ca954ab 0100000001000000 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0
  '0700000210deadbeefd6038d2413d20a1feb8ca954ab01000000010000003c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d03c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0'

export const txSudo_System_setCode_reallyLong =
  // sudo call_idx code nonce era tip spec_version tx_version genesis_hash block_hash
  // 0700 0002 d0 8badf00d8badf00d8badf00d8badf00d8badf00d8badf00d8badf00d8badf00d8badf00d8badf00d8badf00d8badf00d8badf00d d6038d24 13d20a1feb8ca954ab 0100000001000000 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0 3c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0
  '07000002d08badf00d8badf00d8badf00d8badf00d8badf00d8badf00d8badf00d8badf00d8badf00d8badf00d8badf00d8badf00d8badf00dd6038d2413d20a1feb8ca954ab01000000010000003c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d03c4ce585d71512a723b20e8f122f8e70c9c8830134b8cdfa01b43bb133a401d0'