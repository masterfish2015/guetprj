var chapt2 = {};

$( document )
	.ready( function () {
		$( '#2_1_1_1_input_form' )
			.bootstrapValidator( {
				feedbackIcons: {
					valid: 'glyphicon glyphicon-ok',
					invalid: 'glyphicon glyphicon-remove',
					validating: 'glyphicon glyphicon-refresh'
				}
			} );
	} );

function showTable2_1() {
	var str = "<table class='table-bordered table-condensed table-striped'><caption>表2-1 普通平键的长度系列表（单位：mm）</caption><tr><th>L系列</th>";

	chapt2.key = chapt2.key || {};
	chapt2.key.length = [ 6, 8, 10, 12, 14, 16, 18, 20, 22, 25, 28, 32, 36, 40, 45, 50, 56, 63, 70, 80, 90, 100, 110, 125, 140, 160, 180, 200, 220, 250, 280, 320, 360, 400, 450, 500 ];

	for ( var i in chapt2.key.length ) {
		str += "<td>" + chapt2.key.length[ i ] + "</td>";
	}
	str += "</tr></table>";

	$( "#table2-1" )
		.html( str );
	$( "#search_key_length_btn" )
		.removeAttr( "disabled" );
	$( "#show_table_2_1_btn" )
		.attr( "disabled", "disabled" );
}

function searchKeyLength() {
	var inputHubLength = parseFloat( $( "#hub_length_text" )
		.val() );
	var x, y;
	for ( x = chapt2.key.length.length; x >= 0; x-- ) {
		if ( inputHubLength - chapt2.key.length[ x ] >= 5 ) {
			$( "#key_length_text" )
				.val( chapt2.key.length[ x ] );
			return;
		}
	}
	alert( "无法找到合适的数据" );
}

function showTable2_2() {
	var str = "<table class='table-bordered table-condensed table-striped'><caption>表2-2 普通V带轮德最小基准直径（单位：mm）</caption>";

	chapt2.v_tape = chapt2.v_tape || {};
	chapt2.v_tape.type = [ "Y", "Z", "A", "B", "C", "D", "E" ];
	chapt2.v_tape.dmin = [ 20, 50, 75, 125, 200, 355, 500 ];

	str += "<tr><th>型号</th>";
	for ( var i in chapt2.v_tape.type ) {
		str += "<td>" + chapt2.v_tape.type[ i ] + "</td>";
		$( "#v_type_text" )
			.append( "<option value ='" + i + "'>" + chapt2.v_tape.type[ i ] + "</option>" );
	}
	str += "</tr>";

	str += "<tr><th>最小基准直径dmin/mm</th>";
	for ( i in chapt2.v_tape.dmin ) {
		str += "<td>" + chapt2.v_tape.dmin[ i ] + "</td>";
	}
	str += "</tr>";

	$( "#table2-2" )
		.html( str );
	$( "#search_v_tape_dmin" )
		.removeAttr( "disabled" );
	$( "#show_table_2_2_btn" )
		.attr( "disabled", "disabled" );
}

function searchVTapeDmin() {
	var selection = parseInt( $( "#v_type_text" )
		.val() );
	$( "#v_dmin_text" )
		.val( chapt2.v_tape.dmin[ selection ] );
}

