$(document).ready(function(){
    var oxygen = 0;
    var fruit = 0;
    var treeLevel = 1;
    var oxygenNeeded = 10;
    var logPlus = 1;
    var autoLogPlus = 0;
    var autoClickerPrice = 100;
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
        } else {
            oxygen-=oxygenNeeded;
            oxygenNeeded+=10
            treeLevel+=logPlus;
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