WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Check CheckPoint("OK_2")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("QuestionBtn").Click
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set DataTable("UserName", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure DataTable("Password", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Check CheckPoint("OK")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
