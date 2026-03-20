TYPE
    ColorEnum : (
        Red := 0,
        Green := 1,
        Blue := 2,
        Yellow := 3
    )
END_TYPE
  TYPE COLOR1 : (red, blue) END_TYPE
PROGRAM EnumProgram

VAR
     state: INT := 9;
     province: Province;
   
END_VAR
END_PROGRAM

FUNCTION_BLOCK EnumFB
VAR
     ccc,yuo: R_TRIG; // 定义一个实数类型的变量 celsius，用于存储摄氏温度
    dd: REAL:=123.89874141;
    ee:CTU;
    ff:BOOL;
    dtTimeNow:DATE_AND_TIME:=DT#2021-10-19-13:53:00;

END_VAR
END_FUNCTION_BLOCK