$(function() {
	var whiteboardCounts = new Object; //associative array mapping dorm/suite to count
			
	//gets the whiteboard counts
	getWhiteboardCounts('https://spreadsheets.google.com/feeds/cells/0AgQ9wxO1Q6RPdDRHU3FuaVA0dVY2UkswUWdPWlRvSnc/od6/public/basic?alt=rss');
	
	//gets the remaining rooms
	var options = getRemainingRooms('https://spreadsheets.google.com/feeds/cells/0AiffTHkoEkUDdDlVM1Qxamt0SHI0YktzNWZmdTFOdWc/od7/public/basic?alt=rss',  'https://spreadsheets.google.com/feeds/cells/0AiffTHkoEkUDdEl4MFo0dnlWajhUYjVfMkVuaTBXUXc/od6/public/basic?alt=rss');
	//hide loading icon
	$("#loading").css("display", "none");
	
	
	//loads all the remaining room data
	loadPopovers(options);

	function loadPopovers(options) {
		var popoverTitle = 'Remaining Options';
		var popoverPlacement = 'top';
		$('#broadway2').popover({
		  content: options['broadway2'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#ecdouble').popover({
		  content: options['ecdouble'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#ecflat').popover({
		  content: options['ecflat'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#ec4').popover({
		  content: options['ec4'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#ec5').popover({
		  content: options['ec5'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#ecx').popover({
		  content: options['ecx'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#ec6town').popover({
		  content: options['ec6town'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#ec6high').popover({
		  content: options['ec6high'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#ec6ra').popover({
		  content: options['ec6ra'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#ec4ra').popover({
		  content: options['ec4ra'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#ectowndouble').popover({
		  content: options['ectowndouble'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#claremont3').popover({
		  content: options['claremont3'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#claremont4').popover({
		  content: options['claremont4'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#claremont5').popover({
		  content: options['claremont5'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#claremont6').popover({
		  content: options['claremont6'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#claremont7').popover({
		  content: options['claremont7'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#furnald2').popover({
		  content: options['furnald2'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#hogan4').popover({
		  content: options['hogan4'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#hogan5').popover({
		  content: options['hogan5'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#hogan6').popover({
		  content: options['hogan6'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#hogan4ra').popover({
		  content: options['hogan4ra'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#nussbaum2').popover({
		  content: options['nussbaum2'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#nussbaum2w').popover({
		  content: options['nussbaum2w'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#symposium2').popover({
		  content: options['symposium2'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#schapiro2').popover({
		  content: options['schapiro2'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#schapiro2w').popover({
		  content: options['schapiro2w'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#harmony2').popover({
		  content: options['harmony2'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#harmony6').popover({
		  content: options['harmony6'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#mcbain2').popover({
		  content: options['mcbain2'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#plimpton6').popover({
		  content: options['plimpton6'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#ruggles4').popover({
		  content: options['ruggles4'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#ruggles6').popover({
		  content: options['ruggles6'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#ruggles8a').popover({
		  content: options['ruggles8a'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#ruggles8b').popover({
		  content: options['ruggles8b'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#ruggles4ra').popover({
		  content: options['ruggles4ra'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#wattstudio').popover({
		  content: options['wattstudio'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#watt1').popover({
		  content: options['watt1'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#watt2').popover({
		  content: options['watt2'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#wien2').popover({
		  content: options['wien2'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#wien2w').popover({
		  content: options['wien2w'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#woodbridge2').popover({
		  content: options['woodbridge2'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#woodbridgehigh').popover({
		  content: options['woodbridgehigh'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#woodbridgemedium').popover({
		  content: options['woodbridgemedium'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
		$('#woodbridgelow').popover({
		  content: options['woodbridgelow'],
		  title:popoverTitle,
		  placement:popoverPlacement
		});
	}
	
	function getWhiteboardCounts(spreadsheet_url) {
		
		var xml = getXmlFromGoogleSpreadsheet(spreadsheet_url, false);
		var roomsToCounts = traverseWhiteboardXml(xml);
		loadCountsToHtml(roomsToCounts);
	}

	function traverseWhiteboardXml(data) {
		
		var dorms = ["Broadway", "Claremont", "East Campus", "Furnald", "Harmony", "Hogan", "McBain", "Nussbaum", "Plimpton", "River", "Ruggles", "Schapiro", "Symposium", "Watt", "Wien", "Woodbridge"];
		var dormName;
		var suiteName;
		var suiteCount;
		var positionInSpreadsheet;
		
		//go through each spreadsheet cell
		$(data).find("item").each(function() {
			
			var description = getSpreadsheetCell(this);
			if(dorms.indexOf(description) > -1) {
				dormName = description;
				positionInSpreadsheet = 1;
			}
			else if(positionInSpreadsheet == 1) {
				suiteName = description;
				positionInSpreadsheet = 2;
			}
			else if(positionInSpreadsheet == 2) {
				suiteCount = description;
				whiteboardCounts[getDormSuite(dormName, suiteName)] = suiteCount;
				positionInSpreadsheet = 0;
			}
			
		});
		
		return whiteboardCounts;
	}
	
	function getDormSuite(dorm, suite) {
		if(dorm == "Broadway") {
			if(suite == "Double") {
			return "broadway2";
			}
		}
		else if(dorm == "Claremont") {
			if(suite == "3-Person Suite") {
				return "claremont3";
			}
			else if(suite == "4-Person Suite") {
				return "claremont4";
			}
			else if(suite == "5-Person Suite") {
				return "claremont5";
			}
			else if(suite == "6-Person Suite") {
				return "claremont6";
			}
			else if(suite == "7-Person Suite") {
				return "claremont7";
			}
		}
		else if(dorm == "East Campus") {
			if(suite == "6th Floor Double") {
				return "ecdouble";
			}
			else if(suite == "2-Person Flat") {
				return "ecflat";
			}
			else if(suite == "4-Person Townhouse") {
				return "ec4";
			}
			else if(suite == "5-Person All-Single Suite") {
				return "ec5";
			}
			else if(suite == "5-Person Suite w/ 1 Double") {
				return "ecx";
			}
			else if(suite == "6-Person All-Single Suite") {
				return "ec6high";
			}
			else if(suite == "6-Per All-Single Townhouse") {
				return "ec6town";
			}
			else if(suite == "6-Person Suite w/ 1 Double") {
				return "ectowndouble";
			}
			else if(suite == "6-Person RA Townhouse") {
				return "ec6ra";
			}
			else if(suite == "4-Person RA Townhouse") {
				return "ec4ra";
			}
		}
		else if(dorm == "Furnald") {
			if(suite == "Double") {
				return "furnald2";
			}
		}
		else if(dorm == "Harmony") {
			if(suite == "Double") {
				return "harmony2";
			}
			else if(suite == "6-Person Suite") {
				return "harmony6";
			}
		}
		else if(dorm == "Hogan") {
			if(suite == "4-Person Suite") {
				return "hogan4";
			}
			else if(suite == "5-Person Suite") {
				return "hogan5";
			}
			else if(suite == "6-Person Suite") {
				return "hogan6";
			}
			else if(suite == "4-Person RA Suite") {
				return "hogan4ra";
			}
		}
		else if(dorm == "McBain") {
			if(suite == "Double") {
				return "mcbain2";
			}
		}
		else if(dorm == "Nussbaum") {
			if(suite == "Double") {
				return "nussbaum2";
			}
			else if(suite == "Walkthrough Double") {
				return "nussbaum2w";
			}
		}
		else if(dorm == "Plimpton") {
			if(suite == "6-Person Suite w/ 1 Double") {
				return "plimpton6";
			}
		}
		else if(dorm == "Ruggles") {
			if(suite == "4-Person Suite") {
				return "ruggles4";
			}
			else if(suite == "6-Person Suite") {
				return "ruggles6";
			}
			else if(suite == "8-Person Suite w/ 2 Doubles") {
				return "ruggles8a";
			}
			else if(suite == "8-Person Suite w/ 3 Doubles") {
				return "ruggles8b";
			}
			else if(suite == "4-Person RA Suite") {
				return "ruggles4ra";
			}
		}
		else if(dorm == "Schapiro") {
			if(suite == "Double") {
				return "schapiro2";
			}
			if(suite == "Walkthrough Double") {
				return "schapiro2w";
			}
		}
		else if(dorm == "Symposium") {
			if(suite == "Double") {
				return "symposium2";
			}
		}
		else if(dorm == "Watt") {
			if(suite == "Studio Double") {
				return "wattstudio";
			}
			else if(suite == "1-Bedroom") {
				return "watt1";
			}
			else if(suite == "2-Bedroom") {
				return "watt2";
			}
		}
		else if(dorm == "Wien") {
			if(suite == "Double") {
				return "wien2";
			}
			else if(suite == "Walkthrough Double") {
				return "wien2w";
			}
		}
		else if(dorm == "Woodbridge") {
			if(suite =="2-Bedroom") {
				return "woodbridge2";
			}
			else if(suite == "High-Demand (H, K, C)") {
				return "woodbridgehigh";
			}
			else if(suite == "E, F, I, J") {
				return "woodbridgemedium";
			}
			else if(suite == "A, B, D, G, L") {
				return "woodbridgelow";
			}
		}
	}

	
	function loadCountsToHtml(s) {
		
		//allows string interpolation -- courtesy of Douglas Crawford, JavaScript legend
		String.prototype.supplant = function (o) {
		    return this.replace(/{([^{}]*)}/g,
		        function (a, b) {
		            var r = o[b];
		            return typeof r === 'string' || typeof r === 'number' ? r : a;
		        }
		    );
		};
		
		var htmlToUpload = "<div class='row'> <div class='small-6 columns'> <ul class='pricing-table'> <li class='price'> Broadway </li> <li class='bullet-item'> <p class='suite' id='broadway2'> Double: </p> <p class='count'> {broadway2} </p> </li> </ul> <ul class='pricing-table'> <li class='price'> East Campus </li> <li class='bullet-item'> <p class='suite' id='ecdouble'> 6th Floor Double: </p> <p class='count'> {ecdouble} </p> </li> <li class='bullet-item'> <p class='suite' id='ecflat'> 2-Person Flat: </p> <p class='count'> {ecflat} </p> </li> <li class='bullet-item'> <p class='suite' id='ec4'> 4-Person Townhouse: </p> <p class='count'> {ec4} </p> </li> <li class='bullet-item'> <p class='suite' id='ec5'> 5-Person All-Single Suite: </p> <p class='count'> {ec5} </p> </li> <li class='bullet-item'> <p class='suite' id='ecx'> 5-Person Suite w/ 1 Double: </p> <p class='count'> {ecx} </p> </li> <li class='bullet-item'> <p class='suite' id='ec6high'> 6-Person All-Single Suite: </p> <p class='count'> {ec6high} </p> </li> <li class='bullet-item'> <p class='suite' id='ec6town'> 6-Per All-Single Townhouse: </p> <p class='count'> {ec6town} </p> </li> <li class='bullet-item'> <p class='suite' id='ectowndouble'> 6-Person Suite w/ 1 Double: </p> <p class='count'> {ectowndouble} </p> </li> <li class='bullet-item'> <p class='suite' id='ec4ra'> 4-Person RA Suite: </p> <p class='count'> {ec4ra} </p> </li> <li class='bullet-item'> <p class='suite' id='ec6ra'> 6-Person RA Suite: </p> <p class='count'> {ec6ra} </p> </li> </ul> <ul class='pricing-table'> <li class='price'> Hogan </li> <li class='bullet-item'> <p class='suite' id='hogan4'> 4-Person Suite: </p> <p class='count'> {hogan4} </p> </li> <li class='bullet-item'> <p class='suite' id='hogan5'> 5-Person Suite: </p> <p class='count'> {hogan5} </p> </li> <li class='bullet-item'> <p class='suite' id='hogan6'> 6-Person Suite: </p> <p class='count'> {hogan6} </p> </li> <li class='bullet-item'> <p class='suite' id='hogan4ra'> 4-Person RA Suite: </p> <p class='count'> {hogan4ra} </p> </li> </ul> <ul class='pricing-table'> <li class='price'> Nussbaum </li> <li class='bullet-item'> <p class='suite' id='nussbaum2'> Double: </p> <p class='count'> {nussbaum2} </p> </li> <li class='bullet-item'> <p class='suite' id='nussbaum2w'> Walkthrough Double: </p> <p class='count'> {nussbaum2w} </p> </li> </ul> <ul class='pricing-table'> <li class='price'> Symposium </li> <li class='bullet-item'> <p class='suite' id='symposium2'> Studio Double: </p> <p class='count'> {symposium2} </p> </li> </ul> <ul class='pricing-table'> <li class='price'> Wien </li> <li class='bullet-item'> <p class='suite' id='wien2'> Double: </p> <p class='count'> {wien2} </p> </li> <li class='bullet-item'> <p class='suite' id='wien2w'> Walkthrough Double: </p> <p class='count'> {wien2w} </p> </li> </ul> <ul class='pricing-table'> <li class='price'> Woodbridge </li> <li class='bullet-item'> <p class='suite' id='woodbridge2'> 2-Bedroom: </p> <p class='count'> {woodbridge2} </p> </li> <li class='bullet-item'> <p class='suite' id='woodbridgehigh'> High-Demand (H, K, C): </p> <p class='count'> {woodbridgehigh} </p> </li> <li class='bullet-item'> <p class='suite' id='woodbridgemedium'> E, F, I, J: </p> <p class='count'> {woodbridgemedium} </p> </li> <li class='bullet-item'> <p class='suite' id='woodbridgelow'> A, B, D, G, L: </p> <p class='count'> {woodbridgelow} </p> </li> </ul> </div> <div class='small-6 columns'> <ul class='pricing-table'> <li class='price'> Claremont </li> <li class='bullet-item'> <p class='suite' id='claremont3'> 3-Person Suite: </p> <p class='count'> {claremont3} </p> </li> <li class='bullet-item'> <p class='suite' id='claremont4'> 4-Person Suite: </p> <p class='count'> {claremont4} </p> </li> <li class='bullet-item'> <p class='suite' id='claremont5'> 5-Person Suite: </p> <p class='count'> {claremont5} </p> </li> <li class='bullet-item'> <p class='suite' id='claremont6'> 6-Person Suite: </p> <p class='count'> {claremont6} </p> </li> <li class='bullet-item'> <p class='suite' id='claremont7'> 7-Person Suite: </p> <p class='count'> {claremont7} </p> </li> </ul> <ul class='pricing-table'> <li class='price'> Furnald </li> <li class='bullet-item'> <p class='suite' id='furnald2'> Double: </p> <p class='count'> {furnald2} </p> </li> </ul> <ul class='pricing-table'> <li class='price'> Harmony </li> <li class='bullet-item'> <p class='suite' id='harmony2'> Double: </p> <p class='count'> {harmony2} </p> </li> <li class='bullet-item'> <p class='suite' id='harmony6'> 6-Person Suite: </p> <p class='count'> {harmony6} </p> </li> </ul> <ul class='pricing-table'> <li class='price'> McBain </li> <li class='bullet-item'> <p class='suite' id='mcbain2'> Double: </p> <p class='count'> {mcbain2} </p> </li> </ul> <ul class='pricing-table'> <li class='price'> Plimpton </li> <li class='bullet-item'> <p class='suite' id='plimpton6'> 6-Person Suite: </p> <p class='count'> {plimpton6} </p> </li> </ul> <ul class='pricing-table'> <li class='price'> Ruggles </li> <li class='bullet-item'> <p class='suite' id='ruggles4'> 4-Person Suite: </p> <p class='count'> {ruggles4} </p> </li> <li class='bullet-item'> <p class='suite' id='ruggles6'> 6-Person Suite: </p> <p class='count'> {ruggles6} </p> </li> <li class='bullet-item'> <p class='suite' id='ruggles8a'> 8-Person Suite w/ 2 Doubles: </p> <p class='count'> {ruggles8a} </p> </li> <li class='bullet-item'> <p class='suite' id='ruggles8b'> 8-Person Suite w/ 3 Doubles: </p> <p class='count'> {ruggles8b} </p> </li> <li class='bullet-item'> <p class='suite' id='ruggles4ra'> 4-Person RA Suite: </p> <p class='count'> {ruggles4ra} </p> </li> </ul> <ul class='pricing-table'> <li class='price'> Schapiro </li> <li class='bullet-item'> <p class='suite' id='schapiro2'> Double: </p> <p class='count'> {schapiro2} </p> </li> <li class='bullet-item'> <p class='suite' id='schapiro2w'> Walkthrough Double: </p> <p class='count'> {schapiro2w} </p> </li> </ul> <ul class='pricing-table'> <li class='price'> Watt </li> <li class='bullet-item'> <p class='suite' id='wattstudio'> Studio Double: </p> <p class='count'> {wattstudio} </p> </li> <li class='bullet-item'> <p class='suite' id='watt1'> 1-Bedroom: </p> <p class='count'> {watt1} </p> </li> <li class='bullet-item'> <p class='suite' id='watt2'> 2-Bedroom: </p> <p class='count'> {watt2} </p> </li> </ul> </div> </div>";
		htmlToUpload = htmlToUpload.supplant({broadway2:s["broadway2"], ecdouble:s["ecdouble"],ecflat:s["ecflat"],ec4:s["ec4"],
		ec5:s["ec5"],ecx:s["ecx"],ec6high:s["ec6high"],ec6town:s["ec6town"],ectowndouble:s["ectowndouble"],
		ec4ra:s["ec4ra"],ec6ra:s["ec6ra"],hogan4:s["hogan4"],hogan5:s["hogan5"],hogan6:s["hogan6"],
		hogan4ra:s["hogan4ra"],nussbaum2:s["nussbaum2"],nussbaum2w:s["nussbaum2w"],symposium2:s["symposium2"],wien2:s["wien2"],
		wien2w:s["wien2w"],woodbridge2:s["woodbridge2"],woodbridgehigh:s["woodbridgehigh"],woodbridgemedium:s["woodbridgemedium"],
		woodbridgelow:s["woodbridgelow"],claremont3:s["claremont3"],claremont4:s["claremont4"],claremont5:s["claremont5"],
		claremont6:s["claremont6"],claremont7:s["claremont7"],furnald2:s["furnald2"],harmony2:s["harmony2"],harmony6:s["harmony6"],
		mcbain2:s["mcbain2"],plimpton6:s["plimpton6"],ruggles4:s["ruggles4"],ruggles6:s["ruggles6"],ruggles8a:s["ruggles8a"],ruggles8b:s["ruggles8b"],ruggles4ra:s["ruggles4ra"],
		schapiro2:s["schapiro2"],schapiro2w:s["schapiro2w"],wattstudio:s["wattstudio"],watt1:s["watt1"],watt2:s["watt2"]});
		
		$("#options").html(htmlToUpload);
	}
	
	//get remaining rooms
	function getRemainingRooms(floorplans_url, rooms_url) {
		var room_xml = getXmlFromGoogleSpreadsheet(rooms_url, false);
		var floorplan_xml = getXmlFromGoogleSpreadsheet(floorplans_url, false);
		var options = getOptionsBuckets();
		//load room and suite data into hash tables
		var roomDataHashTable = loadRoomDataIntoHashTable(room_xml);
		var listOfRemainingRooms = storeRemainingRooms(floorplan_xml);
		//go through floorplans, look up hash table, and assign to right option		
		assignOptions(options, listOfRemainingRooms, roomDataHashTable); //options reference passed by value
		
		return options;
	}
	
	function getOptionsBuckets() {
		var options = whiteboardCounts;
		for(var key in options) {
			options[key] = new Array();
		}
		return options;
	}
	
	//returns hash hash[[dorm, room]] = [roomType, misc]
	function loadRoomDataIntoHashTable(room_xml) {
		var start = new Date().getTime();
		var roomDataHashTable = new Object;
		var dorm = "", room = "", roomType = "", misc = "";
		$(room_xml).find("item").each(function() {
			var cellPosition = getSpreadsheetCellPosition(this);
			var cellContents = getSpreadsheetCell(this);
			if(cellPosition[0] == "A") {
				dorm = cellContents;
			}
			else if(cellPosition[0] == "C") {
				room = cellContents;
			}
			else if(cellPosition[0] == "E") {
				roomType = cellContents;
			}
			else if(cellPosition[0] == "F") {
				misc = cellContents;
			}
			else if(cellPosition[0] == "G") {
				roomDataHashTable[[dorm, room]] = [roomType, misc];	
				dorm = room = roomType = misc = "";	
			}
		});
		return roomDataHashTable;
	}
	
	function assignOptions(options, remainingRooms, roomDataHashTable) {
		for(var i = 0; i < remainingRooms.length; i++) {
			dormroom = remainingRooms[i];
			loadOption(dormroom, options, roomDataHashTable);
		}
	}
	
	function loadOption(dormroom, options, roomDataHashTable) {
		var dorm = dormroom[0];
		var room = dormroom[1];
		
		//error catching
		if(room == undefined || dorm == undefined) {
			return;
		}
		
		//room data data expressed as [roomType, misc]
		var data = roomDataHashTable[[dorm, room]];
		if(data == undefined) {
			return;
		}
		var roomType = data[0];
		var misc = data[1];
		
		room = " " + room;
		
		if(misc.indexOf("ra") == -1 && misc != "0") {//check if it's an RA suite
			if(dorm == "Broadway") {
				options['broadway2'].push(room);
			}
			else if(dorm == "Furnald") {
				options['furnald2'].push(room);
			}
			else if(dorm == "Harmony") {
				if(roomType == "0") {
					options['harmony2'].push(room);
				}
				else if(roomType == "6") {
					options['harmony6'].push(room);
				}
			}
			else if(dorm == "McBain") {
				if(misc == "shaft") {
					options['mcbain2'].push(room+"(shaft)");
				}
				else {
					options['mcbain2'].push(room);
				}
			}
			else if(dorm == "Nussbaum") {
				if(misc == "walk, bathroom") {
					options['nussbaum2w'].push(room+"(bathroom)");
				}
				else if(misc == "walk") {
					options['nussbaum2w'].push(room);
				}
				else if(misc == "bathroom") {
					options['nussbaum2'].push(room+"(bathroom)");
				}
				else {
					options['nussbaum2'].push(room);
				}
			}
			else if(dorm == "Plimpton") {
				options['plimpton6'].push(room);
			}
			else if(dorm == "Symposium") {
				options['symposium2'].push(room);
			}
			else if(dorm == "Schapiro") {
				if(misc == "walk") {
					options['schapiro2w'].push(room);
				}
				else {
					options['schapiro2'].push(room);
				}
			}
			else if(dorm == "Watt") {
				if(misc == "studio") {
					options['wattstudio'].push(room);
				}
				else if(misc == '1br') {
					options['watt1'].push(room);
				}
				else if(misc == '2br') {
					options['watt2'].push(room);
				}
			}
			else if(dorm == "Wien") {
				if(misc == "walk") {
					options['wien2w'].push(room);
				}
				else {
					options['wien2'].push(room);
				}
			}
			else if(dorm == "Woodbridge") {
				if(misc == "2br") {
					options['woodbridge2'].push(room);
				}
				//if it's of the right line
				if(["H", "K", "C"].indexOf(room[2]) > -1) {
					options['woodbridgehigh'].push(room);
				}
				else if(["E", "F", "I", "J"].indexOf(room[2]) > -1) {
					options['woodbridgemedium'].push(room);
				}
				else if(["A", "B", "D", "G", "L"].indexOf(room[2]) > -1) {
					options['woodbridgelow'].push(room);
				}
			}
			if(dorm == "Claremont") {
				if(misc != "0") { //if suite count is 0 then it's an RA suite
					if(roomType == "3") {
						options['claremont3'].push(room);
					}
					else if(roomType == "4") {
						options['claremont4'].push(room);
					}
					else if(roomType == "5") {
						options['claremont5'].push(room);
					}
					else if(roomType == "6") {
						options['claremont6'].push(room);
					}
					else if(roomType == "7") {
						options['claremont7'].push(room);
					}
				}
			}
			else if(dorm == "East Campus") {
				if(misc != "0") {
					if(roomType == "0") {
						options['ecdouble'].push(room);
					}
					else if(roomType == "flat") {
						options['ecflat'].push(room);
					}
					else if(roomType == "4") {
						if(misc == "2") {
							options['ec4ra'].push(room);
						}
						else if(misc == "4") {
							options['ec4'].push(room);
						}
					}
					else if(roomType == "hr5") {
						options['ec5'].push(room);
					}
					else if(roomType == "ecx") {
						options['ecx'].push(room);
					}
					else if(roomType == "hr6") {
						options['ec6high'].push(room);
					}
					else if(roomType == "6") {
						if(misc == "4") {
							options['ec6ra'].push(room);
						}
						else if(misc == "6") {
							options['ec6town'].push(room);
						}
					}
					else if(roomType == "6d") {
						if(misc == "4") {
							options['ec6ra'].push(room);
						}
						else if(misc == "6") {
							options['ectowndouble'].push(room);
						}
					}
				}
			}
			else if(dorm == "Hogan") {
				if(roomType == "5") {
					options['hogan5'].push(room);
				}
				else if(roomType == "6") {
					options['hogan6'].push(room);
				}
				else if(roomType == "4") {
					if(misc == "2") {
						options['hogan4ra'].push(room);
					}
					else if(misc == "4") {
						options['hogan4'].push(room);
					}
				}
			}
			else if(dorm == "Ruggles") {
				if(misc != "0") {
					if(roomType == "4") {
						if(misc == "4") {
							options['ruggles4'].push(room);
						}
						else if(misc == "2") {
							options['ruggles4ra'].push(room);
						}
					}
					else if(roomType == "6") {
						options['ruggles6'].push(room);
					}
					else if(roomType == "8dd") {
						options['ruggles8b'].push(room);
					}
					else if(roomType == "8d") {
						options['ruggles8a'].push(room);
					}
				}
			}
		}
	}
	
	//returns array of form [[dormName, roomName], [dormName2, roomName2]]
	function storeRemainingRooms(xml) {
		var columnToDorm = getColumnToDormHashTable(xml);
		var listOfRemainingRooms = new Array();
		$(xml).find("item").each(function() {
			var cellPosition = getSpreadsheetCellPosition(this);
			if(cellPosition.length > 2 || cellPosition[1] != "1") {
				var dormName = columnToDorm[cellPosition[0]];
				var roomName = getSpreadsheetCell(this);
				listOfRemainingRooms.push([dormName,roomName]);
			}
		});
		return listOfRemainingRooms;
	}
	
	//returns columnToDorm["A"] = "Broadway";
	function getColumnToDormHashTable(xml) {
		columnToDorm = new Object;
		$(xml).find("item").each(function() {
			var description = getSpreadsheetCellPosition(this);
			if(description[1] == "1") {
				columnToDorm[description[0]] = getSpreadsheetCell(this);
			}
			else {
				return false;
			}
		});
		return columnToDorm;
	}
	
	function getSpreadsheetCellPosition(cell) {
		return $(cell).find("title").text();
	}
	
	function getSpreadsheetCell(cell) {
		return $(cell).find("description").text();
	}
	
	function getXmlFromGoogleSpreadsheet(spreadsheet_url, asynch) {
		var xml_data;
		$.ajax({
		    url: spreadsheet_url,
			async: asynch,
		    success: function(data) {
		        xml_data = data;
		    }
		});
		return xml_data;
	}
});