// init easyHttp library
const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get Single Post
//http.get('https://jsonplaceholder.typicode.com/posts/101', function(err, post) {
// http.get('https://jsonplaceholder.typicode.com/posts?userId=101', function(err, post) {  
//   ///posts?userId=1
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


//sample data
const data = {
  //userId:1,
  title: 'Malaynium x',
  body: 'This is a custom post'
};


// create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }

});


// Update Post
  http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  
  });