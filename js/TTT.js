$(document).ready(function() {
    
    let player = 1,
        rng = Math.floor(Math.random() * 9) + 1,
        rand = Math.floor(Math.random() * 9) + 1,
        tag = '.sq' + rand.toString();
        
        console.log(player);
        
        
    $("#reload").hide();
    $("#win").hide();
    $("#nobody").hide();
    
    // Click function for each square
    $('.square').click(function() {
        
        let selected = $(this);
        
        // Inform player if square is already selected
        if (selected.hasClass('X') || selected.hasClass('O')) {
            alert('Negative');
        } else {
            
            // Check for winner
            if (player === 1) {
                selected.addClass('X').append('X')
                
                // If player wins, hide gameBoard, show reload/win
                if(winCheck('X')) {
                    $('#gameBoard').hide();
                    $('#reload').show();
                    $('#win').show();
                    
                    // Click function to reload game
                    $('#reload').click(function() {
                        location.reload(true);
                    });
                
                // If player does not win    
                } else {
                    player = 2;       
                    console.log(tag);                  
                }
            } else {
                
    // ---- This logic must be run outside scope of 'event' function, after player switch, for multiplayer ----
                
                $(moves(rng)).addClass('O').append('O')
                
                // If 'nobody' wins, hide gameBoard, show reload/win
                if(winCheck('O')) {
                    $('#gameBoard').hide();
                    $('#reload').show();
                    $('#nobody').show();
                    
                    // Click function to reload game
                    $('#reload').click(function() {
                        location.reload(true);
                    });
                
                // If 'nobody' does not win    
                } else {
                    player = 1;
                    console.log(tag);
                }
            }
        }
        
    });
    
    // ---- Find smart logic to run functions for intelligent box choices to replace ----
    
    
    function moves(rand) {
        
        while ( $(tag).hasClass('X') || $(tag).hasClass('O')) {
            rand = Math.floor(Math.random() * 9) + 1;
            tag = '.sq' + rand.toString();
        }
        return tag;
    }
    
    
    
    // Create function to check for 3-in-a-row
    function winCheck(symbol) {
        if ($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) {
            return true;
        } else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
            return true;
        } else if ($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
            return true;
        } else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
            return true;
        } else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
            return true;
        } else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
            return true;
        } else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
            return true;
        } else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
            return true;
        } else {
            return false;
        }
    }
    
        
});