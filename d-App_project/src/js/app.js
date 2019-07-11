App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    
    // TODO: refactor conditional
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("Biography.json", function(biography) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.Biography = TruffleContract(biography);
      // Connect provider to interact with contract
      App.contracts.Biography.setProvider(App.web3Provider);
      return App.render();
    });
  },

  render: function(){

    
    var output;
    App.contracts.Biography.deployed().then(function(instance){
      output = instance;
      var some = instance.owner(1);
      return some;
    }).then(function(some2){
      $("#v1a").html("Your Vehicle Identity Number      : " + some2[0]);
      $("#v1b").html("Your Vehicle model                : " + some2[1]);
      $("#v1c").html("Your Vehicle number plate         : " + some2[2]);
      $("#v1d").html("Your Vehicle amount               : " + some2[3]);
      $("#v1e").html("Your Vehicle owner identity       : " + some2[4]);
      $("#v1f").html("Your Vehicle Other Features       : " + some2[5]);
      var dairy = output.owner(2);
      return dairy;
    }).then(function(dairy2){
      $("#v2a").html("Your Vehicle Identity Number      : " + dairy2[0]);
      $("#v2b").html("Your Vehicle model                : " + dairy2[1]);
      $("#v2c").html("Your Vehicle number plate         : " + dairy2[2]);
      $("#v2d").html("Your Vehicle amount               : " + dairy2[3]);
      $("#v2e").html("Your Vehicle owner identity       : " + dairy2[4]);
      $("#v2f").html("Your Vehicle Other Features       : " + dairy2[5]);
      var silk = output.owner(3);
      return silk;
    }).then(function(silk2){
      $("#v3a").html("Your Vehicle Identity Number      : " + silk2[0]);
      $("#v3b").html("Your Vehicle model                : " + silk2[1]);
      $("#v3c").html("Your Vehicle number plate         : " + silk2[2]);
      $("#v3d").html("Your Vehicle amount               : " + silk2[3]);
      $("#v3e").html("Your Vehicle owner identity       : " + silk2[4]);
      $("#v3f").html("Your Vehicle Other Features       : " + silk2[5]);
    });

  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
