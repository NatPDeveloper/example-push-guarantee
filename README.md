# example-push-guarantee
Example code using eosjs to access's mandel's new `/v1/chain/send_transaction2` RPC endpoint.

Full release notes: https://github.com/eosnetworkfoundation/mandel/releases/tag/v3.1.0-rc1

### New chain_api_plugin endpoint:

`/v1/chain/send_transaction2(send_transaction_params)`

```cpp
struct send_transaction2_params {
    bool return_failure_trace = true; ///< Embed transaction exceptions into the returned transaction trace
    bool retry_trx = false; ///< request transaction retry on validated transaction
    std::optional<uint16_t> retry_trx_num_blocks{}; ///< if retry_trx, report trace at specified blocks from executed or lib if not specified
    fc::variant transaction; ///< same format as send_transaction
};
```

### To use:

```js
npm i
node index.js
```

<details>
<summary><b>Example success output with traces:</b></summary>
<br>

```js
node index.js 
body {
  transaction: {
    signatures: [
      'SIG_K1_KcTmhfcbdUTQ1beLAkWRP7JgMmR2r6xTDSvmFKQBjHmh22tmmUJLPtPXWsR9pChdZjXYsDLwnVEYDZGQqzYgQJt3BT8d9M'
    ],
    compression: 'none',
    packed_context_free_data: '',
    packed_trx: '8292ea625a32eede1bce000000000100a6823403ea3055000000572d3ccdcd010000c0abba90b1ca00000000a8ed3232210000c0abba90b1ca801572fb2a5cab49010000000000000004535953000000000000'
  },
  return_failure_trace: true,
  retry_trx: true,
  retry_trx_num_blocks: 60
}
response {
  transaction_id: '64ef1d9d1004a94ae77aec23fb89f00f1f33df84ab5e514027bd49c2ab036a2d',
  processed: {
    id: '64ef1d9d1004a94ae77aec23fb89f00f1f33df84ab5e514027bd49c2ab036a2d',
    block_num: 12894,
    block_time: '2022-08-03T15:21:09.500',
    producer_block_id: '0000325eb9dd635b48b5abe037c66d838215a82ef06c9cd3cff58ba0e1496784',
    receipt: { status: 'executed', cpu_usage_us: 143, net_usage_words: 16 },
    elapsed: 77,
    net_usage: 128,
    scheduled: false,
    action_traces: [ [Object], [Object], [Object] ],
    account_ram_delta: null,
    except: null,
    error_code: null
  }
}
action_traces [
  {
    action_ordinal: 1,
    creator_action_ordinal: 0,
    closest_unnotified_ancestor_action_ordinal: 0,
    receipt: {
      receiver: 'eosio.token',
      act_digest: '2e23bad6a8ff64cf4c7d66943511b89282c147c38e6896c810a10e02cab9048c',
      global_sequence: 14893,
      recv_sequence: 44,
      auth_sequence: [Array],
      code_sequence: 1,
      abi_sequence: 1
    },
    receiver: 'eosio.token',
    act: {
      account: 'eosio.token',
      name: 'transfer',
      authorization: [Array],
      data: [Object],
      hex_data: '0000c0abba90b1ca801572fb2a5cab490100000000000000045359530000000000'
    },
    context_free: false,
    elapsed: 27,
    console: '',
    trx_id: '64ef1d9d1004a94ae77aec23fb89f00f1f33df84ab5e514027bd49c2ab036a2d',
    block_num: 12894,
    block_time: '2022-08-03T15:21:09.500',
    producer_block_id: '0000325eb9dd635b48b5abe037c66d838215a82ef06c9cd3cff58ba0e1496784',
    account_ram_deltas: [],
    except: null,
    error_code: null,
    return_value_hex_data: ''
  },
  {
    action_ordinal: 2,
    creator_action_ordinal: 1,
    closest_unnotified_ancestor_action_ordinal: 1,
    receipt: {
      receiver: 'test1ipfs',
      act_digest: '2e23bad6a8ff64cf4c7d66943511b89282c147c38e6896c810a10e02cab9048c',
      global_sequence: 14894,
      recv_sequence: 534,
      auth_sequence: [Array],
      code_sequence: 1,
      abi_sequence: 1
    },
    receiver: 'test1ipfs',
    act: {
      account: 'eosio.token',
      name: 'transfer',
      authorization: [Array],
      data: [Object],
      hex_data: '0000c0abba90b1ca801572fb2a5cab490100000000000000045359530000000000'
    },
    context_free: false,
    elapsed: 10,
    console: '',
    trx_id: '64ef1d9d1004a94ae77aec23fb89f00f1f33df84ab5e514027bd49c2ab036a2d',
    block_num: 12894,
    block_time: '2022-08-03T15:21:09.500',
    producer_block_id: '0000325eb9dd635b48b5abe037c66d838215a82ef06c9cd3cff58ba0e1496784',
    account_ram_deltas: [],
    except: null,
    error_code: null,
    return_value_hex_data: ''
  },
  {
    action_ordinal: 3,
    creator_action_ordinal: 1,
    closest_unnotified_ancestor_action_ordinal: 1,
    receipt: {
      receiver: 'dappservices',
      act_digest: '2e23bad6a8ff64cf4c7d66943511b89282c147c38e6896c810a10e02cab9048c',
      global_sequence: 14895,
      recv_sequence: 552,
      auth_sequence: [Array],
      code_sequence: 1,
      abi_sequence: 1
    },
    receiver: 'dappservices',
    act: {
      account: 'eosio.token',
      name: 'transfer',
      authorization: [Array],
      data: [Object],
      hex_data: '0000c0abba90b1ca801572fb2a5cab490100000000000000045359530000000000'
    },
    context_free: false,
    elapsed: 8,
    console: '',
    trx_id: '64ef1d9d1004a94ae77aec23fb89f00f1f33df84ab5e514027bd49c2ab036a2d',
    block_num: 12894,
    block_time: '2022-08-03T15:21:09.500',
    producer_block_id: '0000325eb9dd635b48b5abe037c66d838215a82ef06c9cd3cff58ba0e1496784',
    account_ram_deltas: [],
    except: null,
    error_code: null,
    return_value_hex_data: ''
  }
]
```
</details>

