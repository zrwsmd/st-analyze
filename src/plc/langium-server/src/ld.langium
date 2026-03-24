grammar St

entry St:

   (program+=Program | types_alias+=Alias | types_union+=Unions_List |
   types_struct+=Structs_List |types_enum+=StEnum | function_block+=FunctionBlock |st_function+=StFunction|itface+=Interface
   )*


;

Program:
  'PROGRAM' name=VarEnchanceDecl
    (inputs+=Inputs_List_single
         stStatements=Statement_list)*
         'END_PROGRAM'
     ;

StFunction:
    'FUNCTION' name=Identifier ':' variable_type=Native_Type_Name
     (((varInputs+=VarInput)|(varOutputs+=VarOutput)|(varLocals+=VarLocal))*
      (statementList+=Statement_list_single) )*
    'END_FUNCTION'
;

ReqParams:
 param=Identifier ':'  typeName=Native_Type_Name;

Interface:
    'INTERFACE' name=VarEnchanceDecl ('EXTENDS' extender=[Interface:VarEnchanceDecl])?
    (methods+=Methods)*
    // (statements+=Statements)*
    'END_INTERFACE'
;

Methods:
    'METHOD' (modifier=MethodModifier)? name=VarEnchanceDecl  ('('  (reqParams+=ReqParams (',')?)* ')')?  ':' variable_type=Native_Type_Name
   inputs+=Inputs_List
    // (statements+=Statements)*
    statementList=Statement_list
    'END_METHOD'
;

MethodModifier returns string:
    'PRIVATE' | 'PUBLIC' | 'PROTECTED' | 'INTERNAL'
;

VarEnchanceDecl returns string:
  Identifier|OuterName;

OuterName returns string:
  (Cache_type_name|Time_type_name|Date_type_name|Bool_Result_type_name) (Integer|Identifier)?;

FunctionBlock:
    'FUNCTION_BLOCK' ('PUBLIC' | 'INTERNAL')? ('FINAL')? name=Identifier
 //('EXTENDS' extender=[FunctionBlock:Identifier])? ('IMPLEMENTS' implementer=[Interface:Identifier])?
     (((varInputs+=VarInput)|(varOutputs+=VarOutput)|(varLocals+=VarLocal))*
     (methods+=Methods)*
      (statementList+=Statement_list_single) )*

    // (statements+=Statements)*
    'END_FUNCTION_BLOCK'
;


Inputs_List infers InputsList:
	(definition=DefinitionKeyword (modifiers=Modifier)*
		((items += Var_Decl_Init))*
	'END_VAR')*
;

Inputs_List_single infers InputsListSingle:
	definition=DefinitionKeyword (modifiers=Modifier)*
		((items += Var_Decl_Init))*
	'END_VAR'
;

VarInput: 'VAR_INPUT' (items += Var_Decl_Init)* 'END_VAR';
VarOutput: 'VAR_OUTPUT' (items += Var_Decl_Init)* 'END_VAR';
VarLocal: 'VAR' (items += Var_Decl_Init)* 'END_VAR';


Structs_List infers StructsList:
'TYPE'
	name=Identifier
    ':'
    'STRUCT'
    	(items += Struct_Var_Decl_Init)*
    'END_STRUCT'
'END_TYPE'
;

Struct_Var_Decl_Init returns NamedElement :
	{infer Struct_Var_Decl_Init} variables=VarEnchanceDecl (',' nextVariables+=VarEnchanceDecl)* ('AT' Direct_variable_prefix)? ':'
	typeName=Native_Type_Name
	(':=' initialValue=Constant)? ';'
;


Var_Decl_Init infers VarDeclarationInit:
	variables=VarEnchanceDecl (',' nextVariables+=VarEnchanceDecl)* ('AT' Direct_variable_prefix)? ':'
	typeName=Native_Type_Name
	(':=' initialValue=Constant)? ';'
;

Unions_List infers UnionsList:
'TYPE'
    name=VarEnchanceDecl
    ':'
    'UNION'
    	(items += Var_Decl_Init)*
    'END_UNION'
'END_TYPE'
;


Alias:
 'TYPE' aliasName=VarEnchanceDecl ':' refName=VarEnchanceDecl 'END_TYPE'
;

StEnum:
 'TYPE' name=VarEnchanceDecl ':' '(' enum+=Enum (',' enum+=Enum)* ')' 'END_TYPE'
;

