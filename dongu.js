function numberprint() {

    for (let x = 0; x < 100; x++) {

        console.log(x);
    }

}

//numberprint();


function numberprint1() {

    for (let x = 0; x < 100; x++) {
        if (x % 2 == 0) {
            console.log(x);
        }
    }

}

function numberprint2() {
    for (let x = 0; x < 100; x++) {
        if (x % 3 == 0) {
            console.log(x);
        }
    }
}


function numberprint3() {
    for (let x = 0; x < 100; x++) {
        if (x % 2 == 0) {
            console.log("sayi=" + x);
        }
    }
}

function numberprint4() {
    for (let x = 0; x < 100; x++) {
        if (x % 2 == 1) {
            console.log("tek sayi=" + x);
        }

        if (x % 2 == 0) {
            console.log("cift sayi=" + x);

        }

    }
}

function numberprint5() {
    for (let x = 0; x < 100; x++) {

        if (x % 15 == 0) {

            console.log("muzbuz=" + x);

        }


        else if (x % 5 == 0) {
            console.log("buz=" + x);
        }



        else if (x % 3 == 0) {
            console.log("muz=" + x);
        }

        else {
            console.log(x);
        }



    }
}

function numberprint6() {

    var rakamlar = [];
    for (let x = 0; x < 100; x++) {
        rakamlar.push(x);
    }

    for (let x = 0; x < rakamlar.length; x++) {
        console.log("rakam=" + rakamlar[x]);

    }
}

//numberprint6();

function numberprint7() {

    var ulkeler = ["italy", "spain", "france"];
    console.log(ulkeler[0]);
    console.log(ulkeler[2]);



}

//numberprint7();

function numberprint8() {

    var ulkeler = ["france", "germany", "uk", "portugal", "netherlands", "swiss", "grecee", "romania", "avusturia", "russia", "usa", "canada", "japan", "india", "south africa"]
    for (let x = 0; x < ulkeler.length; x++) {
        if (ulkeler[x].startsWith("a")) {
            console.log("country name " + ulkeler[x])
        }



    }
}

//numberprint8();

function numberprint9() {

    var ulkeler = ["france", "germany", "uk", "portugal", "netherlands", "swiss", "grecee", "romania", "avusturia", "russia", "usa", "canada", "japan", "india", "south africa"]
    for (let x = 0; x < 5; x++) {
        console.log("country name " + ulkeler[x])
    }

}

//numberprint9();

function numberprint10() {

    var ulkeler = ["france", "germany", "uk", "portugal", "netherlands", "swiss", "grecee", "romania", "avusturia", "russia", "usa", "canada", "japan", "india", "south africa"]
    for (let x = 0; x < ulkeler.length; x++) {
        if (x % 2 == 0) {
            console.log("country name " + ulkeler[x])
        }
    }

}

//numberprint10() ;

function numberprint11() {

    var ulkeler = ["france", "germany", "uk", "portugal", "netherlands", "swiss", "grecee", "romania", "avusturia", "russia", "usa", "canada", "japan", "india", "south africa"]
    for (let x = 0; x < ulkeler.length; x++) {
        if (x % 3 == 0) {
            console.log("country name " + ulkeler[x])
        }
    }

}

//numberprint11() ;

function numberprint12() {

    var ulkeler = [
        {
            countryName: "Somalia",
            continent: "Africa",
            Ni: 300,
            rich: false

        },

        {
            countryName: "Germany",
            continent: "Europe",
            Ni: 9000,
            rich: true

        },

        {
            countryName: "China",
            continent: "Asia",
            Ni: 3000,
            rich: true



        },

        {
            countryName: "Canada",
            continent: "America",
            Ni: 7000,
            rich: true



        },

        {
            countryName: "South Africa",
            continent: "Africa",
            Ni: 800,
            rich: false



        },

        {
            countryName: "Colombia",
            continent: "America",
            Ni: 1000,
            rich: false



        },

        {
            countryName: "Greece",
            continent: "Europe",
            Ni: 7000,
            rich: true



        },

        {
            countryName: "Egypt",
            continent: "Africa",
            Ni: 200,
            rich: false



        }

    ];




    console.log("geliri 5000 den uzeri olan avrupa ulkeleri");

    for (let x = 0; x < ulkeler.length; x++) {
        var ulkebilgisi = ulkeler[x];
        if (ulkebilgisi.Ni > 5000 && ulkebilgisi.continent == "Europe") {
            console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx")
            console.log("ulke adi=" + ulkebilgisi.countryName)
            console.log("gelir=" + ulkebilgisi.Ni)
            console.log("kita=" + ulkebilgisi.continent)
            console.log("xxxxxxxxxxxxxxxxxxxxxxxxxx");
        }
    }



    //if (ulkebilgisi.rich == false) {
    //console.log(ulkebilgisi.countryName)

    //console.log("Country Name=" + ulkebilgisi.countryName);
    //console.log("Continent=" + ulkebilgisi.continent);
}




//numberprint12();



function numberprint13() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

    let positiveNumbers =[]
    let negativeNumbers =[]
   
    for (let x = 0; x < numbers.length; x++) {
        let number = numbers[x];
        if (number > 0) {
            positiveNumbers.push(number);
        }


        else if (number < 0) {
            negativeNumbers.push(number);
        }
    }
    
    let positiveTotal = findTotal (positiveNumbers);
    let negativeTotal = findTotal (negativeNumbers);

    console.log(positiveTotal)
    console.log(negativeTotal)
}


numberprint13() ;

function findTotal(array) {
    let total = 0 ;
    for (let x = 0; x<array.length; x++ ) {
        let number = array [x] ;
        total = total + number;
    }
    return total;

}

findTotal([1,2,3]);

