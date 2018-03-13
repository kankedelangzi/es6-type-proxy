let obj = {
    name: "",
    age: 1,
    gender: "male"
};

var person = new Proxy(obj, {

    set(trapTarget, key, value, receiver) {
        switch (key) {
            case "name":
                if (typeof value != "string")
                    throw new TypeError('必须是字符串');
                break;
            case "age":
                if (typeof value != "number")
                    throw new TypeError('年龄必须输入数字');
                else if( value > 150 || value <= 0){
                    throw new TypeError('请注意输入年龄范围');
                }
                break;
            case "gender":
                if(value != "male" && value != "famale")
                    throw new TypeError('性别必须是male 或famale');
                break;
            default:

        }
        return Reflect.set(trapTarget, key, value, receiver);
    }

});
