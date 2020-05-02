// Init easyHTTP prototype parent
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP POST (create) Request Prototype


// Make an HTTP GET (read) Request Prototype
easyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true);

  let self = this;

  this.http.onload = function(){
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();

}


// Make an HTTP PUT (edit) Request Prototype



// Make an HTTP DELETE (delete) Request Prototype
