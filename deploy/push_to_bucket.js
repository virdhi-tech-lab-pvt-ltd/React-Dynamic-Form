const s3 = require('s3');

if (!process.env.AWS_S3_BUCKET || !process.env.AWS_KEY || !process.env.AWS_SECRET) {
  console.log('AWS_S3_BUCKET, AWS_KEY, and AWS_SECRET env vars needed to run.');
  process.exit(1);
 }

var client = s3.createClient({
  s3Options: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
});


var params = {
  localDir: 'build',
  deleteRemoved: true,
  s3Params: {
    Bucket: process.env.AWS_S3_BUCKET,
    Prefix: '',
  },
};
var uploader = client.uploadDir(params);
uploader.on('error', function(err) {
  console.error('unable to sync:', err.stack);
});
uploader.on('progress', function() {
  console.log(`${uploader.progressAmount}/${uploader.progressTotal} Uploaded`);
});
uploader.on('end', function() {
  console.log('done uploading');
});