Enum:
    variable_name=VarEnchanceDecl (':=' assignValue=Integer)?
;



DefinitionKeyword returns string:
    'VAR' | 'VAR_INPUT' | 'VAR_OUTPUT' | 'VAR_IN_OUT' | 'VAR_TEMP' | 'VAR_EXTERNAL' | 'VAR_GLOBAL';

Modifier returns string:
    'CONSTANT' | 'RETAIN'|'NON_RETAIN'
;


ComposeElement:
  Structs_List|FunctionBlock|StFunction;

Variable_Primary infers PrimaryVariable:
	name=Identifier
;

Native_Type_Name:
		Integer_type_name=Signed_integer_type_name | Unsigned_integer_type_name=Unsigned_integer_type_name |Bool_type_name=Bool_type_name|String_type_name=String_type_name|
     Bit_string_type_name=Bit_string_type_name | Real_type_name=Real_type_name |Time_type_name=Time_type_name|Date_type_name=Date_type_name|
     Date_And_time_type_name=Date_And_time_type_name|Time_Of_Day_type_name=Time_Of_Day_type_name|
     Array_liters|Identifier=[ComposeElement:Identifier]|Cache_type_name=Cache_type_name
;




Constant:
    constant= (Prefixed_integer_literal | Prefixed_bit_string_literal | Real_literal_or_signed_int | Nonprefix_integer_literal | Boolean_literal | Character_string | Time_literal|Arr_string);

/* Numeric constants declarations */
Signed_Integer returns number:
('+'|'-')? Integer;

Unsigned_Integer returns number:
Integer;

Nonprefix_integer_literal returns number:
(Binary_integer | Octal_integer | Hex_integer);

Prefixed_integer_literal returns number:
(Integer_type_name '#') (Signed_Integer | Binary_integer | Octal_integer | Hex_integer);

Prefixed_bit_string_literal returns number:
(Bit_string_type_name '#') (Unsigned_Integer | Binary_integer | Octal_integer | Hex_integer);

Integer_type_name returns number:
Unsigned_integer_type_name| Signed_integer_type_name ;

Real_literal_or_signed_int returns number:
(Real_type_name '#')? Signed_Integer ('.' Integer (Exponent)?)?;

/* Boolean literals */
Boolean_literal returns string:
// should be ((BOOL '#')? ( 1 | 0)) | 'TRUE' | 'FALSE'
// FIXME how to prevent parsing 0 and 1 as digits?
Bool_Result_type_name;

/* Character string literals  */
Character_string returns string:
Single_byte_character_string | Double_byte_character_string;

Arr_string:
'[' (arrElements+=Constant (',')*)*  ']'
;
/* Time literals */
Time_literal returns string:
Duration | Time_of_day | Date_and_time | Date_type;

Array_liters:
 'ARRAY' '[' (arrayElemets+=Array_element (',')*)+ ']' 'OF' dataType=Native_Type_Name;

Array_element:
left=Integer '..'  right=Integer;

/* Time literals - duration  */
Duration returns string:
(Time_type_name|'T') '#' ('-')? Interval;

Interval returns string:
Days | Hours | Minutes | Seconds | Milliseconds;

Milliseconds returns string:
(TMilliseconds);

Seconds returns string:
(TSeconds) (Milliseconds)?;

Minutes returns string:
(TMinutes) (Seconds)?;

Hours returns string:
(THours) (Minutes)?;

Days returns string:
(TDays) (Hours)?;

/* Time literals - time of the day */
Time_of_day returns string:
(Time_Of_Day_type_name | 'TOD') '#' Daytime;

Daytime returns string:
Day_hour ':' Day_minute ':' Day_second;

Day_hour returns string:
Integer;

Day_minute returns string:
Integer;

Day_second returns string:
Integer ('.' Integer)?; // This is a verbose fixed point rule

Date_type returns string:
(Date_type_name) '#' Date_literal;

Date_literal returns string:
Year '-' Month '-' Day;

Year returns string:
Integer;

Month returns string:
Integer;

Day returns string:
Integer;

Date_and_time returns string:
(Date_And_time_type_name | 'DT') '#' Date_literal ('-' Daytime)?;


/* Structured Text */
/* Expressions */
Expression:
    Or_expression;

Or_expression infers Expression:
    Xor_expression ({infer Expression.left=current} operator=('OR') right=Xor_expression)*;

Xor_expression infers Expression:
    And_expression ({infer Expression.left=current} operator=('XOR') right=And_expression)*;

