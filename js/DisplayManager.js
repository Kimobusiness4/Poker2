﻿/**
 * DisplayManager handles interaction with the HTML/CSS for 
 * showing the cards and their states.
 */
function DisplayManager() {
}

// show the given card at the given position.
DisplayManager.prototype.setCard = function (position, card, order) {
    var suitChar;
    var isRed = false;
    switch (card.suit) {
        case SUIT.SPADE:
            suitChar = '&spades;';
            break;
        case SUIT.DIAMOND:
            suitChar = '&diams;';
            isRed = true;
            break;
        case SUIT.CLUB:
            suitChar = '&clubs;';
            break;
        case SUIT.HEART:
            suitChar = '&hearts;';
            isRed = true;
            break;
    }
   

    // show the suit
    var handCardSuitDisplay = '#handCardSuitDisplay' + position;
    $(handCardSuitDisplay).html(suitChar);

    var handCardDisplay = '#handCardDisplay' + position;
    $(handCardDisplay).css('visibility', 'hidden')
    setTimeout(function () { $(handCardDisplay).css('visibility', 'visible'); }, order * 250);

    // set the color
    if (isRed) {
        $(handCardSuitDisplay).css('color', '#f00');
    } else {
        $(handCardSuitDisplay).css('color', '#000');
    }
    
    // TODO: show card rank in corners
    var rankChar;
    switch (card.rank) {
        case 11:
            rankChar = 'J';
            break;
        case 12:
            rankChar = 'Q';
            break;
        case 13:
            rankChar = 'K';
            break;
        case 1:
            rankChar = 'A';
            break;
        default:
            rankChar = card.rank;
            break;
    }
    var handCardDisplay = '#handCardDisplay' + position;
    $(handCardDisplay).html(rankChar + $(handCardSuitDisplay)[0].outerHTML);
}

// set whether the card at the given position is held.
DisplayManager.prototype.setCardHeld = function (pos, isHeld) {
    var handCardDisplay = '#handCardDisplay' + pos;
    if (isHeld) {
        $(handCardDisplay).css('border-color', '#f00');
    } else {
        $(handCardDisplay).css('border-color', '#fff');
    }
}

DisplayManager.prototype.setWagerDisplay = function (amount) {
    $('#wagerDisplay').html('Wager: $' + amount);
}

DisplayManager.prototype.getWagerAmount = function () {
    return parseInt($('#wagerDisplay').text().replace(/\D/g, ''));
}

DisplayManager.prototype.setMoneyDisplay = function (amount) {
    $('#moneyDisplay').text('Funds: $' + amount);
}

DisplayManager.prototype.getMoneyAmount = function () {
    return parseInt($('#moneyDisplay').text().replace(/\D/g, ''));
}

DisplayManager.prototype.setStatusDisplayText = function (newText) {
    $('#statusDisplay').text(newText);
}

DisplayManager.prototype.getStatusDisplayText = function () {
    return $('#statusDisplay').text();
}

DisplayManager.prototype.setDealButtonText = function (newText) {
    $('#dealButton').text(newText);
}

DisplayManager.prototype.hideCards = function () {
    var handCardDisplay;
    
    for (var i = 0; i < 5; i++) {
        handCardDisplay = '#handCardDisplay' + i;
        $(handCardDisplay).css('visibility', 'hidden');
    }
}