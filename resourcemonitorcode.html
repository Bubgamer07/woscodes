bins = GetPartsFromPort(1,"Bin")
local screen = GetPartFromPort(1,"Screen")
ptype="Bin"
screen:ClearElements()

screen:CreateElement('TextLabel', {
    Position = UDim2.fromScale(0.1, 0);
    Size = UDim2.fromScale(0.8, 0.1);
    Text = "Querty's Resource monitor v1.0";
    TextSize = 5;
    TextScaled = true;
    TextColor3 = Color3.new(1, 1, 1);
    BackgroundTransparency = 0.7;
    BackgroundColor3 = Color3.new(0, 0, 0);
    BorderSizePixel = 1
})
binbtn = screen:CreateElement('ImageButton', {
    Position = UDim2.fromScale(0, 0);
    Size = UDim2.fromScale(0.1, 0.1);
    Image = "rbxassetid://12988755627";
    BackgroundColor3 = Color3.new(0,0,0)
})
conbtn = screen:CreateElement('ImageButton', {
    Position = UDim2.fromScale(0.9, 0);
    Size = UDim2.fromScale(0.1, 0.1);
    Image = "rbxassetid://15008144654";
    BackgroundColor3 = Color3.new(0,0,0)
})
function refresh(type)
    ptype = type
    bins = GetPartsFromPort(1,type)
    if scroll then scroll:Destroy() end
    scroll = screen:CreateElement("ScrollingFrame",{
        Position = UDim2.fromScale(0, 0.1);
        Size = UDim2.fromScale(1, 0.9);
        BackgroundColor3 = Color3.new(0, 0, 0);
        CanvasSize = UDim2.fromScale(0.9, (#bins/10)*0.9);
        BackgroundTransparency = 1;
        BorderSizePixel = 0})
    for i,b in pairs(bins) do
        print(b:GetResource()..": "..b:GetAmount())
        local lbl
        if b:GetAmount() == 0 then
            lbl = screen:CreateElement('TextLabel', {
                Position = UDim2.fromScale(0, (i-1)*(1/#bins));
                Size = UDim2.fromScale(0.5, 1/#bins);
                Text = "Empty:";
                TextSize = 5;
                TextScaled = true;
                TextColor3 = Color3.new(1, 1, 1);
                BackgroundTransparency = 0.7;
                BackgroundColor3 = Color3.new(0, 0, 0);
                BorderSizePixel = 1
            })
        else
            lbl = screen:CreateElement('TextLabel', {
                Position = UDim2.fromScale(0, (i-1)*(1/#bins));
                Size = UDim2.fromScale(0.5, 1/#bins);
                Text = b:GetResource()..":";
                TextSize = 5;
                TextScaled = true;
                TextColor3 = Color3.new(1, 1, 1);
                BackgroundTransparency = 0.7;
                BackgroundColor3 = Color3.new(0, 0, 0);
                BorderSizePixel = 1
            })
        end
        local amt = screen:CreateElement('TextLabel', {
            Position = UDim2.fromScale(0.5, (i-1)*(1/#bins));
            Size = UDim2.fromScale(0.5, 1/#bins);
            Text = b:GetAmount();
            TextSize = 5;
            TextScaled = true;
            TextColor3 = Color3.new(1, 1, 1);
            BackgroundTransparency = 0.7;
            BackgroundColor3 = Color3.new(0, 0, 0);
            BorderSizePixel = 1
        })
        scroll:AddChild(lbl)
        scroll:AddChild(amt)
    end
end
refresh("Bin")
Beep(1)
Beep(2)
binbtn.MouseButton1Click:Connect(function ()
    refresh("Bin")
    Beep(1)
    Beep(2)
end)
conbtn.MouseButton1Click:Connect(function ()
    refresh("Container")
    Beep(1)
    Beep(2)
end)
