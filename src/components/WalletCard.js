import React, {useState} from 'react'
import {ethers} from 'ethers'; 
import { Button } from '@mui/material';



const WalletCard = ({connectWalletHandler,connButtonText}) => {

    
   

    return (
        <div className='walletCard'>
        <Button sx = {{ marginLeft: 1,background:"radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"}} 
        variant="contained" onClick={connectWalletHandler}>{connButtonText}</Button>

        {/* <div className='accountDisplay'>
            <h3>Address: {defualtAccount}</h3>
        </div>
        <div className='balanceDisplay'>
            <h3>Balance:{userBalance}</h3>
        </div>
        {errorMessage}             */}
        </div>
    )
}

export default WalletCard;
