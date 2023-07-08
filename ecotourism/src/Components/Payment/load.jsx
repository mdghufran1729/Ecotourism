import { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import {ClockLoader} from "react-spinners"
import "./load.css"

function LoadingPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);
     const handleClick=()=>{
        window.open("/",'_self')
     }
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setIsPaymentConfirmed(true);
        }, 3000);
    }, []);

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            margin={'250px auto'}
        >
            {isLoading ? (
                <Box >
                    <div className="container">
                    <ClockLoader  color="#3e7685"  />
                    </div>
                    
                    <Text id='text'>
                        Your transaction is being processed.
                    </Text>
                </Box>
            ) : (
                <>
                    {isPaymentConfirmed && (
                        <Box>
                            <Text fontSize="xl" fontWeight="bold" color="#3e7685" mb="20px">
                                Payment Successful.
                            </Text>
                        </Box>
                    )}
                   
                        <Button onClick={handleClick} colorScheme={'#3e7685'} id='btn'>Return to Home Page</Button>
                   
                </>
            )}
        </Box>
    );
}

export default LoadingPage;