import React from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

interface ICryptoListItemProps {
    cryptoSymbol: string;
    cryptoName: string;
    cryptoPrice: number;
    cryptoMovement: number;
    cryptoImage: string;
}

const CryptoListItem: React.FC<ICryptoListItemProps> = ({ cryptoSymbol, cryptoName, cryptoPrice, cryptoMovement, cryptoImage }) => {
    const isNegative = cryptoMovement < 0;


    const sameLength = (num: number, fixedLen: number): string => {
        let numStr: string = num.toString();
        if (numStr.includes('.')) {
            let [integerPart, decimalPart] = numStr.split('.');
    

            let totalLength = integerPart.length + decimalPart.length + 1;
            if (totalLength < fixedLen) {
                numStr = `${integerPart}.${decimalPart.padEnd(fixedLen - integerPart.length - 1, '0')}`;
            } else {
                numStr = `${integerPart}.${decimalPart.substring(0, fixedLen - integerPart.length - 1)}`;
            }
        } else {
            numStr = `${numStr}.` + '0'.repeat(fixedLen - numStr.length);
        }
    
        return numStr;
    };
    
    

    const formattedCryptoPrice = sameLength(Number(cryptoPrice.toFixed(4)), 7);
    const formatedMovement = sameLength(Number(cryptoMovement.toFixed(4)), 7);
    return (
        <li className="list-row grid grid-cols-3 items-center gap-4">

            <div className="flex items-center col-span-2">
                <img className="size-10 rounded-box mr-2" src={cryptoImage} alt={cryptoName} />
                <div>
                    <div>{cryptoName}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">{cryptoSymbol}</div>
                </div>
            </div>
            

            <div className="text-left flex flex-col items-end">

                <div className="flex items-center">
                    <span className={`text-lg ${isNegative ? 'text-red-500' : 'text-green-500'} font-mono`}>
                        ${formattedCryptoPrice}
                    </span>
                </div>
                

                <div className="flex items-left">
                    <span className={`text-xs font-semibold opacity-60 text-left ${isNegative ? 'text-red-500' : 'text-green-500'}`}>
                        {isNegative ? (
                            <>
                                <FaArrowDown className="inline mr-1 text-red-500" />
                                {formatedMovement}%
                            </>
                        ) : (
                            <>
                                <FaArrowUp className="inline mr-1 text-green-500" />
                                {formatedMovement}%
                            </>
                        )}
                    </span>
                </div>
            </div>
        </li>
    )
}

export default CryptoListItem
