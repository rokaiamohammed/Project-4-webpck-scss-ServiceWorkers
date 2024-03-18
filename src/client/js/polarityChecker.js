// API response output (https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response)
const polarityChecker = (score) => {
    let display;
    switch (score) {
        case 'P+':
            display = 'strong positive';
            break;
        case 'P':
            display = 'positive';
            break;
        case 'NEU':
            display = 'neutral';
            break;
        case 'N':
            display = 'negative';
            break;
        case 'N+':
            display = 'strong negative';
            break;
        case 'NONE':
            display = 'no sentiment';
    }
    return display.toUpperCase();
}
module.exports =  { polarityChecker }