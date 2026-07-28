PROGRAM CLAUDE4
VAR
	// 1号机过压信号
	Comp1_Overpressure: BOOL;
	// 1号机过温信号
	Comp1_Overtemp: BOOL;
	// 1号机油位低信号
	Comp1_Oil_Low: BOOL;
	// 1号机变频器故障信号
	Comp1_VFD_Fault: BOOL;
	// 急停信号，硬件常闭
	E_Stop: BOOL;
	// 1号机故障锁存
	Comp1_Fault: BOOL;
	// 2号机过压信号
	Comp2_Overpressure: BOOL;
	// 2号机过温信号
	Comp2_Overtemp: BOOL;
	// 2号机油位低信号
	Comp2_Oil_Low: BOOL;
	// 2号机变频器故障信号
	Comp2_VFD_Fault: BOOL;
	// 2号机故障锁存
	Comp2_Fault: BOOL;
	// 1号机为主机状态
	Comp1_Is_Lead: BOOL := TRUE;
	// 1号机电机运行状态
	Comp1_Motor_Run: BOOL;
	// 2号机为主机状态
	Comp2_Is_Lead: BOOL := FALSE;
	// 2号机电机运行状态
	Comp2_Motor_Run: BOOL;
	// 主机运行状态映射
	Lead_Running: BOOL;
	// 系统压力低于下限信号
	Pressure_Low: BOOL;
	// 主机加压需求激活状态
	Demand_Active: BOOL;
	// 需求持续定时器实例
	Ton_Demand_Persist: TON;
	// 需求持续判定设定值
	Time_Demand_Persist_Set: TIME;
	// 需求持续超时状态
	Demand_Persist_Timeout: BOOL;
	// 需求持续当前经过时间
	Time_Demand_Persist_Elapsed: TIME;
	// 2号机运行请求锁存
	Comp2_Run_Request: BOOL;
	// 1号机运行请求锁存
	Comp1_Run_Request: BOOL;
	// 1号机手动强制启动
	Comp1_Manual_Force: BOOL;
	// 2号机手动强制启动
	Comp2_Manual_Force: BOOL;
	// 系统压力达到上限信号
	Pressure_High: BOOL;
	// 1号机停机待定状态
	Comp1_Stop_Pending: BOOL;
	// 2号机停机待定状态
	Comp2_Stop_Pending: BOOL;
	// 1号机卸载延时定时器实例
	Ton_Comp1_Unload: TON;
	// 卸载延时设定值
	Time_Unload_Delay_Set: TIME;
	// 1号机卸载延时完成状态
	Comp1_Unload_Delay_Done: BOOL;
	// 1号机卸载延时当前经过时间
	Time_Comp1_Unload_Elapsed: TIME;
	// 2号机卸载延时定时器实例
	Ton_Comp2_Unload: TON;
	// 2号机卸载延时完成状态
	Comp2_Unload_Delay_Done: BOOL;
	// 2号机卸载延时当前经过时间
	Time_Comp2_Unload_Elapsed: TIME;
	// 1号机最小停机时间定时器实例
	Tof_Comp1_Min_Stop: TOF;
	// 最小停机时间设定值
	Time_Min_Stop_Set: TIME;
	// 1号机最小停机时间维持状态
	Comp1_Min_Stop_Active: BOOL;
	// 1号机最小停机时间当前经过时间
	Time_Comp1_Min_Stop_Elapsed: TIME;
	// 2号机最小停机时间定时器实例
	Tof_Comp2_Min_Stop: TOF;
	// 2号机最小停机时间维持状态
	Comp2_Min_Stop_Active: BOOL;
	// 2号机最小停机时间当前经过时间
	Time_Comp2_Min_Stop_Elapsed: TIME;
	// 1号机最小停机时间闭锁状态
	Comp1_Min_Stop_Block: BOOL;
	// 2号机最小停机时间闭锁状态
	Comp2_Min_Stop_Block: BOOL;
	// 1号机加载延时定时器实例
	Ton_Comp1_Load: TON;
	// 加载延时设定值
	Time_Load_Delay_Set: TIME;
	// 1号机加载延时完成状态
	Comp1_Load_Delay_Done: BOOL;
	// 1号机加载延时当前经过时间
	Time_Comp1_Load_Elapsed: TIME;
	// 2号机加载延时定时器实例
	Ton_Comp2_Load: TON;
	// 2号机加载延时完成状态
	Comp2_Load_Delay_Done: BOOL;
	// 2号机加载延时当前经过时间
	Time_Comp2_Load_Elapsed: TIME;
	// 1号机加载输出
	Comp1_Loaded: BOOL;
	// 2号机加载输出
	Comp2_Loaded: BOOL;
	// 1号机运行时间轮换定时器实例
	Ton_Comp1_Runtime: TON;
	// 轮换周期设定值
	Time_Rotate_Interval_Set: TIME;
	// 1号机运行超时状态
	Comp1_Runtime_Timeout: BOOL;
	// 1号机运行时间当前经过时间
	Time_Comp1_Runtime_Elapsed: TIME;
	// 2号机运行时间轮换定时器实例
	Ton_Comp2_Runtime: TON;
	// 2号机运行超时状态
	Comp2_Runtime_Timeout: BOOL;
	// 2号机运行时间当前经过时间
	Time_Comp2_Runtime_Elapsed: TIME;
	// 1号机轮换待定锁存
	Comp1_Rotate_Pending: BOOL;
	// 2号机轮换待定锁存
	Comp2_Rotate_Pending: BOOL;
	// 系统故障报警输出
	System_Alarm: BOOL;
	// 故障复位按钮
	Reset_Button: BOOL;
