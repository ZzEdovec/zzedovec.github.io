#NoTrayIcon

Home::Pause
SetDefaultMouseSpeed, 0
SetBatchLines, -1

F4::
return


F5::
SoundBeep
goto, Poisk
Poisk:
PixelSearch, VarX, VarY, 670, 300, 1400, 740, 0x0102D6, 3, fast
	if ErrorLevel
		goto, Poisk
	else
	{
	VarX +=198
	VarY +=19
	Nachalo:
		PV:
		PixelGetColor, Color, %VarX%, %VarY%, alt
		varColor2 = %color%
		if (varColor2 = 0x08B802)
			{
			goto, PV
			}
		else 
			{
			Click
			Sleep, 5000
			Lov:
			PixelSearch, VarX, VarY, 670, 300, 1400, 740, 0x08B802, 3, fast
			if ErrorLevel
				goto, Lov
			else
			{
			Loop 22
			{
			Click
			Sleep 80
		}
			Sleep, 5000
			Goto, Poisk
			}
		}		
		}