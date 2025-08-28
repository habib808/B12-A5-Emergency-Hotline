const coins = 20;
const heartBTnValue = 1;
const copyBtnValue = 1;
callHistoryData = [];

//  innerText reUseAble function (global)

function elementInnerTextValue(id) {
    const element = document.getElementById(id);
    const elementInnerText = element.innerText;
    const elementInnerTextNumber = parseInt(elementInnerText);
    return elementInnerTextNumber;

}

// ---------Call History Function
const callHistoryContainer = document.getElementById("call-history-container")

function callHistory() {

    callHistoryContainer.innerHTML = "";

    for (const data of callHistoryData) {
        const div = document.createElement("div")
        div.innerHTML = `
<div class="bg-[#FAFAFA] rounded-xl p-3 flex justify-between items-center mt-3">
                        <div class="flex items-center">
                            <div class="">
                                <h1 class="font-semibold text-sm">${data.name}</h1>
                                <p class="text-sm">${data.num}</p>

                            </div>
                        </div>
                        <p class="text-xs">${data.date}</p>
                    </div>
        `
        callHistoryContainer.appendChild(div)
    }
}

// ---------

// Clear history btn function

document.getElementById("clear-btn").addEventListener('click', function () {
    document.getElementById("call-history-container").style.display = "none";
    callHistoryData = [];
})

// ----------------
const callBtns = document.getElementsByClassName('call-button');

for (const callBtn of callBtns) {
    callBtn.addEventListener('click', function () {
        document.getElementById("call-history-container").style.display = "block";
    });
}
// ----------------


// heart click function 
const heartBTns = document.getElementsByClassName("heart-btn");
for (const heartBTn of heartBTns) {
    heartBTn.addEventListener('click', function () {

        const hearShowBtn = document.getElementById("heart-show-btn");
        const heartInnerTextnumber = elementInnerTextValue("heart-show-btn")

        const newAvilableHeart = heartInnerTextnumber + heartBTnValue;
        hearShowBtn.innerText = newAvilableHeart;


    })
}

// -----------------------------

// Call btn main function (police help line)

document.getElementById("police-call-btn")
    .addEventListener('click', function (e) {
        e.preventDefault();

        const coinBtn = document.getElementById("coin-btn");
        const coinInnerTextNumber = elementInnerTextValue("coin-btn");

        if (coinInnerTextNumber >= coins) {
            alert("📞 Calling Police Helpline Number 999...");
        }

        if (coinInnerTextNumber < coins) {
            alert("❌ Insufficient coins! You need at least 20 coins to make a call.");
            return;
        }

        const newAvilableCoin = coinInnerTextNumber - coins;
        coinBtn.innerText = newAvilableCoin;

        const data = {
            name: "Police Helpline Number",
            num: "999",
            date: new Date().toLocaleTimeString()
        }

        callHistoryData.push(data)
        callHistory();
    })

// Call btn main function (Fire Service)
document.getElementById("fire-service-btn")

    .addEventListener('click', function (e) {
        e.preventDefault();

        const coinBtn = document.getElementById("coin-btn");
        const coinInnerTextNumber = elementInnerTextValue("coin-btn");

        if (coinInnerTextNumber >= coins) {
            alert("📞 Calling Fire Service Number 999...");
        }

        if (coinInnerTextNumber < coins) {
            alert("❌ Insufficient coins! You need at least 20 coins to make a call.");
            return;
        }

        const newAvilableCoin = coinInnerTextNumber - coins;
        coinBtn.innerText = newAvilableCoin;

        const data = {
            name: "Fire Service Number",
            num: "999",
            date: new Date().toLocaleTimeString()
        }

        callHistoryData.push(data)
        callHistory();
    })


// Call btn main function (National Emergency Number)

document.getElementById("national-emergency-btn")
    .addEventListener('click', function (e) {
        e.preventDefault();

        const coinBtn = document.getElementById("coin-btn");
        const coinInnerTextNumber = elementInnerTextValue("coin-btn");

        if (coinInnerTextNumber >= coins) {
            alert("📞 Calling National Emergency Number 999...");
        }

        if (coinInnerTextNumber < coins) {
            alert("❌ Insufficient coins! You need at least 20 coins to make a call.");
            return;
        }

        const newAvilableCoin = coinInnerTextNumber - coins;
        coinBtn.innerText = newAvilableCoin;

        const data = {
            name: "National Emergency Number",
            num: "999",
            date: new Date().toLocaleTimeString()
        }

        callHistoryData.push(data)
        callHistory();
    })


// Call btn main function (Ambulance services)

