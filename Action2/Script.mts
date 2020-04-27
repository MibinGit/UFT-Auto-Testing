WpfWindow("Micro Focus MyFlight Sample").Check CheckPoint("Micro Focus MyFlight Sample Application") @@ hightlight id_;_461132_;_script infofile_;_ZIP::ssf21.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set DataTable("PassagerName", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click
wait(3)
WpfWindow("Micro Focus MyFlight Sample").Close
wait(2) @@ hightlight id_;_3738270_;_script infofile_;_ZIP::ssf3.xml_;_