END_VAR
VAR
	r_trig_24691662: R_TRIG;
END_VAR



(* generate 区段1 【segmentId segment-58692735-1784878387474】 code start *)
IF (Comp1_Overpressure OR Comp1_Overtemp OR Comp1_Oil_Low OR Comp1_VFD_Fault OR E_Stop) THEN
 Comp1_Fault:=TRUE;
END_IF
(* generate 区段1 【segmentId segment-58692735-1784878387474】 code end *)
    

(* generate 区段2 【segmentId segment-77695586-1784878387481】 code start *)
IF (Comp2_Overpressure OR Comp2_Overtemp OR Comp2_Oil_Low OR Comp2_VFD_Fault OR E_Stop) THEN
 Comp2_Fault:=TRUE;
END_IF
(* generate 区段2 【segmentId segment-77695586-1784878387481】 code end *)
    

(* generate 区段3 【segmentId segment-48433156-1784878387488】 code start *)
Lead_Running:=((Comp1_Is_Lead AND Comp1_Motor_Run) OR (Comp2_Is_Lead AND Comp2_Motor_Run));
(* generate 区段3 【segmentId segment-48433156-1784878387488】 code end *)
    

(* generate 区段4 【segmentId segment-22174037-1784878387494】 code start *)
Demand_Active:=Pressure_Low AND Lead_Running;
(* generate 区段4 【segmentId segment-22174037-1784878387494】 code end *)
    

(* generate 区段5 【segmentId segment-45200955-1784878387498】 code start *)
IF Demand_Active THEN
 Ton_Demand_Persist(IN:=Demand_Active,PT:=Time_Demand_Persist_Set,Q=>Demand_Persist_Timeout,ET=>Time_Demand_Persist_Elapsed);
END_IF
(* generate 区段5 【segmentId segment-45200955-1784878387498】 code end *)
    

(* generate 区段6 【segmentId segment-46164105-1784878387502】 code start *)
IF Demand_Persist_Timeout AND Comp1_Is_Lead AND (NOT Comp2_Fault) THEN
 Comp2_Run_Request:=TRUE;
END_IF
(* generate 区段6 【segmentId segment-46164105-1784878387502】 code end *)
    

(* generate 区段7 【segmentId segment-91274155-1784878387507】 code start *)
IF Demand_Persist_Timeout AND Comp2_Is_Lead AND (NOT Comp1_Fault) THEN
 Comp1_Run_Request:=TRUE;
