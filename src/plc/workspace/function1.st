FUNCTION addNumbers: INT
VAR
    state,k : INT := 11;
    bb : INT := 22;
    sum : INT;
END_VAR
VAR_INPUT
  c:INT;
END_VAR

FOR state := 0 TO 100 BY 2 DO
  state := state + state;
  IF state >= 100 THEN
    EXIT

  END_IF
END_FOR


 RETURN state+bb;


END_FUNCTION

