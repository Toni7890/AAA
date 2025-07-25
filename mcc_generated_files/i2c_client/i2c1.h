/**
 * I2C1 Generated Driver API Header File
 *
 * @file i2c1.h
 *
 * @defgroup i2c_client I2C1_CLIENT
 *
 * @brief This header file contains API prototypes and other data types for the I2C1 driver.
 *
 * @version I2C1 Driver Version 2.1.3
 * 
 * @version I2C1 Package Version 6.1.4
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

#ifndef I2C1_H
#define I2C1_H

/**
 * @misradeviation {@advisory,2.5} For false positives, which include 
 * macros that are used as arguments but are not getting recognized by the tool.
 * This rule ID is disabled at project level due to its multiple occurrences in several 
 * files.Therefore, in the application project, this rule ID must be disabled in the MPLAB-X 
 * IDE from Tools -> Options -> Embedded -> MISRA Check.
*/

#include <stdbool.h>
#include <stdint.h>
#include "i2c_client_interface.h"

/**
 Section: Data Type Definitions
*/

#define i2c1_client_interface I2C1_Client

#define I2C1_Client_Initialize I2C1_Initialize
#define I2C1_Client_Deinitialize I2C1_Deinitialize
#define I2C1_Client_WriteByte I2C1_WriteByte
#define I2C1_Client_ReadByte I2C1_ReadByte
#define I2C1_Client_ReadAddr I2C1_ReadAddr
#define I2C1_Client_ErrorGet I2C1_ErrorGet
#define I2C1_Client_TransferDirGet I2C1_TransferDirGet
#define I2C1_Client_LastByteAckStatusGet I2C1_LastByteAckStatusGet
#define I2C1_Client_CallbackRegister I2C1_CallbackRegister
#define I2C1_Client_Tasks I2C1_Tasks

/**
 * @ingroup I2C1_client
 * @brief External object for I2C1_Client
 */
extern const i2c_client_interface_t I2C1_Client;

/**
 * @ingroup i2c_client
 * @brief This routine initializes the I2C1 module.
 *        This routine will be called before any other I2C1 routine is called.
 *        This routine should only be called once during the system initialization.
 * @param None.
 * @return None.
 */
void I2C1_Initialize(void);

/**
 * @ingroup i2c_client
 * @brief This routine deinitializes the I2C1 module.
 *        This function disables the module.
 * @param None.
 * @return None.
 */
void I2C1_Deinitialize(void);

/**
 * @ingroup i2c_client
 * @brief This function writes data to a host on the bus.
 *        I2C1 should be intitialized with I2C1_Initialize() before calling this API.
 * @param [in] wrByte - I2C1 client write byte
 * @return None.
 */
void I2C1_WriteByte(uint8_t wrByte);

/**
 * @ingroup i2c_client
 * @brief This function reads the data from a host on the bus.
 *        I2C1 should be intitialized with I2C1_Initialize() before calling this API.
 * @param None.
 * @return data byte -I2C1 client read byte
 */
uint8_t I2C1_ReadByte(void);

/**
 * @ingroup i2c_client
 * @brief This function reads the requested address from a host on the bus.
 *        I2C1 should be intitialized with I2C1_Initialize() before calling this API.
 * @param None.
 * @return address byte -I2C1 client read byte
 */
uint16_t I2C1_ReadAddr(void);

/**
 * @ingroup i2c_client
 * @brief This function gets the error occurred during the I2C Transmit and Receive.
 *        I2C1 should be intitialized with I2C1_Initialize() before calling this API.
 * @param None.
 * @return
 *        I2C_CLIENT_ERROR_BUS_COLLISION    - I2C Bus Collision Error
 *        I2C_CLIENT_ERROR_WRITE_COLLISION  - I2C Write Collision Error
 *        I2C_CLIENT_ERROR_RECEIVE_OVERFLOW - I2C Receive overflow
 *        I2C_CLIENT_ERROR_NONE             - No Error
 */
i2c_client_error_t I2C1_ErrorGet(void);

/**
 * @ingroup i2c_client
 * @brief This function gets the I2C Transfer direction.
 *        I2C1 should be intitialized with I2C1_Initialize() before calling this API.
 * @param None.
 * @return
 *        I2C_CLIENT_TRANSFER_DIR_WRITE  - I2C Host writes to client
 *        I2C_CLIENT_TRANSFER_DIR_READ   - I2C Host reads from client
 */
i2c_client_transfer_dir_t I2C1_TransferDirGet(void);

/**
 * @ingroup i2c_client
 * @brief This function get the I2C Host ACK status.
 *        I2C1 should be intitialized with I2C1_Initialize() before calling this API.
 * @param None.
 * @return
 *        I2C_CLIENT_ACK_STATUS_RECEIVED_ACK   - I2C Host sends ACK to client
 *        I2C_CLIENT_ACK_STATUS_RECEIVED_NACK  - I2C Host sends NACK to client
 */
i2c_client_ack_status_t I2C1_LastByteAckStatusGet(void);

/**
 * @ingroup i2c_client
 * @brief This function sets the pointer to be called "back" when
 *        the given I2C transfer events, Bus collision and Write collision occur.
 * @param handler - A pointer to a function.
 * @return None.
 */
void I2C1_CallbackRegister(bool (*callback)(i2c_client_transfer_event_t clientEvent));

/**
 * @ingroup I2C1_client
 * @brief This function is common ISR function for all I2C1 interrupts.
 *        I2C1 should be intitialized with I2C1_Initialize() before calling this API.
 * @param void.
 * @return void
 */
void I2C1_ISR(void);

/**
 * @ingroup I2C1_client
 * @brief This function is common ISR function for all I2C1 Error interrupts.
 *        I2C1 should be intitialized with I2C1_Initialize() before calling this API.
 * @param void.
 * @return void
 */
void I2C1_ERROR_ISR(void);


#endif //I2C1_H
