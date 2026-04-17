



// TYPE
// 	China: STRUCT
// 	 provinceId, qw, iuy, bb: INT;
// 	 province: Province;
// 	 a: CTU;
// END_STRUCT
// END_TYPE


PROGRAM Test
VAR
	a:AXIS_REF;
	b:SMC_TrackAxis;
    c:SMC_TP;
	d:TON;
	mode    : RunMode;
	libEnum:MC_BUFFER_MODE;
	e:Province;
	f:MC_Direction;
END_VAR
VAR_IN_OUT
	Variable: BOOL; (* Comment *)
END_VAR

mode:=RunMode#MANUAL;
libEnum:=MC_BUFFER_MODE#Aborting;
e.provinceId:=12;
f:=MC_Direction#negative;
	
mode:=RunMode#STOP;

libEnum:=MC_BUFFER_MODE#BlendingPrevious;


c.delta_time:= T#3h2m33s11ms;


mode:=RunMode#MANUAL;
e.city.region.regionName:='Beijing';





END_PROGRAM

