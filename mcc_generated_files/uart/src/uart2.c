/**
 * UART2 Generated Driver API Header File
 * 
 * @file uart2.c
 * 
 * @ingroup uart2
 * 
 * @brief This is the generated driver implementation file for the UART2 driver using the Universal Asynchronous Receiver and Transmitter (UART) module.
 *
 * @version UART2 Driver Version 3.0.8
*/

/*
� [2025] Microchip Technology Inc. and its subsidiaries.

    Subject to your compliance with these terms, you may use Microchip 
    software and any derivatives exclusively with Microchip products. 
    You are responsible for complying with 3rd party license terms  
    applicable to your use of 3rd party software (including open source  
    software) that may accompany Microchip software. SOFTWARE IS ?AS IS.? 
    NO WARRANTIES, WHETHER EXPRESS, IMPLIED OR STATUTORY, APPLY TO THIS 
    SOFTWARE, INCLUDING ANY IMPLIED WARRANTIES OF NON-INFRINGEMENT,  
    MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE. IN NO EVENT 
    WILL MICROCHIP BE LIABLE FOR ANY INDIRECT, SPECIAL, PUNITIVE, 
    INCIDENTAL OR CONSEQUENTIAL LOSS, DAMAGE, COST OR EXPENSE OF ANY 
    KIND WHATSOEVER RELATED TO THE SOFTWARE, HOWEVER CAUSED, EVEN IF 
    MICROCHIP HAS BEEN ADVISED OF THE POSSIBILITY OR THE DAMAGES ARE 
    FORESEEABLE. TO THE FULLEST EXTENT ALLOWED BY LAW, MICROCHIP?S 
    TOTAL LIABILITY ON ALL CLAIMS RELATED TO THE SOFTWARE WILL NOT 
    EXCEED AMOUNT OF FEES, IF ANY, YOU PAID DIRECTLY TO MICROCHIP FOR 
    THIS SOFTWARE.
*/

/**
  Section: Included Files
*/
#include "../uart2.h"

/**
  Section: Macro Declarations
*/

/**
  Section: UART2 variables
*/
 /**
 * @misradeviation{@advisory,19.2}
 * The UART error status necessitates checking the bitfield and accessing the status within the group byte therefore the use of a union is essential.
 */
 /* cppcheck-suppress misra-c2012-19.2 */
static volatile uart2_status_t uart2RxLastError;

/**
  Section: UART2 APIs
*/

static void (*UART2_FramingErrorHandler)(void);
static void (*UART2_OverrunErrorHandler)(void);
static void (*UART2_ParityErrorHandler)(void);

static void UART2_DefaultFramingErrorCallback(void);
static void UART2_DefaultOverrunErrorCallback(void);
static void UART2_DefaultParityErrorCallback(void);

/**
  Section: UART2  APIs
*/

void UART2_Initialize(void)
{

    // Set the UART2 module to the options selected in the user interface.

    //P1L 0x0; 
    U2P1L = 0x0;
    //P2L 0x0; 
    U2P2L = 0x0;
    //P3L 0x0; 
    U2P3L = 0x0;
    //MODE Asynchronous 8-bit mode; RXEN enabled; TXEN enabled; ABDEN enabled; BRGS high speed; 
    U2CON0 = 0xF0;
    //SENDB disabled; BRKOVR disabled; RXBIMD Set RXBKIF on rising RX input; WUE disabled; ON enabled; 
    U2CON1 = 0x80;
    //FLO off; TXPOL not inverted; STP Transmit 1Stop bit, receiver verifies first Stop bit; RXPOL not inverted; RUNOVF RX input shifter stops all activity; 
    U2CON2 = 0x0;
    //BRGL 130; 
    U2BRGL = 0x82;
    //BRGH 6; 
    U2BRGH = 0x6;
    //TXBE empty; STPMD in middle of first Stop bit; TXWRE No error; 
    U2FIFO = 0x2E;
    //ABDIE disabled; ABDIF Auto-baud not enabled or not complete; WUIF WUE not enabled by software; 
    U2UIR = 0x0;
    //TXCIF equal; RXFOIF not overflowed; RXBKIF No Break detected; FERIF no error; CERIF No Checksum error; ABDOVF Not overflowed; PERIF no parity error; TXMTIF empty; 
    U2ERRIR = 0x80;
    //TXCIE disabled; RXFOIE disabled; RXBKIE disabled; FERIE disabled; CERIE disabled; ABDOVE disabled; PERIE disabled; TXMTIE disabled; 
    U2ERRIE = 0x0;

    UART2_FramingErrorCallbackRegister(UART2_DefaultFramingErrorCallback);
    UART2_OverrunErrorCallbackRegister(UART2_DefaultOverrunErrorCallback);
    UART2_ParityErrorCallbackRegister(UART2_DefaultParityErrorCallback);

    uart2RxLastError.status = 0;  
}