END_IF
(* generate 区段7 【segmentId segment-91274155-1784878387507】 code end *)
    

(* generate 区段8 【segmentId segment-16019609-1784878387512】 code start *)
IF ((Pressure_Low AND Comp1_Is_Lead AND (NOT Comp1_Fault)) OR Comp1_Manual_Force OR (Pressure_Low AND Comp2_Fault AND (NOT Comp1_Fault))) THEN
 Comp1_Run_Request:=TRUE;
END_IF
(* generate 区段8 【segmentId segment-16019609-1784878387512】 code end *)
    

(* generate 区段9 【segmentId segment-61610548-1784878387521】 code start *)
IF ((Pressure_Low AND Comp2_Is_Lead AND (NOT Comp2_Fault)) OR Comp2_Manual_Force OR (Pressure_Low AND Comp1_Fault AND (NOT Comp2_Fault))) THEN
 Comp2_Run_Request:=TRUE;
END_IF
(* generate 区段9 【segmentId segment-61610548-1784878387521】 code end *)
    

(* generate 区段10 【segmentId segment-63222478-1784878387530】 code start *)
IF Pressure_High AND Comp1_Motor_Run THEN
 Comp1_Run_Request:=FALSE;
END_IF
(* generate 区段10 【segmentId segment-63222478-1784878387530】 code end *)
    

(* generate 区段11 【segmentId segment-42468918-1784878387534】 code start *)
IF Pressure_High AND Comp2_Motor_Run THEN
 Comp2_Run_Request:=FALSE;
END_IF
(* generate 区段11 【segmentId segment-42468918-1784878387534】 code end *)
    

(* generate 区段12 【segmentId segment-43185187-1784878387538】 code start *)
IF Comp1_Fault THEN
 Comp1_Run_Request:=FALSE;
END_IF
(* generate 区段12 【segmentId segment-43185187-1784878387538】 code end *)
    

(* generate 区段13 【segmentId segment-29610111-1784878387541】 code start *)
IF Comp2_Fault THEN
 Comp2_Run_Request:=FALSE;
END_IF
(* generate 区段13 【segmentId segment-29610111-1784878387541】 code end *)
    

(* generate 区段14 【segmentId segment-24700844-1784878387544】 code start *)
Comp1_Stop_Pending:= (NOT Comp1_Run_Request) AND Comp1_Motor_Run;
(* generate 区段14 【segmentId segment-24700844-1784878387544】 code end *)
    

(* generate 区段15 【segmentId segment-31238879-1784878387548】 code start *)
Comp2_Stop_Pending:= (NOT Comp2_Run_Request) AND Comp2_Motor_Run;
(* generate 区段15 【segmentId segment-31238879-1784878387548】 code end *)
    

(* generate 区段16 【segmentId segment-81742240-1784878387552】 code start *)
IF Comp1_Stop_Pending THEN
 Ton_Comp1_Unload(IN:=Comp1_Stop_Pending,PT:=Time_Unload_Delay_Set,Q=>Comp1_Unload_Delay_Done,ET=>Time_Comp1_Unload_Elapsed);
END_IF
(* generate 区段16 【segmentId segment-81742240-1784878387552】 code end *)
    

(* generate 区段17 【segmentId segment-49343347-1784878387556】 code start *)
IF Comp2_Stop_Pending THEN
 Ton_Comp2_Unload(IN:=Comp2_Stop_Pending,PT:=Time_Unload_Delay_Set,Q=>Comp2_Unload_Delay_Done,ET=>Time_Comp2_Unload_Elapsed);
END_IF
(* generate 区段17 【segmentId segment-49343347-1784878387556】 code end *)
    

(* generate 区段18 【segmentId segment-67990575-1784878387560】 code start *)
IF Comp1_Motor_Run THEN
 Tof_Comp1_Min_Stop(IN:=Comp1_Motor_Run,PT:=Time_Min_Stop_Set,Q=>Comp1_Min_Stop_Active,ET=>Time_Comp1_Min_Stop_Elapsed);