function showTable2_3() {
	var str = "<table class='table-bordered table-condensed table-striped'><caption>表2-3 链传动工作情况系数Ka</caption>";

	chapt2.chain = chapt2.chain || {};
	chapt2.chain.ka = [
        [ 1.0, 1.0, 1.2 ],
        [ 1.2, 1.3, 1.4 ],
        [ 1.4, 1.5, 1.7 ]
    ];
	chapt2.chain.working_machine_type = [ "平稳载荷", "中等冲击", "严重冲击" ];
	chapt2.chain.prime_mover_type = [ "内燃机-液力传动", "电动机或汽轮机", "内燃机-机械传动" ];

	str += "<tr><th rowspan='2' >工作机种类</th><th colspan='3'>动力种类</th></tr><tr>";
	for ( var i in chapt2.chain.prime_mover_type ) {
		$( "#prime_mover_type_select" )
			.append( "<option value='" + i + "'>" + chapt2.chain.prime_mover_type[ i ] + "</option>" );
		str += "<th>" + chapt2.chain.prime_mover_type[ i ] + "</th>";
	}
	str += "</tr>";

	for ( var row in chapt2.chain.ka ) {
		str += "<tr><th>" + chapt2.chain.working_machine_type[ row ] + "</th>";
		$( "#working_machine_type_select" )
			.append( "<option value='" + row + "'>" + chapt2.chain.working_machine_type[ row ] + "</option>" );
		for ( var col in chapt2.chain.ka[ row ] ) {
			str += "<td>" + chapt2.chain.ka[ row ][ col ] + "</td>";
		}
		str += "</tr>";
	}

	str += "</table>";
	$( "#table2-3" )
		.html( str );
	$( "#search_chain_working_condition_coefficient" )
		.removeAttr( "disabled" );
}

function searchChainWorkingConditionCoefficient() {
	var row = parseInt( $( "#working_machine_type_select" )
		.val() );
	var col = parseInt( $( "#prime_mover_type_select" )
		.val() );
	$( "#working_condition_coefficien_text" )
		.val( chapt2.chain.ka[ row ][ col ] );
}

function showTable2_4() {
	var str = "<table class='table-bordered table-condensed table-striped'><caption>表2-4 普通V带传动的工作情况系数Ka</caption>";

	chapt2.v_tape = chapt2.v_tape || {};

	chapt2.v_tape.startup_condition = [ "软起动", "负载起动" ];
	chapt2.v_tape.working_time = [ "<10", "10-16", ">16" ];
	chapt2.v_tape.working_condition = [ "载荷变动微小", "载荷变动小", "载荷变动较大", "载荷变动很大" ];
	chapt2.v_tape.ka = [
        [
            [ 1.0, 1.1, 1.2 ],
            [ 1.1, 1.2, 1.3 ],
            [ 1.2, 1.3, 1.4 ],
            [ 1.3, 1.4, 1.5 ]
        ],
        [
            [ 1.1, 1.2, 1.3 ],
            [ 1.2, 1.3, 1.4 ],
            [ 1.4, 1.5, 1.6 ],
            [ 1.5, 1.6, 1.8 ]
        ]
    ];

	var i, j, k;
	str += "<tr><th  rowspan='3'>工况</th>";
	for ( i = 0; i < 2; i++ ) {
		$( "#v_tape_startup_condition_select" )
			.append( "<option value='" + i + "'>" + chapt2.v_tape.startup_condition[ i ] + "</option>" );
		str += "<th colspan='3'>" + chapt2.v_tape.startup_condition[ 0 ] + "</th>";
	}
	str += "</tr><tr><th colspan='6'>每天工作小时数</th><tr>";

	for ( i = 0; i < 2; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			if ( i === 0 )
				$( "#v_tape_working_time_select" )
				.append( "<option value='" + j + "'>" + chapt2.v_tape.working_time[ j ] + "</option>" );
			str += "<th>" + chapt2.v_tape.working_time[ j ] + "</th>";
		}
	}
	str += "</tr>";

	for ( i = 0; i < chapt2.v_tape.working_condition.length; i++ ) {
		$( "#v_tape_working_condition_select" )
			.append( "<option value='" + i + "'>" + chapt2.v_tape.working_condition[ i ] + "</option>" );
		str += "<tr><th>" + chapt2.v_tape.working_condition[ i ] + "</th>";
		for ( j = 0; j < 2; j++ ) {
			for ( k = 0; k < 3; k++ ) {
				str += "<td>" + chapt2.v_tape.ka[ j ][ i ][ k ] + "</td>";
			}
		}
		str += "</tr>";
	}
	str += "</table";
	$( "#table2-4" )
		.html( str );
	$( "#search_v_tape_working_condition_coefficient" )
		.removeAttr( "disabled" );
}

