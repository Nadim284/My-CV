const link = encodeURI('http://127.0.0.1:5500/CV.html'); // Replace with your actual CV URL
const msg = encodeURIComponent('Hey, check out my CV!');
const title = encodeURIComponent('My CV');

const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const twitter = document.querySelector('.twitter');
twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=cv,resume`;
