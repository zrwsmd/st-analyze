PROGRAM PLC_PRG
VAR
     state: INT;
     result: INT := 19999;
    result2: STRING := 'qw';
    china,china2: China;
    a: WORD := 65137;
    voltage: REAL := 1235.754289;
    tempConverter: TemperatureConverter2;
    t, o: TIME_OF_DAY;
    b: ARRAY [9..10] OF INT := [1, 0, 1, 1, 1];
    tHold: TIME:= T#3h2m33s11ms;
    dteStart: DATE:= DATE#2020-10-19;
    dtTimeNow: DATE_AND_TIME:= DT#2021-10-19-13:53:00;
    todTimer: TIME_OF_DAY:= TOD#08:08:59.555;
    t33:TON;
    testDateTime:DT:=DT#2024-04-16-23:33:00.22;
	testTod:TOD:=TOD#23:33:00.22;
    // o: DATE :=DATE#2021-10-19;
END_VAR

tempConverter.dd:=12.34;
 //voltage := tempConverter.ConvertCelsiusToFahrenheit365(12.357778); // 将摄氏温度转换为华氏温度
 china.province.city.region.regionName := '小店区';
// result := addNumbers(5, 7,8,9);
CASE state OF
1, 3, 5, 7, 8, 10, 12:
state := 12;
15..100:
state := 15;
ELSE
state := 18;
END_CASE

IF state > 10 THEN
state := 1 / 3;
ELSIF state > result THEN
state := state;
ELSE
state := 3;
END_IF

REPEAT
state := state + 1; // 每次循环计数器加1
// 在这里可以添加其他逻辑操作

UNTIL state >= 5 // 当计数器达到5时结束循环
END_REPEAT

WHILE a <> 0 DO
  b := b * 2;
  a := a - 1;
END_WHILE
FOR  state:= 0  TO 100 BY 2 DO
  state:=5+state;
  IF state>=100 THEN
    EXIT
  END_IF
END_FOR



END_PROGRAM