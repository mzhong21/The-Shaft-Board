$(function() {
	var options = '322, 333, 340, 402, 422, 433, 439, 440, 456 322, 333, 340, 402, 422, 433, 439, 440, 456 322, 333, 340, 402, 422, 433, 439, 440, 456322, 333, 340, 402, 422, 433, 439, 440, 456';
		
	//gets the whiteboard counts
	getWhiteboardCounts('https://spreadsheets.google.com/feeds/cells/0AgQ9wxO1Q6RPdDRHU3FuaVA0dVY2UkswUWdPWlRvSnc/od6/public/basic?alt=rss');
	
	$(myvar).find("item").each(function() {
		var description = $(this).find("description").text();
		alert(description);
	});
	
	//gets the remaining rooms
	
	
	//loads all the remaining room data
	var popoverTitle = 'Remaining Options';
	var popoverPlacement = 'top';
	$('#broadwaydouble').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#ecdouble').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#ecflat').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#ec4').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#ec5').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#ecx').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#ec6town').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#ec6high').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#ectowndouble').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#claremont3').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#claremont4').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#claremont5').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#claremont6').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#claremont7').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#furnald2').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#hogan4').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#hogan5').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#hogan6').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#nussbaum2').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#nussbaum2bath').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#symposium2').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#schapiro2').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#schapiro2w').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#harmony2').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#mcbain2').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#ruggles4').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#ruggles6').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#ruggles8a').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#ruggles8b').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#wattstudio').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#watt1').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#watt2').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#wien2').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#wien2w').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#woodbridge1').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	$('#woodbridge2').popover({
	  content: options,
	  title:popoverTitle,
	  placement:popoverPlacement
	});
	
	function getWhiteboardCounts(spreadsheet_url) {
		
		var xml = getXmlFromGoogleSpreadsheet(spreadsheet_url);
		var suitesToCounts = traverseXml(xml);
		loadCountsToHtml(suitesToCounts);
	}
	function getXmlFromGoogleSpreadsheet(spreadsheet_url) {
		var xml_data;
		$.ajax({
		    url: spreadsheet_url,
			async: false,
		    success: function(data) {
		        xml_data = data;
		    }
		});
		return xml_data;
	}
	function traverseXml(data) {
		
		var whiteboardCounts = new Object; //associative array mapping dorm/suite to count
		
		var dorms = ["Broadway", "Claremont", "East Campus", "Furnald", "Harmony", "Hogan", "McBain", "Nussbaum", "River", "Ruggles", "Schapiro", "Symposium", "Watt", "Wien", "Woodbridge"];
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
				alert(suiteCount);
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
				return "ecflat";
			}
			else if(suite == "6-Person All-Single Suite") {
				return "ecflat";
			}
			else if(suite == "6-Per All-Single Townhouse") {
				return "ecflat";
			}
			else if(suite == "6-Person Suite w/ 1 Double") {
				return "ecflat";
			}
			else if(suite == "6-Person All-Single Suite") {
				return "ecflat";
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
			else if(suite == "Double w/ Bathroom") {
				return "nussbaum2bath";
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
			else if(studio == "1-Bedroom") {
				return "watt1";
			}
			else if(studio == "2-Bedroom") {
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

	function getSpreadsheetCell(cell) {
		return $(cell).find("description").text();
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
		
		String htmlToUpload = "<div class='row'>
		  <div class='small-6 columns'>
		  		<ul class='pricing-table'>
				  <li class='price'>Broadway</li>
				  <li class='bullet-item'>
					<p class='suite' id='broadwaydouble'>Double: </p>
					<p class='count'>{broadwaydouble}</p></li>
				</ul>	
				<ul class='pricing-table'>
					<li class='price'>East Campus</li>
					<li class='bullet-item'>
					<p class='suite' id='ecdouble'>6th Floor Double: </p>
					<p class='count'>{ecdouble}</p></li>
					<li class='bullet-item'>
					<p class='suite' id='ecflat'>2-Person Flat: </p>
					<p class='count'>{ecflat}</p></li>
					<li class='bullet-item'>
					<p class='suite' id='ec4'>4-Person Townhouse: </p>
					<p class='count'>{ec4}</p></li>
					<li class='bullet-item'>
					<p class='suite' id='ec5'>5-Person All-Single Suite: </p>
					<p class='count'>{ec5}</p></li>
					<li class='bullet-item'>
					<p class='suite' id='ecx'>5-Person Suite w/ 1 Double: </p>
					<p class='count'>{ecx}</p></li>
					<li class='bullet-item'>
					<p class='suite' id='ec6high'>6-Person All-Single Suite: </p>
					<p class='count'>{ec6high}</p></li>
					<li class='bullet-item'>
					<p class='suite' id='ec6town'>6-Per All-Single Townhouse: </p>
					<p class='count'>{ec6town}</p></li>
					<li class='bullet-item'>
					<p class='suite' id='ectowndouble'>6-Person Suite w/ 1 Double: </p>
					<p class='count'>{ectowndouble}</p></li>
					<li class='bullet-item'>
					<p class='suite' id='ec4ra'>4-Person RA Suite: </p>
					<p class='count'>{ectowndouble}</p></li>
					<li class='bullet-item'>
					<p class='suite' id='ec6ra'>6-Person RA Suite: </p>
					<p class='count'>{ec6ra}</p></li>	
				</ul>
				<ul class='pricing-table'>
				  <li class='price'>Hogan</li>
				  <li class='bullet-item'>
					<p class='suite' id='hogan4'>4-Person Suite: </p>
					<p class='count'>{hogan4}</p></li>
				  <li class='bullet-item'>
					<p class='suite' id='hogan5'>5-Person Suite: </p>
					<p class='count'>{hogan5}</p></li>
				  <li class='bullet-item'>
					<p class='suite' id='hogan6'>6-Person Suite: </p>
					<p class='count'>{hogan6}</p></li>
				</ul>
				<ul class='pricing-table'>
				  <li class='price'>Nussbaum</li>
				  <li class='bullet-item'>
					<p class='suite' id='nussbaum2'>Double: </p>
					<p class='count'>{nussbaum2}</p></li>
				  <li class='bullet-item'>
					<p class='suite' id='nussbaum2bath'>Double w/ Bathroom: </p>
					<p class='count'>{nussbaum2bath}</p></li>
				</ul>
				<ul class='pricing-table'>
				  <li class='price'>Symposium</li>
				  <li class='bullet-item'>
					<p class='suite' id='symposium2'>Studio Double: </p>
					<p class='count'>{symposium2}</p></li>
				</ul>
				<ul class='pricing-table'>
				  <li class='price'>Wien</li>
				  <li class='bullet-item'>
					<p class='suite' id='wien2'>Double: </p>
					<p class='count'>{wien2}</p></li>
				  <li class='bullet-item'>
					<p class='suite' id='wien2w'>Walkthrough Double: </p>
					<p class='count'>{wien2w}</p></li>
				</ul>
				<ul class='pricing-table'>
				  <li class='price'>Woodbridge</li>
				  <li class='bullet-item'>
					<p class='suite' id='woodbridge2'>2-Bedroom: </p>
					<p class='count'>{woodbridge2}</p></li>
				  <li class='bullet-item'>
					<p class='suite' id='woodbridgehigh'>High-Demand (H, K, C): </p>
					<p class='count'>{woodbridgehigh}</p></li>
				  <li class='bullet-item'>
					<p class='suite' id='woodbridgemedium'>E, F, I, J: </p>
					<p class='count'>{woodbridgemedium}</p></li>
				  <li class='bullet-item'>
					<p class='suite' id='woodbridgelow'>A, B, D, G, L: </p>
					<p class='count'>{woodbridgelow}</p></li>
				</ul>
		  </div>
		  <div class='small-6 columns'>
				<ul class='pricing-table'>
				  <li class='price'>Claremont</li>
				  <li class='bullet-item'>
					<p class='suite' id='claremont3'>3-Person Suite: </p>
					<p class='count'>{claremont3}</p></li>
					<li class='bullet-item'>
					<p class='suite' id='claremont4'>4-Person Suite: </p>
					<p class='count'>{claremont4}</p></li>
					<li class='bullet-item'>
					<p class='suite' id='claremont5'>5-Person Suite: </p>
					<p class='count'>{claremont5}</p></li>
					<li class='bullet-item'>
					<p class='suite' id='claremont6'>6-Person Suite: </p>
					<p class='count'>{claremont6}</p></li>
				  <li class='bullet-item'>
					<p class='suite' id='claremont7'>7-Person Suite: </p>
					<p class='count'>{claremont7}</p></li>
				</ul>
				<ul class='pricing-table'>
				  <li class='price'>Furnald</li>
				  <li class='bullet-item'>
					<p class='suite' id='furnald2'>Double: </p>
					<p class='count'>{furnald2}</p></li>
				</ul>
				<ul class='pricing-table'>
				  <li class='price'>Harmony</li>
				  <li class='bullet-item'>
					<p class='suite' id='harmony2'>Double: </p>
					<p class='count'>{harmony2}</p></li>
				</ul>
				<ul class='pricing-table'>
				  <li class='price'>McBain</li>
				  <li class='bullet-item'>
					<p class='suite' id='mcbain2'>Double: </p>
					<p class='count'>{mcbain2}</p></li>
				</ul>
				<ul class='pricing-table'>
				  <li class='price'>Ruggles</li>
				  <li class='bullet-item'>
					<p class='suite' id='ruggles4'>4-Person Suite: </p>
					<p class='count'>{ruggles4}</p></li>
				  <li class='bullet-item'>
					<p class='suite' id='ruggles6'>6-Person Suite: </p>
					<p class='count'>{ruggles6}</p></li>
				  <li class='bullet-item'>
					<p class='suite' id='ruggles8a'>8-Person Suite w/ 2 Doubles: </p>
					<p class='count'>{ruggles8a}</p></li>
				  <li class='bullet-item'>
					<p class='suite' id='ruggles8b'>8-Person Suite w/ 3 Doubles: </p>
					<p class='count'>{ruggles8b}</p></li>
				  <li class='bullet-item'>
					<p class='suite' id='ruggles4ra'>4-Person RA Suite: </p>
					<p class='count'>{ruggles4ra}</p></li>	
				</ul>
				<ul class='pricing-table'>
				  <li class='price'>Schapiro</li>
				  <li class='bullet-item'>
					<p class='suite' id='schapiro2'>Double: </p>
					<p class='count'>{schapiro2}</p></li>
				  <li class='bullet-item'>
					<p class='suite' id='schapiro2wt'>Walkthrough Double: </p>
					<p class='count'>{schapiro2w}</p></li>
				</ul>
				<ul class='pricing-table'>
				  <li class='price'>Watt</li>
				  <li class='bullet-item'>
					<p class='suite' id='wattstudio'>Studio Double: </p>
					<p class='count'>{wattstudio}</p></li>
				  <li class='bullet-item'>
					<p class='suite' id='watt1'>1-Bedroom: </p>
					<p class='count'>{watt1}</p></li>
				  <li class='bullet-item'>
					<p class='suite' id='watt2'>2-Bedroom: </p>
					<p class='count'>{watt2}</p></li>
				</ul>
		  </div>".supplant({})
		
		$("#options").html("<div class='row'> <div class='small-6 columns'> <ul class='pricing-table'> <li class='price'>Broadway</li> <li class='bullet-item'><p class='suite' id='broadwaydouble'>Double: </p><p class='count'>38</p></li></ul><ul class='pricing-table'><li class='price'>East Campus</li><li class='bullet-item'><p class='suite' id='ecdouble'>6th Floor Double: </p><p class='count'>8</p></li><li class='bullet-item'><p class='suite' id='ecflat'>2-Person Flat: </p><p class='count'>24</p></li><li class='bullet-item'><p class='suite' id='ec4'>4-Person Townhouse: </p><p class='count'>7</p></li><li class='bullet-item'><p class='suite' id='ec5'>5-Person All-Single Suite: </p><p class='count'>7</p></li><li class='bullet-item'><p class='suite' id='ecx'>5-Person Suite w/ 1 Double: </p><p class='count'>56</p></li><li class='bullet-item'><p class='suite' id='ec6high'>6-Person All-Single Suite: </p><p class='count'>6</p></li><li class='bullet-item'><p class='suite' id='ec6town'>6-Per All-Single Townhouse: </p><p class='count'>22</p></li><li class='bullet-item'><p class='suite' id='ectowndouble'>6-Person Suite w/ 1 Double: </p><p class='count'>6</p></li></ul><ul class='pricing-table'> <li class='price'>Hogan</li> <li class='bullet-item'><p class='suite' id='hogan4'>4-Person Suite: </p><p class='count'>12</p></li> <li class='bullet-item'><p class='suite' id='hogan5'>5-Person Suite: </p><p class='count'>10</p></li> <li class='bullet-item'><p class='suite' id='hogan6'>6-Person Suite: </p><p class='count'>1</p></li></ul><ul class='pricing-table'> <li class='price'>Nussbaum</li> <li class='bullet-item'><p class='suite' id='nussbaum2'>Double: </p><p class='count'>50</p></li> <li class='bullet-item'><p class='suite' id='nussbaum2pb'>Dbl w/ Private Bathroom: </p><p class='count'>5</p></li> <li class='bullet-item'><p class='suite' id='nussbaum2wtpb'>W/T Dbl w/ Private Bathroom: </p><p class='count'>8</p></li> <li class='bullet-item'><p class='suite' id='nussbaum2spb'>Dbl w/ Semi-Priv Bathroom: </p><p class='count'>15</p></li></ul><ul class='pricing-table'> <li class='price'>Symposium</li> <li class='bullet-item'><p class='suite' id='symposium2'>Studio Double: </p><p class='count'>8</p></li></ul><ul class='pricing-table'> <li class='price'>Wien</li> <li class='bullet-item'><p class='suite' id='wien2'>Double: </p><p class='count'>18</p></li> <li class='bullet-item'><p class='suite' id='wien2wt'>Walkthrough Double: </p><p class='count'>28</p></li></ul><ul class='pricing-table'> <li class='price'>Woodbridge</li> <li class='bullet-item'><p class='suite' id='woodbridge1'>1-Bedroom: </p><p class='count'>75</p></li> <li class='bullet-item'><p class='suite' id='woodbridge2'>2-Bedroom: </p><p class='count'>3</p></li></ul> </div> <div class='small-6 columns'><ul class='pricing-table'> <li class='price'>Claremont</li> <li class='bullet-item'><p class='suite' id='claremont3'>3-Person Suite: </p><p class='count'>3</p></li><li class='bullet-item'><p class='suite' id='claremont4'>4-Person Suite: </p><p class='count'>5</p></li><li class='bullet-item'><p class='suite' id='claremont5'>5-Person Suite: </p><p class='count'>1</p></li><li class='bullet-item'><p class='suite' id='claremont6'>6-Person Suite: </p><p class='count'>1</p></li> <li class='bullet-item'><p class='suite' id='claremont7'>7-Person Suite: </p><p class='count'>10</p></li></ul><ul class='pricing-table'> <li class='price'>Furnald</li> <li class='bullet-item'><p class='suite' id='furnald2'>Double: </p><p class='count'>1</p></li></ul><ul class='pricing-table'> <li class='price'>Harmony</li> <li class='bullet-item'><p class='suite' id='harmony2'>Double: </p><p class='count'>1</p></li></ul><ul class='pricing-table'> <li class='price'>McBain</li> <li class='bullet-item'><p class='suite' id='mcbain2'>Double: </p><p class='count'>173</p></li></ul><ul class='pricing-table'> <li class='price'>Ruggles</li> <li class='bullet-item'><p class='suite' id='ruggles4'>4-Person Suite: </p><p class='count'>4</p></li> <li class='bullet-item'><p class='suite' id='ruggles6'>6-Person Suite: </p><p class='count'>8</p></li> <li class='bullet-item'><p class='suite' id='ruggles8a'>8-Person Suite w/ 2 Doubles: </p><p class='count'>2</p></li> <li class='bullet-item'><p class='suite' id='ruggles8b'>8-Person Suite w/ 3 Doubles: </p><p class='count'>12</p></li></ul><ul class='pricing-table'> <li class='price'>Schapiro</li> <li class='bullet-item'><p class='suite' id='schapiro2'>Double: </p><p class='count'>64</p></li> <li class='bullet-item'><p class='suite' id='schapiro2wt'>Walkthrough Double: </p><p class='count'>29</p></li></ul><ul class='pricing-table'> <li class='price'>Watt</li> <li class='bullet-item'><p class='suite' id='wattstudio'>Studio Double: </p><p class='count'>53</p></li> <li class='bullet-item'><p class='suite' id='watt1'>1-Bedroom: </p><p class='count'>12</p></li> <li class='bullet-item'><p class='suite' id='watt2'>2-Bedroom: </p><p class='count'>11</p></li></ul> </div>");
	}

});