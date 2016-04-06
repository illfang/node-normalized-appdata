# node-normalized-appdata

> Node module which exports a normalized APPDATA environment variable for mac and linux. For windows the system APPDATA will be used. For linux and mac ~/.config will be used. Furthermore, the current OS description is returned.

## The "normalizeAppData" function export
This module exports the `normalizeAppData` function. By executing this function the APPDATA environment will be set for linux and mac.
The return of this function is the following object:
```
{
  isMac: boolean, true if the current OS is mac
  isLinux: boolean, true if the current OS is linux
  isWindows: boolean, true if the current OS is windows
}
```
