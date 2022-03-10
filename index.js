function generate(){
    var quotes = {
        " -Winston Churchill":'“Success is not final, failure is not fatal: it is the courage to continue that counts.”',
         " -Opera Winfrey":`“You define your own life. Don’t let other people write your script.”`,
         " -Theodore Roosevelt":`“Believe you can and you’re halfway there.”`
    };
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)];
    quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}