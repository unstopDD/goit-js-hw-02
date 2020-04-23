'use strict';

const checkForSpam = function(message) {
  const lowerMessage = message.toLowerCase();
  const word = lowerMessage.includes('sale') || lowerMessage.includes('spam');
  return word;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
