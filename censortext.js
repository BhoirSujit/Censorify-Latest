var censoredWords = ["sad", "bad", "mad"];
var customerCensoreWords = [];

function censor(inStr)
{
    for (idx in censoredWords)
    {
        inStr = inStr.replace(censoredWords[i], "***");
    }

    for (idx in customerCensoreWords)
    {
        inStr = instr.replace(customerCensoreWords[idx], "***")
    }
    return inStr;
}

function addCensoredWord(word)
{
    customerCensoreWords.push(word);
}

function getCensoredWords()
{
    return censoredWords.concat(customerCensoreWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord
exports.getCensoredWords = getCensoredWords