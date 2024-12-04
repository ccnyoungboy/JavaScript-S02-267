function createQuote(quote, callback) {
    let MyQuote = "Like I always say, " + quote;
    callback(MyQuote);
}

function logQuote(quote) {
    console.log(quote + ' Yes..');
}

createQuote(" you will getting better!", logQuote);