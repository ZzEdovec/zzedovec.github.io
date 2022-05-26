#!/usr/bin/python3
#YourProton main script
#YourProton is a simple wrapper of ProtonGE for non-steam use
#Author: ZzEdovec
#Last updated 26.05.22 (05/26/22)

######################
import os 
import subprocess
import sys
import tarfile
from update_check import isUpToDate
import zenipy
absolutepath = os.path.abspath(__file__)
######################
username = os.getlogin()
protonpath = '/home/'+os.getlogin()+'/.YourProton'
######################

if isUpToDate(__file__,'https://zzedovec.github.io/resources/youproton/main.py') == False:
    zenipy.message(title="YourProton", text='An update was found. To update YourProton, type "yourproton update" in your terminal')

######################
if os.path.isdir(protonpath+'/ProtonGE') == False:
    userconfirm = input('ProtonGE seems to be not downloaded. Are you want to download it? (y/n) ')
    if userconfirm != 'y' and userconfirm != 'n':
        sys.exit('Incorrect input. Only y and n was respondable')
    if userconfirm == 'y':
        print('Downloading ProtonGE')   
        subprocess.call('wget https://github.com/GloriousEggroll/proton-ge-custom/releases/download/GE-Proton7-18/GE-Proton7-18.tar.gz -O /tmp/ProtonGE.tar.gz',shell=True)
        print('Unpacking and installing ProtonGE')
        tar = tarfile.open('/tmp/ProtonGE.tar.gz')
        tar.extractall(protonpath)
        os.rename(protonpath+'/GE-Proton7-18',protonpath+'/ProtonGE')
        print('ProtonGE version 7.18 succesfully installed')
    if userconfirm == 'n':
        sys.exit('YourProton work without downloaded ProtonGE is inpossible')    
######################        
        
######################        
if len(sys.argv) == 1:
    sys.exit("Nothing to do.")
if sys.argv[1] == 'update':
    print('Updating YourProton')
    sys.exit(subprocess.run('python3 install.py'))     
if '.exe' not in sys.argv[1] and '.msi' not in sys.argv[1] and '.bat' not in sys.argv[1] and '.vbs' not in sys.argv[1]:
    sys.exit('YourProton can run only .exe, .msi, .vbs and .bat files. Other types of files is not supported.')   

######################
print('YourProton main script is loaded')
print('Please wait while YourProton loading a you program')
######################
subprocess.Popen('env WINEPREFIX="/home/'+os.getlogin()+'/.YourProtonPfx" '+protonpath+'/ProtonGE/files/bin/wine64 '+sys.argv[1],shell=True)
######################

print('Thank you for using a YourProton! Your program is closed or maybe crashed :D')