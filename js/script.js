var firCard, secCard, thiCard, fouCard;         // images for the four cards/spells in hand
var btnfTest, btnsTest, btntTest;               // buttons to switch first, second and third test case.
var btnReroll;                                  // button for reroll
var divHand;                                    // to change the background color of the <div>

class TestCase {
    constructor(deck, spellsInDeck ){
        this.deck = 1;
        this.spellsInDeck = ["overhead","dPunch","fullImport","fullImport","cuboElec",
                            "cuboElec","cuboElec","cuboElec","cuboElec","cuboAgua",
                            "cuboAgua","cuboAgua","cuboAgua","cuboAgua","cuboAgua",
                            "cuboMoco","cuboMoco","cuboMoco","cuboMoco","cuboMoco",
                            "rasengan","rasengan","rasengan","rasengan","rasengan",
                            "manaCost","manaCost","accelerate", "decelerate","lowHit"];
    }

    stringToImg(spell, i){
        if (i == 0){
            switch(spell){
                case "decelerate":
                    firCard.src="./assets/GGST_Asuka_R_Shooting_Time_Stretch_(Decelerate)_Icon.png";
                    break;
                case "accelerate":
                    firCard.src="./assets/GGST_Asuka_R_Shooting_Time_Stretch_(Accelerate)_Icon.png";
                    break;
                case "autoImport":
                    firCard.src="./assets/GGST_Asuka_R_Bookmark_(Auto_Import)_Icon.png";
                    break;
                case "bitShift":
                    firCard.src="./assets/GGST_Asuka_R_Bit_Shift_Metron_Icon.png";
                    break;
                case "boost":
                    firCard.src="./assets/GGST_Asuka_R_RMS_Boost_Metron_Icon.png";
                    break;
                case "chaotic":
                    firCard.src="./assets/GGST_Asuka_R_Chaotic_Option_Icon.png";
                    break;
                case "cuboAgua":
                    firCard.src="./assets/GGST_Asuka_R_Howling_Metron_Icon.png";
                    break;
                case "cuboArpeggio":
                    firCard.src="./assets/GGST_Asuka_R_Metron_Arpeggio_Icon.png";
                    break;
                case "cuboElec":
                    firCard.src="./assets/GGST_Asuka_R_Delayed_Howling_Metron_Icon.png";
                    break;
                case "cuboMoco":
                    firCard.src="./assets/GGST_Asuka_R_Howling_Metron_MS_Processing_Icon.png";
                    break;
                case "cuboTardus":
                    firCard.src="./assets/GGST_Asuka_R_Delayed_Tardus_Metron_Icon.png";
                    break;
                case "dPunch":
                    firCard.src="./assets/GGST_Asuka_R_Aquila_Metron_Icon.png";
                    break;
                case "fullImport":
                    firCard.src="./assets/GGST_Asuka_R_Bookmark_(Full_Import)_Icon.png";
                    break;
                case "gravityRod":
                    firCard.src="./assets/GGST_Asuka_R_Gravity_Rod_Shooting_Icon.png";
                    break;
                case "highPass":
                    firCard.src="./assets/GGST_Asuka_R_High-Pass_Filter_Gravity_Icon.png";
                    break;
                case "lowHit":
                    firCard.src="./assets/GGST_Asuka_R_Terra_Metron_Icon.png";
                    break;
                case "lowPass":
                    firCard.src="./assets/GGST_Asuka_R_Low-Pass_Filter_Gravity_Icon.png";
                    break;
                case "manaCost":
                    firCard.src="./assets/GGST_Asuka_R_Reduce_Mana_Cost_Icon.png";
                    break;
                case "overhead":
                    firCard.src="./assets/GGST_Asuka_R_Accipiter_Metron_Icon.png";
                    break;
                case "randomImport":
                    firCard.src="./assets/GGST_Asuka_R_Bookmark_(Random_Import)_Icon.png";
                    break;
                case "rasengan":
                    firCard.src="./assets/GGST_Asuka_R_Metron_Screamer_808_Icon.png";
                    break;
                case "recoverCont":
                    firCard.src="./assets/GGST_Asuka_R_Recover_Mana_(Continuous)_Icon.png";
                    break;
                case "recoverInstant":
                    firCard.src="./assets/GGST_Asuka_R_Recover_Mana_(Instant)_Icon.png";
                    break;
                case "repulsiveRod":
                    firCard.src="./assets/GGST_Asuka_R_Repulsive_Rod_Shooting_Icon.png";
                    break;
                case "sampler":
                    firCard.src="./assets/GGST_Asuka_R_Sampler_404_Icon.png";
                    break;
                case "teleport":
                    firCard.src="./assets/GGST_Asuka_R_Go_to_Marker_Icon.png";
                    break;
                default:
                    firCard.src="./assets/GGST_Asuka_R_QuestionMark.png";  
            }
        } else if (i == 1){
            switch(spell){
                case "decelerate":
                    secCard.src="./assets/GGST_Asuka_R_Shooting_Time_Stretch_(Decelerate)_Icon.png";
                    break;
                case "accelerate":
                    secCard.src="./assets/GGST_Asuka_R_Shooting_Time_Stretch_(Accelerate)_Icon.png";
                    break;
                case "autoImport":
                    secCard.src="./assets/GGST_Asuka_R_Bookmark_(Auto_Import)_Icon.png";
                    break;
                case "bitShift":
                    secCard.src="./assets/GGST_Asuka_R_Bit_Shift_Metron_Icon.png";
                    break;
                case "boost":
                    secCard.src="./assets/GGST_Asuka_R_RMS_Boost_Metron_Icon.png";
                    break;
                case "chaotic":
                    secCard.src="./assets/GGST_Asuka_R_Chaotic_Option_Icon.png";
                    break;
                case "cuboAgua":
                    secCard.src="./assets/GGST_Asuka_R_Howling_Metron_Icon.png";
                    break;
                case "cuboArpeggio":
                    secCard.src="./assets/GGST_Asuka_R_Metron_Arpeggio_Icon.png";
                    break;
                case "cuboElec":
                    secCard.src="./assets/GGST_Asuka_R_Delayed_Howling_Metron_Icon.png";
                    break;
                case "cuboMoco":
                    secCard.src="./assets/GGST_Asuka_R_Howling_Metron_MS_Processing_Icon.png";
                    break;
                case "cuboTardus":
                    secCard.src="./assets/GGST_Asuka_R_Delayed_Tardus_Metron_Icon.png";
                    break;
                case "dPunch":
                    secCard.src="./assets/GGST_Asuka_R_Aquila_Metron_Icon.png";
                    break;
                case "fullImport":
                    secCard.src="./assets/GGST_Asuka_R_Bookmark_(Full_Import)_Icon.png";
                    break;
                case "gravityRod":
                    secCard.src="./assets/GGST_Asuka_R_Gravity_Rod_Shooting_Icon.png";
                    break;
                case "highPass":
                    secCard.src="./assets/GGST_Asuka_R_High-Pass_Filter_Gravity_Icon.png";
                    break;
                case "lowHit":
                    secCard.src="./assets/GGST_Asuka_R_Terra_Metron_Icon.png";
                    break;
                case "lowPass":
                    secCard.src="./assets/GGST_Asuka_R_Low-Pass_Filter_Gravity_Icon.png";
                    break;
                case "manaCost":
                    secCard.src="./assets/GGST_Asuka_R_Reduce_Mana_Cost_Icon.png";
                    break;
                case "overhead":
                    secCard.src="./assets/GGST_Asuka_R_Accipiter_Metron_Icon.png";
                    break;
                case "randomImport":
                    secCard.src="./assets/GGST_Asuka_R_Bookmark_(Random_Import)_Icon.png";
                    break;
                case "rasengan":
                    secCard.src="./assets/GGST_Asuka_R_Metron_Screamer_808_Icon.png";
                    break;
                case "recoverCont":
                    secCard.src="./assets/GGST_Asuka_R_Recover_Mana_(Continuous)_Icon.png";
                    break;
                case "recoverInstant":
                    secCard.src="./assets/GGST_Asuka_R_Recover_Mana_(Instant)_Icon.png";
                    break;
                case "repulsiveRod":
                    secCard.src="./assets/GGST_Asuka_R_Repulsive_Rod_Shooting_Icon.png";
                    break;
                case "sampler":
                    secCard.src="./assets/GGST_Asuka_R_Sampler_404_Icon.png";
                    break;
                case "teleport":
                    secCard.src="./assets/GGST_Asuka_R_Go_to_Marker_Icon.png";
                    break;
                default:        
                    secCard.src="./assets/GGST_Asuka_R_QuestionMark.png";
            }
        } else if (i == 2){
            switch(spell){
                case "decelerate":
                    thiCard.src="./assets/GGST_Asuka_R_Shooting_Time_Stretch_(Decelerate)_Icon.png";
                    break;
                case "accelerate":
                    thiCard.src="./assets/GGST_Asuka_R_Shooting_Time_Stretch_(Accelerate)_Icon.png";
                    break;
                case "autoImport":
                    thiCard.src="./assets/GGST_Asuka_R_Bookmark_(Auto_Import)_Icon.png";
                    break;
                case "bitShift":
                    thiCard.src="./assets/GGST_Asuka_R_Bit_Shift_Metron_Icon.png";
                    break;
                case "boost":
                    thiCard.src="./assets/GGST_Asuka_R_RMS_Boost_Metron_Icon.png";
                    break;
                case "chaotic":
                    thiCard.src="./assets/GGST_Asuka_R_Chaotic_Option_Icon.png";
                    break;
                case "cuboAgua":
                    thiCard.src="./assets/GGST_Asuka_R_Howling_Metron_Icon.png";
                    break;
                case "cuboArpeggio":
                    thiCard.src="./assets/GGST_Asuka_R_Metron_Arpeggio_Icon.png";
                    break;
                case "cuboElec":
                    thiCard.src="./assets/GGST_Asuka_R_Delayed_Howling_Metron_Icon.png";
                    break;
                case "cuboMoco":
                    thiCard.src="./assets/GGST_Asuka_R_Howling_Metron_MS_Processing_Icon.png";
                    break;
                case "cuboTardus":
                    thiCard.src="./assets/GGST_Asuka_R_Delayed_Tardus_Metron_Icon.png";
                    break;
                case "dPunch":
                    thiCard.src="./assets/GGST_Asuka_R_Aquila_Metron_Icon.png";
                    break;
                case "fullImport":
                    thiCard.src="./assets/GGST_Asuka_R_Bookmark_(Full_Import)_Icon.png";
                    break;
                case "gravityRod":
                    thiCard.src="./assets/GGST_Asuka_R_Gravity_Rod_Shooting_Icon.png";
                    break;
                case "highPass":
                    thiCard.src="./assets/GGST_Asuka_R_High-Pass_Filter_Gravity_Icon.png";
                    break;
                case "lowHit":
                    thiCard.src="./assets/GGST_Asuka_R_Terra_Metron_Icon.png";
                    break;
                case "lowPass":
                    thiCard.src="./assets/GGST_Asuka_R_Low-Pass_Filter_Gravity_Icon.png";
                    break;
                case "manaCost":
                    thiCard.src="./assets/GGST_Asuka_R_Reduce_Mana_Cost_Icon.png";
                    break;
                case "overhead":
                    thiCard.src="./assets/GGST_Asuka_R_Accipiter_Metron_Icon.png";
                    break;
                case "randomImport":
                    thiCard.src="./assets/GGST_Asuka_R_Bookmark_(Random_Import)_Icon.png";
                    break;
                case "rasengan":
                    thiCard.src="./assets/GGST_Asuka_R_Metron_Screamer_808_Icon.png";
                    break;
                case "recoverCont":
                    thiCard.src="./assets/GGST_Asuka_R_Recover_Mana_(Continuous)_Icon.png";
                    break;
                case "recoverInstant":
                    thiCard.src="./assets/GGST_Asuka_R_Recover_Mana_(Instant)_Icon.png";
                    break;
                case "repulsiveRod":
                    thiCard.src="./assets/GGST_Asuka_R_Repulsive_Rod_Shooting_Icon.png";
                    break;
                case "sampler":
                    thiCard.src="./assets/GGST_Asuka_R_Sampler_404_Icon.png";
                    break;
                case "teleport":
                    thiCard.src="./assets/GGST_Asuka_R_Go_to_Marker_Icon.png";
                    break;
                default:        
                    thiCard.src="./assets/GGST_Asuka_R_QuestionMark.png";
            }
        } else if (i == 3){
            switch(spell){
                case "decelerate":
                    fouCard.src="./assets/GGST_Asuka_R_Shooting_Time_Stretch_(Decelerate)_Icon.png";
                    break;
                case "accelerate":
                    fouCard.src="./assets/GGST_Asuka_R_Shooting_Time_Stretch_(Accelerate)_Icon.png";
                    break;
                case "autoImport":
                    fouCard.src="./assets/GGST_Asuka_R_Bookmark_(Auto_Import)_Icon.png";
                    break;
                case "bitShift":
                    fouCard.src="./assets/GGST_Asuka_R_Bit_Shift_Metron_Icon.png";
                    break;
                case "boost":
                    fouCard.src="./assets/GGST_Asuka_R_RMS_Boost_Metron_Icon.png";
                    break;
                case "chaotic":
                    fouCard.src="./assets/GGST_Asuka_R_Chaotic_Option_Icon.png";
                    break;
                case "cuboAgua":
                    fouCard.src="./assets/GGST_Asuka_R_Howling_Metron_Icon.png";
                    break;
                case "cuboArpeggio":
                    fouCard.src="./assets/GGST_Asuka_R_Metron_Arpeggio_Icon.png";
                    break;
                case "cuboElec":
                    fouCard.src="./assets/GGST_Asuka_R_Delayed_Howling_Metron_Icon.png";
                    break;
                case "cuboMoco":
                    fouCard.src="./assets/GGST_Asuka_R_Howling_Metron_MS_Processing_Icon.png";
                    break;
                case "cuboTardus":
                    fouCard.src="./assets/GGST_Asuka_R_Delayed_Tardus_Metron_Icon.png";
                    break;
                case "dPunch":
                    fouCard.src="./assets/GGST_Asuka_R_Aquila_Metron_Icon.png";
                    break;
                case "fullImport":
                    fouCard.src="./assets/GGST_Asuka_R_Bookmark_(Full_Import)_Icon.png";
                    break;
                case "gravityRod":
                    fouCard.src="./assets/GGST_Asuka_R_Gravity_Rod_Shooting_Icon.png";
                    break;
                case "highPass":
                    fouCard.src="./assets/GGST_Asuka_R_High-Pass_Filter_Gravity_Icon.png";
                    break;
                case "lowHit":
                    fouCard.src="./assets/GGST_Asuka_R_Terra_Metron_Icon.png";
                    break;
                case "lowPass":
                    fouCard.src="./assets/GGST_Asuka_R_Low-Pass_Filter_Gravity_Icon.png";
                    break;
                case "manaCost":
                    fouCard.src="./assets/GGST_Asuka_R_Reduce_Mana_Cost_Icon.png";
                    break;
                case "overhead":
                    fouCard.src="./assets/GGST_Asuka_R_Accipiter_Metron_Icon.png";
                    break;
                case "randomImport":
                    fouCard.src="./assets/GGST_Asuka_R_Bookmark_(Random_Import)_Icon.png";
                    break;
                case "rasengan":
                    fouCard.src="./assets/GGST_Asuka_R_Metron_Screamer_808_Icon.png";
                    break;
                case "recoverCont":
                    fouCard.src="./assets/GGST_Asuka_R_Recover_Mana_(Continuous)_Icon.png";
                    break;
                case "recoverInstant":
                    fouCard.src="./assets/GGST_Asuka_R_Recover_Mana_(Instant)_Icon.png";
                    break;
                case "repulsiveRod":
                    fouCard.src="./assets/GGST_Asuka_R_Repulsive_Rod_Shooting_Icon.png";
                    break;
                case "sampler":
                    fouCard.src="./assets/GGST_Asuka_R_Sampler_404_Icon.png";
                    break;
                case "teleport":
                    fouCard.src="./assets/GGST_Asuka_R_Go_to_Marker_Icon.png";
                    break;
                default:        
                    fouCard.src="./assets/GGST_Asuka_R_QuestionMark.png";
            }
        }
    }