And_expression infers Expression:
    Comparison_expression ({infer Expression.left=current} operator=('AND' | '&') right=Comparison_expression)*;

Comparison_expression infers Expression:
    Equ_expression ({infer Expression.left=current} operator=( '<>' | '=') right=Equ_expression)*;

Equ_expression infers Expression:
    Add_expression ({infer Expression.left=current} operator=('<=' | '>=' | '<' | '>')  right=Add_expression)*;

Add_expression infers Expression:
    Term ({infer Expression.left=current} operator=('+' | '-')  right=Term)*;

Term infers Expression:
    Power_expression ({infer Expression.left=current} operator=('*' | '/' | 'MOD' )  right=Power_expression)*;

Power_expression infers Expression:
    MemberCall ({infer Expression.left=current} operator=('**')  right=MemberCall)*;

Unary_expression infers Expression:
    operator=('-' | 'NOT') value=Expression;

// primary_expression = constant | enumerated_value | variable | "(" expression ")" | function_name "(" param_assignment {"," param_assignment} ")";
Primary_Expression infers Expression:
Constant
| '(' Expression ')'
| FunctionExpression
| VariableExpression
| Unary_expression
|FeatureCall;//IF POWERSTATUS:=true THEN ....


FunctionExpression infers Expression:
    {infer FunctionExpression} (prefixValidateElement=Integer)?
    refFunctionName=RefFunctionOrBlockName  params=Invoke_subrule (suffixValidateElement=Integer)?;


type Universe=NamedElement|StFunction;

RefFunctionOrBlockName:
   refFunctionName=[Universe:Identifier]|Cache_type_name=Cache_type_name;

VariableExpression infers Expression:
    {infer VariableExpression} variable=[NamedElement:VarEnchanceDecl];

/* ST statements */
Statement_list:
statements+=Statement (statements+=Statement)*;

Statement_list_single:
statements=Statement;

Statement:
((Selection_statement | Function_invoke_or_assign_statement (';') | Iteration_statement))? ;

Action_call_statement:
actionName=[Universe:VarEnchanceDecl];


Function_invoke_or_assign_statement:
statement=(Function_invoke_or_assign | ReturnParse) ;

Function_invoke_or_assign:
(assignPrefix=AssignPrefix|id=MemberCall) (assign=Assignment_subrule | params+=Invoke_subrule)*;

AssignPrefix:
  varEnchanceDecl=[Universe:VarEnchanceDecl];

ReturnParse:
  returnSign='RETURN' (returnValue=Expression)?
  ;

//('(' (params=Identifier (',')? )* ')')? 为了匹配fb.method,e.g. tempConverter.ConvertCelsiusToFahrenheit(celsiusTemp)
//expression=Expression加问号是为了匹配function0_4 := not function0_4;这种的，它不是像a:=a+b这种，所以Expression需要加()*
Assignment_subrule:
':=' (expression=Expression)* ;

Invoke_subrule:
'(' (parameters+=Param_assignment (',' parameters+=Param_assignment)*)?  ')';

Param_assignment:
(ParamName=VarEnchanceDecl InputOrOutputSign=(':='|'=>'))? (ParamValue=Expression)*;

/* Selection statements */
//selection_statement = if_statement | case_statement;
Selection_statement:
if=If_statement| case=Case_statement;

//if_statement = "IF" expression "THEN" statement_list {"ELSIF" expression "THEN" statement_list} ["ELSE" statement_list] "END_IF";
If_statement:
'IF' ifCondition=Expression 'THEN' ifStatement=Statement_list ('ELSIF' elsifConditions+=Expression 'THEN' elsifStatements=Statement_list)* ('ELSE' elseStatement=Statement_list)? 'END_IF';

//case_statement = "CASE" expression "OF" case_element {case_element} ["ELSE" statement_list] "END_CASE";
Case_statement:
'CASE' caseExpression=Expression 'OF' caseElements+=Case_element (caseElements+=Case_element)* ('ELSE' elseStatements=Statement_list)? 'END_CASE';

//case_element = case_list ":" statement_list;
Case_element:
caseList=Case_list ':' statements=Statement_list_single;

//case_list = case_list_element {"," case_list_element};
Case_list:
caseListElement+=Case_list_element (',' caseListElement+=Case_list_element)*;

