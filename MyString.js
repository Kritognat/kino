class MyString{
    constructor(value) {
    this.value = String(value);
  }

    remove(index) {
        let temp = "";
        if (index < 0) { temp = this.value; }
        else if (index == 0) {
            temp = this.value.substring(1);
        }
        else if (index == this.length - 1) {
            temp = this.value.substring(0, index);
        }
        else {
            temp += this.value.substring(0, index);
            temp += this.value.substring(index+1);
        }
        this.value = temp;
    }

    insert(index, sign) {
        let temp = "";
        if (index <= 0) { 
            temp += sign;
            temp += this.value;
        }
        else if (index >= this.length) {
            temp += this.value;
            temp += sign;
        }
        else {
            temp += this.value.substring(0, index);
            temp += sign;
            temp += this.value.substring(index+1);
        }
        this.value = temp;
    }

    trimSign() {
        let temp = this.value;
        let lim = temp.length;
        for (let i = 0; i < lim; i++) {
            if (temp[i] == temp[i+1] && temp[i+1] != "") {
                {
                    let temp2 = "";
       
                    temp2 += temp.substring(0, i+1);
                    temp2 += temp.substring(i+2);
                    temp = temp2;
                }
                i--;
                lim--;
                //console.log("+" + i + "-" + lim + ":" + temp);
            }
            //console.log(i + "-" + lim + ":" + temp);
        }
        this.value = temp;
    }
    
    toggle() {
        let temp = this.value;
        let res = "";
        let lim = temp.length;
        for (let i = 0; i < lim; i++) {
            if (temp[i].toUpperCase() == temp[i]) {
                let n = temp[i].toLowerCase();
                res += n;
            }
            else {
                let n = temp[i].toUpperCase();
                res += n;
            }
        }
        this.value = res;
    }

    counter(sign) {
        let temp = this.value;
        let c = 0;
        let lim = temp.length;
        for (let i = 0; i < lim; i++) {
            if (temp[i] == sign) {
                c++;
            }
        }
        return c;
    }
}