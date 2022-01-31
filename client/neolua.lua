-------------------------------------
-- NeoLua Client for ComputerCraft --
--                                 --
--  version 1.0       by Twometer  --
-------------------------------------
 
args = {...}
if args[1] == nil then
    print("Usage: neolua <script_name>")
    return
end
 
serverUrl = "https://your-server-url/neolua/data/"
fileName = args[1] .. ".lua"
 
local req = http.get(serverUrl .. fileName)
data = req.readAll()
req.close()
 
dstPath = shell.dir() .. "/" .. args[1]
file = fs.open(dstPath, "w")
file.write(data)
file.close()
 
shell.execute(dstPath)