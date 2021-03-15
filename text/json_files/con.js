function myFun() {

    let json = [
        {
            "resources": [
                { "id": "one" },
                { "id": "two" }
            ]
        },
        {
            "tabs": [
                { "id": "three" },
                { "id": "four" }
            ]
        }
    ];
    for (var i = 0; i < json.length; i++) {
        console.log(json[i]);
        let keys = json[i];
        console.log(keys.id);
    }
    // console.log(json);
    // var res = "";
    // var i;
    // for (i = 0; i < json.length; i++) {

    //     console.log(json[i]);
    //     let item = json[i].tabs;
    //     for (var n = 0; n < item.length; n++) {
    //         console.log(item[n]);
    //     }

    // }
    // let array = [
    // { "one": "id", "two": "id", "three": "id" }];
    // for (let i = 0; i < array.length; i++) {
    //     console.log(array[i]);
    // }
    // let myArray = [
    //     {
    //         "child":
    //             ["one", "two", "three", "four"]
    //     },
    //     {
    //         "child":
    //             ["five", "six", "seven", "eight"]
    //     }];
    // for (var i = 0; i < myArray.length; i++) {
    //     console.log(myArray[i]);
    //     let childArray = myArray[i].child;
    //     for (var j = 0; j < childArray.length; j++) {
    //         console.log(childArray[j]);

    //     }
    // }

}