import { 
    Text, 
    Button, 
    Image,
    Paper, 
    Flex,
    PinInput 
} from '@mantine/core';

import mail from '../../_assets/mail.png';
import logo from '../../_assets/logo.png';

export default function EmailConfirmation() {
    return (
        <>
            <title>Email Confirmation</title>
            <Flex justify="center" align="center" style={{ height: '100vh', background: 'linear-gradient(to right, #0f4c75, #1b262c)' }}>
                <Paper shadow="md" radius="md" p="xl" style={{ display: 'flex', width: '60%', background: 'white' }}>
                    <Flex direction="column" align="center" style={{ flex: 1, padding: '20px' }}>
                        <Image src={logo.src} alt="logo" style={{ width: 120, marginBottom: '20px' }} />
                        <Image src={mail.src} alt="mail" style={{ width: '100%', maxWidth: 300 }} />
                    </Flex>
                    
                    <Flex direction="column" justify="center" style={{ flex: 1, padding: '40px' }}>
                        <Text size="xl"  mb="sm">Email Confirmation</Text>
                        <Text size="md" mb="md">
                            We sent a confirmation email to: <strong>j*****e@gmail.com</strong>
                            <br />Check your email and enter the code to continue.
                        </Text>
                        <PinInput inputMode="numeric" size="lg" mb="lg" />
                        
                        <Flex justify="space-between" mt="md">
                            <Button color="gray" size="md" radius="sm">Resend Code</Button>
                            <Button color="purple" size="md" radius="sm">Continue</Button>
                        </Flex>
                    </Flex>
                </Paper>
            </Flex>
        </>
    );
}
// import { 
//     Text, 
//     Button, 
//     Checkbox, 
//     Group, 
//     TextInput, 
//     Paper, 
//     Box, 
//     Flex,
//     PinInput 
// } from '@mantine/core';

// import mail from './_assets/mail.png';
// import logo from './_assets/logo.png';
// import Head from 'next/head';

// export default function EmailConfirmation(){
//     return <>
//         <Flex>
//             <Flex>
//                 <Flex direction="column" align="center" style={{ flex: 1 }}>
//                 <img src={logo.src} alt="logo" style={{ 
//                     width: 100, 
//                     height: 'auto',
//                     marginRight: '60%' 
//                     }} />
//                 <img src={mail.src} alt="mail" style={{ width: '100%', maxWidth: 400, height: 'auto' }} />
//                 </Flex>
//                 <Flex>
//                     <Flex>
//                         <h1>
//                             Email Confirmation
//                         </h1>
//                         <p>
//                             We sent a confirmation email to:
//                             <strong>j*****e@gmail.com</strong>
//                             Check your email enter the code to continue.
//                         </p>
//                         <PinInput inputMode="numeric" />
//                     </Flex>
//                     <Flex>
//                         <Button color="gray" size="md" radius="sm" type="submit">
//                             Resend Code
//                         </Button>
//                         <Button color="purple" size="md" radius="sm" type="submit">
//                             Continue
//                         </Button>
//                     </Flex>
//                 </Flex>
//             </Flex>
//         </Flex>
    
//     </>
// }