document.getElementById("ambulance-btn")
    .addEventListener('click', function (e) {
        e.preventDefault();

        const coinBtn = document.getElementById("coin-btn");
        const coinInnerTextNumber = elementInnerTextValue("coin-btn");

        if (coinInnerTextNumber >= coins) {
            alert("📞 Calling Ambulance Service 1994-999999...");
        }

        if (coinInnerTextNumber < coins) {
            alert("❌ Insufficient coins! You need at least 20 coins to make a call.");
            return;
        }

        const newAvilableCoin = coinInnerTextNumber - coins;
        coinBtn.innerText = newAvilableCoin;

        const data = {
            name: "Ambulance Service",
            num: "1994-999999",
            date: new Date().toLocaleTimeString()
        }

        callHistoryData.push(data)
        callHistory();
    })


// Call btn main function (Women and child health)

document.getElementById("child-help-btn")
    .addEventListener('click', function (e) {
        e.preventDefault();

        const coinBtn = document.getElementById("coin-btn");
        const coinInnerTextNumber = elementInnerTextValue("coin-btn");

        if (coinInnerTextNumber >= coins) {
            alert("📞 Calling Women & Child Helpline 109...");
        }


        if (coinInnerTextNumber < coins) {
            alert("❌ Insufficient coins! You need at least 20 coins to make a call.");
            return;
        }

        const newAvilableCoin = coinInnerTextNumber - coins;
        coinBtn.innerText = newAvilableCoin;

        const data = {
            name: "Women & Child Helpline",
            num: "109",
            date: new Date().toLocaleTimeString()
        }

        callHistoryData.push(data)
        callHistory();
    })

// Call btn main function (Anti-Corruptin)

document.getElementById("corruption-btn")
    .addEventListener('click', function (e) {
        e.preventDefault();

        const coinBtn = document.getElementById("coin-btn");
        const coinInnerTextNumber = elementInnerTextValue("coin-btn");

        if (coinInnerTextNumber >= coins) {
            alert("📞 Calling Anti-Corruption Helpline 106...");
        }

        if (coinInnerTextNumber < coins) {
            alert("❌ Insufficient coins! You need at least 20 coins to make a call.");
            return;
        }

        const newAvilableCoin = coinInnerTextNumber - coins;
        coinBtn.innerText = newAvilableCoin;

        const data = {
            name: "Anti-Corruption Helpline",
            num: "106",
            date: new Date().toLocaleTimeString()
        }

        callHistoryData.push(data)
        callHistory();
    })

// Call btn main function (Electricity helpline)

document.getElementById("electricity-btn")
    .addEventListener('click', function (e) {
        e.preventDefault();

        const coinBtn = document.getElementById("coin-btn");
        const coinInnerTextNumber = elementInnerTextValue("coin-btn");

        if (coinInnerTextNumber >= coins) {
            alert("📞 Calling Electricity Helpline 16216...");
        }

        if (coinInnerTextNumber < coins) {
            alert("❌ Insufficient coins! You need at least 20 coins to make a call.");
            return;
        }

        const newAvilableCoin = coinInnerTextNumber - coins;
        coinBtn.innerText = newAvilableCoin;

        const data = {
            name: "Electricity Helpline",
            num: "16216",
            date: new Date().toLocaleTimeString()
        }

        callHistoryData.push(data)
        callHistory();
    })
// Call btn main function (Brac Helpline)

document.getElementById("brac-btn")
    .addEventListener('click', function (e) {
        e.preventDefault();

        const coinBtn = document.getElementById("coin-btn");
        const coinInnerTextNumber = elementInnerTextValue("coin-btn");

        if (coinInnerTextNumber >= coins) {
            alert("📞 Calling Brac Helpline 16445...");
        }

        if (coinInnerTextNumber < coins) {
            alert("❌ Insufficient coins! You need at least 20 coins to make a call.");
            return;
        }

        const newAvilableCoin = coinInnerTextNumber - coins;
        coinBtn.innerText = newAvilableCoin;

        const data = {
            name: "Brac Helpline",
            num: "16445",
            date: new Date().toLocaleTimeString()
        }

        callHistoryData.push(data)
        callHistory();
    })

// Call btn main function (bangladesh railway helpline)

document.getElementById("railway-help-btn")
    .addEventListener('click', function (e) {
        e.preventDefault();

        const coinBtn = document.getElementById("coin-btn");
        const coinInnerTextNumber = elementInnerTextValue("coin-btn");

        if (coinInnerTextNumber >= coins) {
            alert("📞 Calling Bangladesh Railway Helpline 163...");
        }

        if (coinInnerTextNumber < coins) {
            alert("❌ Insufficient coins! You need at least 20 coins to make a call.");
            return;
        }

        const newAvilableCoin = coinInnerTextNumber - coins;
        coinBtn.innerText = newAvilableCoin;

        const data = {
            name: "Bangladesh Railway Helpline",
            num: "163",
            date: new Date().toLocaleTimeString()
        }

        callHistoryData.push(data)
        callHistory();
    })

// Copy BTNs Function s

// Copy btn main function (Police)
const policeNumber = 999;

