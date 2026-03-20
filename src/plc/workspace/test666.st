// PROGRAM test
//   VAR
//     axis_1 AT %IW0.0.402 : INT;
//     testSINT:SINT := 0;
//     testDINT:DINT := 0;
//   END_VAR
//   VAR
//     actualposition1 : LREAL;
//     test : LINT;

//     state : INT;
//     powerX : INT;
//     POWERSTATUS : BOOL;
//     nextposition : LREAL;
//     current_velocity : LREAL := 3600.123;
//   END_VAR
//   VAR 
//     acposition AT %ID0.0.24676.0 : DINT;
//     targetposition AT %QD0.0.24698.0 : DINT;
//     targetv AT %QD0.0.24831.0 : DINT;
//     controlword AT %QW0.0.24640.0 : UINT;
//     stateword AT %IW0.0.24641.0 : UINT;
//   END_VAR
//   VAR RETAIN
//     moveR : MC_MoveRelative;
//     cnt : UINT;
//     cnt_1 : UINT;
//   END_VAR
//   VAR
//     mc_setposition0 : MC_SetPosition;
//     mc_moveA : MC_MoveAbsolute;
//     resetA : MC_Reset;
//     asdasd : MC_Power;
//     mc_moveV : MC_MoveVelocity;
//     ada : MC_MoveVelocity;
//     ada0 : DINT;
//     ada1 : DINT;
//     ada2 : DINT;
//     ada3 : DINT;
//     ada4 : DINT;
//     ada5 : DINT;
//     asdas : DATE;
//     function0_2 : ARRAY [1..10] OF BOOL;
//     function0_3 : ARRAY [1..10,1..11] OF AXIS_REF;
//     function0_4 : BOOL;
//   END_VAR
//   VAR_INPUT
//     function0_5 : BOOL;
//     function0_6 : BOOL := true;
//     function0_7 : BOOL := true;
//     function0_8 : ARRAY [1..7,4..7] OF INT;
//     function0_10 : BOOL;
//   END_VAR
//   VAR
//     function0_13 : BOOL;
//   END_VAR
//   VAR CONSTANT
//     function0_14 : BOOL;
//     function0_15 : BOOL;
//     function0_16 : BOOL;
//     function0_17 : BOOL;
//   END_VAR
//   VAR RETAIN
//     function0_18 : BOOL;
//     function0_19 : BOOL;
//     function0_20 : BOOL;
//   END_VAR
//   VAR NON_RETAIN
//     function0_21 : BOOL;
//     function0_22 : BOOL;
//     function0_23 : BOOL;
//     function0_24 : BOOL;
//     function0_25 : BOOL;
//   END_VAR

//   VAR
//     function0_26 : BOOL;
//    
//   END_VAR
//   testSINT := testSINT + 1;
//   testDINT := testDINT + 1;
//   cnt_1 := cnt_1 + 1;
//   function0_4 := not function0_4;
//   readposition(
//        Axis := AXIS_1,
//        Enable := TRUE,
//        Position => actualposition1(LREAL));

//   fb_t();
