class MyDate {
    constructor(value) {
        this.value = new Date(value);
    }

    showDate() {
        var dates = [
            "Первое", "Второе", "Третье", "Четвёртое", "Пятое", "Шестое", "Седьмое", "Восьмое",
            "Девятое", "Десятое", "Одиннадцатое", "Двенадцатое", "Тринадцатое", "Четырнадцатое",
            "Пятнадцатое", "Шестнадцатое", "Семнадцатое", "Восемнадцатое", "Девятнадцатое",
            "Двадцатое", "Двадцать первое", "Двадцать второе", "Двадцать третье",
            "Двадцать четвёртое", "Двадцать пятое", "Двадцать шестое", "Двадцать седьмое",
            "Двадцать восьмое", "Двадцать девятое", "Тридцатое", "Тридцать первое"
        ];

        var months = [
            "Января",
            "Февраля",
            "Марта",
            "Апреля",
            "Мая",
            "Июня",
            "Июля",
            "Августа",
            "Сентября",
            "Октября",
            "Ноября",
            "Декабря",
        ];
        return (
            dates[this.value.getDate()-1] + " " + months[this.value.getMonth()].toLowerCase()
        );
    }

    isFuture() {
        const current = new Date();
        //alert(this.value.getFullYear() + "/" + current.getFullYear())
        if (this.value.getFullYear() > current.getFullYear()) {return true;}
        else if (this.value.getFullYear() == current.getFullYear()) {
            if (this.value.getMonth() > current.getMonth()) {return true;}
            else if (this.value.getMonth() == current.getMonth()) {
                if (this.value.getDate() > current.getDate()) {return true;}
                else {return false;}
            }
            else {return false;}
        }
        else {return false;}
    }

    isLeapYear() {
        let c = this.value.getFullYear();
        if (c % 400 == 0) {return true;}
        else if (c % 100 == 0) {return false;}
        else if (c % 4 == 0) {return true;}
        else {return false;}
    }

    nextDay() {
        let day = this.value;
        let dayA = new Date(day++ + 86400000);
        return dayA;
    }

  }