function searchVTapeWorkingConditionCoefficient() {
	var i, j, k;
	i = parseInt( $( "#v_tape_working_condition_select" )
		.val() );
	j = parseInt( $( "#v_tape_startup_condition_select" )
		.val() );
	k = parseInt( $( "#v_tape_working_time_select" )
		.val() );
	$( "#v_tape_working_condition_coefficien_text" )
		.val( chapt2.v_tape.ka[ j ][ i ][ k ] );
}

function showTable2_5() {
	var str = "<table class='table-bordered table-condensed table-striped'><caption>表2-5 渐开线圆柱齿轮标准模数系列表</caption>";

	chapt2.gear = chapt2.gear || {};
	chapt2.gear.modulus = [
        [ 0.1, 0.12, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.8, 1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 25, 32, 40, 50 ],
        [ 0.35, 0.7, 0.9, 1.75, 2.25, 2.75, 3.25, 3.5, 3.75, 4.5, 5.5, 6.5, 7, 9, 11, 14, 18, 22, 28, 30, 36, 45 ]
    ];
	for ( var i = 0; i < 2; i++ ) {
		str += "<tr><th>" + "第" + ( i + 1 ) + "系列" + "</th>";
		for ( var j = 0; j < chapt2.gear.modulus[ i ].length; j++ ) {
			str += "<td>" + chapt2.gear.modulus[ i ][ j ] + "</td>";
		}
		str += "</tr>";
	}
	str += "</table>";
	$( "#table2-5" )
		.html( str );
	$( "#search_gear_modulus_btn" )
		.removeAttr( "disabled" );
	$( "#show_table_2_5_btn" )
		.attr( "disabled", "disabled" );;
}

function searchGearModulus() {
	//gear_standard_modulus_text
	var m = parseFloat( $( "#gear_modulus_text" )
		.val() );
	var i, j;
	if ( $( "#gear_only_first_series_checkbox" )[ 0 ].checked == true ) {
		//只用第一系列
		for ( i = 0; i < chapt2.gear.modulus[ 0 ].length; i++ ) {
			if ( m <= chapt2.gear.modulus[ 0 ][ i ] ) {
				$( "#gear_standard_modulus_text" )
					.val( chapt2.gear.modulus[ 0 ][ i ] );
				$( "#gear_series_text" )
					.val( "第一系列" );
				break;
			}
		}
	} else {
		var m1 = chapt2.gear.modulus[ 0 ][ 0 ],
			m2 = chapt2.gear.modulus[ 1 ][ 0 ];
		for ( i in chapt2.gear.modulus[ 0 ] ) {
			if ( m <= chapt2.gear.modulus[ 0 ][ i ] ) {
				m1 = chapt2.gear.modulus[ 0 ][ i ];
				break;
			}
		}
		for ( j in chapt2.gear.modulus[ 1 ] ) {
			if ( m <= chapt2.gear.modulus[ 1 ][ j ] ) {
				m2 = chapt2.gear.modulus[ 1 ][ j ];
				break;
			}
		}
		if ( m1 > m2 ) {
			m1 = m2;
			$( "#gear_series_text" )
				.val( "第二系列" );
		} else {
			$( "#gear_series_text" )
				.val( "第一系列" );
		}
		$( "#gear_standard_modulus_text" )
			.val( m1 );

	}
}

