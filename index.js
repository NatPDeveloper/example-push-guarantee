const { Api, JsonRpc, RpcError } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');      // development only
const fetch = require('node-fetch');                                    // node only; not needed in browsers
const { TextEncoder, TextDecoder } = require('util');
const defaultPrivateKey = process.env.PRIVATE_KEY || "5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr";
const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
const nodeosEndpoint = process.env.NODEOS_API_ENDPOINT || 'http://127.0.0.1:8888'
const rpc = new JsonRpc(nodeosEndpoint, { fetch });
const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

const arrayToHex = (data) => {
    let result = '';
    for (const x of data) {
        result += ('00' + x.toString(16)).slice(-2);
    }
    return result;
};

(async () => {
    const result = await api.transact({
    actions: [{
        account: 'eosio.token',
        name: 'transfer',
        authorization: [{
            actor: 'test1ipfs',
            permission: 'active',
        }],
        data: {
            from: 'test1ipfs',
            to: 'dappservices',
            quantity: '0.0001 SYS',
            memo: '',
        },
    }]
    }, {
        blocksBehind: 3,
        expireSeconds: 30,
        broadcast: false
    });
    const body = {
        transaction: {
            signatures:result.signatures,
            compression: "none",
            packed_context_free_data: arrayToHex(result.serializedContextFreeData || new Uint8Array(0)),
            packed_trx: arrayToHex(result.serializedTransaction),
        },
        return_failure_trace: true,
        retry_trx: true,
        retry_trx_num_blocks: 60
    }
    console.log('body',body);
    const res = await rpc.fetch(`/v1/chain/send_transaction2`,body);
    console.log('response',res);
    // console.log('action_traces',res.processed.action_traces);
})();