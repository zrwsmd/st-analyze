



// TYPE
// 	China: STRUCT
// 	 provinceId, qw, iuy, bb: INT;
// 	 province: Province;
// 	 a: CTU;
// END_STRUCT
// END_TYPE


PROGRAM Test
VAR
	a: AXIS_REF;
	b: SMC_TrackAxis;
    c: SMC_TP;
	d: TON;
	mode: RunMode;
	libEnum: MC_BUFFER_MODE;
	e: Province;
	f: MC_Direction;
	g: China;
	h:INT;
	aa:sint;
END_VAR
VAR_IN_OUT
	Variable: BOOL; (* Comment *)
END_VAR

VAR_EXTERNAL
    gStart : BOOL;
    gCount : INT;
    gLamp  : BOOL;
	aa:TON;
END_VAR

IF GVL.gStart THEN
    GVL.gCount := GVL.gCount + 1;
END_IF;

IF GVL_1.aa.Q THEN
    GVL.gCount := GVL.gCount + 1;
END_IF;


mode := RunMode#MANUAL;
libEnum := MC_BUFFER_MODE#Aborting;
c.delta_time := T#3h2m33s11ms;
d.IN := 1;
e.city.region.regionName := 'Beijing';
f := MC_Direction#fastest;

e.city.cityId33:=123;
h:=-90;

aa:=0;








END_PROGRAM

