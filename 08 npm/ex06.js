buf = new Buffer(10);
buf.write("abcdefghij", "ascii");
console.log(buf.toString('base64'));
buf = buf.slice(0, 5);
console.log(buf.toString('utf-8'));