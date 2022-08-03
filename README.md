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

### Example output:

```js
node index.js 
body {
  transaction: {
    signatures: [
      'SIG_K1_Jw9bGkotNfsuHfDUdsKuuitagjzYfAgdMLzdbJhzyNobyMHgY4mDQzZcP23Jg3jg9aj6b64seGHREhjVDrHDUiLLRzbtYi'
    ],
    compression: 'none',
    packed_context_free_data: '',
    packed_trx: 'c28cea62da2616ba2236000000000100a6823403ea3055000000572d3ccdcd010000c0abba90b1ca00000000a8ed3232210000c0abba90b1ca801572fb2a5cab49010000000000000004535953000000000000'
  },
  return_failure_trace: true,
  retry_trx: true,
  retry_trx_num_blocks: 60
}
response {
  transaction_id: '6eccc24e724bd51c054008f2bcf8eca274dc7df4ba0a85e24fb808972be17aaf',
  processed: {
    id: '6eccc24e724bd51c054008f2bcf8eca274dc7df4ba0a85e24fb808972be17aaf',
    block_num: 9950,
    block_time: '2022-08-03T14:56:37.500',
    producer_block_id: '000026de0a05a0cbe68810054c3d3a2b42f6f6803f24d7d210f38944121b8cf1',
    receipt: { status: 'executed', cpu_usage_us: 143, net_usage_words: 16 },
    elapsed: 59,
    net_usage: 128,
    scheduled: false,
    action_traces: [ [Object], [Object], [Object] ],
    account_ram_delta: null,
    except: null,
    error_code: null
  }
}
```