document.getElementById("police-copy-btn")
    .addEventListener('click', function () {


        const copyShowBtn = document.getElementById("copy-show-btn");
        const copyShowBtnInnerText = elementInnerTextValue("copy-show-btn");

        navigator.clipboard.writeText(policeNumber.toString())

        alert("✔️ Number copied successfully: 999")
        newCopyShowInnerValue = copyShowBtnInnerText + copyBtnValue;
        copyShowBtn.innerText = newCopyShowInnerValue;

    })

// Copy btn main function (fire)
const fireNumber = 999;

document.getElementById("fire-copy-btn")
    .addEventListener('click', function () {


        const copyShowBtn = document.getElementById("copy-show-btn");
        const copyShowBtnInnerText = elementInnerTextValue("copy-show-btn");

        navigator.clipboard.writeText(fireNumber.toString())

        alert("✔️ Number copied successfully: 999")
        newCopyShowInnerValue = copyShowBtnInnerText + copyBtnValue;
        copyShowBtn.innerText = newCopyShowInnerValue;

    })

// Copy btn main function (National)
const nationalNumber = 999;

document.getElementById("national-copy-btn")
    .addEventListener('click', function () {


        const copyShowBtn = document.getElementById("copy-show-btn");
        const copyShowBtnInnerText = elementInnerTextValue("copy-show-btn");

        navigator.clipboard.writeText(nationalNumber.toString())

        alert("✔️ Number copied successfully: 999")
        newCopyShowInnerValue = copyShowBtnInnerText + copyBtnValue;
        copyShowBtn.innerText = newCopyShowInnerValue;

    })

// Copy btn main function (Ambulance)
const ambulanceNumber = 1994999999;

document.getElementById("ambulance-copy-btn")
    .addEventListener('click', function () {


        const copyShowBtn = document.getElementById("copy-show-btn");
        const copyShowBtnInnerText = elementInnerTextValue("copy-show-btn");

        navigator.clipboard.writeText(ambulanceNumber.toString())

        alert("✔️ Number copied successfully: 1994-999999...")
        newCopyShowInnerValue = copyShowBtnInnerText + copyBtnValue;
        copyShowBtn.innerText = newCopyShowInnerValue;

    })

// Copy btn main function (Child)
const childNumber = 109;

document.getElementById("child-copy-btn")
    .addEventListener('click', function () {


        const copyShowBtn = document.getElementById("copy-show-btn");
        const copyShowBtnInnerText = elementInnerTextValue("copy-show-btn");

        navigator.clipboard.writeText(childNumber.toString())

        alert("✔️ Number copied successfully: 109")
        newCopyShowInnerValue = copyShowBtnInnerText + copyBtnValue;
        copyShowBtn.innerText = newCopyShowInnerValue;

    })

// Copy btn main function (Corruption)
const corruptionNumber = 106;

document.getElementById("corruption-copy-btn")
    .addEventListener('click', function () {


        const copyShowBtn = document.getElementById("copy-show-btn");
        const copyShowBtnInnerText = elementInnerTextValue("copy-show-btn");

        navigator.clipboard.writeText(corruptionNumber.toString())

        alert("✔️ Number copied successfully: 106")
        newCopyShowInnerValue = copyShowBtnInnerText + copyBtnValue;
        copyShowBtn.innerText = newCopyShowInnerValue;

    })

// Copy btn main function (electricity)
const electricityeNumber = 16216;

document.getElementById("electricity-copy-btn")
    .addEventListener('click', function () {


        const copyShowBtn = document.getElementById("copy-show-btn");
        const copyShowBtnInnerText = elementInnerTextValue("copy-show-btn");

        navigator.clipboard.writeText(electricityeNumber.toString())

        alert("✔️ Number copied successfully: 16216")
        newCopyShowInnerValue = copyShowBtnInnerText + copyBtnValue;
        copyShowBtn.innerText = newCopyShowInnerValue;

    })


// Copy btn main function (brac)
const bracNumber = 16445;

document.getElementById("brac-copy-btn")
    .addEventListener('click', function () {


        const copyShowBtn = document.getElementById("copy-show-btn");
        const copyShowBtnInnerText = elementInnerTextValue("copy-show-btn");

        navigator.clipboard.writeText(bracNumber.toString())

        alert("✔️ Number copied successfully: 16445")
        newCopyShowInnerValue = copyShowBtnInnerText + copyBtnValue;
        copyShowBtn.innerText = newCopyShowInnerValue;

    })

// Copy btn main function (railway)
const railwayNumber = 163;

document.getElementById("railway-copy-btn")
    .addEventListener('click', function () {


        const copyShowBtn = document.getElementById("copy-show-btn");
        const copyShowBtnInnerText = elementInnerTextValue("copy-show-btn");

        navigator.clipboard.writeText(railwayNumber.toString())

        alert("✔️ Number copied successfully: 163")
        newCopyShowInnerValue = copyShowBtnInnerText + copyBtnValue;
        copyShowBtn.innerText = newCopyShowInnerValue;

    })





