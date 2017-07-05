module.exports = {
	networks: {
		"live": {
		    network_id: 1, // Ethereum public network
		    // optional config values
		    // host - defaults to "localhost"
		    // port - defaults to 8545
		    // gas
		    // gasPrice
		    // from - default address to use for any transaction Truffle makes during migrations
  		},
  		"ropsten": {
  			host: "localhost",
  			port: 8545,
    		network_id: 3,        // Official Ethereum test network
  		},

  		"development": {
    		network_id: "*"
  		}
  	}
	
};