<details>
<summary><b>Example failure output with traces::</b></summary>
<br>

```js
node index.js 
body {
  transaction: {
    signatures: [
      'SIG_K1_Ke9Kr3KNBu7Wvj7YNkgqt9iyvJsR2r4DNbS34t7X3Nu2hicZi5cLvdcW3DkS5ChjmddNBsLNHQBHYT4MQUaZGZBnD3mCQX'
    ],
    compression: 'none',
    packed_context_free_data: '',
    packed_trx: '2393ea629d33e24dcd5e000000000100a6823403ea3055000000572d3ccdcd010000c0abba90b1ca00000000a8ed3232210000c0abba90b1ca801572fb2a5cab490110a5d4e800000004535953000000000000'
  },
  return_failure_trace: true,
  retry_trx: true,
  retry_trx_num_blocks: 60
}
response {
  transaction_id: '72e67d69498488949a8344aeedae015f79dd2d52c8e0c2006fe9c9428817ba8e',
  processed: {
    id: '72e67d69498488949a8344aeedae015f79dd2d52c8e0c2006fe9c9428817ba8e',
    block_num: 13218,
    block_time: '2022-08-03T15:23:51.500',
    producer_block_id: null,
    receipt: null,
    elapsed: 168,
    net_usage: 125,
    scheduled: false,
    action_traces: [ [Object], [Object], [Object] ],
    account_ram_delta: null,
    except: {
      code: 3050003,
      name: 'eosio_assert_message_exception',
      message: 'eosio_assert_message assertion failure',
      stack: [Array]
    },
    error_code: '10000000000000000000'
  }
}
action_traces [
  {
    action_ordinal: 1,
    creator_action_ordinal: 0,
    closest_unnotified_ancestor_action_ordinal: 0,
    receipt: null,
    receiver: 'eosio.token',
    act: {
      account: 'eosio.token',
      name: 'transfer',
      authorization: [Array],
      data: [Object],
      hex_data: '0000c0abba90b1ca801572fb2a5cab490110a5d4e8000000045359530000000000'
    },
    context_free: false,
    elapsed: 63,
    console: '',
    trx_id: '72e67d69498488949a8344aeedae015f79dd2d52c8e0c2006fe9c9428817ba8e',
    block_num: 13218,
    block_time: '2022-08-03T15:23:51.500',
    producer_block_id: null,
    account_ram_deltas: [],
    except: {
      code: 3050003,
      name: 'eosio_assert_message_exception',
      message: 'eosio_assert_message assertion failure',
      stack: [Array]
    },
    error_code: '10000000000000000000',
    return_value_hex_data: ''
  },
  {
    action_ordinal: 2,
    creator_action_ordinal: 1,
    closest_unnotified_ancestor_action_ordinal: 1,
    receipt: null,
    receiver: 'test1ipfs',
    act: {
      account: 'eosio.token',
      name: 'transfer',
      authorization: [Array],
      data: [Object],
      hex_data: '0000c0abba90b1ca801572fb2a5cab490110a5d4e8000000045359530000000000'
    },
    context_free: false,
    elapsed: 0,
    console: '',
    trx_id: '72e67d69498488949a8344aeedae015f79dd2d52c8e0c2006fe9c9428817ba8e',
    block_num: 13218,
    block_time: '2022-08-03T15:23:51.500',
    producer_block_id: null,
    account_ram_deltas: [],
    except: null,
    error_code: null,
    return_value_hex_data: ''
  },
  {
    action_ordinal: 3,
    creator_action_ordinal: 1,
    closest_unnotified_ancestor_action_ordinal: 1,
    receipt: null,
    receiver: 'dappservices',
    act: {
      account: 'eosio.token',
      name: 'transfer',
      authorization: [Array],
      data: [Object],
      hex_data: '0000c0abba90b1ca801572fb2a5cab490110a5d4e8000000045359530000000000'
    },
    context_free: false,
    elapsed: 0,
    console: '',
    trx_id: '72e67d69498488949a8344aeedae015f79dd2d52c8e0c2006fe9c9428817ba8e',
    block_num: 13218,
    block_time: '2022-08-03T15:23:51.500',
    producer_block_id: null,
    account_ram_deltas: [],
    except: null,
    error_code: null,
    return_value_hex_data: ''
  }
]
```
</details>

