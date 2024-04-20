/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  SimpleAccountFactory,
  SimpleAccountFactoryInterface,
} from "../../src/SimpleAccountFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "accountImplementation",
    outputs: [
      {
        internalType: "contract SimpleAccount",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "contract SimpleAccount",
        name: "ret",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516129f43803806129f483398101604081905261002f91610088565b8060405161003c9061007b565b6001600160a01b039091168152602001604051809103906000f080158015610068573d6000803e3d6000fd5b506001600160a01b0316608052506100b8565b612024806109d083390190565b60006020828403121561009a57600080fd5b81516001600160a01b03811681146100b157600080fd5b9392505050565b6080516108f06100e060003960008181604b01528181610114015261025801526108f06000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806311464fbe146100465780635fbfb9cf146100965780638cb84e18146100a9575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61006d6100a436600461039d565b6100bc565b61006d6100b736600461039d565b6101ee565b6000806100c984846101ee565b905073ffffffffffffffffffffffffffffffffffffffff81163b80156100f1575090506101e8565b60405173ffffffffffffffffffffffffffffffffffffffff8616602482015284907f000000000000000000000000000000000000000000000000000000000000000090604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fc4d66de800000000000000000000000000000000000000000000000000000000179052516101b790610390565b6101c2929190610406565b8190604051809103906000f59050801580156101e2573d6000803e3d6000fd5b50925050505b92915050565b60006103578260001b6040518060200161020790610390565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116604081905273ffffffffffffffffffffffffffffffffffffffff871660248201527f000000000000000000000000000000000000000000000000000000000000000090604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fc4d66de800000000000000000000000000000000000000000000000000000000179052905161030093929101610406565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261033c9291602001610474565b6040516020818303038152906040528051906020012061035e565b9392505050565b60006103578383306000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b610417806104a483390190565b600080604083850312156103b057600080fd5b823573ffffffffffffffffffffffffffffffffffffffff811681146103d457600080fd5b946020939093013593505050565b60005b838110156103fd5781810151838201526020016103e5565b50506000910152565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600082518060408401526104418160608501602087016103e2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016060019392505050565b600083516104868184602088016103e2565b83519083019061049a8183602088016103e2565b0194935050505056fe608060405260405161041738038061041783398101604081905261002291610268565b61002c8282610033565b5050610352565b61003c82610092565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a280511561008657610081828261010e565b505050565b61008e610185565b5050565b806001600160a01b03163b6000036100cd57604051634c9c8ce360e01b81526001600160a01b03821660048201526024015b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060600080846001600160a01b03168460405161012b9190610336565b600060405180830381855af49150503d8060008114610166576040519150601f19603f3d011682016040523d82523d6000602084013e61016b565b606091505b50909250905061017c8583836101a6565b95945050505050565b34156101a45760405163b398979f60e01b815260040160405180910390fd5b565b6060826101bb576101b682610205565b6101fe565b81511580156101d257506001600160a01b0384163b155b156101fb57604051639996b31560e01b81526001600160a01b03851660048201526024016100c4565b50805b9392505050565b8051156102155780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b634e487b7160e01b600052604160045260246000fd5b60005b8381101561025f578181015183820152602001610247565b50506000910152565b6000806040838503121561027b57600080fd5b82516001600160a01b038116811461029257600080fd5b60208401519092506001600160401b03808211156102af57600080fd5b818501915085601f8301126102c357600080fd5b8151818111156102d5576102d561022e565b604051601f8201601f19908116603f011681019083821181831017156102fd576102fd61022e565b8160405282815288602084870101111561031657600080fd5b610327836020830160208801610244565b80955050505050509250929050565b60008251610348818460208701610244565b9190910192915050565b60b7806103606000396000f3fe6080604052600a600c565b005b60186014601a565b605e565b565b600060597f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e808015607c573d6000f35b3d6000fdfea2646970667358221220b59001882a82c62bde33f1d3bc17ca8d5fe30bc2b0fd2b17559c8bae17c8567464736f6c63430008180033a2646970667358221220ba6cd6cf26206e049de6c9e12b5ddd2c0355abb5501afe71275f3a530d8cbc1364736f6c6343000818003360c0604052306080523480156200001557600080fd5b50604051620020243803806200202483398101604081905262000038916200010a565b6001600160a01b03811660a0526200004f62000056565b506200013c565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff1615620000a75760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b0390811614620001075780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6000602082840312156200011d57600080fd5b81516001600160a01b03811681146200013557600080fd5b9392505050565b60805160a051611e83620001a1600039600081816103dd0152818161077c0152818161082a0152818161097b01528181610bb801528181610bff01528181610dc4015261121b015260008181610f3501528181610f5e015261117a0152611e836000f3fe6080604052600436106101635760003560e01c80638da5cb5b116100c0578063bc197c8111610074578063c4d66de811610059578063c4d66de81461047e578063d087d2881461049e578063f23a6e61146104b357600080fd5b8063bc197c8114610421578063c399ec881461046957600080fd5b8063ad3cb1cc116100a5578063ad3cb1cc14610385578063b0d691fe146103ce578063b61d27f61461040157600080fd5b80638da5cb5b1461031e5780638f41ec5a1461037057600080fd5b80634d44560d1161011757806352d1902d116100fc57806352d1902d146102a557806354fd4d50146102ba578063861af77c1461030957600080fd5b80634d44560d146102725780634f1ef2861461029257600080fd5b806319822f7c1161014857806319822f7c1461021a57806347e1da2a146102485780634a58db191461026a57600080fd5b806301ffc9a71461016f578063150b7a02146101a457600080fd5b3661016a57005b600080fd5b34801561017b57600080fd5b5061018f61018a366004611798565b6104f9565b60405190151581526020015b60405180910390f35b3480156101b057600080fd5b506101e96101bf366004611845565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161019b565b34801561022657600080fd5b5061023a6102353660046118b8565b6105de565b60405190815260200161019b565b34801561025457600080fd5b50610268610263366004611951565b610604565b005b61026861077a565b34801561027e57600080fd5b5061026861028d3660046119eb565b610820565b6102686102a0366004611af1565b6108cf565b3480156102b157600080fd5b5061023a6108ee565b3480156102c657600080fd5b5060408051808201909152600581527f312e302e3000000000000000000000000000000000000000000000000000000060208201525b60405161019b9190611b65565b34801561031557600080fd5b5061023a600081565b34801561032a57600080fd5b5060005461034b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161019b565b34801561037c57600080fd5b5061023a600181565b34801561039157600080fd5b506102fc6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b3480156103da57600080fd5b507f000000000000000000000000000000000000000000000000000000000000000061034b565b34801561040d57600080fd5b5061026861041c366004611bb6565b61091d565b34801561042d57600080fd5b506101e961043c366004611c0f565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b34801561047557600080fd5b5061023a610935565b34801561048a57600080fd5b50610268610499366004611cce565b6109ec565b3480156104aa57600080fd5b5061023a610b6b565b3480156104bf57600080fd5b506101e96104ce366004611ceb565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a0200000000000000000000000000000000000000000000000000000000148061058c57507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b806105d857507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b60006105e8610be7565b6105f28484610c8d565b90506105fd82610d41565b9392505050565b61060c610dac565b848114158061062557508215806106235750828514155b155b1561065c576040517fb4fa3fb300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008390036107085760005b85811015610702576106fa87878381811061068557610685611d55565b905060200201602081019061069a9190611cce565b60008585858181106106ae576106ae611d55565b90506020028101906106c09190611d84565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e4192505050565b600101610668565b50610772565b60005b858110156107705761076887878381811061072857610728611d55565b905060200201602081019061073d9190611cce565b86868481811061074f5761074f611d55565b905060200201358585858181106106ae576106ae611d55565b60010161070b565b505b505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b15801561080557600080fd5b505af1158015610819573d6000803e3d6000fd5b5050505050565b610828610ebe565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b1580156108bb57600080fd5b505af1158015610772573d6000803e3d6000fd5b6108d7610f1d565b6108e082611021565b6108ea8282611029565b5050565b60006108f8611162565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610925610dac565b610930838383610e41565b505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa1580156109c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e79190611de9565b905090565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff16600081158015610a375750825b905060008267ffffffffffffffff166001148015610a545750303b155b905081158015610a62575080155b15610a99576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001660011785558315610afa5784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b610b03866111d1565b83156107725784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a1505050505050565b6040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482018190529073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906335567e1a906044016109a6565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610c8b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064015b60405180910390fd5b565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000908152601c829052603c8120610d0881610cce610100870187611d84565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061126592505050565b60005473ffffffffffffffffffffffffffffffffffffffff908116911614610d345760019150506105d8565b5060009392505050565b50565b8015610d3e5760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d8060008114610819576040519150601f19603f3d011682016040523d82523d6000602084013e610819565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614801590610e0a575060005473ffffffffffffffffffffffffffffffffffffffff163314155b15610c8b576040517fce15531900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808473ffffffffffffffffffffffffffffffffffffffff168484604051610e6a9190611e02565b60006040518083038185875af1925050503d8060008114610ea7576040519150601f19603f3d011682016040523d82523d6000602084013e610eac565b606091505b50915091508161081957805160208201fd5b60005473ffffffffffffffffffffffffffffffffffffffff163314801590610ee65750333014155b15610c8b576040517f5fc483c500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480610fea57507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610fd17f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614155b15610c8b576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d3e610ebe565b8173ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156110ae575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526110ab91810190611de9565b60015b6110fc576040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83166004820152602401610c82565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611158576040517faa1d49a400000000000000000000000000000000000000000000000000000000815260048101829052602401610c82565b610930838361128f565b3073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610c8b576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116918217835560405191927f0000000000000000000000000000000000000000000000000000000000000000909116917f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de9190a350565b60008060008061127586866112f2565b925092509250611285828261133f565b5090949350505050565b61129882611443565b60405173ffffffffffffffffffffffffffffffffffffffff8316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a28051156112ea576109308282611512565b6108ea611595565b6000806000835160410361132c5760208401516040850151606086015160001a61131e888285856115cd565b955095509550505050611338565b50508151600091506002905b9250925092565b600082600381111561135357611353611e1e565b0361135c575050565b600182600381111561137057611370611e1e565b036113a7576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60028260038111156113bb576113bb611e1e565b036113f5576040517ffce698f700000000000000000000000000000000000000000000000000000000815260048101829052602401610c82565b600382600381111561140957611409611e1e565b036108ea576040517fd78bce0c00000000000000000000000000000000000000000000000000000000815260048101829052602401610c82565b8073ffffffffffffffffffffffffffffffffffffffff163b6000036114ac576040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82166004820152602401610c82565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60606000808473ffffffffffffffffffffffffffffffffffffffff168460405161153c9190611e02565b600060405180830381855af49150503d8060008114611577576040519150601f19603f3d011682016040523d82523d6000602084013e61157c565b606091505b509150915061158c8583836116c7565b95945050505050565b3415610c8b576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084111561160857506000915060039050826116bd565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa15801561165c573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166116b3575060009250600191508290506116bd565b9250600091508190505b9450945094915050565b6060826116dc576116d782611756565b6105fd565b8151158015611700575073ffffffffffffffffffffffffffffffffffffffff84163b155b1561174f576040517f9996b31500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85166004820152602401610c82565b50806105fd565b8051156117665780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000602082840312156117aa57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146105fd57600080fd5b73ffffffffffffffffffffffffffffffffffffffff81168114610d3e57600080fd5b60008083601f84011261180e57600080fd5b50813567ffffffffffffffff81111561182657600080fd5b60208301915083602082850101111561183e57600080fd5b9250929050565b60008060008060006080868803121561185d57600080fd5b8535611868816117da565b94506020860135611878816117da565b935060408601359250606086013567ffffffffffffffff81111561189b57600080fd5b6118a7888289016117fc565b969995985093965092949392505050565b6000806000606084860312156118cd57600080fd5b833567ffffffffffffffff8111156118e457600080fd5b840161012081870312156118f757600080fd5b95602085013595506040909401359392505050565b60008083601f84011261191e57600080fd5b50813567ffffffffffffffff81111561193657600080fd5b6020830191508360208260051b850101111561183e57600080fd5b6000806000806000806060878903121561196a57600080fd5b863567ffffffffffffffff8082111561198257600080fd5b61198e8a838b0161190c565b909850965060208901359150808211156119a757600080fd5b6119b38a838b0161190c565b909650945060408901359150808211156119cc57600080fd5b506119d989828a0161190c565b979a9699509497509295939492505050565b600080604083850312156119fe57600080fd5b8235611a09816117da565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f830112611a5757600080fd5b813567ffffffffffffffff80821115611a7257611a72611a17565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611ab857611ab8611a17565b81604052838152866020858801011115611ad157600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215611b0457600080fd5b8235611b0f816117da565b9150602083013567ffffffffffffffff811115611b2b57600080fd5b611b3785828601611a46565b9150509250929050565b60005b83811015611b5c578181015183820152602001611b44565b50506000910152565b6020815260008251806020840152611b84816040850160208701611b41565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600080600060608486031215611bcb57600080fd5b8335611bd6816117da565b925060208401359150604084013567ffffffffffffffff811115611bf957600080fd5b611c0586828701611a46565b9150509250925092565b60008060008060008060008060a0898b031215611c2b57600080fd5b8835611c36816117da565b97506020890135611c46816117da565b9650604089013567ffffffffffffffff80821115611c6357600080fd5b611c6f8c838d0161190c565b909850965060608b0135915080821115611c8857600080fd5b611c948c838d0161190c565b909650945060808b0135915080821115611cad57600080fd5b50611cba8b828c016117fc565b999c989b5096995094979396929594505050565b600060208284031215611ce057600080fd5b81356105fd816117da565b60008060008060008060a08789031215611d0457600080fd5b8635611d0f816117da565b95506020870135611d1f816117da565b94506040870135935060608701359250608087013567ffffffffffffffff811115611d4957600080fd5b6119d989828a016117fc565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611db957600080fd5b83018035915067ffffffffffffffff821115611dd457600080fd5b60200191503681900382131561183e57600080fd5b600060208284031215611dfb57600080fd5b5051919050565b60008251611e14818460208701611b41565b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea2646970667358221220170a08e6cd7e013d12a68a66c2dddc6f47a094460e50deb79f31b71370d6249164736f6c63430008180033";

type SimpleAccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAccountFactory__factory extends ContractFactory {
  constructor(...args: SimpleAccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleAccountFactory> {
    return super.deploy(
      _entryPoint,
      overrides || {}
    ) as Promise<SimpleAccountFactory>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_entryPoint, overrides || {});
  }
  override attach(address: string): SimpleAccountFactory {
    return super.attach(address) as SimpleAccountFactory;
  }
  override connect(signer: Signer): SimpleAccountFactory__factory {
    return super.connect(signer) as SimpleAccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAccountFactoryInterface {
    return new utils.Interface(_abi) as SimpleAccountFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleAccountFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleAccountFactory;
  }
}
