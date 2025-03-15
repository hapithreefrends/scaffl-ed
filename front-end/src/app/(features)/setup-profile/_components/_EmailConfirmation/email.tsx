import {
    Text,
    Button,
    Image,
    Paper,
    Flex,
    TextInput,
    PasswordInput,
    Tabs,
    TabsList,
    TabsTab,
    TabsPanel,
  } from '@mantine/core';

  import { 
    IconUpload 
  } from '@tabler/icons-react';

  
  import laptop from '../../_assets/laptop.png';
  import logo from '../../_assets/logo.png';
  import avatar1 from '../../_assets/avatar1.png';
  import avatar2 from '../../_assets/avatar2.png';
  import avatar3 from '../../_assets/avatar3.png';
  import avatar4 from '../../_assets/avatar4.png';
  import avatar5 from '../../_assets/avatar5.png';
  import avatar6 from '../../_assets/avatar6.png';


  export default function EmailConfirmation() {
    return (
      <>
        <title>Email Confirmation</title>
        <Flex
          justify="center"
          align="center"
          style={{ height: '100vh', background: 'linear-gradient(to right, #0D6E6E, #683598)' }}
        >
          <Paper
            shadow="md"
            radius="md"
            p={{ base: 'md', sm: 'xl' }}
            style={{
              width: { base: '90%', sm: '60%', md: '50%', lg: '40%' },
              background: 'white',
            }}
          >
            <Flex direction="row" wrap="wrap" gap={{ base: '40px', sm: '40px' }}>
              <Flex
                direction="column"
                align="flex-start"
                style={{ padding: { base: '10px', sm: '20px' } }}
              >
                <Image
                
                  src={logo.src}
                  alt="logo"
                  style={{ width: 120, marginBottom: '20px' }}
                />
                <Image
                  src={laptop.src}
                  alt="laptop"
                  style={{ width: '100%', maxWidth: 300 }}
                />
              </Flex>
  
              <Flex
                direction="column"
                justify="space-between" // Distribute space vertically
                alignitems="stretch" // Stretch horizontally
                style={{ padding: { base: '10px', sm: '20px' } }}
              >

                <Flex direction="column" style={{ flex: 1 }}>
                    <Text size="xl" mb="sm" style={{ fontWeight: 700 }}>
                        Profile Details
                    </Text>
                    <Tabs color="gray" variant="outline"  defaultValue="tab1">
                        <TabsList>
                        <TabsTab value="tab1">Profile</TabsTab>
                        <TabsTab value="tab2">Academic</TabsTab>
                        <TabsTab value="tab3">Avatar</TabsTab>
                        </TabsList>

                        {/* Tab Panels */}
                        <TabsPanel value="tab1">
                            <TextInput
                            withAsterisk
                            label="First Name"
                            placeholder="John"
                            required
                            />    
                             <TextInput
                            withAsterisk
                            label="Last Name"
                            placeholder="Doe"
                            required
                            />             
                             <TextInput
                            withAsterisk
                            label="Birth Date"
                            placeholder="19/09/2023 23:24"
                            required
                            />   
                             <TextInput
                            withAsterisk
                            label="Sex"
                            placeholder="Male"
                            required
                            />   

                        </TabsPanel>
                        
                        <TabsPanel value="tab2">
                            <TextInput
                                withAsterisk
                                label="School"
                                placeholder="University of the East"
                                required
                                />    
                                <TextInput
                                withAsterisk
                                label="College Program"
                                placeholder="Computer Science"
                                required
                                />   
                        </TabsPanel>
                        <TabsPanel value="tab3">
                            <Flex justify-content="center" direction="column" align="center" gap={4}>
                              <div
                                      style={{
                                        width: '80px', 
                                        height: '80px', 
                                        borderRadius: '50%',
                                        background: 'linear-gradient(to left, #0D6E6E, #683598)',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                      }}
                                    >
                                  <IconUpload size={24} stroke={1.5} color="white"/>
                                </div>
                              <Flex direction="row" gap={4}>
                                <div
                                    style={{
                                      width: '40px', 
                                      height: '40px', 
                                      borderRadius: '50%',
                                      background: 'linear-gradient(to left, #0D6E6E, #683598)',
                                      overflow: 'hidden',
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center'
                                    }}
                                  >
                                    <Image
                                      src={avatar1.src}
                                      alt="avatar1"
                                      style={{ maxWidth: '100%', maxHeight: '100%' }} // Make the image fit inside the circle
                                    />
                                </div>

                                <div
                                    style={{
                                      width: '40px', 
                                      height: '40px', 
                                      borderRadius: '50%',
                                      background: 'linear-gradient(to left, #0D6E6E, #683598)',
                                      overflow: 'hidden',
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center'
                                    }}
                                  >
                                    <Image
                                      src={avatar2.src}
                                      alt="avatar2"
                                      style={{ maxWidth: '100%', maxHeight: '100%' }} // Make the image fit inside the circle
                                    />
                                </div>

                                <div
                                    style={{
                                      width: '40px', 
                                      height: '40px', 
                                      borderRadius: '50%',
                                      background: 'linear-gradient(to left, #0D6E6E, #683598)',
                                      overflow: 'hidden',
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center'
                                    }}
                                  >
                                    <Image
                                      src={avatar3.src}
                                      alt="avatar3"
                                      style={{ maxWidth: '100%', maxHeight: '100%' }} // Make the image fit inside the circle
                                    />
                                </div>

                                <div
                                    style={{
                                      width: '40px', 
                                      height: '40px', 
                                      borderRadius: '50%',
                                      background: 'linear-gradient(to left, #0D6E6E, #683598)',
                                      overflow: 'hidden',
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center'
                                    }}
                                  >
                                    <Image
                                      src={avatar4.src}
                                      alt="avatar4"
                                      style={{ maxWidth: '100%', maxHeight: '100%' }} // Make the image fit inside the circle
                                    />
                                </div>

                                <div
                                    style={{
                                      width: '40px', 
                                      height: '40px', 
                                      borderRadius: '50%',
                                      background: 'linear-gradient(to left, #0D6E6E, #683598)',
                                      overflow: 'hidden',
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center'
                                    }}
                                  >
                                    <Image
                                      src={avatar5.src}
                                      alt="avatar5"
                                      style={{ maxWidth: '100%', maxHeight: '100%' }} // Make the image fit inside the circle
                                    />
                                </div>

                                <div
                                    style={{
                                      width: '40px', 
                                      height: '40px', 
                                      borderRadius: '50%',
                                      background: 'linear-gradient(to left, #0D6E6E, #683598)',
                                      overflow: 'hidden',
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center'
                                    }}
                                  >
                                    <Image
                                      src={avatar6.src}
                                      alt="avatar6"
                                      style={{ maxWidth: '100%', maxHeight: '100%' }} // Make the image fit inside the circle
                                    />
                                </div>
                              </Flex>
                            </Flex>
                        </TabsPanel>
                    </Tabs>
                </Flex>
    
                    <Flex justify="space-between">
                        <Button color="gray" size="md" radius="sm">
                            Back
                        </Button>
                        <Button color="purple" size="md" radius="sm">
                            Continue
                        </Button>
                    </Flex>
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
//     Image,
//     Paper,
//     Flex,
//     PinInput,
//   } from '@mantine/core';
  
//   import mail from '../../_assets/mail.png';
//   import logo from '../../_assets/logo.png';
  
//   export default function EmailConfirmation() {
//     return (
//       <>
//         <title>Email Confirmation</title>
//         <Flex
//           justify="center"
//           align="center"
//           style={{ height: '100vh', background: 'linear-gradient(to right, #0D6E6E, #683598)' }}
//         >
//           <Paper
//             shadow="md"
//             radius="md"
//             p={{ base: 'md', sm: 'xl' }}
//             style={{
//               width: { base: '90%', sm: '60%', md: '50%', lg: '40%' },
//               background: 'white',
//             }}
//           >
//             <Flex direction="row" wrap="wrap" gap={{ base: '40px', sm: '40px' }}>
//               <Flex
//                 direction="column"
//                 align="flex-start"
//                 style={{ padding: { base: '10px', sm: '20px' } }}
//               >
//                 <Image
                
//                   src={logo.src}
//                   alt="logo"
//                   style={{ width: 120, marginBottom: '20px' }}
//                 />
//                 <Image
//                   src={mail.src}
//                   alt="mail"
//                   style={{ width: '100%', maxWidth: 300 }}
//                 />
//               </Flex>
  
//               <Flex
//                 direction="column"
//                 justify="space-between" // Distribute space vertically
//                 alignitems="stretch" // Stretch horizontally
//                 style={{ padding: { base: '10px', sm: '20px' } }}
//               >
//                 <Flex
//                 direction="column"

//                 >
//                     <Text size="xl" mb="sm" style={{ fontWeight: 700 }}>
//                     Email Confirmation
//                     </Text>
//                     <Text size="md" mb="md">
//                     We sent a confirmation email to: <strong>j*****e@gmail.com</strong>
//                     <br />
//                     Check your email and enter the code to continue.
//                     </Text>
//                     <PinInput inputMode="numeric" size="lg" mb="lg" />
//                 </Flex>
  
//                 <Flex justify="space-between">
//                   <Button color="gray" size="md" radius="sm">
//                     Resend Code
//                   </Button>
//                   <Button color="purple" size="md" radius="sm">
//                     Continue
//                   </Button>
//                 </Flex>
//               </Flex>
//             </Flex>
//           </Paper>
//         </Flex>
//       </>
//     );
//   }