function showTable2_2_1_1() {
	chapt2.v_tape = chapt2.v_tape || {};
	chapt2.v_tape.cornerite_coefficient = {};
	chapt2.v_tape.cornerite_coefficient.alpha = [ 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180 ];
	chapt2.v_tape.cornerite_coefficient.ka = [ 0.69, 0.72, 0.74, 0.76, 0.78, 0.80, 0.82, 0.84, 0.86, 0.88, 0.89, 0.91, 0.92, 0.93, 0.95, 0.96, 0.98, 0.99, 1.00 ];
	var scatterChartData = {
		datasets: [ {
			label: "V 带包角系数",
			data: [],
			pointBorderWidth: 1,
			backgroundColor: "rgba(0,255,0,0.2)",
			pointBackgroundColor: "rgba(0,255,0,0.2)"
		}, {
			label: "查询的点",
			data: [],
			pointRadius: 5,
			showLine: false,
			backgroundColor: "rgba(255,0,0,0.7)",
			pointBackgroundColor: "rgba(255,0,0,0.7)"
		} ]
	};


	var div = $( "#2_2_1_1_table" );
	var str = "<table class='table-bordered table-condensed table-striped'><caption>表2-2-1-1 V带包角系数<i>K<sub>α</sub></i></caption>";

	str += "<tr><th><i>α</i></th>";
	for ( var i in chapt2.v_tape.cornerite_coefficient.alpha ) {
		str += "<td>" + chapt2.v_tape.cornerite_coefficient.alpha[ i ] + "</td>";
		scatterChartData.datasets[ 0 ].data.push( {
			x: chapt2.v_tape.cornerite_coefficient.alpha[ i ],
			y: chapt2.v_tape.cornerite_coefficient.ka[ i ]
		} );
	}
	str += "</tr>";

	str += "<tr><th><i>k<sub>α</sub></i></th>";
	for ( var i in chapt2.v_tape.cornerite_coefficient.ka ) {
		str += "<td>" + chapt2.v_tape.cornerite_coefficient.ka[ i ] + "</td>";
	}
	str += "</tr>";

	str += "</table>";
	div.html( str );
	//显示曲线
	var ctx = document.getElementById( "2_2_1_1_canvas" )
		.getContext( "2d" );

	window.scatterData1 = scatterChartData;
	window.myScatter = Chart.Scatter( ctx, {
		data: scatterChartData,
		options: {
			title: {
				display: true,
				text: 'V带包角系数'
			},
			scales: {
				xAxes: [ {
					position: 'bottom',
					gridLines: {
						zeroLineColor: "rgba(0,255,0,1)"
					},
					scaleLabel: {
						display: true,
						labelString: '包角'
					}
				} ],
				yAxes: [ {
					position: 'right',
					gridLines: {
						zeroLineColor: "rgba(0,255,0,1)"
					},
					scaleLabel: {
						display: true,
						labelString: '包角系数'
					}
				} ]
			}
		}
	} );
	$( "#show_table_2_2_1_1_btn" )
		.attr( "disabled", "disabled" );
	$( "#search_v_tape_Ka_btn" )
		.removeAttr( "disabled" );
}

function searchVTapeKa() {
	var alpha = parseFloat( $( "#v_tape_alpha_text" )
		.val() );
	var alphas = chapt2.v_tape.cornerite_coefficient.alpha;
	var kas = chapt2.v_tape.cornerite_coefficient.ka;
	var a1, a2, ka1, ka2, ka;
	var i, i1, i2;

	if ( alpha <= alphas[ 0 ] ) {
		i1 = 0;
		i2 = 1;
	} else if ( alpha >= alphas[ alphas.length - 1 ] ) {
		i1 = alphas.length - 2;
		i2 = alphas.length - 1;
	} else {
		for ( i in alphas ) {
			if ( alpha < alphas[ i ] ) {
				i1 = i - 1;
				i2 = i;
				break;
			}
		}
	}
	a1 = alphas[ i1 ];
	ka1 = kas[ i1 ];
	a2 = alphas[ i2 ];
	ka2 = kas[ i2 ];
	if ( Math.abs( a1 - a2 ) <= 0.0001 ) {
		ka = ka1;
	} else {
		ka = ka1 + ( ka2 - ka1 ) * ( alpha - a1 ) / ( a2 - a1 );
	}
	$( "#v_tape_ka_text" )
		.val( ka );
	window.scatterData1.datasets[ 1 ].data.push( {
		x: alpha,
		y: ka
	} );

	window.myScatter.update();
}
