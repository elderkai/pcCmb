
var options = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.'
  };
  var money1 = new CountUp('money1', 0, 150, 0, 3, options);
  var money2 = new CountUp('money2', 0, 2700, 0, 3, options);
  var money3 = new CountUp('money3', 0, 200, 0, 3, options);
  var money4 = new CountUp('money4', 0, 1200, 0, 3, options);
  money1.start();
  money2.start();
  money3.start();
  money4.start();
  