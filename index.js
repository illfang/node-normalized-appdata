/******************************************************************
 * File: index.js
 * Author: Kevin Kratzer
 * Version 1.0
 *
 * Copyright (C) 2015 - 2016 UEI Corporation (Kevin Kratzer)
 * Licensed under the MIT license.
 ******************************************************************/
'use strict';
exports.normalizeAppData = function() {
  var osDescriptor = {
    isWindows: /^win/.test(process.platform),
    isLinux: /^linux/.test(process.platform),
  };
  osDescriptor.isMac = !osDescriptor.isWindows && !osDescriptor.isLinux;
  if (!process.env.APPDATA) {
    if(osDescriptor.isLinux || osDescriptor.isMac) {
      process.env.APPDATA = process.env.HOME + '/.config/';
    }
  }
  return osDescriptor;
}; 
