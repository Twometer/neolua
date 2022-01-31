# neolua

Script editor and distribution platform for ComputerCraft

## Quick start

1. Host the docker container somewhere
2. Create a code file on the app, name it `helloworld.lua`
3. Replace the server domain in `client/neolua.lua`
4. Upload that file to pastebin, note the paste ID
5. In CC, run `pastebin get <your-id> neolua`
6. Run any script from your server with `neolua <script-name>`, for example `neolua helloworld`
