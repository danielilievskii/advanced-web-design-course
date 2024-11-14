Потребно е да се креира Sales Department алатка која ќе води евиденција за вработените во одредена компанија кои работат во продажба. За таа цел потребни се најпрво помошни класи. Employee е класа во која се чува името на вработениот, датумот на кој почнал да работи во копманијата, и основицата на платата. Класата SalesPerson наследува од класата Employee, со тоа што дополнително чува податоци за тоа во која географска област врши продажба, целта за вкупна придобивка од продажби која ја имал предвидено за последниот месец, листа од придобивки од продажби од последниот месец, и дали вработениот треба да биде мониториран или не (true/false)(на почеток никој вработен не треба да биде мониториран). Функции кои треба да се имплементираат во оваа класа:



Функција за успех -> печати каков успех постигнал вработениот последниот месец, и колку плата добил. Платата се пресметува на тој начин што на основницата се додава 20 % од вкупната придобивка од продажбите на тој вработен. Успехот се одредува на следниот начин:

- Доколку вработениот работи во компанијата помалку од една година, и:
  - Има постигнато помалку од 30 % од целта за последниот месец -> low success

  - Има постигнато барем 30 %, но помалку од 80 % -> medium success
  - Има постигнато барем 80 % -> high success
- Доколку вработениот работи во компанијата барем една година, и:
  - Има постигнато помалку од 50 % од целта за последниот месец -> low success
  - Има постигнато барем 50 %, но помалку од 90 % -> medium success
  - Има постигнато барем 90 % -> high success


toString -> метода за печатење во формат: Employee %name has %value % success rate and is/is not being monitored. Вредноста за стапка на успех е всушност колкав процент од целта за вкупна придобивка од продажби бил постигнат.



SalesDepartment е класа составена од листа на вработени кои работат во продажба, каде е потребно да се имплементираат следните функционалности:

- додади вработен (addEmployee): додавање на вработен во листата
- ажурирање на потреба за мониторирање на вработен (updateMonitoring): се утврдува потреба за мониторирање на вработен, доколку истиот има низок успех (low success). Одредувањето на успехот и кога има низок успех ви е дефинирано погоре.
- проверка за мониторирање на вработените (checkMonitoring()):  се проверуваат сите вработени со тоа што најпрво кај секој од нив соодветно се ажурира потребата за мониторирање, а потоа се печати нивниот успех и плата за последниот месец.
- пресметување на просечната стапка на успех за продажба во одредена географска област (successRate): за дадена географска област, се пресметува просечната стапка на успех, со тоа што се земаат во предвид само вработените кои немаат потреба за мониторирање. Пресметувањето на стапката на успех за одреден вработен ви е дефинирано погоре.
- печати (print()): печати го секој вработен од листата.

**For example:**

**Input**

var salesDepartment = new SalesDepartment();

var emp1 = new SalesPerson("Mark Smiths", new Date(2022, 8, 3), 20000, 5000, [400, 350, 500], "US");

var emp2 = new SalesPerson("Sandy Adams", new Date(2022, 5, 2), 22000, 7000, [500, 400, 600, 450, 550, 400, 350, 450], "Eastern Europe");

var emp3 = new SalesPerson("Bill Jonas", new Date(2022, 3, 1), 21000, 10000, [650, 700, 800, 750, 600, 750, 700, 800, 750, 800, 850], "US");

var emp4 = new SalesPerson("Sasha Denson", new Date(2021, 9, 1), 30000, 15000, [1200, 1500, 1350, 1300, 1400, 900], "US");

var emp5 = new SalesPerson("Chris Ree", new Date(2021, 7, 25), 27000, 14000, [850, 1000, 1150, 1050, 1100], "Eastern Europe");

var emp6 = new SalesPerson("Emily Lee", new Date(2020, 12, 2), 35000, 20000, [1700, 1850, 2000, 1900, 1950, 1800, 1750, 1900, 2000, 1950], "US");

salesDepartment.addEmployee(emp1);

salesDepartment.addEmployee(emp2);

salesDepartment.addEmployee(emp3);

salesDepartment.addEmployee(emp4);

salesDepartment.addEmployee(emp5);

salesDepartment.addEmployee(emp6);

salesDepartment.checkMonitoring();

console.log();

salesDepartment.print();

console.log();

salesDepartment.successRate("US");

**Result**

Mark Smiths has low success and a salary of 20250

Sandy Adams has medium success and a salary of 22740

Bill Jonas has medium success and a salary of 22630

Sasha Denson has medium success and a salary of 31530

Chris Ree has low success and a salary of 28030

Emily Lee has high success and a salary of 38760

Employee Mark Smiths has 25.00 % success rate and is being monitored.

Employee Sandy Adams has 52.86 % success rate and is not being monitored.

Employee Bill Jonas has 81.50 % success rate and is not being monitored.

Employee Sasha Denson has 51.00 % success rate and is not being monitored.

Employee Chris Ree has 36.79 % success rate and is being monitored.

Employee Emily Lee has 94.00 % success rate and is not being monitored.

The average success rate for US is 75.50 %