END_IF
(* generate 区段18 【segmentId segment-67990575-1784878387560】 code end *)
    

(* generate 区段19 【segmentId segment-89960123-1784878387564】 code start *)
IF Comp2_Motor_Run THEN
 Tof_Comp2_Min_Stop(IN:=Comp2_Motor_Run,PT:=Time_Min_Stop_Set,Q=>Comp2_Min_Stop_Active,ET=>Time_Comp2_Min_Stop_Elapsed);
END_IF
(* generate 区段19 【segmentId segment-89960123-1784878387564】 code end *)
    

(* generate 区段20 【segmentId segment-42009160-1784878387568】 code start *)
Comp1_Min_Stop_Block:=Comp1_Min_Stop_Active AND (NOT Comp1_Motor_Run) ;
(* generate 区段20 【segmentId segment-42009160-1784878387568】 code end *)
    

(* generate 区段21 【segmentId segment-25668553-1784878387572】 code start *)
Comp2_Min_Stop_Block:=Comp2_Min_Stop_Active AND (NOT Comp2_Motor_Run) ;
(* generate 区段21 【segmentId segment-25668553-1784878387572】 code end *)
    

(* generate 区段22 【segmentId segment-35832530-1784878387576】 code start *)
IF Comp1_Run_Request AND (NOT Comp1_Fault) AND (NOT E_Stop) AND (NOT Comp1_Min_Stop_Block) THEN
 Comp1_Motor_Run:=TRUE;
END_IF
(* generate 区段22 【segmentId segment-35832530-1784878387576】 code end *)
    

(* generate 区段23 【segmentId segment-20142604-1784878387582】 code start *)
IF Comp2_Run_Request AND (NOT Comp2_Fault) AND (NOT E_Stop) AND (NOT Comp2_Min_Stop_Block) THEN
 Comp2_Motor_Run:=TRUE;
END_IF
(* generate 区段23 【segmentId segment-20142604-1784878387582】 code end *)
    

(* generate 区段24 【segmentId segment-62330234-1784878387588】 code start *)
IF Comp1_Stop_Pending AND Comp1_Unload_Delay_Done THEN
 Comp1_Motor_Run:=FALSE;
END_IF
(* generate 区段24 【segmentId segment-62330234-1784878387588】 code end *)
    

(* generate 区段25 【segmentId segment-56307528-1784878387592】 code start *)
IF Comp2_Stop_Pending AND Comp2_Unload_Delay_Done THEN
 Comp2_Motor_Run:=FALSE;
END_IF
(* generate 区段25 【segmentId segment-56307528-1784878387592】 code end *)
    

(* generate 区段26 【segmentId segment-25419116-1784878387596】 code start *)
IF Comp1_Motor_Run THEN
 Ton_Comp1_Load(IN:=Comp1_Motor_Run,PT:=Time_Load_Delay_Set,Q=>Comp1_Load_Delay_Done,ET=>Time_Comp1_Load_Elapsed);
END_IF
(* generate 区段26 【segmentId segment-25419116-1784878387596】 code end *)
    

(* generate 区段27 【segmentId segment-20241160-1784878387600】 code start *)
IF Comp2_Motor_Run THEN
 Ton_Comp2_Load(IN:=Comp2_Motor_Run,PT:=Time_Load_Delay_Set,Q=>Comp2_Load_Delay_Done,ET=>Time_Comp2_Load_Elapsed);
END_IF
(* generate 区段27 【segmentId segment-20241160-1784878387600】 code end *)
    

(* generate 区段28 【segmentId segment-97180006-1784878387604】 code start *)
Comp1_Loaded:=Comp1_Motor_Run AND Comp1_Load_Delay_Done AND (NOT Comp1_Stop_Pending) ;
(* generate 区段28 【segmentId segment-97180006-1784878387604】 code end *)
    