//case_list_element = subrange | signed_integer | enumerated_value;
Case_list_element:
(numCaseStart=Signed_Integer ('..' numericCaseEnd=Signed_Integer)?) | (enumCase=IdentifierEnumeratedCase);

/* Iteration statements */
Iteration_statement:
statement=(For_statement | While_statement | Repeat_statement | 'EXIT');

For_statement:
'FOR' controlVariable=[NamedElement:Identifier] ':=' forList=For_list 'DO' statementList=Statement_list 'END_FOR';

For_list:
forExpr=Expression 'TO' toExpr=Expression ('BY' byExpr=Expression)?;

While_statement:
'WHILE' whileExpr=Expression 'DO' statementList=Statement_list 'END_WHILE';

Repeat_statement:
'REPEAT' statementList=Statement_list 'UNTIL' untilExpr=Expression 'END_REPEAT';


/* Derived typename */

//variable = direct_variable | symbolic_variable;


//location_prefix = "I" | "Q" | "M";
//size_prefix = NIL | "X" | "B" | "W" | "D" | "L";
//direct_variable = "%" location_prefix size_prefix integer {"." integer};
Direct_variable returns string:
Direct_variable_prefix Integer ('.' Integer)?;

MemberCall infers Expression:
    prior=Primary_Expression
	({infer MemberCall.previous=current}
        // Member call with function call
        ("." element=[NamedElement:Identifier] (
		explicitOperationCall?='('
		(
		    arguments+=Expression (',' arguments+=Expression)*
		)?
		')')?
        // Chained function call
        | (
		explicitOperationCall?='('
		(
		    arguments+=Expression (',' arguments+=Expression)*
		)?
		')'))
    )*;

type NamedElement =Struct_Var_Decl_Init|VarDeclarationInit ;

FeatureCall infers Expression:
	{infer MemberCall}
	(element=[NamedElement:Identifier])
    // Optional function call after referencing an element
    (explicitOperationCall?='('
	(
	    arguments+=Expression (',' arguments+=Expression)*
	)?
	')')?;

// symbolic_variable = variable_name | multi_element_variable;
// Variable_any_symbolic parses Multi-element variables and variable_name




//variable_name = identifier;
Variable_name returns string:
Identifier;

//subscript_list = "[" subscript {"," subscript} "]";
Subscript_list:
'[' Subscript (',' Subscript)* ']';

//subscript = expression;
Subscript infers Expression:
Expression;


