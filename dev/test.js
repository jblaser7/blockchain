const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bc1 = {
  "chain": [
    {
      "index": 1,
      "timestamp": 1664822696989,
      "transactions": [
        
      ],
      "nonce": 100,
      "hash": "0",
      "previousBlockHash": "0"
    },
    {
      "index": 2,
      "timestamp": 1664822761531,
      "transactions": [
        
      ],
      "nonce": 18140,
      "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      "previousBlockHash": "0"
    },
    {
      "index": 3,
      "timestamp": 1664822898456,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "d1bce94e2dab4575826dbb8029e8ce13",
          "transactionId": "17ae395119dd4f61bfd19d5855b79d21"
        },
        {
          "amount": 75,
          "sender": "NFRTYSDRFTFIO56R78",
          "recipient": "WERTYGFDYRRTUIOHGTTH",
          "transactionId": "a5e6dd17b34f4321940c3db5dd4a18a7"
        },
        {
          "amount": 45,
          "sender": "NFRTYSDRFTFIO56R78",
          "recipient": "WERTYGFDYRRTUIOHGTTH",
          "transactionId": "4aed761277304f51a1b6edcaf732fa39"
        },
        {
          "amount": 25,
          "sender": "NFRTYSDRFTFIO56R78",
          "recipient": "WERTYGFDYRRTUIOHGTTH",
          "transactionId": "a066c080a5b24feb8d60f67b2821dbe8"
        }
      ],
      "nonce": 6443,
      "hash": "0000e7862d954f6bb1d79c180b25c327452137355750e0b5171b5b6f00dd405f",
      "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
      "index": 4,
      "timestamp": 1664822981189,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "d1bce94e2dab4575826dbb8029e8ce13",
          "transactionId": "9722af98b5f2416584864db5ebf42df6"
        },
        {
          "amount": 40,
          "sender": "NFRTYSDRFTFIO56R78",
          "recipient": "WERTYGFDYRRTUIOHGTTH",
          "transactionId": "8bc23606c81a42c49c6e936cea987bd9"
        },
        {
          "amount": 50,
          "sender": "NFRTYSDRFTFIO56R78",
          "recipient": "WERTYGFDYRRTUIOHGTTH",
          "transactionId": "49b6c2f1c3cc474b8942146433d99cb0"
        },
        {
          "amount": 60,
          "sender": "NFRTYSDRFTFIO56R78",
          "recipient": "WERTYGFDYRRTUIOHGTTH",
          "transactionId": "6b7467ff59d04876954e841487739fbb"
        },
        {
          "amount": 70,
          "sender": "NFRTYSDRFTFIO56R78",
          "recipient": "WERTYGFDYRRTUIOHGTTH",
          "transactionId": "2f0102bb8ea0430fa02c734a5618c0f6"
        }
      ],
      "nonce": 17278,
      "hash": "0000a155fa2073ad73b88b3b1a30fced9de5d8b743edf50a22b8d1c781f50167",
      "previousBlockHash": "0000e7862d954f6bb1d79c180b25c327452137355750e0b5171b5b6f00dd405f"
    },
    {
      "index": 5,
      "timestamp": 1664823006923,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "d1bce94e2dab4575826dbb8029e8ce13",
          "transactionId": "d2080b27338e43fcb3bb469c26d2f46a"
        }
      ],
      "nonce": 64734,
      "hash": "000033836c2f7afa9e3461ea284808c775c5b54bfeab5f8ca83217295bcda1b1",
      "previousBlockHash": "0000a155fa2073ad73b88b3b1a30fced9de5d8b743edf50a22b8d1c781f50167"
    },
    {
      "index": 6,
      "timestamp": 1664823023073,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "d1bce94e2dab4575826dbb8029e8ce13",
          "transactionId": "bd269e0d0e8b4690a02af9c2ea8ea1fe"
        }
      ],
      "nonce": 10531,
      "hash": "0000ed5fb33c9c3ed2383f7a120c96d08d4dac98e1239379da4d959cd92db93d",
      "previousBlockHash": "000033836c2f7afa9e3461ea284808c775c5b54bfeab5f8ca83217295bcda1b1"
    }
  ],
  "pendingTransactions": [
    {
      "amount": 12.5,
      "sender": "00",
      "recipient": "d1bce94e2dab4575826dbb8029e8ce13",
      "transactionId": "ea83b71e133949ea8c49215d0b899e5a"
    }
  ],
  "currentNodeUrl": "http://localhost:3001",
  "networkNodes": [
    
  ]
}


console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));

