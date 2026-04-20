



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
END_VAR
VAR_IN_OUT
	Variable: BOOL; (* Comment *)
END_VAR

mode := RunMode#MANUAL;
libEnum := MC_BUFFER_MODE#Aborting;
c.delta_time := T#3h2m33s11ms;
d.IN := 1;
e.city.region.regionName := 'Beijing';
f := MC_Direction#fastest;




mode:=RunMode#MANUAL;




END_PROGRAM