terminal Signed_integer_type_name: /\b(?:SINT|INT|DINT|LINT)\b/i;
terminal Cache_type_name: /\b(?:RTC|INTEGRAL|DERIVATIVE|PID|RAMP|HYSTERESIS|F_TRIG|RS|R_TRIG|SR|BOOL_TO_SINT|BOOL_TO_INT|BOOL_TO_DINT|BOOL_TO_LINT|BOOL_TO_USINT|BOOL_TO_UINT|BOOL_TO_UDINT|BOOL_TO_ULINT|BOOL_TO_REAL|BOOL_TO_LREAL|BOOL_TO_TIME|BOOL_TO_DATE|BOOL_TO_TOD|BOOL_TO_DT|BOOL_TO_STRING|BOOL_TO_BYTE|BOOL_TO_WORD|BOOL_TO_DWORD|BOOL_TO_LWORD|SINT_TO_BOOL|SINT_TO_INT|SINT_TO_DINT|SINT_TO_LINT|SINT_TO_USINT|SINT_TO_UINT|SINT_TO_UDINT|SINT_TO_ULINT|SINT_TO_REAL|SINT_TO_LREAL|SINT_TO_TIME|SINT_TO_DATE|SINT_TO_TOD|SINT_TO_DT|SINT_TO_STRING|SINT_TO_BYTE|SINT_TO_WORD|SINT_TO_DWORD|SINT_TO_LWORD|INT_TO_BOOL|INT_TO_SINT|INT_TO_DINT|INT_TO_LINT|INT_TO_USINT|INT_TO_UINT|INT_TO_UDINT|INT_TO_ULINT|INT_TO_REAL|INT_TO_LREAL|INT_TO_TIME|INT_TO_DATE|INT_TO_TOD|INT_TO_DT|INT_TO_STRING|INT_TO_BYTE|INT_TO_WORD|INT_TO_DWORD|INT_TO_LWORD|DINT_TO_BOOL|DINT_TO_SINT|DINT_TO_INT|DINT_TO_LINT|DINT_TO_USINT|DINT_TO_UINT|DINT_TO_UDINT|DINT_TO_ULINT|DINT_TO_REAL|DINT_TO_LREAL|DINT_TO_TIME|DINT_TO_DATE|DINT_TO_TOD|DINT_TO_DT|DINT_TO_STRING|DINT_TO_BYTE|DINT_TO_WORD|DINT_TO_DWORD|DINT_TO_LWORD|LINT_TO_BOOL|LINT_TO_SINT|LINT_TO_INT|LINT_TO_DINT|LINT_TO_USINT|LINT_TO_UINT|LINT_TO_UDINT|LINT_TO_ULINT|LINT_TO_REAL|LINT_TO_LREAL|LINT_TO_TIME|LINT_TO_DATE|LINT_TO_TOD|LINT_TO_DT|LINT_TO_STRING|LINT_TO_BYTE|LINT_TO_WORD|LINT_TO_DWORD|LINT_TO_LWORD|USINT_TO_BOOL|USINT_TO_SINT|USINT_TO_INT|USINT_TO_DINT|USINT_TO_LINT|USINT_TO_UINT|USINT_TO_UDINT|USINT_TO_ULINT|USINT_TO_REAL|USINT_TO_LREAL|USINT_TO_TIME|USINT_TO_DATE|USINT_TO_TOD|USINT_TO_DT|USINT_TO_STRING|USINT_TO_BYTE|USINT_TO_WORD|USINT_TO_DWORD|USINT_TO_LWORD|UINT_TO_BOOL|UINT_TO_SINT|UINT_TO_INT|UINT_TO_DINT|UINT_TO_LINT|UINT_TO_USINT|UINT_TO_UDINT|UINT_TO_ULINT|UINT_TO_REAL|UINT_TO_LREAL|UINT_TO_TIME|UINT_TO_DATE|UINT_TO_TOD|UINT_TO_DT|UINT_TO_STRING|UINT_TO_BYTE|UINT_TO_WORD|UINT_TO_DWORD|UINT_TO_LWORD|UDINT_TO_BOOL|UDINT_TO_SINT|UDINT_TO_INT|UDINT_TO_DINT|UDINT_TO_LINT|UDINT_TO_USINT|UDINT_TO_UINT|UDINT_TO_ULINT|UDINT_TO_REAL|UDINT_TO_LREAL|UDINT_TO_TIME|UDINT_TO_DATE|UDINT_TO_TOD|UDINT_TO_DT|UDINT_TO_STRING|UDINT_TO_BYTE|UDINT_TO_WORD|UDINT_TO_DWORD|UDINT_TO_LWORD|ULINT_TO_BOOL|ULINT_TO_SINT|ULINT_TO_INT|ULINT_TO_DINT|ULINT_TO_LINT|ULINT_TO_USINT|ULINT_TO_UINT|ULINT_TO_UDINT|ULINT_TO_REAL|ULINT_TO_LREAL|ULINT_TO_TIME|ULINT_TO_DATE|ULINT_TO_TOD|ULINT_TO_DT|ULINT_TO_STRING|ULINT_TO_BYTE|ULINT_TO_WORD|ULINT_TO_DWORD|ULINT_TO_LWORD|REAL_TO_BOOL|REAL_TO_SINT|REAL_TO_INT|REAL_TO_DINT|REAL_TO_LINT|REAL_TO_USINT|REAL_TO_UINT|REAL_TO_UDINT|REAL_TO_ULINT|REAL_TO_LREAL|REAL_TO_TIME|REAL_TO_DATE|REAL_TO_TOD|REAL_TO_DT|REAL_TO_STRING|REAL_TO_BYTE|REAL_TO_WORD|REAL_TO_DWORD|REAL_TO_LWORD|LREAL_TO_BOOL|LREAL_TO_SINT|LREAL_TO_INT|LREAL_TO_DINT|LREAL_TO_LINT|LREAL_TO_USINT|LREAL_TO_UINT|LREAL_TO_UDINT|LREAL_TO_ULINT|LREAL_TO_REAL|LREAL_TO_TIME|LREAL_TO_DATE|LREAL_TO_TOD|LREAL_TO_DT|LREAL_TO_STRING|LREAL_TO_BYTE|LREAL_TO_WORD|LREAL_TO_DWORD|LREAL_TO_LWORD|TIME_TO_SINT|TIME_TO_INT|TIME_TO_DINT|TIME_TO_LINT|TIME_TO_USINT|TIME_TO_UINT|TIME_TO_UDINT|TIME_TO_ULINT|TIME_TO_REAL|TIME_TO_LREAL|TIME_TO_STRING|TIME_TO_BYTE|TIME_TO_WORD|TIME_TO_DWORD|TIME_TO_LWORD|DATE_TO_SINT|DATE_TO_INT|DATE_TO_DINT|DATE_TO_LINT|DATE_TO_USINT|DATE_TO_UINT|DATE_TO_UDINT|DATE_TO_ULINT|DATE_TO_REAL|DATE_TO_LREAL|DATE_TO_STRING|DATE_TO_BYTE|DATE_TO_WORD|DATE_TO_DWORD|DATE_TO_LWORD|TOD_TO_SINT|TOD_TO_INT|TOD_TO_DINT|TOD_TO_LINT|TOD_TO_USINT|TOD_TO_UINT|TOD_TO_UDINT|TOD_TO_ULINT|TOD_TO_REAL|TOD_TO_LREAL|TOD_TO_STRING|TOD_TO_BYTE|TOD_TO_WORD|TOD_TO_DWORD|TOD_TO_LWORD|DT_TO_SINT|DT_TO_INT|DT_TO_DINT|DT_TO_LINT|DT_TO_USINT|DT_TO_UINT|DT_TO_UDINT|DT_TO_ULINT|DT_TO_REAL|DT_TO_LREAL|DT_TO_STRING|DT_TO_BYTE|DT_TO_WORD|DT_TO_DWORD|DT_TO_LWORD|STRING_TO_BOOL|STRING_TO_SINT|STRING_TO_INT|STRING_TO_DINT|STRING_TO_LINT|STRING_TO_USINT|STRING_TO_UINT|STRING_TO_UDINT|STRING_TO_ULINT|STRING_TO_REAL|STRING_TO_LREAL|STRING_TO_TIME|STRING_TO_DATE|STRING_TO_TOD|STRING_TO_DT|STRING_TO_BYTE|STRING_TO_WORD|STRING_TO_DWORD|STRING_TO_LWORD|BYTE_TO_BOOL|BYTE_TO_SINT|BYTE_TO_INT|BYTE_TO_DINT|BYTE_TO_LINT|BYTE_TO_USINT|BYTE_TO_UINT|BYTE_TO_UDINT|BYTE_TO_ULINT|BYTE_TO_REAL|BYTE_TO_LREAL|BYTE_TO_TIME|BYTE_TO_DATE|BYTE_TO_TOD|BYTE_TO_DT|BYTE_TO_STRING|BYTE_TO_WORD|BYTE_TO_DWORD|BYTE_TO_LWORD|WORD_TO_BOOL|WORD_TO_SINT|WORD_TO_INT|WORD_TO_DINT|WORD_TO_LINT|WORD_TO_USINT|WORD_TO_UINT|WORD_TO_UDINT|WORD_TO_ULINT|WORD_TO_REAL|WORD_TO_LREAL|WORD_TO_TIME|WORD_TO_DATE|WORD_TO_TOD|WORD_TO_DT|WORD_TO_STRING|WORD_TO_BYTE|WORD_TO_DWORD|WORD_TO_LWORD|DWORD_TO_BOOL|DWORD_TO_SINT|DWORD_TO_INT|DWORD_TO_DINT|DWORD_TO_LINT|DWORD_TO_USINT|DWORD_TO_UINT|DWORD_TO_UDINT|DWORD_TO_ULINT|DWORD_TO_REAL|DWORD_TO_LREAL|DWORD_TO_TIME|DWORD_TO_DATE|DWORD_TO_TOD|DWORD_TO_DT|DWORD_TO_STRING|DWORD_TO_BYTE|DWORD_TO_WORD|DWORD_TO_LWORD|LWORD_TO_BOOL|LWORD_TO_SINT|LWORD_TO_INT|LWORD_TO_DINT|LWORD_TO_LINT|LWORD_TO_USINT|LWORD_TO_UINT|LWORD_TO_UDINT|LWORD_TO_ULINT|LWORD_TO_REAL|LWORD_TO_LREAL|LWORD_TO_TIME|LWORD_TO_DATE|LWORD_TO_TOD|LWORD_TO_DT|LWORD_TO_STRING|LWORD_TO_BYTE|LWORD_TO_WORD|LWORD_TO_DWORD|TRUNC|BCD_TO_USINT|BCD_TO_UINT|BCD_TO_UDINT|BCD_TO_ULINT|USINT_TO_BCD|UINT_TO_BCD|UDINT_TO_BCD|ULINT_TO_BCD|DATE_AND_TIME_TO_TIME_OF_DAY|DATE_AND_TIME_TO_DATE|ABS|SQRT|LOG|ASIN|ACOS|ATAN|SIN|COS|TAN|ADD_TIME|ADD_TOD_TIME|ADD_DT_TIME|MULTIME|SUB_TIME|SUB_DATE_DATE|SUB_TOD_TIME|SUB_TOD_TOD|SUB_DT_TIME|SUB_DT_DT|DIVTIME|SHL|SHR|ROR|ROL|CONCAT_DATE_TOD|CTU_DINT|CTU_LINT|CTU_UDINT|CTU_ULINT|CTD_DINT|CTD_LINT|CTD_UDINT|CTD_ULIN|CTUD_DINT|CTUD_LINT|CTUD_UDINT|CTUD_ULINT|TP|TON|TOF|CTUD|CTU|CTD|SEMA)\b/i;
terminal Real_type_name: /\b(?:LREAL|REAL)\b/i;
terminal Unsigned_integer_type_name: /\b(?:USINT|UINT|UDINT|ULINT)\b/i;
terminal Bit_string_type_name: /\b(?:BYTE|WORD|DWORD|LWORD)\b/i;
terminal Bool_Result_type_name: /\b(?:TRUE|FALSE)\b/i;
terminal Bool_type_name: /\b(?:BOOL)\b/i;
terminal String_type_name: /\b(?:STRING)\b/i;
terminal Date_And_time_type_name: /\b(?:DATE_AND_TIME)\b/i;
terminal Time_Of_Day_type_name: /\b(?:TIME_OF_DAY)\b/i;
terminal Time_type_name: /\b(?:TIME)\b/i;
terminal Date_type_name: /\b(?:DATE)\b/i;
terminal Identifier: /[_a-zA-Z][\w_]*/;

