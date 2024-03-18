$(document).ready(function(){
    var oxygen = 0;
    var fruit = 0;
    var treeLevel = 1;
    var oxygenNeeded = 80;
    var logPlus = 1;
    var autoLogPlus = 0;
    var autoClickerPrice = 100;
    var autoClickerNumbers = 0
    var menu;

    setInterval(function(){
        oxygen += autoLogPlus;
        changeInventory();
        changeMarket();
    }, 1000);

    $("#click").click(function(){
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
        } else if (treeLevel>4){
            alert("Maximum number of Tree Levels Reached!!!")
        } else {
            oxygen-=oxygenNeeded;
            oxygenNeeded = 80
            treeLevel++;
            if (treeLevel == 2) {
                var img = document.getElementById('defaultimg');
                img.src = '1.png';
                logPlus = 3;
                oxygenNeeded = 720;
            } else if (treeLevel == 3) {
                var img = document.getElementById('defaultimg');
                img.src = '2.png';
                logPlus= 10;
                oxygenNeeded = 4000;
            } else if (treeLevel == 4) {
                var img = document.getElementById('defaultimg');
                img.src = '3.png';
                logPlus = 20;
                oxygenNeeded = 20000;
            }
            
        }
        changeInventory();
        changeMarket();
    });

    $("#autoClicker").click(function(){
        if (oxygen < autoClickerPrice) {
            alert("You don't have enough Oxygen!")
        } else {
            oxygen -= autoClickerPrice;
            autoLogPlus++;
            autoClickerNumbers ++;
            autoClickerPrice = Math.round(autoClickerPrice*= 1.2);
        }

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
        

        if(oxygen == 1){
            $("#oxygen").html("Oxygen Level: " + oxygen);
        }else{
            $("#oxygen").html("Oxygen Level: " + oxygen);
        }

        if(oxygenNeeded == 1){
            $("#Upgrade").html("Upgrade Tree [" + oxygenNeeded + "]");
        }else{
            $("#Upgrade").html("Upgrade Tree [" + oxygenNeeded + "]");
        }

        if(autoClickerPrice == 1){
            $("#autoClicker").html("Buy [1] Auto Clicker [" + autoClickerPrice + "]");
        }else{
            $("#autoClicker").html("Buy [1] Auto Clicker [" + autoClickerPrice + "]");
        }

        if(autoClickerNumbers == 1){
            $("#autoclickerNumber").html("Auto Clicker Purchased: " + autoClickerNumbers);
        }else{
            $("#autoclickerNumber").html("Auto Clicker Purchased: " + autoClickerNumbers);
        }


        if(treeLevel == 1){
            $("#treelevel").html("Tree Level: " + treeLevel);
        }else{
            $("#treelevel").html("Tree Level: " + treeLevel);
        }

    }

    function switchMenu(menu){
        $(".menus").children().css("display", "none");
        $("." + menu).css("display", "block");
        return menu;
    }
}); 