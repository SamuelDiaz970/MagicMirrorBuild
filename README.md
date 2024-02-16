# MagicMirrorBuild
My MagicMirror configuration and notes on a Raspberry Pi 3 A+
config.js file goes in MagicMirror/config

## Modules Used
- [Magic Mirror](https://docs.magicmirror.builders/)
- Calendar: [MMM-CalendarExt3](https://github.com/MMRIZE/MMM-CalendarExt3) 
- Stocks: [MMM-Jast](https://github.com/jalibu/MMM-Jast)
- Auto Dimm: [MMM-AutoDimmer](https://github.com/Fifteen15Studios/MMM-AutoDimmer)

## Rasp Pi Commands

**Description** | **Command***
--- | ---
SSH into Rasp Pi | `ssh pi@raspberry.local`
transfer file to Pi | `scp /Users/SamuelDiaz/Desktop/config.js pi@raspberrypi.local:/home/pi/MagicMirror/config`
Start MagicMirror process | `pm2 start MagicMirror`
Stop MagicMirror process | `pm2 stop MagicMirror`
Reset MagicMirror process | `pm2 reset MagicMirror`

