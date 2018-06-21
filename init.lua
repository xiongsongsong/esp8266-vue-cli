wifi.setmode(wifi.SOFTAP)
cfg={}
cfg.ssid="httpserver"
cfg.pwd="11111111"
result = wifi.ap.config(cfg)

srv = net.createServer(net.TCP)
srv:listen(80, function(conn)
    conn:on("receive", function(sck, payload)
        print(payload)
        -- 浏览器会默认加载favicon.ico，直接返回404
        if (string.find(payload, "/favicon.ico") ~= nil ) then
            sck:send("HTTP/1.0 404 NotFound\r\n\r\n")
            return
        end
        sck:send("HTTP/1.0 200 OK\r\nContent-Type: text/html\r\nContent-Encoding: gzip\r\n\r\n")
        local file = file.open("index.html.gz", "r")
        -- 每次读取1Kb数据
        local chunkSize = 1024;
        -- 刚开始当然从0位开始读取
        local cur = 0;
        local content = file.read(chunkSize)
        local function send(localSocket)
            -- 如果所有内容发送完毕
            if content == nil then
              localSocket:close()
              file= nil
            else
              localSocket:send(content)
              cur = cur + chunkSize
              file:seek("set", cur)
              content = file.read(chunkSize)
            end
        end
        -- 当数据已被客户端接收，则发送下一段内容
        sck:on("sent", send)
        send(sck)
    end)
    conn:on("sent", function(sck) sck:close() end)
end)