    showHand(hand, spellsInDeck){
        var i = 0
        while (i <= 3){
            hand.stringToImg(spellsInDeck[i], i);
            i = i+1;
        }
    }

    // fisher-yates shuffle algorithm from https://bost.ocks.org/mike/shuffle/
    shuffleDeck(spellsInDeck){
        var m = this.spellsInDeck.length, t, i;
        
        while (m){
            i = Math.floor(Math.random() * m--);

            t = spellsInDeck[m];
            spellsInDeck[m] = spellsInDeck[i];
            spellsInDeck[i] = t;
        }

        return spellsInDeck;
    }

    switchTestCase(deck){
        switch(deck){
            case 1:
                this.spellsInDeck = ["overhead","dPunch","fullImport","fullImport","cuboElec",
                                    "cuboElec","cuboElec","cuboElec","cuboElec","cuboAgua",
                                    "cuboAgua","cuboAgua","cuboAgua","cuboAgua","cuboAgua",
                                    "cuboMoco","cuboMoco","cuboMoco","cuboMoco","cuboMoco",
                                    "rasengan","rasengan","rasengan","rasengan","rasengan",
                                    "manaCost","manaCost","accelerate", "decelerate","lowHit"];
                break;
            case 2:
                this.spellsInDeck = ["randomImport","randomImport","overhead","overhead","overhead",
                                    "bitShift","bitShift","chaotic","cuboElec","cuboElec",
                                    "cuboElec","cuboTardus","cuboTardus","highPass","cuboAgua",
                                    "cuboAgua","cuboAgua","cuboMoco","cuboMoco","cuboMoco",
                                    "lowPass","rasengan","rasengan","rasengan","recoverInstant",
                                    "recoverInstant","boost","lowHit","lowHit","lowHit"];
                break;
            case 3:
                this.spellsInDeck = ["bitShift","bitShift","bitShift","bitShift","autoImport",
                                    "autoImport","chaotic","cuboElec","cuboElec","cuboTardus",
                                    "cuboTardus","cuboTardus","teleport","teleport","teleport",
                                    "teleport","cuboAgua","cuboAgua","cuboMoco","cuboMoco",
                                    "cuboArpeggio","cuboArpeggio","cuboArpeggio","recoverCont","recoverCont",
                                    "boost","boost","sampler","gravityRod","repulsiveRod"];
                break;
            default:
                this.spellsInDeck = ["overhead","dPunch","fullImport","fullImport","cuboElec",
                                    "cuboElec","cuboElec","cuboElec","cuboElec","cuboAgua",
                                    "cuboAgua","cuboAgua","cuboAgua","cuboAgua","cuboAgua",
                                    "cuboMoco","cuboMoco","cuboMoco","cuboMoco","cuboMoco",
                                    "rasengan","rasengan","rasengan","rasengan","rasengan",
                                    "manaCost","manaCost","accelerate", "decelerate","lowHit"];
        }

        firCard.src="./assets/GGST_Asuka_R_QuestionMark.png";
        secCard.src="./assets/GGST_Asuka_R_QuestionMark.png";
        thiCard.src="./assets/GGST_Asuka_R_QuestionMark.png";
        fouCard.src="./assets/GGST_Asuka_R_QuestionMark.png";
    }

}



