# MCC Melody I2C Client Driver

## Overview

The Inter-Integrated Circuit (I2C) module is a serial
interface useful for communicating with other peripheral or microcontroller devices. These peripheral
devices may be serial EEPROMs, display drivers, A/D
Converters, etc. The `I2C Client Driver` implements the `I2C Client` functionality of the I2C module.

## Features

## PIC, dsPIC & AVR MCUs
- Supports Clock Stretching.
- Supports 7-Bit and 10-Bit Device Address based on the hardware feature supported by selected PLIB. 
- The driver supports configurable Address Masking.
- Supports Interrupt driven(dsPIC, PIC, AVR) & Polling(PIC & AVR) driver.

## PIC24/dsPIC33 I2C Client Driver and PLIB Package Version Compatibility Matrix

| `I2C Client Driver` | `I2C PLIB`  |
 :---|:---|
 2.x.x | 2.x.x |
 1.x.x | 1.x.x |


# Changelog
All notable changes to this project will be documented in this file.

## [2.1.0] - 2024-12-18

### New Features
- **CC16SCRIP-9634** :- Feature support for dependent MDFU Client Library


## [2.0.5] - 2024-10-01

### New Features
- **CC16SCRIP-9611** :- Updated the client driver to have 0x7F as default mask for PIC 8 bit devices


## [2.0.4] - 2024-07-18

### New Features
- **CC16SCRIP-9551** :- Updated link for API reference document


## [2.0.3] - 2022-10-28

### New Features
- **CC16SCRIP-5497** :- Updated help document link for AVR and PIC device family


## [2.0.2] - 2022-06-01

### New Features
- **CC16SCRIP-2045** :- Dependency module names updated in builder view


## [2.0.1] - 2022-01-18

### New Features
- **CC16SCRIP-3419** :- Dependency Selector label updated with PLIB name


## [2.0.0] - 2021-12-15

### New Features
- **CC16SCRIP-3204** :- Update to make Clock stretching a read-only component depending on the selected PLIB.
- **CC16SCRIP-3167** :- Updates to dynamically update Address and Mask ranges depending on the selected PLIB.
- **CC16SCRIP-3070** :- I2C_Client Driver Update with respect to AVR TWI PLIB 