void UART2_Deinitialize(void)
{
    U2RXB = 0x00;
    U2TXB = 0x00;
    U2P1L = 0x00;
    U2P2L = 0x00;
    U2P3L = 0x00;
    U2CON0 = 0x00;
    U2CON1 = 0x00;
    U2CON2 = 0x00;
    U2BRGL = 0x00;
    U2BRGH = 0x00;
    U2FIFO = 0x00;
    U2UIR = 0x00;
    U2ERRIR = 0x00;
    U2ERRIE = 0x00;
}

void UART2_Enable(void)
{
    U2CON1bits.ON = 1; 
}

void UART2_Disable(void)
{
    U2CON1bits.ON = 0; 
}

void UART2_TransmitEnable(void)
{
    U2CON0bits.TXEN = 1;
}

void UART2_TransmitDisable(void)
{
    U2CON0bits.TXEN = 0;
}

void UART2_ReceiveEnable(void)
{
    U2CON0bits.RXEN = 1;
}

void UART2_ReceiveDisable(void)
{
    U2CON0bits.RXEN = 0;
}

void UART2_SendBreakControlEnable(void)
{
    U2CON1bits.SENDB = 1;
}

void UART2_SendBreakControlDisable(void)
{
    U2CON1bits.SENDB = 0;
}

void UART2_AutoBaudSet(bool enable)
{
    if(enable)
    {
        U2CON0bits.ABDEN = 1; 
    }
    else
    {
      U2CON0bits.ABDEN = 0;  
    }
}


bool UART2_AutoBaudQuery(void)
{
    return (bool)U2UIRbits.ABDIF; 
}

void UART2_AutoBaudDetectCompleteReset(void)
{
    U2UIRbits.ABDIF = 0; 
}

bool UART2_IsAutoBaudDetectOverflow(void)
{
    return (bool)U2ERRIRbits.ABDOVF; 
}

void UART2_AutoBaudDetectOverflowReset(void)
{
    U2ERRIRbits.ABDOVF = 0; 
}

bool UART2_IsRxReady(void)
{
    return (bool)(!U2FIFObits.RXBE);
}

bool UART2_IsTxReady(void)
{
    return (bool)(U2FIFObits.TXBE && U2CON0bits.TXEN);
}

bool UART2_IsTxDone(void)
{
    return U2ERRIRbits.TXMTIF;
}

size_t UART2_ErrorGet(void)
{
    uart2RxLastError.status = 0;
    
    if(true == U2ERRIRbits.FERIF)
    {
        uart2RxLastError.ferr = 1;
        if(NULL != UART2_FramingErrorHandler)
        {
            UART2_FramingErrorHandler();
        }  
    }
    if(true == U2ERRIRbits.RXFOIF)
    {
        uart2RxLastError.oerr = 1;
        if(NULL != UART2_OverrunErrorHandler)
        {
            UART2_OverrunErrorHandler();
        }   
    }
    if(true == U2ERRIRbits.PERIF)
    {
        uart2RxLastError.perr = 1;
        if(NULL != UART2_ParityErrorHandler)
        {
            UART2_ParityErrorHandler();
        }   
    }

    return uart2RxLastError.status;
}

uint8_t UART2_Read(void)
{
    return U2RXB;
}


void UART2_Write(uint8_t txData)
{
    U2TXB = txData; 
}






static void UART2_DefaultFramingErrorCallback(void)
{
    
}

static void UART2_DefaultOverrunErrorCallback(void)
{
    
}

static void UART2_DefaultParityErrorCallback(void)
{
    
}

void UART2_FramingErrorCallbackRegister(void (* callbackHandler)(void))
{
    if(NULL != callbackHandler)
    {
        UART2_FramingErrorHandler = callbackHandler;
    }
}

void UART2_OverrunErrorCallbackRegister(void (* callbackHandler)(void))
{
    if(NULL != callbackHandler)
    {
        UART2_OverrunErrorHandler = callbackHandler;
    }    
}

void UART2_ParityErrorCallbackRegister(void (* callbackHandler)(void))
{
    if(NULL != callbackHandler)
    {
        UART2_ParityErrorHandler = callbackHandler;
    } 
}
