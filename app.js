$(document).ready(function(){
    var oxygen = 0;
    var fruit = 0;
    var treeLevel = 1;
    var oxygenNeeded = 10;
    var pickaxes = 0;
    var money = 0;
    var logPlus = 1;
    var autoLogPlus = 0;
    var autoChopperPrice = 100;
    var pickaxePrice = 50;
    var logPrice = 1;
    var menu;

    setInterval(function(){
        oxygen += autoLogPlus;
        changeInventory();
        changeMarket();
    }, 1000);

    $("#chop").click(function(){
        oxygen += logPlus;
        if ((oxygen % 10)== 0) {
            fruit += logPlus;
        } else {
            fruit += autoLogPlus;
        }
        changeInventory();
        changeMarket();
    });

    $("#Upgrade").click(function(){
        if (oxygen < oxygenNeeded) {
            alert("You don't have enough Oxygen!");
        } else {
            oxygen-=oxygenNeeded;
            oxygenNeeded+=10
            treeLevel+=logPlus;
            if (treeLevel == 2) {
                var img = document.getElementById('defaultimg');
                img.src = '1.png';
            } else if (treeLevel == 3) {
                var img = document.getElementById('defaultimg');
                img.src = '2.png';
            } else if (treeLevel == 4) {
                var img = document.getElementById('defaultimg');
                img.src = '3.png';
            }
            
        }
        changeInventory();
        changeMarket();
    });

    $("#sell10").click(function(){
        oxygen-=10;
        money += logPrice * 10;
        changeInventory();
        changeMarket();
    });

    $("#sellAll").click(function(){
        money += logPrice * oxygen;
        oxygen = 0;
        changeInventory();
        changeMarket();
    });

    $("#autoChopper").click(function(){
        money -= autoChopperPrice;
        autoLogPlus++;
        changeInventory();
        changeMarket();
    });

    $("#buyPickaxe").click(function(){
        money -= pickaxePrice;
        pickaxes++;
        changeInventory();
        changeMarket();
    });


    $("#visit").click(function(){
        menu = switchMenu("marketplace");
        changeMarket();
    });

    $("#return").click(function(){
        menu = switchMenu("main");
    });


    function changeInventory(){
        $("#money").html("Money: $" + money);

        if(oxygen == 1){
            $("#oxygen").html("Oxygen Level: " + oxygen);
        }else{
            $("#oxygen").html("Oxygen Level: " + oxygen);
        }

        if(fruit == 1){
            $("#fruit").html("Fruits Collected: " + fruit);
        }else{
            $("#fruit").html("Fruits Collected: " + fruit);
        }

        if(treeLevel == 1){
            $("#treelevel").html("Tree Level: " + treeLevel);
        }else{
            $("#treelevel").html("Tree Level: " + treeLevel);
        }

        if(pickaxes > 0){
            $("#pickaxes").html("You now own " + pickaxes + " pickaxe(s).");
        }else{
            $("#pickaxes").html("");
        }
    }

    function changeMarket(){
        if(oxygen > 0){
            $("#sellAll").css("display", "block");
        }else{
            $("#sellAll").css("display", "none");
        }
        if(oxygen >= 1){
            $("#sell1").css("display", "block");
        }else{
            $("#sell1").css("display", "none");
        }
        if(oxygen >= 10){
            $("#sell10").css("display", "block");
        }else{
            $("#sell10").css("display", "none");
        }

        if(money >= autoChopperPrice){
            $("#autoChopper").css("display", "block");
        }else{
            $("#autoChopper").css("display", "none");
        }

        if(money >= pickaxePrice){
            $("#buyPickaxe").css("display", "block");
        }else{
            $("#buyPickaxe").css("display", "none");
        }
    }

    function switchMenu(menu){
        $(".menus").children().css("display", "none");
        $("." + menu).css("display", "block");
        return menu;
    }
}); 