class myDate extends Date {
    constructor() {
      super();
    }
  
    getFormattedDate() {
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return (
        this.getDate() + "-" + months[this.getMonth()] + "-" + this.getFullYear()
      );
    }
  }