function main() {
    var hand = new TestCase();

    btnReroll = document.getElementById("reroll-btn");

    btnfTest = document.getElementById("TestCase-1-Btn");
    btnsTest = document.getElementById("TestCase-2-Btn");
    btntTest = document.getElementById("TestCase-3-Btn");

    firCard = document.getElementById("card1");
    secCard = document.getElementById("card2");
    thiCard = document.getElementById("card3");
    fouCard = document.getElementById("card4");

    divHand = document.getElementById("hand");


    // Event listeners
    btnReroll.addEventListener(
        "click",
        function(){
            hand.shuffleDeck(hand.spellsInDeck);
            console.log(hand.spellsInDeck);
            hand.showHand(hand, hand.spellsInDeck);
        },
        false
    );

    btnfTest.addEventListener(
        "click",
        function(){
            hand.deck = 1;
            hand.switchTestCase(hand.deck);
            divHand.style.backgroundColor = "#e7f274";
        },
        false
    );

    btnsTest.addEventListener(
        "click",
        function(){
            hand.deck = 2;
            hand.switchTestCase(hand.deck);
            divHand.style.backgroundColor = "#65d767";
        },
        false
    );

    btntTest.addEventListener(
        "click",
        function(){
            hand.deck = 3;
            hand.switchTestCase(hand.deck);
            divHand.style.backgroundColor = "#968aff";
        },
        false
    );



}