
var data = [
    {
        "id": "1",
        "name": "Lura Senger",
        "email": "Xander_Collier@yahoo.com"
    },
    {
        "id": "2",
        "name": "Wilburn Weber",
        "email": "Bennett_Kreiger11@yahoo.com"
    },
    {
        "id": "3",
        "name": "Tyrique Hahn",
        "email": "Juston.Altenwerth@yahoo.com"
    },
    {
        "id": "4",
        "name": "Lenny Bailey",
        "email": "Guiseppe_Hegmann@yahoo.com"
    },
    {
        "id": "5",
        "name": "Vladimir Keeling",
        "email": "Louisa_Walsh18@hotmail.com"
    },
    {
        "id": "6",
        "name": "Kellie Crona",
        "email": "Chandler_Abernathy@yahoo.com"
    },
    {
        "id": "7",
        "name": "Carolina White",
        "email": "Royal50@hotmail.com"
    },
    {
        "id": "8",
        "name": "Alfredo Conn",
        "email": "Clarabelle34@hotmail.com"
    },
    {
        "id": "9",
        "name": "Stan Shanahan",
        "email": "Lamar.McClure@hotmail.com"
    },
    {
        "id": "10",
        "name": "Marvin Fay",
        "email": "Osbaldo58@hotmail.com"
    },
    {
        "id": "11",
        "name": "Torrance Rau",
        "email": "Orin45@gmail.com"
    },
    {
        "id": "12",
        "name": "Harold Gutmann MD",
        "email": "Alyce.Stracke37@yahoo.com"
    },
    {
        "id": "13",
        "name": "Taryn Torphy",
        "email": "Dean_Breitenberg71@hotmail.com"
    },
    {
        "id": "14",
        "name": "Bryana Lang",
        "email": "Tatum.Ullrich@yahoo.com"
    },
    {
        "id": "15",
        "name": "Nyasia Green DDS",
        "email": "Dino83@gmail.com"
    },
    {
        "id": "16",
        "name": "Nasir Gerhold",
        "email": "Lilian_Bashirian8@hotmail.com"
    },
    {
        "id": "17",
        "name": "Raymundo Ritchie PhD",
        "email": "Antwan.Schoen15@yahoo.com"
    },
    {
        "id": "18",
        "name": "Delmer Marvin",
        "email": "Kiera62@yahoo.com"
    },
    {
        "id": "19",
        "name": "Rachel Wilkinson",
        "email": "Foster_Conroy@gmail.com"
    },
    {
        "id": "20",
        "name": "Gladys Howell",
        "email": "Constance.Labadie10@yahoo.com"
    },
    {
        "id": "21",
        "name": "Ciara Klocko",
        "email": "Harvey76@yahoo.com"
    },
    {
        "id": "22",
        "name": "Quentin O'Kon",
        "email": "Amely_Cummings2@yahoo.com"
    },
    {
        "id": "23",
        "name": "Ms. Gabriella Kunde",
        "email": "Lorenza_Cummerata@hotmail.com"
    },
    {
        "id": "24",
        "name": "Gerald Reilly",
        "email": "Lia_Konopelski@gmail.com"
    },
    {
        "id": "25",
        "name": "Brody Carter I",
        "email": "Colten.Wilderman90@hotmail.com"
    },
    {
        "id": "26",
        "name": "Alanis Klocko",
        "email": "Johathan.Champlin69@gmail.com"
    },
    {
        "id": "27",
        "name": "Caroline Miller",
        "email": "Delaney.Kozey74@gmail.com"
    },
    {
        "id": "28",
        "name": "Ms. Merritt McClure",
        "email": "Wendy.Zieme@gmail.com"
    },
    {
        "id": "29",
        "name": "Jovani Schoen",
        "email": "Norval_Zieme@hotmail.com"
    },
    {
        "id": "30",
        "name": "Berniece Bradtke",
        "email": "Okey.Fisher39@hotmail.com"
    }
]
var obj;
var value;
var para = document.createElement('p');
para.setAttribute('id', 'demo');


var table = document.createElement('table');
table.setAttribute('border', '2');
for (var j = 0; j < 2; j++) {
    var th = document.createElement('th');
    var a = document.createElement('a');
    if (j == 0) {
        a.setAttribute('onclick', "showData('Next')");
        a.innerHTML = 'Next';
    }
    if (j == 1) {
        a.setAttribute('onclick', "showData('Previous')");
        a.innerHTML = 'Previous';
    }
    a.setAttribute('href', '#');
    a.setAttribute('position', 'static');

    table.appendChild(th);
    th.appendChild(a);
}

for (var i = 0; i < 30; i++) {
    var th = document.createElement('th');
    var a = document.createElement('a');
    a.setAttribute('onclick', `showData(${i + 1})`);
    a.setAttribute('href', '#');
    a.innerHTML = i + 1;
    table.appendChild(th);
    th.appendChild(a);
}


document.body.append(table, para);

function showData(val) {
    if (val === 'Next' || val === 'Previous' || (val >= 1 && val <= 50)){
        if (val === 'Next') {
            obj = data[value];
        }
        else if (val === 'Previous') {
            obj = data[value - 2];
        }
        else {
            val = Number(val);
            obj = data[val - 1];
        }
        console.log(obj);
        var str = `Id:  ${obj.id}<br>Name:  ${obj.name}<br>Email:  ${obj.email}`;
        para.innerHTML = str;
        value = +(obj.id);
        console.log('value=' + value);
    }
}