// numeric tokens
terminal fragment Exponent_prefix : /[Ee]/;
terminal Exponent: Exponent_prefix ('+'|'-')? Integer;
terminal Binary_integer: /\b2#(0|1)(0|1|(_))*\b/;
terminal Hex_integer: /\b16#([0-9aAbBcCdDeEfF])([0-9aAbBcCdDeEfF]|(_))*\b/;
terminal Octal_integer: /\b8#([0-7])([0-7]|(_))*\b/;
// string tokens
terminal Single_byte_character_string: /(')(\\.|[^'])*(')/;
terminal Double_byte_character_string: /(")(\\.|[^"])*(")/;
// time tokens
terminal TMilliseconds: (Underscore)? Fixed_point /[mM][sS]/;
terminal TMinutes: (Underscore)? Fixed_point /[mM]/;
terminal TSeconds: (Underscore)? Fixed_point /[sS]/;
terminal TDays: (Underscore)? Fixed_point /[dD]/;
terminal THours: Fixed_point /[hH]/;


// identifier characters
terminal fragment Underscore: /_/;
terminal fragment Letters: /[a-zA-Z]+/;

terminal fragment Fixed_point : Integer ('.' Integer)?;
terminal fragment Location_prefix: ('I' | 'Q' | 'M');
terminal fragment Size_prefix: ('X' | 'B' | 'W' | 'D' | 'L');
terminal ADDRESS: '%'  ('I' | 'Q' | 'M')  ('X'? | 'B' | 'W' | 'D' | 'L') Digits ('.' Digits)*;
terminal Digits: /[0-9]+/;
terminal Direct_variable_prefix: '%' Location_prefix Size_prefix (Integer ('.' Integer)*)*;
terminal Integer: Digits ((Underscore)? Digits)*;
// hack - IdentifierEnumeratedCase uses positive lookahead for "," and ":"
terminal IdentifierEnumeratedCase: ((Underscore (Digits | Letters))| Letters) ((Underscore)? (Digits | Letters))*
/(?=(,\s*([_A-Za-z]\w*|([+\-]?[0-9][0-9_]*\s*(\.\.\s*[+\-]?[0-9][0-9_]*)?))\s*)*\:\s+)/;


// hidden
hidden terminal WS: /\s+/;
hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal ML_COMMENT_ST: /\(\*[\s\S]*?\*\)/;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;
