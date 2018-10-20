const fs = require('fs');
const path = require('path');
const moment = require('moment');
const mongodb = require('mongodb');
const request = require('request');

class Utils {
  md5(content = '') {
    return crypto.createHash('md5').update(content).digest('hex');
  }

  sha256(content = '') {
    return crypto.createHash('sha256').update(content).digest('hex');
  }

  newObjectId(id) {
    try {
      return new mongodb.ObjectId(id);
    } catch(err) {
      throw new Error('the id length must be 24');
    }
  }

  objectIdToDate(id) {
    if (!id || typeof id !== 'string' || id.length !== 24) throw Error('无效的ID');
    return this.newObjectId(id).getTimestamp();
  }

  dateToObjectId(date) {
    return this.newObjectId(`${moment(date).unix().toString(16)}`.padEnd(24, 0))
  }

  residue(count, limit) { 
    limit = limit || 20;
    return Math.max(count - limit, 0); 
  }

  getDomain(host) {
    const localhost = 'localhost';
    // host可能存在的值：localhost、51linwei.top、51linwei.top:3451
    return host.includes(localhost) ? localhost : host.split(':')[0];
  }

  downloadFile(url, name) {
    const stream = fs.createWriteStream(name);
    request(url).pipe(stream).on('close', function() {
      console.log('下载完成');
    });
  }

  loadFile(source) {
    const type = source.substr(source.lastIndexOf('.') + 1, source.length);
    return { type, result: fs.createReadStream(source) };
  }
}

module.exports = new Utils();

