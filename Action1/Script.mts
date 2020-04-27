WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select DataTable("fromCity", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select DataTable("toCity", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfImage("WpfImage").Click 277,201 @@ hightlight id_;_2072666976_;_script infofile_;_ZIP::ssf51.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate DataTable("Date", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select DataTable("Class", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select DataTable("NumOfTickets", dtGlobalSheet)

WpfWindow("Micro Focus MyFlight Sample").WpfObject("John Smith").Check CheckPoint("John Smith") @@ hightlight id_;_1972321704_;_script infofile_;_ZIP::ssf37.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfImage("image2").Check CheckPoint("image2")

WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1948579760_;_script infofile_;_ZIP::ssf68.xml_;_

WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell DataTable("FlightsDataGrid", dtGlobalSheet), DataTable("FlightsDataGrid2", dtGlobalSheet) 
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click

 @@ hightlight id_;_2072672016_;_script infofile_;_ZIP::ssf62.xml_;_
