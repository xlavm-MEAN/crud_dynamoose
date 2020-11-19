const dynamoose = require('dynamoose');

dynamoose.AWS.config.update({
  accessKeyId: 'MYKEY',
  secretAccessKey: 'MYSECRECTKEY',
  region: "us-east-1"
});

//dynamoose.local("http://localhost:8000");

const userSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
  },
  name: {
    type: String,
  },
  user:{
    type: String,
  },
  pass:{
    type: String,
  }
},
{
  timestamps: false,
});

module.exports = dynamoose.model('user', userSchema);