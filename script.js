$(".input3").click(function() {
    let response2 = $(".important2").val();
    $(".answer2").text(response2);
    let response1 = $(".important").val();
    $(".answer").text(response1);


    if (response1 === "Friends" && response2 === "Lazy") {
        $(".naruto").show();
        $(".results").text("You are a lot like Naruto!");

    } else if (response1 === "Friends" && response2 === "Hardworking") {
        $(".lee").show();
         $(".results").text("You are a lot like Rock Lee!");
        
    } else if (response1 === "Family" && response2 === "Hardworking") {
        $(".itachi").show();
         $(".results").text("You are a lot like Itachi Uchiha!");
    } else if (response1 === "Family" && response2 === "Lazy") {
   $(".shikamaru").show();
         $(".results").text("You are a lot like Shikamaru!");
    } else  
    {  alert("You either mispelled or put something random, try again.");
    
    }});