(* generate 区段29 【segmentId segment-93759351-1784878387609】 code start *)
Comp2_Loaded:=Comp2_Motor_Run AND Comp2_Load_Delay_Done AND (NOT Comp2_Stop_Pending) ;
(* generate 区段29 【segmentId segment-93759351-1784878387609】 code end *)
    

(* generate 区段30 【segmentId segment-49901739-1784878387614】 code start *)
IF Comp1_Motor_Run THEN
 Ton_Comp1_Runtime(IN:=Comp1_Motor_Run,PT:=Time_Rotate_Interval_Set,Q=>Comp1_Runtime_Timeout,ET=>Time_Comp1_Runtime_Elapsed);
END_IF
(* generate 区段30 【segmentId segment-49901739-1784878387614】 code end *)
    

(* generate 区段31 【segmentId segment-42077393-1784878387618】 code start *)
IF Comp2_Motor_Run THEN
 Ton_Comp2_Runtime(IN:=Comp2_Motor_Run,PT:=Time_Rotate_Interval_Set,Q=>Comp2_Runtime_Timeout,ET=>Time_Comp2_Runtime_Elapsed);
END_IF
(* generate 区段31 【segmentId segment-42077393-1784878387618】 code end *)
    

(* generate 区段32 【segmentId segment-58224592-1784878387622】 code start *)
IF Comp1_Runtime_Timeout THEN
 Comp1_Rotate_Pending:=TRUE;
END_IF
(* generate 区段32 【segmentId segment-58224592-1784878387622】 code end *)
    

(* generate 区段33 【segmentId segment-62861277-1784878387625】 code start *)
IF Comp2_Runtime_Timeout THEN
 Comp2_Rotate_Pending:=TRUE;
END_IF
(* generate 区段33 【segmentId segment-62861277-1784878387625】 code end *)
    

(* generate 区段34 【segmentId segment-41950136-1784878387628】 code start *)
IF Comp1_Rotate_Pending AND Comp1_Is_Lead AND (NOT Comp1_Motor_Run) THEN
 Comp2_Is_Lead:=TRUE;
END_IF
IF Comp1_Rotate_Pending AND Comp1_Is_Lead AND (NOT Comp1_Motor_Run) THEN
 Comp1_Is_Lead:=FALSE;
END_IF
IF Comp1_Rotate_Pending AND Comp1_Is_Lead AND (NOT Comp1_Motor_Run) THEN
 Comp1_Rotate_Pending:=FALSE;
END_IF
(* generate 区段34 【segmentId segment-41950136-1784878387628】 code end *)
    

(* generate 区段35 【segmentId segment-64345635-1784878387635】 code start *)
IF Comp2_Rotate_Pending AND Comp2_Is_Lead AND (NOT Comp2_Motor_Run) THEN
 Comp1_Is_Lead:=TRUE;
END_IF
IF Comp2_Rotate_Pending AND Comp2_Is_Lead AND (NOT Comp2_Motor_Run) THEN
 Comp2_Is_Lead:=FALSE;
END_IF
IF Comp2_Rotate_Pending AND Comp2_Is_Lead AND (NOT Comp2_Motor_Run) THEN
 Comp2_Rotate_Pending:=FALSE;
END_IF
(* generate 区段35 【segmentId segment-64345635-1784878387635】 code end *)
    

(* generate 区段36 【segmentId segment-82628507-1784878387642】 code start *)
System_Alarm:=(Comp1_Fault OR Comp2_Fault);
(* generate 区段36 【segmentId segment-82628507-1784878387642】 code end *)
    

(* generate 区段37 【segmentId segment-84719177-1784878387646】 code start *)
r_trig_24691662(CLK:=Reset_Button);
IF r_trig_24691662.Q AND (NOT E_Stop) THEN
 Comp1_Fault:=FALSE;
END_IF
IF r_trig_24691662.Q AND (NOT E_Stop) THEN
 Comp2_Fault:=FALSE;
END_IF
(* generate 区段37 【segmentId segment-84719177-1784878387646】 code end *)
    
END_PROGRAM