const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://pmmdrg2605:React.Native.2605@mynodedb.7hpnp60.mongodb.net/mydatabase'
    );
    console.log('Connect sucessfully!!!');
  } catch (error) {
    console.log('Connect failure!!! Error: ' + error);
  }
};

module.exports = { connect };
